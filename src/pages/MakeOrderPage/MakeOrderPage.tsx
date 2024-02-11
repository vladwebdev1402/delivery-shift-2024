import { Stepper } from '@/shared/ui';

import st from './MakeOrderPage.module.scss';
import { AddressSteps } from './components/AddressSteps';
import { FirtStep } from './components/FirstStep';
import { UserSteps } from './components/UserSteps';
import { useStep } from './hooks/useStep';

const MakeOrderPage = () => {
  const { step, nextStep, prevStep } = useStep();

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
    </div>
  );
};

export default MakeOrderPage;
