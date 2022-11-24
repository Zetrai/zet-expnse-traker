import styled from 'styled-components';

import THEME, { fontStyle } from '../../../theme/theme.styles';

export const TopNavContainer = styled.div`
  background-color: ${THEME.black};
  border-radius: 25px;
  margin: 0px 5%;

  button {
    ${fontStyle('Roboto-Medium', THEME.text, 'normal', 'center', 16, 16, 0)};
    background-color: ${THEME.black};
    width: 50%;
    padding: 20px 0;
    /* border-radius: 25px; */
    box-shadow: none;
    border: none;
  }
  button.active {
    /* background-color: ${THEME.text};
    color: ${THEME.grey}; */
    border-bottom: 1px solid ${THEME.focus};
  }
`;
