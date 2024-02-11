import { useCreateOrderMutation } from '@/service/DeliveryService';
import { FC, useState } from 'react';

import { ResultOrderCard } from '@/components/ResultOrderCard';

import { useAppSelector } from '@/shared/store';
import { Button } from '@/shared/ui';

import PositiveModal from './PositiveModal';
import st from './ResultOrder.module.scss';

interface ResultOrderProps {
  prevStep: () => void;
  goReceiver: () => void;
  goReceiverAddress: () => void;
  goSender: () => void;
  goSenderAddress: () => void;
}

const ResultOrder: FC<ResultOrderProps> = ({
  prevStep,
  goReceiver,
  goReceiverAddress,
  goSender,
  goSenderAddress,
}) => {
  const [isOpenResult, setIsOpenResult] = useState(false);
  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const {
    sender,
    receiver,
    senderAddress,
    receiverAddress,
    option,
    payer,
    receiverPoint,
    senderPoint,
  } = useAppSelector((state) => state.MakeOrderReducer);

  const onSendOrder = async () => {
    if (
      sender &&
      receiver &&
      senderAddress &&
      receiverAddress &&
      option &&
      payer &&
      receiverPoint &&
      senderPoint
    ) {
      const response = await createOrder({
        sender,
        receiver,
        senderAddress,
        receiverAddress,
        option,
        payer,
        receiverPoint,
        senderPoint,
      });
      if ('data' in response) setIsOpenResult(true);
    }
  };

  return (
    <>
      <div>
        <h2> Проверка данных заказа</h2>
        <div className={st.result__body}>
          {receiver && (
            <ResultOrderCard
              title="Получатель"
              onEdit={goReceiver}
              className={st.result__item}
              values={[
                {
                  name: 'ФИО',
                  value: `${receiver.middlename} ${receiver.firstname} ${receiver.lastname}`,
                },
                {
                  name: 'Телефон',
                  value: receiver.phone,
                },
              ]}
            />
          )}
          {sender && (
            <ResultOrderCard
              title="Отправитель"
              onEdit={goSender}
              className={st.result__item}
              values={[
                {
                  name: 'ФИО',
                  value: `${sender.middlename} ${sender.firstname} ${sender.lastname}`,
                },
                {
                  name: 'Телефон',
                  value: sender.phone,
                },
              ]}
            />
          )}
          {senderAddress && (
            <ResultOrderCard
              title="Откуда забрать"
              onEdit={goSenderAddress}
              className={st.result__item}
              values={[
                {
                  name: 'Адрес',
                  value: `${senderAddress.street} ${senderAddress.house} ${senderAddress.appartament}`,
                },
                {
                  name: 'Заметка',
                  value: senderAddress.comment || 'Нет заметки',
                },
              ]}
            />
          )}
          {receiverAddress && (
            <ResultOrderCard
              title="Куда доставить"
              onEdit={goReceiverAddress}
              className={st.result__item}
              values={[
                {
                  name: 'Адрес',
                  value: `${receiverAddress.street} ${receiverAddress.house} ${receiverAddress.appartament}`,
                },
                {
                  name: 'Заметка',
                  value: receiverAddress.comment || 'Нет заметки',
                },
              ]}
            />
          )}
        </div>
        {option && (
          <div className={st.result__info}>
            <h3>Итого: {option.price.toLocaleString('ru')} ₽</h3>
            <div className={st.result__desc}>
              Тариф: {option.name}
              <br />
              Срок: {option.days} рабочих дней
            </div>
          </div>
        )}
        <div className={st.result__options}>
          <Button
            variant="outlined"
            fullWidth
            className={st.result__btn}
            onClick={prevStep}>
            Назад
          </Button>
          <Button
            fullWidth
            className={st.result__btn}
            onClick={onSendOrder}
            loading={isLoading}>
            Отправить
          </Button>
        </div>
      </div>
      <PositiveModal
        isOpen={isOpenResult}
        handleClose={() => setIsOpenResult(false)}
      />
    </>
  );
};

export default ResultOrder;
