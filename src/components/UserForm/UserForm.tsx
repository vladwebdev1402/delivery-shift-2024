import { User } from '@/types';
import { FC, PropsWithChildren } from 'react';
import { useForm } from 'react-hook-form';

import { Input } from '@/shared/ui';
import { onChangeWithRegexp } from '@/shared/utils';

import st from './UserForm.module.scss';

interface UserFormProps extends PropsWithChildren {
  defaultValue: User | null;
  onSubmit: (data: User) => void;
  disabledPhone?: boolean;
  className?: string;
}

const UserForm: FC<UserFormProps> = ({
  defaultValue,
  onSubmit,
  children,
  disabledPhone = false,
  className = '',
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
          pattern: {
            value:
              /^(?:[А-Яа-я `'-]{1,60}[А-Яа-я]|[A-Za-z `'-]{1,60}[A-Za-z])$/,
            message:
              'Значение должно быть задано с использованием одного из следующих алфавитов:\
                кириллического, латинского. И не должно оканчиваться на спецсимвол',
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
          pattern: {
            value:
              /^(?:[А-Яа-я `'-]{1,60}[А-Яа-я]|[A-Za-z `'-]{1,60}[A-Za-z])$/,
            message:
              'Значение должно быть задано с использованием одного из следующих алфавитов:\
                кириллического, латинского. И не должно оканчиваться на спецсимвол',
          },
          required: 'Поле необходимо обязательно заполнить',
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
          pattern: {
            value:
              /^(?:[А-Яа-я `'-]{1,60}[А-Яа-я]|[A-Za-z `'-]{1,60}[A-Za-z])$/,
            message:
              'Значение должно быть задано с использованием одного из следующих алфавитов:\
              кириллического, латинского. И не должно оканчиваться на спецсимвол',
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
