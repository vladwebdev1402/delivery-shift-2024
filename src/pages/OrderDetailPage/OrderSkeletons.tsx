import { Skeleton } from '@/shared/ui';

import st from './OrderDetailPage.module.scss';

const OrderSkeletons = () => {
  return (
    <>
      <Skeleton className={st.skeleton} />
      <Skeleton className={st.skeleton} />
      <Skeleton className={st.skeleton} />
      <Skeleton className={st.skeleton} />
    </>
  );
};

export default OrderSkeletons;
