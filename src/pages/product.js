import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import Sidebar from '../components/Products/Sidebar';
import ProductList from '../components/Products/ProductList';

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

const Product = () => (
  <div>
    <Header />
    <Container>
      <Sidebar />
      <Content>
        <h1>Desktop PCs</h1>
        <ProductList />
      </Content>
    </Container>
  </div>
);

export default Product;
