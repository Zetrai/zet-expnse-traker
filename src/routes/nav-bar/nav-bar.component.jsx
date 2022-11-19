import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import { ReactComponent as ExpenseIcon } from '../../assets/icons/expense.svg';
import { ReactComponent as IncomeIcon } from '../../assets/icons/income.svg';
import { NavContainer, NavLinks, NavIcon } from './nav-bar.styles';

const NavBar = () => {
  return (
    <Fragment>
      <Outlet />
      <NavContainer>
        <NavLinks>
          <NavIcon to='/'>
            <ExpenseIcon />
          </NavIcon>
          <NavIcon to='/my-income'>
            <IncomeIcon />
          </NavIcon>
        </NavLinks>
      </NavContainer>
    </Fragment>
  );
};

export default NavBar;
