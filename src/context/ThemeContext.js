import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import lightLogo from '../assets/image.png';
import darkLogo from '../assets/Robectron_logo.png';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const lightTheme = {
  background: '#fff',
  text: '#000',
  headerBg: '#fff',
  headerText: '#000',
  subTextColor: '#aaa',
  logo: lightLogo
};

const darkTheme = {
  background: '#000',
  text: '#fff',
  headerBg: '#000',
  headerText: '#fff',
  subTextColor: '#aaa',
  logo: darkLogo
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
