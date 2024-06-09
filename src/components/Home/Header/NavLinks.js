import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 3%;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
  }
`;

const StyledLink = styled(Link)`
  color: ${props => (props.active ? '#FF6C00' : props.theme.headerText)};
  text-decoration: none;
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }

  .link-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .main-text {
    position: relative;
    top: -4px;
  }

  .sub-text {
    font-size: 0.8em;
    color: ${props => (props.active ? '#FF6C00' : props.theme.subTextColor)};
  }
`;

const NavLinks = () => {
  const location = useLocation();

  return (
    <NavContainer>
      <StyledLink to="/" active={location.pathname === '/'}>Home</StyledLink>
      <StyledLink to="/iot-system" active={location.pathname === '/iot-system'}>IoT System</StyledLink>
      <StyledLink to="/product" active={location.pathname === '/product'}>Products</StyledLink>
    </NavContainer>
  );
};

export default NavLinks;
