import styled from 'styled-components';

import THEME, { fontStyle } from '../../theme/theme.styles';

export const HeaderContainer = styled.div`
  margin: 0 24px 40px 24px;
`;

export const Title = styled.h6`
  margin: 0;
  ${fontStyle('Primary', THEME.text, 'normal', 'center', 36, 48, 0)}
`;
