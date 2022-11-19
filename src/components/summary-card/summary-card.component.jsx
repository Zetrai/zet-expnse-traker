import React from 'react';

import { CardContainer, Title, Subtitle } from './summary-card.styles';

const SummaryCard = ({ summary }) => {
  return (
    <CardContainer>
      <Title>{summary.title}</Title>
      <Subtitle>
        {summary.subtitle1}: <span>{summary.total}</span>
      </Subtitle>
      <Subtitle>
        {summary.subtitle2}: <span>{summary.lastMonthIncome}</span>
      </Subtitle>
    </CardContainer>
  );
};

export default SummaryCard;
