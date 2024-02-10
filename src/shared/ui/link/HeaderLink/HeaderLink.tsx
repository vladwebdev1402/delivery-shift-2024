import classNames from 'classnames';
import { FC, ReactNode, SVGProps } from 'react';
import { Link, useMatch } from 'react-router-dom';

import st from './HeaderLink.module.scss';

interface HeaderLinkProps {
  to: string;
  children: ReactNode;
  Icon: FC<SVGProps<SVGSVGElement>>;
}

const HeaderLink: FC<HeaderLinkProps> = ({ to, children, Icon }) => {
  const match = useMatch(to);
  const linkClasses = classNames(st.link, { [st.link_active]: match });

  return (
    <Link to={to} className={linkClasses}>
      <Icon />
      <div>{children}</div>
    </Link>
  );
};

export default HeaderLink;
