import { Outlet } from 'react-router-dom';

import { Header } from '@/components/Header';
import { MobileNav } from '@/components/MobileNav';

const Root = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <MobileNav />
    </>
  );
};

export default Root;
