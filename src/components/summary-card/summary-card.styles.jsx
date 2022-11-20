import styled from 'styled-components';

import THEME from '../../theme/theme.styles';

export const CardContainer = styled.div`
  background-color: ${THEME.lightblue};
  margin: 24px;
  padding: 24px;
  border-radius: 33px;
`;

export const Title = styled.p`
  margin: 0;
  font-size: 32px;
  font-weight: bold;
  line-height: 48px;
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  line-height: 32px;
  span {
    font-size: 18px;
    font-weight: normal;
  }
`;
