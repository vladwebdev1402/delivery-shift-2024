import { useLazyCreateOtpQuery, useSignin } from '@/service/Auth';
import { useForm } from 'react-hook-form';

import { Button, Input } from '@/shared/ui';
import { onChangeWithRegexp } from '@/shared/utils';

import st from './AuthByPhone.module.scss';

interface AuthValues {
  phone: string;
  code: string;
}

const AuthByPhone = () => {
  const [createOtp, { data: code, isLoading: isCodeLoading }] =
    useLazyCreateOtpQuery();

  const { onSignin, isSigninLoading } = useSignin();

  const {
    setValue,
    watch,
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<AuthValues>();

  const onSubmit = handleSubmit((data) => {
    if (!code) createOtp(data.phone);
    else onSignin({ ...data, code: +data.code });
  });

  return (
    <div className={st.auth}>
      <h2>Вход</h2>
      <div className={st.auth__desc}>
        Введите номер телефона для входа в личный кабинет
      </div>
      <form className={st.auth__form} onSubmit={onSubmit}>
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
        />
        {code && (
          <Input
            label="Код*"
            fullWidth
            placeholder="123456"
            className={st.auth__input}
            {...register('code', {
              pattern: {
                value: /^\d{6}$/,
                message: 'Код должен содержать 6 цифр',
              },
              required: 'Код должен содержать 6 цифр',
              maxLength: {
                value: 6,
                message: 'Код должен содержать 6 цифр',
              },
            })}
            onChange={onChangeWithRegexp(/^[0-9]{0,6}$/, (value) =>
              setValue('code', value)
            )}
            value={watch('code')}
            error={errors.code?.message || ''}
          />
        )}
        <Button
          className={st.auth__btn}
          type="submit"
          fullWidth
          loading={isCodeLoading || isSigninLoading}>
          {code ? 'Войти' : 'Продолжить'}
        </Button>
      </form>
    </div>
  );
};

export default AuthByPhone;
