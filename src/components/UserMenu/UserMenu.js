import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { StyledTitle } from '../Form/Form.styled';
import { CenterContainer } from './UserMenu.styled';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logout());

  return (
    <CenterContainer>
      {/* <StyledNavLink to="/contacts">Contacts</StyledNavLink> */}
      <StyledTitle>Welcome, {user.name}!</StyledTitle>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </CenterContainer>
  );
};
