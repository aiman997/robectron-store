import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '../src/context/ThemeContext.js';
import { AuthProvider } from '../src/context/AuthContext.js';
import Home from '../src/pages/home.js';
import Product from '../src/pages/product.js';
import Login from './pages/login.js';
import SignUp from './pages/signup.js';
import PrivacyPolicy from './components/Footer/PrivacyPolicy.js';
import TermsAndConditions from './components/Footer/TermsAndConditions.js';


const App = () => (
  <ThemeProvider>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} /> 
        </Routes>
      </Router>
    </AuthProvider>
  </ThemeProvider>
);

export default App;