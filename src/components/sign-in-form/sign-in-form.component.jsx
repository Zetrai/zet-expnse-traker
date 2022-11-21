import React, { useEffect, useState } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { isMobile } from 'react-device-detect';

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.util';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  SignInFormContainer,
  ButtonsContainer,
  SignInText,
} from './sign-in-form.styles';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  useEffect(() => {
    // For Google Sign In via Redirect
    const redirectResult = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        await createUserDocumentFromAuth(response.user);
      }
    };
    redirectResult();
  }, []);

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();

    createUserDocumentFromAuth(user);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('No User associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };
  return (
    <SignInFormContainer>
      <SignInText>
        <h2>Let's sign you in.</h2>
        <p>Welcome back!</p>
      </SignInText>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <br />
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type='button'
            onClick={isMobile ? signInWithGoogleRedirect : signInWithGoogle}
          >
            Sign In With Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInFormContainer>
  );
};

export default SignInForm;
