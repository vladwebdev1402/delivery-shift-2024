import CalcIcon from '@/shared/assets/calc.svg?react';
import TimeIcon from '@/shared/assets/time.svg?react';
import UserIcon from '@/shared/assets/user.svg?react';
import { ROUTER_PATHS } from '@/shared/constants';
import MobileLink from '@/shared/ui/link/MobileLink/MobileLink';

import st from './MobileNav.module.scss';

const MobileNav = () => {
  return (
    <div className={st.menu}>
      <MobileLink Icon={() => <CalcIcon />} to={ROUTER_PATHS.main}>
        Расчёт
      </MobileLink>
      <MobileLink Icon={() => <TimeIcon />} to={ROUTER_PATHS.story}>
        История
      </MobileLink>
      <MobileLink Icon={() => <UserIcon />} to={ROUTER_PATHS.profile}>
        Профиль
      </MobileLink>
    </div>
  );
};

export default MobileNav;
