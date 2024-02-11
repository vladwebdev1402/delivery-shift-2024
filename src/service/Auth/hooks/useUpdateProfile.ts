import { useAppDispatch } from '@/shared/store';

import { updateUser, useUpdateProfileMutation } from '..';
import { UpdateProfileRequest } from '../types';

export const useUpdateProfile = () => {
  const dispatch = useAppDispatch();
  const [updateProfile, { isLoading: isUpdateLoading }] =
    useUpdateProfileMutation();

  const onUpdateProfile = (payload: UpdateProfileRequest) => {
    updateProfile(payload);
    dispatch(updateUser(payload.profile));
  };

  return {
    onUpdateProfile,
    isUpdateLoading,
  };
};
