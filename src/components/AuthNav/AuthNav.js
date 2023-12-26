import {
  CenteredContainer,
  Navigations,
  StyledNavLink,
} from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <CenteredContainer>
      <Navigations>
        <StyledNavLink to="/register">Register</StyledNavLink>
        <StyledNavLink to="/login">Log In</StyledNavLink>
      </Navigations>
    </CenteredContainer>
  );
};
