import React from 'react';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.util';
import { SignInFormContainer } from './sign-in-form.styles';

const SignInForm = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };
  return (
    <SignInFormContainer>
      <button onClick={logGoogleUser}>Sign In with Google</button>
    </SignInFormContainer>
  );
};

export default SignInForm;
