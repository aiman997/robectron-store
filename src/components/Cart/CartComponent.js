import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../context/CartContext';

import VisaIcon from '../../assets/icons/visa-electron.svg';
import MastercardIcon from '../../assets/icons/mastercard.svg';
import PayPalIcon from '../../assets/icons/paypal.svg';
import ApplePayIcon from '../../assets/icons/apple-pay.svg';
import GooglePayIcon from '../../assets/icons/google-pay.svg';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  background-color: #f5f5f5;
`;

const CartItems = styled.div`
  flex: 3;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
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
  flex-grow: 1;
`;

const ItemName = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const ItemPrice = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
`;

const Quantity = styled.select`
  padding: 5px;
  margin-left: 10px;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #ff6c00;
  cursor: pointer;
  margin-left: 20px;
  font-size: 20px;

  &:hover {
    color: #e65c00;
  }
`;

const OrderSummary = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
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
  margin-top: 20px;
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

const PaymentMethods = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaymentMethod = styled.img`
  width: 50px;
  height: auto;
  margin: 0 10px;
`;

const CartComponent = () => {
  const { cartItems } = useContext(CartContext);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <Container>
      <CartItems>
        <h2>Cart <span>({cartItems.length})</span></h2>
        {cartItems.map(item => (
          <CartItem key={item.id}>
            <ItemImage src={item.image} alt={item.name} />
            <ItemInfo>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
              <QuantitySelector>
                <label>Qty:</label>
                <Quantity>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Quantity>
              </QuantitySelector>
            </ItemInfo>
            <RemoveButton>🗑</RemoveButton>
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
        <PaymentMethods>
        <PaymentMethod src={VisaIcon} alt="Visa" />
          <PaymentMethod src={MastercardIcon} alt="Mastercard" />
          <PaymentMethod src={PayPalIcon} alt="PayPal" />
          <PaymentMethod src={ApplePayIcon} alt="Apple Pay" />
          <PaymentMethod src={GooglePayIcon} alt="Google Pay" />
        </PaymentMethods>
      </OrderSummary>
    </Container>
  );
};

export default CartComponent;