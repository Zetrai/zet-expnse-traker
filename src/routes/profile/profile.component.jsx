import React from 'react';

import Header from '../../components/header/header.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import { ProfileContainer } from './profile.styles';

const Profile = () => {
  return (
    <ProfileContainer>
      <Header title='Profile' />
      <SignInForm />
    </ProfileContainer>
  );
};

export default Profile;
