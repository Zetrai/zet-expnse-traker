import styled from 'styled-components';

import THEME, { fontStyle } from '../../theme/theme.styles';

export const TopNavContainer = styled.div`
  margin: 0 24px 24px 24px;
  background-color: ${THEME.grey};
  border-radius: 25px;

  button {
    ${fontStyle('Roboto-Medium', THEME.text, 'normal', 'center', 16, 16, 0)};
    background-color: ${THEME.grey};
    width: 50%;
    padding: 20px 0;
    border-radius: 25px;
    box-shadow: none;
    border: none;
  }
  button.active {
    background-color: ${THEME.text};
    color: ${THEME.grey};
  }
`;
