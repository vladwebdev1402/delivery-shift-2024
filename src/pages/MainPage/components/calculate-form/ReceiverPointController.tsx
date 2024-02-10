import { useGetPointsQuery } from '@/service/DeliveryService';
import { FC } from 'react';
import { Controller } from 'react-hook-form';

import MapPointIcon from '@/shared/assets/map-point.svg?react';
import { Select, SelectItem } from '@/shared/ui';

import st from './CalculateForm.module.scss';
import { ControllerProps } from './types';

const ReceiverPointController: FC<ControllerProps> = ({
  control,
  value,
  setValue,
}) => {
  const { data: points } = useGetPointsQuery();
  return (
    <Controller
      name="endCity"
      control={control}
      rules={{
        required: 'Поле необходимо обязательно заполнить',
      }}
      render={({ fieldState }) => (
        <Select
          currentValue={value}
          className={st.calculate__item}
          label="Город отправки"
          placeholder="Выберите город"
          handleChange={(value: string) => setValue(value)}
          StartIcon={<MapPointIcon />}
          options={points!.points
            .slice(0, 3)
            .map((point) => ({ name: point.name, value: point.id }))}
          error={fieldState.error?.message || ''}>
          {points!.points.map((point) => (
            <SelectItem key={point.id} value={point.id}>
              {point.name}
            </SelectItem>
          ))}
        </Select>
      )}
    />
  );
};

export default ReceiverPointController;
