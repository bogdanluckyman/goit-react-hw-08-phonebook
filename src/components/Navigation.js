import { NavLink } from 'react-router-dom';
import { AuthNav } from './AuthNav';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from './UserMenu';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      {isLoggedIn && (
        <nav>
          <NavLink to="/contacts">Contacts</NavLink>
        </nav>
      )}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};
