import React from 'react';
import styled from 'styled-components';
import CategoriesSection from './CategoriesSection';
import PriceSection from './PriceSection';
import BrandSection from './BrandSection';
import AvailabilitySection from './AvailabilitySection';

const SidebarContainer = styled.aside`
  width: 250px;
  padding: 20px;
  background-color: #f5f5f5;
  border-right: 1px solid #ddd;
`;

const LineSeparator = styled.hr`
  border: none;
  border-top: 1px solid #ddd;
  margin: 20px 0;
`;

const ResetButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #FF6C00;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #e65c00;
  }
`;

const Sidebar = () => (
  <SidebarContainer>
    <CategoriesSection />
    <LineSeparator />
    <PriceSection />
    <LineSeparator />
    <BrandSection />
    <LineSeparator />
    <AvailabilitySection />
    <ResetButton>Reset All</ResetButton>
  </SidebarContainer>
);

export default Sidebar;


// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

// const SidebarContainer = styled.aside`
//   width: 250px;
//   padding: 20px;
//   background-color: #f5f5f5;
// `;

// const Section = styled.div`
//   margin-bottom: 20px;
// `;

// const Title = styled.h3`
//   font-size: 18px;
//   font-weight: bold;
//   margin-bottom: 10px;
// `;

// const List = styled.ul`
//   list-style-type: none;
//   padding: 0;
// `;

// const ListItem = styled.li`
//   margin-bottom: 10px;
//   font-size: 16px;
//   color: ${props => (props.active ? '#FF6C00' : '#333')};
//   cursor: pointer;
//   display: flex;
//   align-items: center;

//   &:hover {
//     color: #FF6C00;
//   }
// `;

// const SubList = styled.ul`
//   list-style-type: none;
//   padding-left: 20px;
//   margin-top: 10px;
// `;

// const RangeInput = styled.input`
//   width: 100%;
//   margin: 10px 0;
// `;

// const ResetButton = styled.button`
//   width: 100%;
//   padding: 10px;
//   background-color: #FF6C00;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   margin-top: 20px;

//   &:hover {
//     background-color: #e65c00;
//   }
// `;

// const Sidebar = () => {
//   const [expanded, setExpanded] = useState({
//     computers: true,
//     mobilePhones: false,
//     sensors: false,
//   });

//   const toggleExpand = section => {
//     setExpanded(prevState => ({
//       ...prevState,
//       [section]: !prevState[section],
//     }));
//   };

//   return (
//     <SidebarContainer>
//       <Section>
//         <Title>Categories</Title>
//         <List>
//           <ListItem>
//             <FaChevronRight />
//             <span>IoT indoor farming system</span>
//           </ListItem>
//           <ListItem onClick={() => toggleExpand('computers')}>
//             {expanded.computers ? <FaChevronDown /> : <FaChevronRight />}
//             <span>Computers</span>
//           </ListItem>
//           {expanded.computers && (
//             <SubList>
//               <ListItem active>Desktop PCs</ListItem>
//               <ListItem>Laptops</ListItem>
//               <ListItem>Printers and scanners</ListItem>
//               <ListItem>Accessories</ListItem>
//             </SubList>
//           )}
//           <ListItem onClick={() => toggleExpand('mobilePhones')}>
//             {expanded.mobilePhones ? <FaChevronDown /> : <FaChevronRight />}
//             <span>Mobile phones</span>
//           </ListItem>
//           <ListItem onClick={() => toggleExpand('sensors')}>
//             {expanded.sensors ? <FaChevronDown /> : <FaChevronRight />}
//             <span>Sensors</span>
//           </ListItem>
//         </List>
//       </Section>
//       <Section>
//         <Title>Price</Title>
//         <RangeInput type="range" min="50" max="200" />
//         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//           <span>$50</span>
//           <span>$200</span>
//         </div>
//       </Section>
//       <Section>
//         <Title>Brand</Title>
//         <List>
//           <ListItem><input type="checkbox" /> HP</ListItem>
//           <ListItem><input type="checkbox" /> DELL</ListItem>
//           <ListItem><input type="checkbox" /> LENOVO</ListItem>
//           <ListItem><input type="checkbox" /> Apple</ListItem>
//           <ListItem><input type="checkbox" /> Acer</ListItem>
//         </List>
//       </Section>
//       <Section>
//         <Title>Availability</Title>
//         <List>
//           <ListItem><input type="checkbox" /> In Stock</ListItem>
//           <ListItem><input type="checkbox" /> Pre-order</ListItem>
//           <ListItem><input type="checkbox" /> Out of Stock</ListItem>
//         </List>
//       </Section>
//       <ResetButton>Reset All</ResetButton>
//     </SidebarContainer>
//   );
// };

// export default Sidebar;