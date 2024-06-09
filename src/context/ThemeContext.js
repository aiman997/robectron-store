import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import lightLogo from '../assets/logo/LOGO-Black.png';
import darkLogo from '../assets/logo/LOGO-White.png';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const lightTheme = {
  mode: 'light',
  background: '#fff',
  text: '#000',
  headerBg: '#fff',
  headerText: '#000',
  subTextColor: '#aaa',
  logo: lightLogo,
  backgroundGradient: 'radial-gradient(circle, rgba(255,255,255,0.1909357492997199) 10%, rgba(249,242,236,0) 32%, rgba(255,237,224,0) 58%, rgba(255,237,224,0) 74%, rgba(255,108,0,0.042476365546218475) 97%, rgba(255,108,0,0.05087972689075626) 120%)',
};

const darkTheme = {
  mode: 'dark',
  background: '#000',
  text: '#fff',
  headerBg: '#000',
  headerText: '#fff',
  subTextColor: '#aaa',
  logo: darkLogo,
  backgroundGradient: 'linear-gradient(to bottom, #3a3a3a, #1a1a1a)',
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme.mode === 'light' ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};