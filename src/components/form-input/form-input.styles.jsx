import styled, { css } from 'styled-components';
import THEME, { fontStyle } from '../../theme/theme.styles';

const subColor = 'grey';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
`;

export const FormInputLabel = styled.label`
  ${fontStyle('Roboto-Regular', THEME.purple, 'normal', 'left', 16, 16, 0)};
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
  ${fontStyle('Roboto-Regular', THEME.text, 'normal', 'left', 18, 18, 0)};
  background: none;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;
