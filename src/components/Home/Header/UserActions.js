import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as UserIcon } from '../../../assets/icons/user.svg';
import { ReactComponent as CartIcon } from '../../../assets/icons/cart.svg';
import { useTheme } from '../../../context/ThemeContext';
import ThemeToggle from '../../ThemeToggle';
import CountryLanguageCurrency from './CountryLanguageCurrency';

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 25px;
  margin-left: 0%;
  margin-right: 0px;
  position: relative;
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

const CartWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const ThemeToggleWrapper = styled.div`
  position: absolute;
  top: -35px; /* Adjust as needed */
  right: -50px; /* Adjust as needed */
`;

const UserActions = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <NavContainer>
      <CountryLanguageCurrency />
      <StyledLink to="/login" active={location.pathname === '/login'}>
        <UserIcon style={{ width: '32px', height: '32px', marginRight: '5px' }} />
        <div className="link-text">
          <span className="main-text">Login</span>
          <span className="sub-text">or Sign up</span>
        </div>
      </StyledLink>
      <CartWrapper>
        <StyledLink to="/cart" active={location.pathname === '/cart'}>
          <CartIcon style={{ width: '32px', height: '32px', marginRight: '5px' }} />
          <div className="link-text">
            <span className="main-text">My Cart</span>
            <span className="sub-text">0 Items - $0.00</span>
          </div>
        </StyledLink>
        <ThemeToggleWrapper>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </ThemeToggleWrapper>
      </CartWrapper>
    </NavContainer>
  );
};

export default UserActions;