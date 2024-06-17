import React, { createContext, useState } from 'react';
import product1Image from '../assets/products/HP.png';
import product2Image from '../assets/products/mobile-phone.png';
import product3Image from '../assets/products/laptop.png';


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'HP Slim 27" Desktop Bundle', price: 350, image: product1Image },
    { id: 2, name: 'Dell G15-5530 Laptop', price: 590, image: product2Image },
    { id: 3, name: 'Dell G15-5530 Laptop', price: 590, image: product3Image },
  ]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
