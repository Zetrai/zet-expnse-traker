import React from 'react';

import Header from '../../components/common/header/header.component';
import HomeOverview from '../../components/home-overview/home-overview.component';

import { HomeContainer } from './home.styles';

const Home = () => {
  return (
    <HomeContainer>
      <Header title='Home' />
      <HomeOverview />
    </HomeContainer>
  );
};

export default Home;
