import classNames from 'classnames';
import { ComponentPropsWithoutRef, LegacyRef, forwardRef } from 'react';

import st from './Input.module.scss';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string;
  hint?: string;
  error?: string;
  fullWidth?: boolean;
}

const Input = forwardRef<InputProps, InputProps>(
  (
    {
      label = '',
      hint = '',
      error = '',
      className = '',
      fullWidth = false,
      ...props
    },
    myRef
  ) => {
    const inputClasses = classNames(className, st.input, {
      [st.input_fullWidth]: fullWidth,
      [st.input_error]: error,
    });

    return (
      <label className={inputClasses}>
        <span className={st.input__label}>{label}</span>
        <input {...props} ref={myRef as LegacyRef<HTMLInputElement>} />
        <span className={st.input__hint}>{error ? error : hint}</span>
      </label>
    );
  }
);
Input.displayName = 'Input';

export default Input;
