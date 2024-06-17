import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import LoginImageCarousel from '../components/Login/LoginImageCarousel';
import LoginForm from '../components/Login/LoginForm';
import NotificationPopup from '../components/Notifications/NotificationPopup';

const LoginContainer = styled.div`
  display: flex;
  height: 100vh; /* Ensures the container takes full height of the viewport */
`;

const Login = () => {
  const location = useLocation();
  const [notification, setNotification] = useState('');

  useEffect(() => {
    if (location.state && location.state.notification) {
      setNotification(location.state.notification);
    }
  }, [location.state]);

  const handleCloseNotification = () => {
    setNotification('');
  };

  return (
    <LoginContainer>
      <LoginImageCarousel />
      <LoginForm />
      {notification && (
        <NotificationPopup message={notification} onClose={handleCloseNotification} />
      )}
    </LoginContainer>
  );
};

export default Login;

