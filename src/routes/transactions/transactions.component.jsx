import React from 'react';

import Header from '../../components/header/header.component';

import { TransactionContainer } from './transactions.styles';

const Transactions = () => {
  return (
    <TransactionContainer>
      <Header title='Transactions' />
    </TransactionContainer>
  );
};

export default Transactions;
