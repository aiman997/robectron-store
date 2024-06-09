import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  padding: 10px;
`;

const Card = styled(Link)`
  width: 70px; 
  height: 70px; 
  background: rgb(255,186,0);
  background: radial-gradient(circle, rgba(255,186,0,0.3702074579831933) 0%, rgba(255,108,0,0.42622986694677867) 100%);
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 12px;
  border-radius: 50%;
  text-decoration: none;
  transition: background-color 0.3s ease;


  &:hover {
    background-color: #eb7777;
  }

  img {
    width: 150px;
    height: 150px;
  }
`;

const Title = styled.h3` 
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  text-align: center;
`;

const Mycard = ({ category }) => {
  console.log(category);
  console.log('Category:', category);
  return (
    <Container>
      <Card to={category.link}>
        <img src={category.image} alt={category.name} />
      </Card>
      <Title>{category.name}</Title>
    </Container>
  );
};

export default Mycard;
