import { useGetOrdersQuery } from '@/service/DeliveryService';

import { OrderCard } from '@/components/OrderCard';

import st from './StoryPage.module.scss';
import StorySkeletons from './StorySkeletons';

const StoryPage = () => {
  const { data, isLoading } = useGetOrdersQuery();

  return (
    <div className={`container ${st.story}`}>
      <h2>История</h2>
      <div className={st.story__body}>
        {isLoading && <StorySkeletons />}
        {data &&
          data.orders.map((order) => (
            <OrderCard key={order._id} order={order} />
          ))}
      </div>
    </div>
  );
};

export default StoryPage;
