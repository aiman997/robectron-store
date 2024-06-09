import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.aside`
  width: 250px;
  padding: 20px;
  background-color: #f5f5f5;
`;

const Sidebar = () => (
  <SidebarContainer>
    <h3>Categories</h3>
    <ul>
      <li>IoT indoor farming system</li>
      <li>Computers</li>
      <li>Mobile phones</li>
      <li>Sensors</li>
      <li>Microcontrollers</li>
    </ul>
    <h3>Price</h3>
    <input type="range" min="50" max="200" />
    <h3>Brand</h3>
    <ul>
      <li>HP</li>
      <li>DELL</li>
      <li>LENOVO</li>
      <li>Apple</li>
      <li>Acer</li>
    </ul>
    <h3>Availability</h3>
    <ul>
      <li>In Stock</li>
      <li>Pre-order</li>
      <li>Out of Stock</li>
    </ul>
  </SidebarContainer>
);

export default Sidebar;
