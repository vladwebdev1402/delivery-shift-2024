import { setReceiver, setSender } from '@/service/MakeOrder';
import { User } from '@/types';
import { FC } from 'react';

import { UserForm } from '@/components/UserForm';

import { useAppDispatch, useAppSelector } from '@/shared/store';
import { Button } from '@/shared/ui';

import st from './UserSteps.module.scss';

interface SecondaryStepProps {
  nextStep: () => void;
  prevStep: () => void;
  step: number;
}

const UserSteps: FC<SecondaryStepProps> = ({ step, nextStep, prevStep }) => {
  const { user } = useAppSelector((state) => state.AuthReducer);
  const { sender, receiver } = useAppSelector(
    (state) => state.MakeOrderReducer
  );
  const dispatch = useAppDispatch();

  const handleSubmit = (data: User) => {
    if (step === 2) dispatch(setReceiver(data));
    else dispatch(setSender(data));
    nextStep();
  };

  return (
    <div>
      <h2>
        {step === 2 && 'Получатель'}
        {step === 3 && 'Отправитель'}
      </h2>
      <UserForm
        defaultValue={step === 2 ? receiver : sender || user}
        className={st.step__body}
        onSubmit={handleSubmit}
        updateTrigger={step}>
        <div className={st.step__options}>
          <Button variant="outlined" fullWidth type="button" onClick={prevStep}>
            Назад
          </Button>
          <Button fullWidth type="submit">
            Продолжить
          </Button>
        </div>
      </UserForm>
    </div>
  );
};

export default UserSteps;
