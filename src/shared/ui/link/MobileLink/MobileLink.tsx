import { FC } from 'react';
import { Link, useMatch } from 'react-router-dom';

import st from './MobileLink.module.scss';

interface MobileLinkProps {
  to: string;
  Icon: FC;
  children: React.ReactNode;
}

const MobileLink: FC<MobileLinkProps> = ({ to, Icon, children }) => {
  const match = useMatch(to);

  return (
    <Link className={`${st.link} ${match ? st.link_active : ''}`} to={to}>
      <Icon />
      <div className={st.link__name}>{children}</div>
    </Link>
  );
};

export default MobileLink;
