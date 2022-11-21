import React from 'react';

import { HeaderContainer, Title } from './header.styles';

const Header = ({ title, ProfileLogo }) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      {ProfileLogo && <ProfileLogo />}
    </HeaderContainer>
  );
};

export default Header;
