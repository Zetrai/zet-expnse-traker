import React from 'react';

import Header from '../../components/header/header.component';

import { ProfileContainer } from './profile.styles';

const Profile = () => {
  return (
    <ProfileContainer>
      <Header title='Profile' />
    </ProfileContainer>
  );
};

export default Profile;
