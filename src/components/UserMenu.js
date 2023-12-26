import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/auth/operations';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logout());

  return (
    <div>
      <p>Welcome {user.name}</p>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};