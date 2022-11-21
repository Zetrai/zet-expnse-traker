import React, { useEffect, useState } from 'react';

import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.util';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {
  ButtonsContainer,
  SignUpFormContainer,
  SignUpText,
} from './sign-up-form.styles';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  useEffect(() => {
    resetFormFields();
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Password do not match!');
      return;
    }
    try {
      await createAuthUserWithEmailAndPassword(email, password, displayName);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot Create User, email already in use');
      } else {
        console.log('Error Caught while signing up the user', error);
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <SignUpFormContainer>
      <SignUpText>
        <h2>Are you new?</h2>
      </SignUpText>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='DisplayName'
          type='text'
          onChange={handleChange}
          name='displayName'
          value={displayName}
          required
        />
        <FormInput
          label='Email'
          type='email'
          onChange={handleChange}
          name='email'
          value={email}
          required
        />
        <FormInput
          label='Password'
          type='password'
          onChange={handleChange}
          name='password'
          value={password}
          required
        />
        <FormInput
          label='Confirm Password'
          type='password'
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
          required
        />
        <ButtonsContainer>
          <Button type='submit'>Sign Up</Button>
        </ButtonsContainer>
      </form>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
