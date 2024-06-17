import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const CartItems = styled.div`
  flex: 3;
  padding: 20px;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
  border-radius: 5px;
  object-fit: cover;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.span`
  font-size: 16px;
  margin-bottom: 5px;
`;

const ItemPrice = styled.span`
  font-size: 14px;
  color: gray;
`;

const OrderSummary = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const OrderSummaryTitle = styled.h3`
  margin-bottom: 20px;
`;

const OrderSummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const OrderSummaryTotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 16px;
`;

const CheckoutButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #ff6c00;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #e65c00;
  }
`;

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <Container>
      <CartItems>
        <h2>Cart</h2>
        {cartItems.map(item => (
          <CartItem key={item.id}>
            <ItemImage src={item.image} alt={item.name} />
            <ItemInfo>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
            </ItemInfo>
          </CartItem>
        ))}
      </CartItems>
      <OrderSummary>
        <OrderSummaryTitle>Order Summary</OrderSummaryTitle>
        {cartItems.map(item => (
          <OrderSummaryItem key={item.id}>
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </OrderSummaryItem>
        ))}
        <OrderSummaryTotal>
          <span>Total</span>
          <span>${calculateTotal().toFixed(2)}</span>
        </OrderSummaryTotal>
        <CheckoutButton>Checkout</CheckoutButton>
      </OrderSummary>
    </Container>
  );
};

export default Cart;
