import React from 'react';
import styled from 'styled-components';
import LoginImageCarousel from '../components/Login/LoginImageCarousel';
import LoginForm from '../components/Login/LoginForm';

const LoginContainer = styled.div`
  display: flex;
  height: 100vh; /* Ensures the container takes full height of the viewport */
`;

const Login = () => {
  return (
    <LoginContainer>
      <LoginImageCarousel />
      <LoginForm />
    </LoginContainer>
  );
};

export default Login;
