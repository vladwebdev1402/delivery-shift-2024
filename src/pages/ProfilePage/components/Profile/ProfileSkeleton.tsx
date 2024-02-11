import { Skeleton } from '@/shared/ui';

import st from './Profile.module.scss';

const ProfileSkeleton = () => {
  return (
    <>
      <Skeleton className={st.skeleton} />
      <Skeleton className={st.skeleton} />
      <Skeleton className={st.skeleton} />
      <Skeleton className={st.skeleton} />
    </>
  );
};

export default ProfileSkeleton;
