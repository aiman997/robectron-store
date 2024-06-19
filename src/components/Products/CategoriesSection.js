import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

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
  color: ${props => (props.active ? '#FF6C00' : '#333')};
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: #FF6C00;
  }
`;

const SubList = styled.ul`
  list-style-type: none;
  padding-left: 20px;
  margin-top: 10px;
`;

const CategoriesSection = () => {
  const [expanded, setExpanded] = useState({
    computers: true,
    mobilePhones: false,
    sensors: false,
  });

  const toggleExpand = section => {
    setExpanded(prevState => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <Section>
      <Title>Categories</Title>
      <List>
        <ListItem>
          <FaChevronRight />
          <span>IoT indoor farming system</span>
        </ListItem>
        <ListItem onClick={() => toggleExpand('computers')}>
          {expanded.computers ? <FaChevronDown /> : <FaChevronRight />}
          <span>Computers</span>
        </ListItem>
        {expanded.computers && (
          <SubList>
            <ListItem active>Desktop PCs</ListItem>
            <ListItem>Laptops</ListItem>
            <ListItem>Printers and scanners</ListItem>
            <ListItem>Accessories</ListItem>
          </SubList>
        )}
        <ListItem onClick={() => toggleExpand('mobilePhones')}>
          {expanded.mobilePhones ? <FaChevronDown /> : <FaChevronRight />}
          <span>Mobile phones</span>
        </ListItem>
        <ListItem onClick={() => toggleExpand('sensors')}>
          {expanded.sensors ? <FaChevronDown /> : <FaChevronRight />}
          <span>Sensors</span>
        </ListItem>
      </List>
    </Section>
  );
};

export default CategoriesSection;
