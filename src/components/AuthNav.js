import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <nav>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Log In</NavLink>
      </nav>
    </div>
  );
};
