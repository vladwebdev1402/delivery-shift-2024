import { FC } from 'react';

import st from './Skeleton.module.scss';

const Skeleton: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = '',
}) => {
  return <div className={`${className} ${st.skeleton}`}></div>;
};

export default Skeleton;
