import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as UserIcon } from '../../../assets/icons/user.svg';
import { ReactComponent as CartIcon } from '../../../assets/icons/cart.svg';
import { useAuth } from '../../../context/AuthContext';
import { ReactComponent as ProfileIcon } from '../../../assets/icons/user-profile-3.svg'; 
import { useTheme } from '../../../context/ThemeContext';
import ThemeToggle from '../../ThemeToggle';
import CountryLanguageCurrency from '../CountryLanguageCurrency';
import ProfileDropdown from './ProfileDropdown';
import { useTranslation } from 'react-i18next';

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 35px;
  margin-left: 0%;
  margin-right: 15px;
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
  flex-direction: column;

  &:hover {
    text-decoration: underline;
  }

  .link-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5px;
  }

  .main-text {
    position: relative;
    top: -4px;
  }
  .usericon-main-text{
    position: relative;
    top: 6px;
    margin-bottom: 9px;
  }

  .cart-main-text {
    position: relative;
    top: -4px;
  }

  .sub-text {
    font-size: 0.8em;
    color: ${props => (props.active ? '#FF6C00' : props.theme.subTextColor)};
  }

  .usericon-sub-text{
    font-size: 0.8em;
    color: ${props => (props.active ? '#FF6C00' : props.theme.subTextColor)};
    /* margin-top: 5px; */
  }

  .cart-sub-text {
    font-size: 0.8em;
    margin-left: 0px;
    color: ${props => (props.active ? '#FF6C00' : props.theme.subTextColor)};
  }
`;

const CartWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  &:hover .cart-dropdown {
    display: block;
  }
`;

const CartDropdown = styled.div`
  display: none;
  position: absolute;
  top: 50px;
  left: ${props => props.left}px;
  width: 200px;
  background-color: ${props => props.theme.clc_background};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 30px;
  margin-top: 0px;
  margin-left: -32px;
  border-radius: 8px;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 0 10px 10px 10px; /* Adjust the size of the triangle */
    border-style: solid;
    border-color: transparent transparent ${props => props.theme.clc_background} transparent;
  }
`;

const CartIconWrapper = styled.div`
  position: relative;
`;

const CartBadge = styled.div`
  position: absolute;
  top: -5px;
  right: 0px;
  background-color: #FF6C00;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

const ThemeToggleWrapper = styled.div`
  position: absolute;
  top: -10px;
  right: -70px;
`;

const ProfileWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  &:hover .profile-dropdown {
    display: block;
  }
`;

const UserActions = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, logout } = useAuth();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [dropdownLeft, setDropdownLeft] = useState(0);
  const cartWrapperRef = useRef(null);
  const profileWrapperRef = useRef(null);
  const cartItemsCount = 3; // Replace with actual cart items count
  const direction = currentLang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    if (cartWrapperRef.current) {
      const wrapperWidth = cartWrapperRef.current.offsetWidth;
      setDropdownLeft(wrapperWidth / 2 - 100); // 100 is half the width of the dropdown (200px)
    }
  }, []);

  return (
    <NavContainer>
      <CountryLanguageCurrency />
      <CartWrapper ref={cartWrapperRef}>
        <StyledLink to="/cart" active={location.pathname === '/cart'} dir={direction}>
          <CartIconWrapper>
            <CartIcon style={{ width: '32px', height: '32px', marginRight: '5px', paddingTop: '8px' }} />
            <CartBadge>{cartItemsCount}</CartBadge>
          </CartIconWrapper>
          <div className="link-text">
            <span className="cart-main-text">{t('My Cart')}</span>
            <span className="cart-sub-text"> $0.00</span>
          </div>
        </StyledLink>
        <CartDropdown className="cart-dropdown" left={dropdownLeft}>
          <p>Your cart is currently empty.</p>
          {/* Add more dropdown content here */}
        </CartDropdown>
      </CartWrapper>
      {isAuthenticated ? (
        <ProfileWrapper ref={profileWrapperRef}>
          <StyledLink to="/profile" active={location.pathname === '/profile'} dir={direction}>
            <ProfileIcon style={{ width: '60px', height: '60px', marginBottom: '15px' }} />
          </StyledLink>
          <ProfileDropdown onLogout={logout} />
        </ProfileWrapper>
      ) : (
        <StyledLink to="/login" active={location.pathname === '/login'} dir={direction}>
          <UserIcon style={{ width: '32px', height: '32px', marginTop: '0px' }} />
          <div className="link-text">
            <span className="usericon-main-text">{t('Login')}</span>
            <span className="usericon-sub-text">{t('or Sign up')}</span>
          </div>
        </StyledLink>
      )}
      <ThemeToggleWrapper>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </ThemeToggleWrapper>
    </NavContainer>
  );
};

export default UserActions;