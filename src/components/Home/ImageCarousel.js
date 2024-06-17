import React, { useRef } from 'react';
import styled from 'styled-components';
import Mycard from './MyCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';



const CarouselWrapper = styled.div`
  position: relative;
  margin-top: 10%;
  max-width: 70%;
  margin: 0 auto;
`;

const Title = styled.h2`
  position: absolute;
  margin: 0;
  padding: 10px;
  font-size: 24px;
  color: #000;
  text-align: center;
`;

const ProductCarousel = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 30px;
  margin-top: 10%;
`;

const ProductContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  overflow-x: hidden;
  scroll-behavior: smooth;
`;

const Button = styled.button`
  border: none;
  width: 30px;
  height: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;


  svg {
    color: orange;
    font-size: 20px; 
  }
`;


const PrevButton = styled(Button)`
  left: 0;
`;

const NextButton = styled(Button)`
  right: 0;
`;


// Dynamic import function
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};


const images = importAll(require.context('../../assets/products', false, /\.(png|jpe?g|svg)$/));
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
    const containerRef = useRef(null);
  
    const handlePrevClick = () => {
      if (containerRef.current) {
        containerRef.current.scrollLeft -= containerRef.current.clientWidth;
      }
    };
  
    const handleNextClick = () => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += containerRef.current.clientWidth;
      }
    };

  return (
    <CarouselWrapper>
      <Title>Shop By Category</Title>
      <ProductCarousel>
        <PrevButton className="pre-btn" onClick={handlePrevClick}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </PrevButton>
        <ProductContainer className="product-container" ref={containerRef}>
          {categories.map((category, index) => {
            const imagePath = images[category.image];
            console.log(`Category: ${category.name}, Image Path: ${imagePath}`);
            return (
              <Mycard key={index} cardno={index + 1} category={{ ...category, image: imagePath }} />
            );
          })}
        </ProductContainer>
        <NextButton className="next-btn" onClick={handleNextClick}>
          <FontAwesomeIcon icon={faChevronRight} />
        </NextButton>
      </ProductCarousel>
    </CarouselWrapper>
  );
};

export default ImageCarousel;