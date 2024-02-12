import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/shared/store';

import { logout, setUser, useLazyGetSessionQuery } from '..';

export const useGetSession = () => {
  const dispatch = useAppDispatch();
  const { isAuth, user } = useAppSelector((state) => state.AuthReducer);
  const [getSession, { isLoading: isGetSessionLoading }] =
    useLazyGetSessionQuery();

  useEffect(() => {
    const onGetSession = async () => {
      const response = await getSession();

      if (response.data) {
        dispatch(setUser(response.data.user));
      } else dispatch(logout());
    };

    if (isAuth && !user) onGetSession();
  }, [isAuth, user, dispatch, getSession]);

  return {
    isGetSessionLoading,
  };
};
