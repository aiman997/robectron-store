import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'HP Slim 27" Desktop Bundle', price: 350, image: '/path/to/HP.png' },
    { id: 2, name: 'Dell G15-5530 Laptop', price: 590, image: '/path/to/laptop.png' },
  ]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
