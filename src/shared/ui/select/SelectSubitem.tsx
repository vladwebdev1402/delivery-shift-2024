import { ComponentPropsWithRef, FC } from 'react';

import st from './Select.module.scss';

interface SelectSubitemProps extends ComponentPropsWithRef<'button'> {
  changeValue: (value: string) => void;
  value: string;
}

const SelectSubitem: FC<SelectSubitemProps> = ({
  value,
  changeValue,
  children,
  ...props
}) => {
  return (
    <button
      className={st.select__option}
      {...props}
      data-value={value}
      onClick={() => changeValue(value)}
      type="button">
      {children}
    </button>
  );
};

export default SelectSubitem;
