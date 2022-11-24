import React from 'react';

import { CardContainer } from './home-overview-card.styles';

const HomeOverviewCard = ({ color, data }) => {
  const { title, value } = data;
  return (
    <CardContainer color={color}>
      <h3>₹{value}</h3>
      <p>{title}</p>
    </CardContainer>
  );
};

export default HomeOverviewCard;
