import { setReceiver } from '@/service/MakeOrder';
import { User } from '@/types';
import { FC } from 'react';

import UserForm from '@/components/UserForm/UserForm';

import { useAppDispatch, useAppSelector } from '@/shared/store';
import { Button } from '@/shared/ui';

import st from './ThirdStep.module.scss';

interface ThirdStepProps {
  nextStep: () => void;
  prevStep: () => void;
}

const ThirdStep: FC<ThirdStepProps> = ({ nextStep, prevStep }) => {
  const { receiver } = useAppSelector((state) => state.MakeOrderReducer);
  const dispatch = useAppDispatch();

  const handleSubmit = (data: User) => {
    dispatch(setReceiver(data));
    nextStep();
  };

  return (
    <div className={`container`}>
      <h2>Получатель</h2>
      <UserForm
        defaultValue={receiver}
        className={st.step__body}
        onSubmit={handleSubmit}>
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

export default ThirdStep;
