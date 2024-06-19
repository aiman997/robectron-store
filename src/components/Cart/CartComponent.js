import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../context/CartContext';
import OrderSummary from './OrderSummary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faStar } from '@fortawesome/free-solid-svg-icons';

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
  width: 120px;
  height: 120px;
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

const ItemPriceRemoveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ItemPrice = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 50px;
`;

const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
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
  font-size: 18px;

  &:hover {
    color: #e65c00;
  }
`;

const StarRating = ({ rating }) => {
  return (
    <div>
      {Array(5).fill().map((_, i) => (
        <FontAwesomeIcon
          icon={faStar}
          key={i}
          style={{ color: i < rating ? '#ffd700' : '#ddd', marginRight: '2px' }}
        />
      ))}
      <span>305</span>
    </div>
  );
};

const CartHeader = styled.h2`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;

  span {
    background-color: #ddd;
    padding: 5px 10px;
    border-radius: 50%;
    font-size: 14px;
    margin-left: 5px;
    position: relative;
    top: -5px;
  }
`;

const CartComponent = () => {
  const { cartItems } = useContext(CartContext);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <Container>
      <CartItems>
        <CartHeader>
          Cart <span>{cartItems.length}</span>
        </CartHeader>
        {cartItems.map(item => (
          <CartItem key={item.id}>
            <ItemImage src={item.image} alt={item.name} />
            <ItemInfo>
              <ItemName>{item.name}</ItemName>
              <StarRating rating={4} /> {/* Adjust the rating value as needed */}
              <QuantitySelector>
                <label>Qty:</label>
                <Quantity>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Quantity>
              </QuantitySelector>
            </ItemInfo>
            <ItemPriceRemoveWrapper>
              <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
              <RemoveButton>
                <FontAwesomeIcon icon={faTrashAlt} />
              </RemoveButton>
            </ItemPriceRemoveWrapper>
          </CartItem>
        ))}
      </CartItems>
      <OrderSummary cartItems={cartItems} calculateTotal={calculateTotal} />
    </Container>
  );
};

export default CartComponent;