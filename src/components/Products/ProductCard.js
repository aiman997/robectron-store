
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #e0e0e0;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProductCard = ({ product }) => (
  <Card>
    <ProductImage src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>${product.price}</p>
  </Card>
);

export default ProductCard;