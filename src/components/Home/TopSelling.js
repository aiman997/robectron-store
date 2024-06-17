import React from 'react';
import styled from 'styled-components';

const TopSellingWrapper = styled.div`
  position: relative;
  margin-top: 10%;
  max-width: 70%;
  margin: 0 auto;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #000;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: left;
  max-width: 100%;
`;

const Tab = styled.div`
  padding: 10px 20px;
  border-radius: 20px;
  background-color: ${props => (props.active ? 'orange' : '#e0e0e0')};
  color: ${props => (props.active ? '#fff' : '#000')};
  cursor: pointer;
  margin: 0 10px;
`;

const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 30%;
  max-width: 200px;
  text-align: left;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const ProductName = styled.h3`
  font-size: 16px;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  color: #000;
  font-weight: bold;
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Star = styled.span`
  color: orange;
  margin-right: 5px;
`;

const EmptyStar = styled(Star)`
  color: #ccc;
`;

const RatingText = styled.span`
  margin-left: 10px;
  color: #888;
`;

const TopSelling = ({ products }) => {
  return (
    <TopSellingWrapper>
      <HeaderContainer>
        <Title>Top Selling</Title>
        <TabsContainer>
          <Tab active>Most Popular</Tab>
          <Tab>IoT Farming System</Tab>
          <Tab>Desktop PCs</Tab>
          <Tab>Laptops</Tab>
          <Tab>Accessories</Tab>
        </TabsContainer>
      </HeaderContainer>
      <ProductGrid>
        {products.map((product, index) => (
          <ProductCard key={index}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price}</ProductPrice>
            <ProductRating>
              {[...Array(product.rating)].map((_, i) => (
                <Star key={i}>★</Star>
              ))}
              {[...Array(5 - product.rating)].map((_, i) => (
                <EmptyStar key={i}>★</EmptyStar>
              ))}
              <RatingText>{product.rating} stars</RatingText>
            </ProductRating>
          </ProductCard>
        ))}
      </ProductGrid>
    </TopSellingWrapper>
  );
};

export default TopSelling;