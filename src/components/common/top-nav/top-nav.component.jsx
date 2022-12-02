import React, { useState } from 'react';

import { TopNavContainer } from './top-nav.styles';

const TopNav = ({
  buttonOneText,
  buttonOneHandler,
  buttonTwoText,
  buttonTwoHandler,
  initActive,
}) => {
  const [active, setActive] = useState(initActive);
  const buttonHandlerOne = (event) => {
    setActive(event.target.id);
    buttonOneHandler();
  };
  const buttonHandlerTwo = (event) => {
    setActive(event.target.id);
    buttonTwoHandler();
  };
  return (
    <TopNavContainer>
      <button
        onClick={buttonHandlerOne}
        id='buttonOne'
        className={active === 'buttonOne' ? 'active' : ''}
      >
        {buttonOneText}
      </button>
      <button
        onClick={buttonHandlerTwo}
        id='buttonTwo'
        className={active === 'buttonTwo' ? 'active' : ''}
      >
        {buttonTwoText}
      </button>
    </TopNavContainer>
  );
};

export default TopNav;
