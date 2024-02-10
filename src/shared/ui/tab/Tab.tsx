import classNames from 'classnames';
import { FC } from 'react';

import st from './Tab.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  variant?: 'contained' | 'outlined';
  withBorder?: boolean;
}

const Tab: FC<Props> = ({
  children,
  className,
  active = false,
  withBorder = false,
  variant = 'contained',
  ...props
}) => {
  const tabClasses = classNames(className, st.tab, {
    [st.tab_contained_active]: active && variant === 'contained',
    [st.tab_outlined_active]: active && variant === 'outlined',
    [st.tab_contained]: variant === 'contained',
    [st.tab_outlined]: variant === 'outlined',
  });

  return (
    <button className={tabClasses} {...props} type="button">
      <div className={`${withBorder ? st.tab_border : ''} ${st.tab__body}`}>
        {children}
      </div>
    </button>
  );
};

export default Tab;
