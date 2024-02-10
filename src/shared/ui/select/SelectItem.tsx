import { ComponentPropsWithRef, FC } from 'react';

import st from './Select.module.scss';

interface SelectItemProps extends ComponentPropsWithRef<'button'> {
  value: string;
}

const SelectItem: FC<SelectItemProps> = ({
  children,
  value,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`${className} ${st.select__item}`}
      {...props}
      data-value={value}
      type="button">
      {children}
    </button>
  );
};

export default SelectItem;
