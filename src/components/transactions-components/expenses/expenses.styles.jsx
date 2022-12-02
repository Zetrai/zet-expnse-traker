import styled from 'styled-components';
import THEME from '../../../theme/theme.styles';

export const ExpensesContainer = styled.div`
  color: ${THEME.text};
  display: grid;
  grid-template-rows: 12fr 6fr;
  .hide-pad {
    display: none;
  }
`;

export const ShowPad = styled.div`
  margin: 45% 0 0 9%;
  background: ${THEME.grey};
  width: 30px;
  padding: 5px 10px;
  border-radius: 20px;
`;
