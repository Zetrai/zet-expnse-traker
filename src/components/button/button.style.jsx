import styled from 'styled-components';

import THEME, { fontStyle } from '../../theme/theme.styles';

export const BaseButton = styled.button`
  ${fontStyle('Roboto-Bold', THEME.text, 'bold', 'center', 15, 50, 0.5)};
  min-width: 165px;
  width: auto;
  height: 50px;
  background-color: ${THEME.focus};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 12px;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
