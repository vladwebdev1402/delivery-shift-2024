import { useGetOrdersQuery } from '@/service/DeliveryService';
import { useNavigate } from 'react-router-dom';

import { OrderCard } from '@/components/OrderCard';

import { TokenService } from '@/shared/api';
import { ROUTER_PATHS } from '@/shared/constants';
import { useAppSelector } from '@/shared/store';
import { Button } from '@/shared/ui';

import st from './StoryPage.module.scss';
import StorySkeletons from './StorySkeletons';

const StoryPage = () => {
  const { data, isLoading } = useGetOrdersQuery(TokenService.getToken());

  const navigate = useNavigate();
  const { isAuth } = useAppSelector((state) => state.AuthReducer);

  if (!isAuth)
    return (
      <div className={`container ${st.story}`}>
        <h2>Вы не авторизованы</h2>
        <Button
          onClick={() => navigate(ROUTER_PATHS.profile)}
          className={st.nav__btn}
          fullWidth>
          Авторизоваться
        </Button>
      </div>
    );

  return (
    <div className={`container ${st.story}`}>
      <h2>История</h2>
      <div className={st.story__body}>
        {isLoading && <StorySkeletons />}
        {data &&
          [...data.orders]
            .sort((a, b) => a.status - b.status)
            .map((order) => <OrderCard key={order._id} order={order} />)}
        {data && data.orders.length === 0 && (
          <h3>Ваши заказы не были найдены. Оформите заказ.</h3>
        )}
      </div>
    </div>
  );
};

export default StoryPage;
