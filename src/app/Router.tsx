import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { MainPage } from '@/pages/MainPage';
import { MakeOrderPage } from '@/pages/MakeOrderPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { StoryPage } from '@/pages/StoryPage';

import { ROUTER_PATHS } from '@/shared/constants';

import Root from './Root';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path={ROUTER_PATHS.profile} element={<ProfilePage />} />
      <Route path={ROUTER_PATHS.makeOrder} element={<MakeOrderPage />} />
      <Route path={ROUTER_PATHS.story} element={<StoryPage />} />
    </Route>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
