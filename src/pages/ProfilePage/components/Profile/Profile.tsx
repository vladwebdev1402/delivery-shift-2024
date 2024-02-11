import { logout, useGetSession, useUpdateProfile } from '@/service/Auth';
import { User } from '@/types';

import { UserForm } from '@/components/UserForm';

import { useAppDispatch, useAppSelector } from '@/shared/store';
import { Button, Loader } from '@/shared/ui';

import st from './Profile.module.scss';
import ProfileSkeleton from './ProfileSkeleton';

const Profile = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.AuthReducer);
  const { isGetSessionLoading } = useGetSession();
  const { onUpdateProfile, isUpdateLoading } = useUpdateProfile();

  const onSubmit = (value: User) =>
    onUpdateProfile({ profile: value, phone: value.phone });

  const onLogout = () => dispatch(logout());

  if (isGetSessionLoading && !user)
    return (
      <div className={st.profile}>
        <h2>Профиль</h2>
        <ProfileSkeleton />
      </div>
    );

  return (
    <div className={st.profile}>
      <h2 className={st.profile__header}>
        Профиль {isUpdateLoading && <Loader />}
      </h2>
      <UserForm
        onSubmit={onSubmit}
        defaultValue={user}
        disabledPhone
        className={st.profile__form}>
        <Button fullWidth type="submit" className={st.profile__button}>
          Обновить данные
        </Button>
      </UserForm>
      <Button
        fullWidth
        variant="outlined"
        className={st.profile__button}
        onClick={onLogout}>
        Выйти
      </Button>
    </div>
  );
};

export default Profile;
