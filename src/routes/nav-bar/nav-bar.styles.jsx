import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import THEME from '../../theme/theme.styles';

export const NavContainer = styled.div`
  background-color: ${THEME.background};
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const NavLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
`;

export const NavIcon = styled(NavLink)`
  height: 40px;
  padding: 10px;
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
