import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const products = [
  { name: 'HP Slim 27" Desktop Bundle', price: 350, image: 'path_to_image' },
  // Add more product objects here
];

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const ProductList = () => (
  <List>
    {products.map((product, index) => (
      <ProductCard key={index} product={product} />
    ))}
  </List>
);

export default ProductList;
