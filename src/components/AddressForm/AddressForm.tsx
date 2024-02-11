import { Address } from '@/types';
import { FC, PropsWithChildren, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Input } from '@/shared/ui';
import { onChangeWithRegexp } from '@/shared/utils';
import {
  endAddressSpecialCharacter,
  startAddressSpecialCharacter,
  validateAlphabet,
} from '@/shared/utils';

import st from './AddressForm.module.scss';

interface AddressFormProps extends PropsWithChildren {
  defaultValue: Address | null;
  onSubmit: (value: Address) => void;
  className?: string;
  updateTrigger?: number;
}

const AddressForm: FC<AddressFormProps> = ({
  defaultValue,
  onSubmit,
  children,
  className = '',
  updateTrigger = 0,
}) => {
  const {
    setValue,
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm<Address>({
    defaultValues: { ...defaultValue },
  });

  const formSubmit = handleSubmit((data) => onSubmit(data));

  useEffect(() => {
    setValue('appartament', defaultValue?.appartament || '');
    setValue('comment', defaultValue?.comment || '');
    setValue('house', defaultValue?.house || '');
    setValue('street', defaultValue?.street || '');
  }, [defaultValue, updateTrigger, setValue]);
  return (
    <form className={className} onSubmit={formSubmit}>
      <Input
        label="Улица*"
        placeholder="Улица"
        fullWidth
        className={st.input}
        {...register('street', {
          required: 'Поле необходимо обязательно заполнить',
          validate: {
            validateAlphabet,
            endAddressSpecialCharacter,
            startAddressSpecialCharacter,
          },
          maxLength: {
            value: 100,
            message: 'Превышена максимальная длина значения 100 символов',
          },
        })}
        value={watch('street')}
        onChange={onChangeWithRegexp(
          /^[A-Za-zА-Яа-я0-9 ““""',/`‘:;\-_.,#]{0,100}$/,
          (value) => setValue('street', value)
        )}
        error={errors.street?.message}
      />
      <Input
        label="Номер дома*"
        placeholder="Дом"
        fullWidth
        className={st.input}
        {...register('house', {
          required: 'Поле необходимо обязательно заполнить',
          validate: {
            validateAlphabet,
            endAddressSpecialCharacter,
            startAddressSpecialCharacter,
          },
          maxLength: {
            value: 100,
            message: 'Превышена максимальная длина значения 100 символов',
          },
        })}
        value={watch('house')}
        onChange={onChangeWithRegexp(
          /^[A-Za-zА-Яа-я0-9 ““""',/`‘:;\-_.,#]{0,100}$/,
          (value) => setValue('house', value)
        )}
        error={errors.house?.message}
      />
      <Input
        label="Номер квартиры*"
        placeholder="Квартира"
        fullWidth
        className={st.input}
        {...register('appartament', {
          required: 'Поле необходимо обязательно заполнить',
          validate: {
            validateAlphabet,
            endAddressSpecialCharacter,
            startAddressSpecialCharacter,
          },
          maxLength: {
            value: 100,
            message: 'Превышена максимальная длина значения 100 символов',
          },
        })}
        value={watch('appartament')}
        onChange={onChangeWithRegexp(
          /^[A-Za-zА-Яа-я0-9 ““""',/`‘:;\-_.,#]{0,100}$/,
          (value) => setValue('appartament', value)
        )}
        error={errors.appartament?.message}
      />
      <Input
        label="Заметка"
        placeholder="Заметка для курьера"
        fullWidth
        className={st.input}
        {...register('comment', {
          validate: {
            validateAlphabet,
            endAddressSpecialCharacter,
            startAddressSpecialCharacter,
          },
          maxLength: {
            value: 300,
            message: 'Превышена максимальная длина значения 300 символов',
          },
        })}
        value={watch('comment')}
        onChange={onChangeWithRegexp(
          /^[A-Za-zА-Яа-я0-9 ““""',/`‘:;\-_.,#]{0,300}$/,
          (value) => setValue('comment', value)
        )}
        error={errors.comment?.message}
      />
      {children}
    </form>
  );
};

export default AddressForm;
