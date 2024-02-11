import { useNavigate } from 'react-router-dom';

import { ROUTER_PATHS } from '@/shared/constants';
import { useAppSelector } from '@/shared/store';
import { Button, Stepper } from '@/shared/ui';

import st from './MakeOrderPage.module.scss';
import { AddressSteps } from './components/AddressSteps';
import { FirtStep } from './components/FirstStep';
import { PayerStep } from './components/PayerStep';
import { ResultOrder } from './components/ResultOrder';
import { UserSteps } from './components/UserSteps';
import { useStep } from './hooks/useStep';

const MakeOrderPage = () => {
  const {
    step,
    nextStep,
    prevStep,
    goReceiver,
    goReceiverAddress,
    goSender,
    goSenderAddress,
  } = useStep();

  const { options } = useAppSelector((state) => state.DeliveryOptionsReducer);
  const navigate = useNavigate();

  const onBack = () => navigate(ROUTER_PATHS.main);

  if (options.length > 0)
    return (
      <div className={`container ${st.page}`}>
        <Stepper count={6} current={step} className={st.page__stepper} />
        {step === 1 && <FirtStep nextStep={nextStep} />}
        {(step === 2 || step === 3) && (
          <UserSteps step={step} nextStep={nextStep} prevStep={prevStep} />
        )}
        {(step === 4 || step === 5) && (
          <AddressSteps step={step} nextStep={nextStep} prevStep={prevStep} />
        )}
        {step === 6 && <PayerStep nextStep={nextStep} prevStep={prevStep} />}
        {step === 7 && (
          <ResultOrder
            prevStep={prevStep}
            goReceiver={goReceiver}
            goReceiverAddress={goReceiverAddress}
            goSender={goSender}
            goSenderAddress={goSenderAddress}
          />
        )}
      </div>
    );

  return (
    <div className={`container ${st.page}`}>
      <h3>Вам необходимо посчитать стоимость заказа</h3>
      <Button className={st.page__back} onClick={onBack} fullWidth>
        Вернуться на главную
      </Button>
    </div>
  );
};

export default MakeOrderPage;
