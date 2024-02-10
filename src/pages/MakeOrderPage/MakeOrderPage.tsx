import st from './MakeOrderPage.module.scss';
import { FirtStep } from './components/FirstStep';
import { SecondaryStep } from './components/SecondaryStep';
import { ThirdStep } from './components/ThirdStep';
import { useStep } from './hooks/useStep';

const MakeOrderPage = () => {
  const { step, nextStep, prevStep } = useStep();

  return (
    <div className={st.page}>
      {step === 1 && <FirtStep nextStep={nextStep} />}
      {step === 2 && <SecondaryStep nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <ThirdStep nextStep={nextStep} prevStep={prevStep} />}
    </div>
  );
};

export default MakeOrderPage;
