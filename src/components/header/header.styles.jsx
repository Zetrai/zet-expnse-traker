import styled from 'styled-components';

import THEME, { fontStyle } from '../../theme/theme.styles';

export const HeaderContainer = styled.div`
  svg {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 28px;
    right: 16px;
    fill: ${THEME.focus};
  }
`;

export const Title = styled.h6`
  ${fontStyle('Primary', THEME.text, 'normal', 'left', 36, 48, 0)};
  margin: 0 24px;
`;
