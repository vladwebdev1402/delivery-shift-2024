import { useAppDispatch } from '@/shared/store';

import { setToken, setUser, useLazySigninQuery } from '..';
import { SigninRequest } from '../types';

export const useSignin = () => {
  const dispatch = useAppDispatch();
  const [signin, { isLoading }] = useLazySigninQuery();

  const onSignin = async (payload: SigninRequest) => {
    const response = await signin(payload);
    if (response.data) {
      dispatch(setToken(response.data.token));
      dispatch(setUser(response.data.user));
    }
  };

  return {
    onSignin,
    isSigninLoading: isLoading,
  };
};
