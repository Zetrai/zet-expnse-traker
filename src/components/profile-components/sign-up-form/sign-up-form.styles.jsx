import styled from 'styled-components';

import THEME, { fontStyle } from '../../../theme/theme.styles';

export const SignUpFormContainer = styled.div`
  margin: 20px 24px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
`;

export const SignUpText = styled.div`
  h2 {
    ${fontStyle('Roboto-Bold', THEME.text, 'bolder', 'left', 32, 32, 0)};
    margin: 0 0 10px 0;
  }
  p {
    ${fontStyle('Roboto-Regular', THEME.text, 'normal', 'left', 32, 40, 0)};
    margin: 0;
  }
`;
