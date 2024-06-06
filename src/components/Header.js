import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as UserIcon } from '../assets/icons/user.svg';
import { ReactComponent as CartIcon } from '../assets/icons/cart.svg';
import { useTheme } from '../context/ThemeContext.js';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 60px 10px 10px;
  background-color: ${props => props.theme.headerBg};
  color: ${props => props.theme.headerText};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 90px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
`;

const LogoImage = styled.img`
  width: 200px;
  height: auto;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;

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
    top: -4px; /* Adjust this value to move the text up or down */
  }

  .sub-text {
    font-size: 0.8em; /* Smaller font size for the sub-text */
    color: ${props => (props.active ? '#FF6C00' : props.theme.subTextColor)};
  }
`;

const SearchContainer = styled.div`
  position: relative;
  margin-left: 20px;
  margin-right: 20px;
  flex-grow: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    margin: 10px 0;
    width: 100%;
    justify-content: flex-start;
  }
`;

const SearchInputContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 480px;
`;

const SearchInput = styled.input`
  padding: 10px 20px;
  height: 40px;
  width: 100%;
  border-radius: 20px;
  border: 1px solid #ccc;
  padding-right: 40px;
`;

const SearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: #FF6C00;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.headerText};
  cursor: pointer;
  font-size: 20px;
  margin-left: 20px;

  &:focus {
    outline: none;
  }
`;

const Header = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <HeaderContainer>
      <Logo>
        <LogoImage src={theme.logo}/>
      </Logo>

      <Nav>
        <StyledLink to="/" active={location.pathname === '/'}>Home</StyledLink>
        <StyledLink to="/iot-system" active={location.pathname === '/iot-system'}>IoT System</StyledLink>
        <StyledLink to="/product" active={location.pathname === '/product'}>Products</StyledLink>
      </Nav>
      <SearchContainer>
        <SearchInputContainer>
          <SearchInput type="search" placeholder="Search" />
          <SearchIcon icon={faSearch} />
        </SearchInputContainer>
      </SearchContainer>
      <Nav>
        <StyledLink to="/login" active={location.pathname === '/login'}>
          <UserIcon style={{ width: '32px', height: '32px', marginRight: '5px' }} />
          <div className="link-text">
            <span className="main-text">Login</span>
            <span className="sub-text">or Sign up</span>
          </div>
        </StyledLink>
        <StyledLink to="/cart" active={location.pathname === '/cart'}>
          <CartIcon style={{ width: '32px', height: '32px', marginRight: '5px' }} />
          <div className="link-text">
            <span className="main-text">My Cart</span>
            <span className="sub-text">0 Items - $0.00</span>
          </div>
        </StyledLink>
      </Nav>
      <ToggleButton onClick={toggleTheme}>
        <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
      </ToggleButton>
    </HeaderContainer>
  );
};

export default Header;
