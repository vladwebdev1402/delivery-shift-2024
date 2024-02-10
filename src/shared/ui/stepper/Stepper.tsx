import classNames from 'classnames';
import { FC, useMemo } from 'react';

import st from './Stepper.module.scss';

interface StepperProps {
  count: number;
  current: number;
  className?: string;
}

const Stepper: FC<StepperProps> = ({ count, current, className = '' }) => {
  const steps = useMemo(() => {
    const steps = [];
    for (let i = 0; i < count; i++) steps.push(i + 1);
    return steps;
  }, [count]);

  return (
    <div className={`${className} ${st.stepper}`}>
      {steps.map((step) => (
        <div
          key={step}
          className={classNames(st.stepper__item, {
            [st.stepper_prev]: step < current,
            [st.stepper_current]: step === current,
          })}>
          <div className={st.stepper__line}></div>
          <div className={st.stepper__number}>{step}</div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
