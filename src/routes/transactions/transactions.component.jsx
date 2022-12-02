import React, { useState } from 'react';

import Header from '../../components/common/header/header.component';
import TopNav from '../../components/common/top-nav/top-nav.component';
import Expenses from '../../components/transactions-components/expenses/expenses.components';
import Income from '../../components/transactions-components/income/income.component';

import { TransactionContainer, BodyContainer } from './transactions.styles';

const Transactions = () => {
  const [active, setActive] = useState('expenses');
  const ExpensesHandler = () => {
    setActive('expenses');
  };
  const IncomeHandler = () => {
    setActive('income');
  };
  return (
    <TransactionContainer>
      <Header title='Transactions' />
      <BodyContainer>
        <TopNav
          buttonOneText='Expenses'
          buttonOneHandler={ExpensesHandler}
          buttonTwoText='Income'
          buttonTwoHandler={IncomeHandler}
          initActive='buttonOne'
        />
        {active === 'expenses' ? <Expenses /> : <Income />}
      </BodyContainer>
    </TransactionContainer>
  );
};

export default Transactions;
