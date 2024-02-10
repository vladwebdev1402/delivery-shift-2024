import { setOption } from '@/service/MakeOrder';
import { Delivery } from '@/types';
import { FC } from 'react';

import DeliveryOption from '@/components/DeliveryOption/DeliveryOption';

import { useAppDispatch, useAppSelector } from '@/shared/store';

import st from './FirstStep.module.scss';

interface FirtStepProps {
  nextStep: () => void;
}

const FirtStep: FC<FirtStepProps> = ({ nextStep }) => {
  const { options } = useAppSelector((state) => state.DeliveryOptionsReducer);
  const dispatch = useAppDispatch();

  const clickDelivery = (delivery: Delivery) => {
    dispatch(setOption(delivery));
    nextStep();
  };

  return (
    <div className={`container`}>
      <h2>Способ отправки</h2>
      <div className={st.step__body}>
        {options.map((option) => (
          <DeliveryOption
            delivery={option}
            key={option.id}
            clickDelivery={clickDelivery}
          />
        ))}
      </div>
    </div>
  );
};

export default FirtStep;
