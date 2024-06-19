import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  font-size: 16px;
  color: #333;
  display: flex;
  align-items: center;

  &:hover {
    color: #FF6C00;
  }
`;

const BrandSection = () => (
  <Section>
    <Title>Brand</Title>
    <List>
      <ListItem><input type="checkbox" /> HP</ListItem>
      <ListItem><input type="checkbox" /> DELL</ListItem>
      <ListItem><input type="checkbox" /> LENOVO</ListItem>
      <ListItem><input type="checkbox" /> Apple</ListItem>
      <ListItem><input type="checkbox" /> Acer</ListItem>
    </List>
  </Section>
);

export default BrandSection;
