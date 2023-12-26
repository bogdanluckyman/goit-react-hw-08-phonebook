import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export const AppLayout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};
