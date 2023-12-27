import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Navigations = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 12px 20px;
  font-size: 18px;
  color: #262f34;
  background-color: #f1d3bc;
  border: 2px solid #f34a4a;
  border-radius: 8px;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s;

  &:hover {
    background-color: #f34a4a;
    border-color: #262f34;
    color: #f1d3bc;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(38, 47, 52, 0.7);
  }
`;
