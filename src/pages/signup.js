import React from 'react';
import styled from 'styled-components';
import LoginImageCarousel from '../components/Login/LoginImageCarousel';
import SignUpForm from '../components/SignUp/SignUpForm';

const SignUpContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const SignUp = () => {
  return (
    <SignUpContainer>
      <LoginImageCarousel />
      <SignUpForm />
    </SignUpContainer>
  );
};

export default SignUp;
