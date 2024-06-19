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

const AvailabilitySection = () => (
  <Section>
    <Title>Availability</Title>
    <List>
      <ListItem><input type="checkbox" /> In Stock</ListItem>
      <ListItem><input type="checkbox" /> Pre-order</ListItem>
      <ListItem><input type="checkbox" /> Out of Stock</ListItem>
    </List>
  </Section>
);

export default AvailabilitySection;
