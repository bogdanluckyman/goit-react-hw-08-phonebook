import { AuthNav } from './AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from './UserMenu/UserMenu';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      {/* {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>} */}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};
