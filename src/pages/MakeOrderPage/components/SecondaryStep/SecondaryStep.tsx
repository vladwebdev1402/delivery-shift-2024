import { setSender } from '@/service/MakeOrder';
import { User } from '@/types';
import { FC } from 'react';

import UserForm from '@/components/UserForm/UserForm';

import { useAppDispatch, useAppSelector } from '@/shared/store';
import { Button } from '@/shared/ui';

import st from './SecondaryStep.module.scss';

interface SecondaryStepProps {
  nextStep: () => void;
  prevStep: () => void;
}

const SecondaryStep: FC<SecondaryStepProps> = ({ nextStep, prevStep }) => {
  const { sender } = useAppSelector((state) => state.MakeOrderReducer);
  const dispatch = useAppDispatch();

  const handleSubmit = (data: User) => {
    dispatch(setSender(data));
    nextStep();
  };

  return (
    <div className={`container`}>
      <h2>Отправитель</h2>
      <UserForm
        defaultValue={sender}
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

export default SecondaryStep;
