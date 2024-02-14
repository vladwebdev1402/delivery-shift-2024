import { clearDeliveryOptions } from '@/service/DeliveryOptions';
import { clearAllMakeOrder } from '@/service/MakeOrder';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import PositiveImg from '@/shared/assets/positive_checkmark.jpg';
import { ROUTER_PATHS } from '@/shared/constants';
import { useAppDispatch } from '@/shared/store';
import { Button, Modal } from '@/shared/ui';

import st from './ResultOrder.module.scss';

interface PositiveModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

const PositiveModal: FC<PositiveModalProps> = ({ handleClose, isOpen }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onGoStatus = () => {
    navigate(ROUTER_PATHS.story);
    dispatch(clearAllMakeOrder());
    dispatch(clearDeliveryOptions());
  };

  if (isOpen)
    return (
      <Modal onClose={handleClose}>
        <div className={st.modal__img}>
          <img src={PositiveImg} alt="Успешно" />
        </div>
        <h3 className={st.modal__title}>Заявка отправлена</h3>
        <div className={st.modal__description}>
          Вы можете оплатить ваш заказ в разделе «Профиль»
        </div>
        <Button className={st.modal__btn} fullWidth onClick={onGoStatus}>
          Посмотреть статус
        </Button>
      </Modal>
    );
  return <></>;
};

export default PositiveModal;
