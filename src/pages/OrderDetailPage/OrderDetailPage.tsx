import {
  useCancelOrderMutation,
  useGetOrdersQuery,
} from '@/service/DeliveryService';
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ResultOrderCard } from '@/components/ResultOrderCard';

import QuestionImg from '@/shared/assets/question.jpg';
import { Button, Modal } from '@/shared/ui';

import st from './OrderDetailPage.module.scss';
import OrderSkeletons from './OrderSkeletons';

const OrderDetailPage = () => {
  const params = useParams<{ id: string }>();

  const { isLoading, data } = useGetOrdersQuery();

  const [isOpen, setIsOpen] = useState(false);

  const [cancelOrder, { isLoading: isCancelLoading, isSuccess }] =
    useCancelOrderMutation();

  const onCancalled = async () => {
    cancelOrder(params.id || '');
  };

  const currentOrder = useMemo(() => {
    return data?.orders.find((order) => order._id === params.id) || undefined;
  }, [data, params]);

  useEffect(() => {
    if (isSuccess) setIsOpen(false);
  }, [isSuccess]);

  return (
    <>
      <div className={`container ${st.detail}`}>
        <h2>Детали</h2>
        <div className={st.detail__body}>
          {currentOrder && (
            <>
              <ResultOrderCard
                title="Получатель"
                values={[
                  {
                    name: 'ФИО',
                    value: `${currentOrder.receiver.firstname} ${currentOrder.receiver.middlename || ''}  ${currentOrder.receiver.lastname}`,
                  },
                  {
                    name: 'Телефон',
                    value: currentOrder.receiver.phone,
                  },
                ]}
              />
              <ResultOrderCard
                title="Отправитель"
                values={[
                  {
                    name: 'ФИО',
                    value: `${currentOrder.sender.firstname} ${currentOrder.sender.middlename || ''} ${currentOrder.sender.lastname}`,
                  },
                  {
                    name: 'Телефон',
                    value: currentOrder.sender.phone,
                  },
                ]}
              />
              <ResultOrderCard
                title="Откуда забрать"
                values={[
                  {
                    name: 'Адрес',
                    value: `${currentOrder.senderAddress.street} ${currentOrder.senderAddress.house} ${currentOrder.senderAddress.appartament}`,
                  },
                  {
                    name: 'Заметка',
                    value: currentOrder.senderAddress.comment || 'Нет заметки',
                  },
                ]}
              />
              <ResultOrderCard
                title="Куда доставить"
                values={[
                  {
                    name: 'Адрес',
                    value: `${currentOrder.receiverAddress.street} ${currentOrder.receiverAddress.house} ${currentOrder.receiverAddress.appartament}`,
                  },
                  {
                    name: 'Заметка',
                    value:
                      currentOrder.receiverAddress.comment || 'Нет заметки',
                  },
                ]}
              />
            </>
          )}
          {!isLoading && currentOrder && currentOrder.status !== 4 && (
            <Button
              className={st.detail__btn}
              fullWidth
              onClick={() => setIsOpen(true)}>
              Отменить заказ
            </Button>
          )}
          {isLoading && <OrderSkeletons />}
          {!isLoading && !currentOrder && <h3>Данный заказ не был найден</h3>}
        </div>
      </div>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <div className={st.modal__img}>
            <img src={QuestionImg} alt="Вопрос" />
          </div>
          <div className={st.modal__body}>
            <h3 className={st.modal__title}>Отменить доставку?</h3>
            <div className={st.modal__options}>
              <Button
                variant="outlined"
                fullWidth
                onClick={onCancalled}
                loading={isCancelLoading}>
                Отменить
              </Button>
              <Button fullWidth onClick={() => setIsOpen(false)}>
                Не отменять
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default OrderDetailPage;
