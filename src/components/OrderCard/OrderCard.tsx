import { Order } from '@/types';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTER_PATHS } from '@/shared/constants';
import { Button, OrderStatus } from '@/shared/ui';

import st from './OrderCard.module.scss';

interface OrderCardProps {
  order: Order;
}

const OrderCard: FC<OrderCardProps> = ({ order }) => {
  const navigate = useNavigate();

  const onMore = () => navigate(ROUTER_PATHS.navOrderDetail(order._id));

  return (
    <div className={st.order}>
      <div className={st.order__item}>
        <div className={st.order__title}>Статус заказа</div>
        <div className={st.order__value}>
          <OrderStatus status={order.status} />
        </div>
      </div>
      <div className={st.order__item}>
        <div className={st.order__title}>Получатель</div>
        <div className={st.order__value}>
          {order.receiver.firstname} {order.receiver.lastname}
          {order.receiver.middlename}
        </div>
      </div>
      <div className={st.order__item}>
        <div className={st.order__title}>Адрес доставки</div>
        <div className={st.order__value}>
          Россия, г. {order.receiverPoint.name}, {order.receiverAddress.street},{' '}
          {order.receiverAddress.house}
        </div>
      </div>

      <Button variant="text" className={st.order__btn} onClick={onMore}>
        Подробнее
      </Button>
    </div>
  );
};

export default OrderCard;
