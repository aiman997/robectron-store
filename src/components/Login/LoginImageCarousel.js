import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from '../../assets/products/loginslider1.png';
import image2 from '../../assets/products/loginslider1.png';

const ImageContainer = styled.div`
  width: 50%;
  position: relative;
  height: 100vh; /* Ensures the image carousel takes full height of the viewport */
`;

const Slide = styled.div`
  height: 100vh; /* Ensures each slide takes full height of the viewport */
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TextOverlay = styled.div`
  position: absolute;
  bottom: 50px;
  left: 20px;
  color: white;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
  }
`;

const CustomDots = styled.ul`
  position: absolute;
  bottom: 10px;
  display: flex !important;
  justify-content: center;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    margin: 0 5px;
    button {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: white;
      border: none;
      cursor: pointer;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.3s ease;
    }
    &.slick-active button {
      background-color: orange;
    }
  }
`;

const LoginImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: dots => <CustomDots>{dots}</CustomDots>,
  };

  return (
    <ImageContainer>
      <Slider {...settings}>
        <Slide>
          <img src={image1} alt="Slide 1" />
          <TextOverlay>
            <h2>Take Your Garden to the Next Level</h2>
            <p>From Seed to Harvest: Smart Farming Solutions...</p>
          </TextOverlay>
        </Slide>
        <Slide>
          <img src={image2} alt="Slide 2" />
          <TextOverlay>
            <h2>Take Your Garden to the Next Level</h2>
            <p>From Seed to Harvest: Smart Farming Solutions...</p>
          </TextOverlay>
        </Slide>
      </Slider>
    </ImageContainer>
  );
};

export default LoginImageCarousel;