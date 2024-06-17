import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import CartComponent from '../components/Cart/CartComponent';
import Footer from '../components/Footer/Footer';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px 20px;
  background-color: #f5f5f5;
`;

const Content = styled.div`
  flex-grow: 1;
  max-width: 1200px;
  padding: 20px;
`;

const CartPage = () => (
  <div>
    <Header />
    <Container>
      <Content>
        <CartComponent />
      </Content>
    </Container>
    <Footer />
  </div>
);

export default CartPage;