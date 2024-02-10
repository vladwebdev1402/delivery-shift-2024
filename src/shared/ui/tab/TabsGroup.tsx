import classNames from 'classnames';
import { FC } from 'react';

import st from './TabsGroup.module.scss';

interface Props {
  children: React.ReactNode;
  className?: string;
  variant?: 'contained' | 'outlined';
}

const TabsGroup: FC<Props> = ({
  children,
  className = '',
  variant = 'contained',
}) => {
  const tabClasses = classNames(className, st.tabs__body, {
    [st.tabs_cotained]: variant === 'contained',
    [st.tabs_outlined]: variant === 'outlined',
  });

  return (
    <div className={[st.tabs].join(' ')}>
      <div className={tabClasses}>{children}</div>
    </div>
  );
};

export default TabsGroup;
