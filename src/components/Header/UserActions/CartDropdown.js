import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import product1Image from '../../../assets/products/HP.png';
import product2Image from '../../../assets/products/mobile-phone.png';
import product3Image from '../../../assets/products/laptop.png';

const DropdownContainer = styled.div`
  display: none;
  position: absolute;
  top: 50px;
  left: ${props => props.left}px;
  width: 250px;
  background-color: ${props => props.theme.clc_background};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 20px;
  border-radius: 8px;
  text-align: left;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 0 10px 10px 10px;
    border-style: solid;
    border-color: transparent transparent ${props => props.theme.clc_background} transparent;
  }
`;

const DropdownItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px 0;
  color: ${props => props.theme.headerText};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.primaryColor};
  }

  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    object-fit: cover;
    border-radius: 5px;
  }

  .item-info {
    display: flex;
    flex-direction: column;
  }

  .item-name {
    font-size: 14px;
  }

  .item-price {
    font-size: 12px;
    color: ${props => props.theme.subTextColor};
  }
`;

const CartDropdown = ({ items, left }) => {
  return (
    <DropdownContainer className="cart-dropdown" left={left}>
      {items.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        items.map(item => (
          <DropdownItem to={`/product/${item.id}`} key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="item-info">
              <span className="item-name">{item.name}</span>
              <span className="item-price">${item.price.toFixed(2)}</span>
            </div>
          </DropdownItem>
        ))
      )}
    </DropdownContainer>
  );
};

export default CartDropdown;