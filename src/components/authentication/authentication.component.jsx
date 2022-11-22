import React, { useState } from 'react';

import TopNav from '../../components/top-nav/top-nav.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

import { AuthContainer } from './authentication.styles';

const Authentication = () => {
  const [active, setActive] = useState('signIn');
  const RegisterHandler = () => {
    setActive('register');
  };
  const SignInHandler = () => {
    setActive('signIn');
  };
  return (
    <AuthContainer>
      <TopNav
        buttonOneText='Register'
        buttonOneHandler={RegisterHandler}
        buttonTwoText='Sign In'
        buttonTwoHandler={SignInHandler}
      />
      {active === 'signIn' && <SignInForm />}
      {active === 'register' && <SignUpForm />}
    </AuthContainer>
  );
};

export default Authentication;
