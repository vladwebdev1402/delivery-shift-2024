import classNames from 'classnames';
import { ComponentPropsWithRef, FC } from 'react';

import st from './OrderStatus.module.scss';

interface OrderStatusProps extends ComponentPropsWithRef<'div'> {
  status: number;
}

const OrderStatus: FC<OrderStatusProps> = ({ status, className = '' }) => {
  const statusClasses = classNames(className, st.status, {
    [st.status_received]: status === 0,
    [st.status_delivered]: status === 1,
    [st.status_cancelled]: status === 4,
  });

  return (
    <div className={statusClasses}>
      <div className={st.status__indicator}></div>
      <div>
        {status === 0 && 'Заказ собирается'}
        {status === 1 && 'Заказ доставлен'}
        {status === 4 && 'Заказ отменён'}
      </div>
    </div>
  );
};

export default OrderStatus;
