import { ComponentPropsWithRef, FC, PropsWithChildren } from 'react';

import st from './InputRadio.module.scss';

interface InputRadioProps
  extends ComponentPropsWithRef<'input'>,
    PropsWithChildren {}

const InputRadio: FC<InputRadioProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <label className={`${className} ${st.input}`}>
      <input type="radio" {...props} />
      <div className={st.text}>{children}</div>
    </label>
  );
};

export default InputRadio;
