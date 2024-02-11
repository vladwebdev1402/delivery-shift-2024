import { useAppSelector } from '@/shared/store';

import st from './ProfilePage.module.scss';
import { AuthByPhone } from './components/AuthByPhone';
import { Profile } from './components/Profile';

const ProfilePage = () => {
  const { isAuth } = useAppSelector((state) => state.AuthReducer);

  return (
    <div className={`container ${st.page}`}>
      {isAuth ? <Profile /> : <AuthByPhone />}
    </div>
  );
};

export default ProfilePage;
