import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
  background-color: #004d40;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 12px 0;
`;

export const NavIcon = styled(Link)`
  height: 40px;
  svg {
    height: 40px;
    width: 40px;
    color: #ffffff;
    fill: #ffffff;
  }
`;

export const NavLink = styled(Link)`
  color: #ffffff;
  font-size: 12px;
`;
