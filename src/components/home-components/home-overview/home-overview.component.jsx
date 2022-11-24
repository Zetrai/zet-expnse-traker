import React from 'react';

import HomeOverviewCard from '../home-overview-card/home-overview-card.component';

import THEME from '../../../theme/theme.styles';
import { OverviewContainer } from './home-overview.styles';

const HomeOverview = () => {
  return (
    <OverviewContainer>
      <HomeOverviewCard
        color={THEME.lightblue}
        data={{ title: 'Balance', value: 120000 }}
      />
      <HomeOverviewCard
        color={THEME.purple}
        data={{ title: 'Income per month', value: 50000 }}
      />
      <HomeOverviewCard
        color={THEME.yellow}
        data={{ title: 'Expenses last month', value: 6000 }}
      />
    </OverviewContainer>
  );
};

export default HomeOverview;
