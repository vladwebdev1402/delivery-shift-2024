import { setPayed } from '@/service/MakeOrder';
import { TPayer } from '@/types';
import { FC, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/shared/store';
import { Button, InputRadio } from '@/shared/ui';

import st from './PayerStep.module.scss';

interface PayerStepProps {
  nextStep: () => void;
  prevStep: () => void;
}

const PayerStep: FC<PayerStepProps> = ({ nextStep, prevStep }) => {
  const { payer: statePayer } = useAppSelector(
    (state) => state.MakeOrderReducer
  );
  const [payer, setPayer] = useState<TPayer>(statePayer || 'RECEIVER');
  const dispatch = useAppDispatch();

  const onChangePayer = (value: TPayer) => {
    setPayer(value);
  };

  const onNext = () => {
    dispatch(setPayed(payer));
    nextStep();
  };

  return (
    <div className={st.step}>
      <h2>Оплата доставки</h2>
      <div className={st.step__body}>
        <InputRadio
          checked={payer === 'RECEIVER'}
          onChange={() => onChangePayer('RECEIVER')}
          className={st.radio}>
          Получатель
        </InputRadio>
        <InputRadio
          checked={payer === 'SENDER'}
          onChange={() => onChangePayer('SENDER')}
          className={st.radio}>
          Отправитель
        </InputRadio>
      </div>
      <div className={st.step__options}>
        <Button variant="outlined" fullWidth type="button" onClick={prevStep}>
          Назад
        </Button>
        <Button fullWidth onClick={onNext}>
          Продолжить
        </Button>
      </div>
    </div>
  );
};

export default PayerStep;
