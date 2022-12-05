import styled from 'styled-components';

import THEME, { fontStyle } from '../../../theme/theme.styles';

export const SignInFormContainer = styled.div`
  margin: 20px 24px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`;

export const SignInText = styled.div`
  h2 {
    ${fontStyle('Roboto-Bold', THEME.text, 'bolder', 'left', 32, 32, 0)};
    margin: 0 0 10px 0;
  }
  p {
    ${fontStyle('Roboto-Regular', THEME.text, 'normal', 'left', 32, 40, 0)};
    margin: 0;
  }
`;

export const LineTextContainer = styled.h2`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid ${THEME.grey};
  line-height: 0.1em;
  margin: 50px 0 20px;
  span {
    ${fontStyle('Roboto-Light', THEME.icons, 'normal', 'center', 14, 0, 0)};
    background: ${THEME.black};
    padding: 0 5px;
  }
`;

export const GoogleIconContainer = styled.span`
  margin: auto 8px;
  display: flex;
  align-items: center;

  svg {
    height: 24px;
    width: 24px;
  }
`;
