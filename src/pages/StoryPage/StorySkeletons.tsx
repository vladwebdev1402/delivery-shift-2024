import { Skeleton } from '@/shared/ui';

import st from './StoryPage.module.scss';

const StorySkeletons = () => {
  return (
    <>
      <Skeleton className={st.skeleton} />
      <Skeleton className={st.skeleton} />
      <Skeleton className={st.skeleton} />
      <Skeleton className={st.skeleton} />
      <Skeleton className={st.skeleton} />
      <Skeleton className={st.skeleton} />
    </>
  );
};

export default StorySkeletons;
