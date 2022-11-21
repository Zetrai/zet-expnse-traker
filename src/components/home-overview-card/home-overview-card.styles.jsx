import styled from 'styled-components';
import THEME, { fontStyle } from '../../theme/theme.styles';

export const CardContainer = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 30px;
  margin: 10px 0;
  padding: 12px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    ${fontStyle('Roboto-Bold', THEME.black, 'normal', 'center', 24, 36, 0)};
    margin: 0;
  }
  p {
    ${fontStyle('Roboto-Regular', THEME.black, 'normal', 'center', 14, 14, 0)};
    height: 28px;
    margin: 0;
  }
`;
