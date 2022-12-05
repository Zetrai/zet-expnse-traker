import React from 'react';

import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import { ReactComponent as WalletIcon } from '../../assets/icons/wallet.svg';
import { ReactComponent as PieChartIcon } from '../../assets/icons/pie-chart.svg';
import { ReactComponent as ProfileIcon } from '../../assets/icons/profile.svg';

import {
  NavBarContainer,
  NavContainer,
  NavLinks,
  NavIcon,
} from './nav-bar.styles';

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavContainer>
        <NavLinks>
          <NavIcon
            className={({ isActive }) => (isActive ? 'active' : '')}
            to='/'
          >
            <HomeIcon />
          </NavIcon>
          <NavIcon
            className={({ isActive }) => (isActive ? 'active' : '')}
            to='/transactions'
          >
            <WalletIcon />
          </NavIcon>
          <NavIcon
            className={({ isActive }) => (isActive ? 'active' : '')}
            to='/stats'
          >
            <PieChartIcon />
          </NavIcon>
          <NavIcon
            className={({ isActive }) => (isActive ? 'active' : '')}
            to='/profile'
          >
            <ProfileIcon />
          </NavIcon>
        </NavLinks>
      </NavContainer>
    </NavBarContainer>
  );
};

export default NavBar;
