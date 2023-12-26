import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { GlobalStyle } from './GlobalStyled';

export const AppLayout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
      <GlobalStyle />
    </div>
  );
};
