import React from 'react';

import SummaryCard from '../../components/summary-card/summary-card.component';

import {} from './my-income.styles';

const MyIncome = () => {
  const summary = {
    title: 'Income Summary',
    subtitle1: 'Total Balance',
    total: 100000,
    subtitle2: 'Last month Income',
    lastMonthIncome: 22000,
  };
  return (
    <>
      <SummaryCard summary={summary} />
    </>
  );
};

export default MyIncome;
