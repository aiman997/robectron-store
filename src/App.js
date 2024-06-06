import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '../src/context/ThemeContext.js';
import Home from '../src/pages/home.js';
import Product from '../src/pages/product.js';

const App = () => (
  <ThemeProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;
