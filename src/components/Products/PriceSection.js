import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const Section = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    margin-left: auto;
  }
`;

const PriceLabels = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PriceSection = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [priceRange, setPriceRange] = useState([50, 200]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSliderChange = (value) => {
    setPriceRange(value);
  };

  return (
    <Section>
      <Title onClick={toggleExpand}>
        Price {isExpanded ? <FaChevronDown /> : <FaChevronRight />}
      </Title>
      {isExpanded && (
        <>
          <Slider
            range
            min={50}
            max={200}
            defaultValue={[50, 200]}
            value={priceRange}
            onChange={handleSliderChange}
            trackStyle={{ backgroundColor: '#FF6C00' }}
            handleStyle={[
              { borderColor: '#FF6C00' },
              { borderColor: '#FF6C00' },
            ]}
          />
          <PriceLabels>
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </PriceLabels>
        </>
      )}
    </Section>
  );
};

export default PriceSection;
