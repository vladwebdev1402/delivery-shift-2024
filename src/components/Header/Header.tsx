import { Link } from 'react-router-dom';

import LogoIcon from '@/shared/assets/logo.svg?react';
import TimeIcon from '@/shared/assets/time.svg?react';
import ProfileIcon from '@/shared/assets/user.svg?react';
import { ROUTER_PATHS } from '@/shared/constants';
import { HeaderLink } from '@/shared/ui';

import st from './Header.module.scss';

const Header = () => {
  return (
    <div className={st.header}>
      <div className={`container`}>
        <div className={st.header__nav}>
          <Link to={ROUTER_PATHS.main}>
            <LogoIcon />
          </Link>
          <HeaderLink to={ROUTER_PATHS.profile} Icon={ProfileIcon}>
            Профиль
          </HeaderLink>
          <HeaderLink to={ROUTER_PATHS.story} Icon={TimeIcon}>
            История
          </HeaderLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
