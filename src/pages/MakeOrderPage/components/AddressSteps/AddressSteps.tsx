import { setReceiverAddress, setSenderAddress } from '@/service/MakeOrder';
import { Address } from '@/types';
import { FC } from 'react';

import { AddressForm } from '@/components/AddressForm';

import { useAppDispatch, useAppSelector } from '@/shared/store';
import { Button } from '@/shared/ui';

import st from './AddressSteps.module.scss';

interface FourthStepProps {
  step: number;
  nextStep: () => void;
  prevStep: () => void;
}

const FourthStep: FC<FourthStepProps> = ({ step, nextStep, prevStep }) => {
  const { senderAddress, receiverAddress } = useAppSelector(
    (state) => state.MakeOrderReducer
  );
  const dispatch = useAppDispatch();

  const onSubmit = (data: Address) => {
    if (step === 4) dispatch(setSenderAddress(data));
    else dispatch(setReceiverAddress(data));
    nextStep();
  };

  return (
    <div>
      <h2>
        {step === 4 && 'Откуда забрать'}
        {step === 5 && 'Куда доставить'}
      </h2>
      <AddressForm
        defaultValue={step === 4 ? senderAddress : receiverAddress}
        onSubmit={onSubmit}
        className={st.step__body}
        updateTrigger={step}>
        <div className={st.step__options}>
          <Button variant="outlined" fullWidth type="button" onClick={prevStep}>
            Назад
          </Button>
          <Button fullWidth type="submit">
            Продолжить
          </Button>
        </div>
      </AddressForm>
    </div>
  );
};

export default FourthStep;
