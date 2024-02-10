import { setDeliveryOptions } from '@/service/DeliveryOptions';
import {
  useCalcDeliveryMutation,
  useGetPackageTypesQuery,
  useGetPointsQuery,
} from '@/service/DeliveryService';
import { setReceiverPoint, setSenderPoint } from '@/service/MakeOrder';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { ROUTER_PATHS } from '@/shared/constants';
import { useAppDispatch } from '@/shared/store';
import { Button } from '@/shared/ui';

import st from './CalculateForm.module.scss';
import CalculateSkeleton from './CalculateSkeleton';
import PackageController from './PackageController';
import ReceiverPointController from './ReceiverPointController';
import SendPointController from './SendPointController';
import { CalculateValues, PackageValues } from './types';

const CalculateForm = () => {
  const { data: points, isLoading: isPointsLoading } = useGetPointsQuery();
  const { data: packageTypes, isLoading: isTypesLoading } =
    useGetPackageTypesQuery();
  const [calcDelivery, { isLoading: isCalcLoading }] =
    useCalcDeliveryMutation();
  const { handleSubmit, watch, control, setValue } = useForm<CalculateValues>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const setExactPackage = (data: PackageValues) => {
    setValue('length', data.length);
    setValue('weight', data.weight);
    setValue('height', data.height);
    setValue('width', data.width);
    setValue(
      'stringPackage',
      `${data.length}х${data.width}х${data.height} см ${data.weight} кг`
    );
  };

  const setApproxPackage = (id: string) => {
    const pack = packageTypes?.packages.find((pack) => pack.id === id);
    if (pack) {
      setValue('length', `${pack.length}`);
      setValue('weight', `${pack.weight}`);
      setValue('height', `${pack.height}`);
      setValue('width', `${pack.width}`);
      setValue(
        'stringPackage',
        `${pack.name}, ${pack.length}х${pack.width}х${pack.height} см`
      );
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    const senderPoint = points?.points.find(
      (point) => point.id === data.startCity
    );
    const receiverPoint = points?.points.find(
      (point) => point.id === data.endCity
    );
    if (senderPoint && receiverPoint) {
      const response = await calcDelivery({
        package: {
          height: +watch('height'),
          length: +watch('length'),
          weight: +watch('weight'),
          width: +watch('width'),
        },
        senderPoint,
        receiverPoint,
      });
      if ('data' in response)
        dispatch(setDeliveryOptions(response.data.options));
      dispatch(setSenderPoint(senderPoint));
      dispatch(setReceiverPoint(receiverPoint));
      navigate(ROUTER_PATHS.makeOrder);
    }
  });

  return (
    <div className={st.calculate}>
      <h2>Рассчитать доставку</h2>
      {points && packageTypes && (
        <form onSubmit={onSubmit}>
          <SendPointController
            control={control}
            value={watch('startCity')}
            setValue={(value) => setValue('startCity', value)}
          />
          <ReceiverPointController
            control={control}
            value={watch('endCity')}
            setValue={(value) => setValue('endCity', value)}
          />

          <PackageController
            control={control}
            setApproxPackage={setApproxPackage}
            setExactPackage={setExactPackage}
            value={watch('stringPackage')}
          />

          <Button
            type="submit"
            fullWidth
            className={st.calculate__item}
            loading={isCalcLoading}>
            Рассчитать
          </Button>
        </form>
      )}
      {(isPointsLoading || isTypesLoading) && <CalculateSkeleton />}
    </div>
  );
};

export default CalculateForm;
