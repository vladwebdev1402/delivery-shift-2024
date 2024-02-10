import { Delivery } from '@/types';
import { FC } from 'react';

import BusIcon from '@/shared/assets/bus.svg?react';
import PlaneIcon from '@/shared/assets/plane.svg?react';

import st from './DeliveryOption.module.scss';

interface DeliveryOptionProps {
  delivery: Delivery;
  clickDelivery: (delivery: Delivery) => void;
}

const DeliveryOption: FC<DeliveryOptionProps> = ({
  delivery,
  clickDelivery,
}) => {
  return (
    <div className={st.delivery} onClick={() => clickDelivery(delivery)}>
      <div className={st.delivery__icon}>
        {delivery.type === 'DEFAULT' ? <BusIcon /> : <></>}
        {delivery.type === 'EXPRESS' ? <PlaneIcon /> : <></>}
      </div>
      <div>
        <div className={st.delivery__text}>{delivery.name}</div>
        <h3 className={st.delivery__price}>
          {delivery.price.toLocaleString('ru')} ₽
        </h3>
        <div className={`${st.delivery__text} ${st.delivery__days}`}>
          {delivery.days} рабочих дней
        </div>
      </div>
    </div>
  );
};

export default DeliveryOption;
