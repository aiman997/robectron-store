import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo/LOGO-Black.png';

const dummyDatabase = {
  'aiman@gmail.com': 'pass123',
  'janedoe@example.com': 'password456',
};

const FormContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  height: 100vh; /* Ensures the form takes full height of the viewport */
`;

const Form = styled.form`
  width: 80%;
  max-width: 400px;
`;

const Logo = styled.img`
  display: block;
  margin: 0 auto 20px;
  width: 150px; 
  height: auto;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 20px;
  color: gray;
`;

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: gray;
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 40px 0 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: gray;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #ff6c00;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  top: 68%;
  transform: translateY(-50%);
  color: gray;
  pointer-events: none;
  font-size: 1.2em;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 1em;
  background-color: #ff6c00;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e65c00;
  }
`;

const GoogleButton = styled(Button)`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 10px;

  &:hover {
    background-color: #333;
  }
`;

const FooterText = styled.p`
  text-align: center;
  margin-top: 20px;
  color: gray;

  a {
    color: #ff6c00;
    text-decoration: none;
  }
`;

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (dummyDatabase[email] === password) {
      login();
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleLogin}>
        <Logo src={logo} alt="Logo" />
        <Title>Welcome Back</Title>
        <Subtitle>Glad to see you again. Login to your account below</Subtitle>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <InputGroup>
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="johndoe@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Icon icon={faEye} />
        </InputGroup>
        <Button type="submit">Login</Button>
        <GoogleButton>
          <FontAwesomeIcon icon={faGoogle} />
          Login with Google
        </GoogleButton>
        <FooterText>
          Don't have an account? <a href="/signup">Sign up</a>
        </FooterText>
      </Form>
    </FormContainer>
  );
};

export default LoginForm;