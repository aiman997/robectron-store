import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useTheme } from '../../context/ThemeContext';
import Logo from './Logo';
import NavLinks from './NavLinks';
import SearchBar from './SearchBar';
import UserActions from './UserActions/UserActions';


const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background-color: ${props => props.theme.headerBg};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0px 0px 0px;
  margin: 0 auto;
  /* max-width: 1300px;  */
  max-width: 90%;
  width: 100%;
  color: ${props => props.theme.headerText};
  height: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    max-width: 100%;
  }
`;

const Header = () => {
  const { theme } = useTheme();
  const headerRef = useRef(null);

  useEffect(() => {
    // keeping the effect for potential future needs
  }, []);

  return (
    <HeaderWrapper>
      <HeaderContainer ref={headerRef}>
        <Logo logoSrc={theme.logo} />
        <NavLinks />
        <SearchBar />
        <UserActions />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;