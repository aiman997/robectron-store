import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header'; // Adjust the path as necessary
import Sidebar from '../components/Sidebar'; // Adjust the path as necessary
import ProductList from '../components/ProductList'; // Adjust the path as necessary

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
