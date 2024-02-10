import { ComponentProps, FC } from 'react';

import st from './Loader.module.scss';

const Loader: FC<ComponentProps<'div'>> = ({ className, ...props }) => {
  return <div className={`${className} ${st.loader}`} {...props}></div>;
};

export default Loader;
