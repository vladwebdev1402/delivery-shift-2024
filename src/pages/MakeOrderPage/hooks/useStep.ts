import { useState } from 'react';

export const useStep = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);

  const prevStep = () => setStep(step - 1);

  const goSender = () => setStep(2);

  const goReceiver = () => setStep(1);

  const goSenderAddress = () => setStep(3);

  const goReceiverAddress = () => setStep(4);

  return {
    step,
    nextStep,
    prevStep,
    goSender,
    goReceiver,
    goSenderAddress,
    goReceiverAddress,
  };
};
