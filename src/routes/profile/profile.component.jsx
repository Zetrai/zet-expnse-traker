import React, { useState } from 'react';

import Header from '../../components/header/header.component';
import TopNav from '../../components/top-nav/top-nav.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

import { ProfileContainer, NavContainer } from './profile.styles';

const Profile = () => {
  const [active, setActive] = useState('signIn');
  const RegisterHandler = () => {
    setActive('register');
  };
  const SignInHandler = () => {
    setActive('signIn');
  };
  return (
    <ProfileContainer>
      <Header title='Profile' />
      {active === 'signIn' && <SignInForm />}
      {active === 'register' && <SignUpForm />}
      <NavContainer>
        <TopNav
          buttonOneText='Register'
          buttonOneHandler={RegisterHandler}
          buttonTwoText='Sign In'
          buttonTwoHandler={SignInHandler}
        />
      </NavContainer>
    </ProfileContainer>
  );
};

export default Profile;
