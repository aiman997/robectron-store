import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Mycard from './MyCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';



const CarouselWrapper = styled.div`
  position: relative;
  margin-top: 10%;
  padding: 0px;
`;

const Title = styled.h2`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 10px;
  font-size: 24px;
  color: #000;
`;

const ProductCarousel = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 30px;
  margin-top: 10%;
`;

const ProductContainer = styled.div`
  padding: 0 0px;
  display: flex;
  overflow-x: hidden;
  scroll-behavior: smooth;
`;

const Button = styled.button`
  border: none;
  width: 30px;
  height: 100%;
  position: absolute;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;

  /* &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  } */

  svg {
    color: orange; /* Set the arrow color to orange */
    font-size: 15px; /* Adjust the size of the arrow if needed */
  }
`;

const NextButton = styled(Button)`
  right: 0px;
`;


// Dynamic import function
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};


const images = importAll(require.context('../../../assets/products', false, /\.(png|jpe?g|svg)$/));
console.log('Imported Images:', images);

const categories = [
  { name: 'Desktop PCs', image: 'Desktop_PC.png', link: '/category/desktop-pcs' },
  { name: 'Laptops', image: 'laptop.png', link: '/category/laptops' },
  { name: 'Mobile Phones', image: 'mobile-phone.png', link: '/category/mobile-phones' },
  { name: 'Desktop PCs', image: 'Desktop_PC.png', link: '/category/desktop-pcs' },
  { name: 'Laptops', image: 'laptop.png', link: '/category/laptops' },
  { name: 'Mobile Phones', image: 'mobile-phone.png', link: '/category/mobile-phones' },
  { name: 'Desktop PCs', image: 'Desktop_PC.png', link: '/category/desktop-pcs' },
  { name: 'Laptops', image: 'laptop.png', link: '/category/laptops' },
  { name: 'Mobile Phones', image: 'mobile-phone.png', link: '/category/mobile-phones' },
  { name: 'Desktop PCs', image: 'Desktop_PC.png', link: '/category/desktop-pcs' },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? categories.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === categories.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = currentIndex * containerRef.current.clientWidth;
    }
  }, [currentIndex]);

  return (
    <CarouselWrapper>
        <Title>Shop By Category</Title>
        <ProductCarousel>
            <Button className="pre-btn" onClick={handlePrevClick}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </Button>
            <NextButton className="next-btn" onClick={handleNextClick}>
                <FontAwesomeIcon icon={faChevronRight} />
            </NextButton>
        <ProductContainer className="product-container" ref={containerRef}>
        {categories.map((category, index) => {
        const imagePath = images[category.image];
        console.log(`Category: ${category.name}, Image Path: ${imagePath}`);
          return (
            <Mycard key={index} cardno={index + 1} category={{ ...category, image: imagePath }} />
          );
        })}
      </ProductContainer>
    </ProductCarousel>
    </CarouselWrapper>
  );
};

export default ImageCarousel;