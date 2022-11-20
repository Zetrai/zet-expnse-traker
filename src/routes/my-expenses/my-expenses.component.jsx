import React from 'react';

import SummaryCard from '../../components/summary-card/summary-card.component';

import { ExpenseContainer } from './my-expenses.styles';

const MyExpense = () => {
  const summary = {
    title: 'Expenses Summary',
    subtitle1: 'Total Expenses',
    total: 30000,
    subtitle2: 'Last month Income',
    lastMonthIncome: 10000,
  };
  return (
    <ExpenseContainer>
      <SummaryCard summary={summary} />
    </ExpenseContainer>
  );
};

export default MyExpense;
