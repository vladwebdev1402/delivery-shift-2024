import classNames from 'classnames';
import React, { FC } from 'react';

import { Loader } from '..';
import st from './Button.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'text';
  loading?: boolean;
  fullWidth?: boolean;
  StartIcon?: React.ReactNode;
}

const Button: FC<Props> = ({
  variant = 'contained',
  className = '',
  disabled = false,
  loading = false,
  children,
  StartIcon,
  fullWidth,
  ...props
}) => {
  const btnClasses = classNames(className, st.button, {
    [st.button_contained]: variant === 'contained',
    [st.button_outlined]: variant === 'outlined',
    [st.button_text]: variant === 'text',
    [st.button_fullWidth]: fullWidth,
    [st.button_disabled]: disabled || loading,
  });

  return (
    <button className={btnClasses} {...props} disabled={disabled || loading}>
      {StartIcon && <div className={st.button__icon}>{StartIcon}</div>}
      {loading ? <Loader /> : children}
    </button>
  );
};

export default Button;
