import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DropdownContainer = styled.div`
  display: ${props => (props.isVisible ? 'block' : 'none')};
  position: absolute;
  top: 100px;
  left: ${props => props.left}px;
  width: 220px;
  background-color: ${props => props.theme.dropdownBackground || '#333'};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 20px;
  border-radius: 10px;
  text-align: left;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 0 10px 10px 10px;
    border-style: solid;
    border-color: transparent transparent ${props => props.theme.dropdownBackground || '#333'} transparent;
  }
`;

const DropdownItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px 0;
  color: ${props => props.theme.dropdownText || '#fff'};
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${props => props.theme.dropdownHoverBackground || '#444'};
    color: ${props => props.theme.dropdownHoverText || '#fff'};
    border-radius: 5px;
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
    color: ${props => props.theme.subTextColor || '#ccc'};
  }
`;

const CartDropdown = ({ items, left, isVisible }) => {
  return (
    <DropdownContainer className="cart-dropdown" left={left} isVisible={isVisible}>
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