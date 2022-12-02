import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../../utils/firebase/firebase.util';

import { ReactComponent as GoogleIcon } from '../../../assets/icons/google-icon.svg';

import FormInput from '../../common/form-input/form-input.component';

import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../common/button/button.component';

import {
  SignInFormContainer,
  ButtonsContainer,
  GoogleIconContainer,
  LineTextContainer,
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
    resetFormFields();
  }, []);

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
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
          <LineTextContainer>
            <span>or sign in with google</span>
          </LineTextContainer>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.nonFocus}
            type='button'
            onClick={isMobile ? signInWithGoogle : signInWithGoogle}
          >
            <GoogleIconContainer>
              <GoogleIcon />
            </GoogleIconContainer>
            Sign In With Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInFormContainer>
  );
};

export default SignInForm;
