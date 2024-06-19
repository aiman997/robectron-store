import React from 'react';
import styled from 'styled-components';

import VisaIcon from '../../assets/icons/visa-electron.svg';
import MastercardIcon from '../../assets/icons/mastercard.svg';
import PayPalIcon from '../../assets/icons/paypal.svg';
import ApplePayIcon from '../../assets/icons/apple-pay.svg';
import GooglePayIcon from '../../assets/icons/google-pay.svg';

const OrderSummaryContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const OrderSummaryTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
`;

const OrderSummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #888;
  font-size: 14px;

  & > span:last-child {
    color: #333;
  }
`;

const OrderSummaryTotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 18px;
  margin-top: 20px;
`;

const LineSeparator = styled.hr`
  border: 0;
  border-top: 1px solid #eee;
  margin: 10px 0;
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
  font-size: 16px;

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

const PaymentInfo = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #888;
`;

const OrderSummary = ({ cartItems, calculateTotal }) => {
  return (
    <OrderSummaryContainer>
      <OrderSummaryTitle>Order Summary</OrderSummaryTitle>
      {cartItems.map(item => (
        <OrderSummaryItem key={item.id}>
          <span>{item.name}</span>
          <span>${item.price.toFixed(2)}</span>
        </OrderSummaryItem>
      ))}
      <LineSeparator />
      <OrderSummaryItem>
        <span>Amount</span>
        <span>${calculateTotal().toFixed(2)}</span>
      </OrderSummaryItem>
      <OrderSummaryItem>
        <span>TAX</span>
        <span>$65.00</span>
      </OrderSummaryItem>
      <OrderSummaryItem>
        <span>Shipping Fee</span>
        <span>Free</span>
      </OrderSummaryItem>
      <LineSeparator />
      <OrderSummaryTotal>
        <span>Order Total</span>
        <span>${(calculateTotal() + 65).toFixed(2)}</span>
      </OrderSummaryTotal>
      <CheckoutButton>Checkout</CheckoutButton>
      <PaymentInfo>You can pay with</PaymentInfo>
      <PaymentMethods>
        <PaymentMethod src={VisaIcon} alt="Visa" />
        <PaymentMethod src={MastercardIcon} alt="Mastercard" />
        <PaymentMethod src={PayPalIcon} alt="PayPal" />
        <PaymentMethod src={ApplePayIcon} alt="Apple Pay" />
        <PaymentMethod src={GooglePayIcon} alt="Google Pay" />
      </PaymentMethods>
    </OrderSummaryContainer>
  );
};

export default OrderSummary;
