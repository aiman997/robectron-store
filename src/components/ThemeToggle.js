import React from 'react';
import Switch from 'react-switch';
import sunIcon from '../assets/icons/sun.svg';
import moonIcon from '../assets/icons/moon-orange.svg';
import styled from 'styled-components';

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  img {
    width: 16px;
    height: 16px;
  }
`;

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <Switch
      onChange={toggleTheme}
      checked={theme.mode === 'dark'}
      offColor="#f5f5f5"
      onColor="#333333"
      offHandleColor="#ffffff"
      onHandleColor="#ff9500"
      uncheckedIcon={
        <IconContainer>
          <img src={sunIcon} alt="Sun Icon" />
        </IconContainer>
      }
      checkedIcon={
        <IconContainer>
          <img src={moonIcon} alt="Moon Icon" />
        </IconContainer>
      }
      height={30}
      width={60}
      handleDiameter={24}
    />
  );
};

export default ThemeToggle;