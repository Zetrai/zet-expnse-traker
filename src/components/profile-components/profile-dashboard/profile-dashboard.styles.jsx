import styled from 'styled-components';

import THEME, { fontStyle } from '../../../theme/theme.styles';

export const DashboardContainer = styled.div`
  margin: 0 24px;
  color: ${THEME.text};
`;

export const Title = styled.h1`
  ${fontStyle('Roboto-Bold', THEME.icons, 'bold', 'left', 32, 40, 0)}
  margin: 0;
`;
