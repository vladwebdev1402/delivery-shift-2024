import { User } from '@/types';
import { FC, PropsWithChildren, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Input } from '@/shared/ui';
import {
  endUserSpecialCharacter,
  onChangeWithRegexp,
  startUserSpecialCharacter,
  validateAlphabet,
} from '@/shared/utils';

import st from './UserForm.module.scss';

interface UserFormProps extends PropsWithChildren {
  defaultValue: User | null;
  onSubmit: (data: User) => void;
  disabledPhone?: boolean;
  className?: string;
  updateTrigger?: number;
}

const UserForm: FC<UserFormProps> = ({
  defaultValue,
  onSubmit,
  children,
  disabledPhone = false,
  className = '',
  updateTrigger = 0,
}) => {
  const {
    formState: { errors },
    watch,
    register,
    setValue,
    handleSubmit,
  } = useForm<User>({
    defaultValues: defaultValue || {},
  });

  useEffect(() => {
    setValue('firstname', defaultValue?.firstname || '');
    setValue('lastname', defaultValue?.lastname || '');
    setValue('middlename', defaultValue?.middlename || '');
    setValue('phone', defaultValue?.phone || '');
  }, [defaultValue, updateTrigger, setValue]);

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data))}
      className={className}>
      <Input
        label="Имя*"
        fullWidth
        placeholder="Иван"
        className={st.input}
        {...register('firstname', {
          validate: {
            validateAlphabet,
            endUserSpecialCharacter,
            startUserSpecialCharacter,
          },
          required: 'Поле необходимо обязательно заполнить',
        })}
        onChange={onChangeWithRegexp(/^[A-Za-zА-Яа-я `'-]{0,60}$/, (value) =>
          setValue('firstname', value)
        )}
        value={watch('firstname')}
        error={errors.firstname?.message || ''}
      />
      <Input
        label="Фамилия*"
        fullWidth
        placeholder="Иванов"
        className={st.input}
        {...register('lastname', {
          required: 'Поле необходимо обязательно заполнить',
          validate: {
            validateAlphabet,
            endUserSpecialCharacter,
            startUserSpecialCharacter,
          },
        })}
        onChange={onChangeWithRegexp(/^[A-Za-zА-Яа-я `'-]{0,60}$/, (value) =>
          setValue('lastname', value)
        )}
        value={watch('lastname')}
        error={errors.lastname?.message || ''}
      />
      <Input
        label="Отчество"
        fullWidth
        placeholder="Иванович"
        className={st.input}
        {...register('middlename', {
          validate: {
            validateAlphabet,
            endUserSpecialCharacter,
            startUserSpecialCharacter,
          },
        })}
        onChange={onChangeWithRegexp(/^[A-Za-zА-Яа-я `'-]{0,60}$/, (value) =>
          setValue('middlename', value)
        )}
        value={watch('middlename')}
        error={errors.middlename?.message || ''}
      />
      <Input
        label="Телефон*"
        fullWidth
        placeholder="89009009090"
        className={st.input}
        {...register('phone', {
          pattern: {
            value: /^(7|8)\d{10}$/,
            message: 'Введите номер телефона в формате 8XXXYYYZZTT',
          },
          required: 'Поле необходимо обязательно заполнить',
        })}
        onChange={onChangeWithRegexp(/^[0-9]{0,11}$/, (value) =>
          setValue('phone', value)
        )}
        value={watch('phone')}
        error={errors.phone?.message || ''}
        disabled={disabledPhone}
      />
      {children}
    </form>
  );
};

export default UserForm;
