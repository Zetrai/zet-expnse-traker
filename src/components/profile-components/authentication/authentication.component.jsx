import React, { useState } from 'react';

import TopNav from '../../common/top-nav/top-nav.component';
import SignInForm from '../sign-in-form/sign-in-form.component';
import SignUpForm from '../sign-up-form/sign-up-form.component';

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
        initActive='buttonTwo'
      />
      {active === 'signIn' ? <SignInForm /> : <SignUpForm />}
    </AuthContainer>
  );
};

export default Authentication;
