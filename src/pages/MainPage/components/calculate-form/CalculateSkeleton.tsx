import { Skeleton } from '@/shared/ui';

import st from './CalculateForm.module.scss';

const CalculateSkeleton = () => {
  return (
    <>
      <Skeleton className={st.skeleton} />
      <Skeleton className={st.skeleton} />
      <Skeleton className={st.skeleton} />
    </>
  );
};

export default CalculateSkeleton;
