import styled from 'styled-components';
import THEME from '../../../theme/theme.styles';

export const ExpensesContainer = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${THEME.text};
`;
