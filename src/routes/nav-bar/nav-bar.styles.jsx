import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import THEME from '../../theme/theme.styles';

export const NavBarContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 14fr 2fr;
`;

export const NavContainer = styled.div`
  background-color: ${THEME.black};
  width: 100%;
  position: absolute;
  bottom: 20px;
`;

export const NavLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
`;

export const NavIcon = styled(NavLink)`
  height: 40px;
  padding: 10px;
  border-radius: 20px;
  text-decoration: none;
  svg {
    height: 40px;
    width: 40px;
    fill: ${THEME.icons};
  }
  &.active {
    svg {
      fill: ${THEME.focus};
    }
  }
`;
