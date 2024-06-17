import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCog, faHeart, faHistory, faCreditCard, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

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
  text-align: left;

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
  display: flex;
  align-items: center;
  padding: 10px 0;
  color: ${props => props.theme.headerText};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.primaryColor};
  }

  svg {
    margin-right: 10px;
  }
`;

const LogoutItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  color: red;
  cursor: pointer;

  &:hover {
    color: darkred;
  }

  svg {
    margin-right: 10px;
  }
`;

const ProfileDropdown = ({ onLogout }) => {
  return (
    <DropdownContainer className="profile-dropdown">
      <DropdownItem to="/account-settings">
        <FontAwesomeIcon icon={faUserCog} />
        Account Settings
      </DropdownItem>
      <DropdownItem to="/favourites">
        <FontAwesomeIcon icon={faHeart} />
        Favourites
      </DropdownItem>
      <DropdownItem to="/order-history">
        <FontAwesomeIcon icon={faHistory} />
        Order History
      </DropdownItem>
      <DropdownItem to="/billing">
        <FontAwesomeIcon icon={faCreditCard} />
        Billing
      </DropdownItem>
      <LogoutItem onClick={onLogout}>
        <FontAwesomeIcon icon={faSignOutAlt} />
        Log Out
      </LogoutItem>
    </DropdownContainer>
  );
};

export default ProfileDropdown;