import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DropdownContainer = styled.div`
  display: none;
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  background-color: ${props => props.theme.clc_background};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 20px;
  border-radius: 8px;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 0 10px 10px 10px;
    border-style: solid;
    border-color: transparent transparent ${props => props.theme.clc_background} transparent;
  }
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 10px 0;
  color: ${props => props.theme.headerText};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.primaryColor};
  }
`;

const ProfileDropdown = ({ onLogout }) => {
  return (
    <DropdownContainer className="profile-dropdown">
      <DropdownItem to="/account-settings">Account Settings</DropdownItem>
      <DropdownItem to="/favourites">Favourites</DropdownItem>
      <DropdownItem to="/order-history">Order History</DropdownItem>
      <DropdownItem to="/billing">Billing</DropdownItem>
      <DropdownItem as="div" onClick={onLogout}>Log Out</DropdownItem>
    </DropdownContainer>
  );
};

export default ProfileDropdown;
