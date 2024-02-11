import { useGetSession } from '@/service/Auth';
import { Outlet } from 'react-router-dom';

import { Header } from '@/components/Header';
import { MobileNav } from '@/components/MobileNav';

const Root = () => {
  useGetSession();
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
