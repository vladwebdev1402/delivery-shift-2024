import FirtStep from './components/FirstStep/FirtStep';
import { useStep } from './hooks/useStep';

const MakeOrderPage = () => {
  const { step, nextStep, prevStep } = useStep();

  return <div>{step === 1 && <FirtStep nextStep={nextStep} />}</div>;
};

export default MakeOrderPage;
