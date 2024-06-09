import React from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 100px;
  overflow: hidden;
  position: relative;
`;


const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 400px;
  padding: 20px;
  background: #333;
  color: white;
  font-size: 1.5em;
  position: relative;
`;

const SlideText = styled.div`
  max-width: 600px;
  margin-bottom: 20px;

  h1 {
    font-size: 2em;
    margin-bottom: 10spx;
    color: #ff6c00;
  }

  p {
    font-size: 1em;
    margin-bottom: 50px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;

  button {
    background-color: #ff6c00;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 0.9em;
    cursor: pointer;
    border-radius: 5px;

    &:nth-child(2) {
      background-color: black;
    }
  }
`;

const NavigationDots = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const Dot = styled.span`
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: ${props => (props.active ? '#FF6C00' : '#bbb')};
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
`;

const slides = [
  {
    title: 'Take Control of Your Indoor Garden with IoT System',
    text: 'Optimize every aspect of your indoor farm with smart technology and real-time monitoring',
    button1: 'Order Now',
    button2: 'Learn More'
  },
  {
    title: 'Optimize every aspect of your indoor farm',
    text: 'With IoT systems, you can manage and monitor your garden with ease',
    button1: 'Order Now',
    button2: 'Learn More'
  },
  {
    title: 'Experience the future of farming',
    text: 'Automate your indoor garden and achieve higher yields with less effort',
    button1: 'Order Now',
    button2: 'Learn More'
  },
  // Add more slides as needed
];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  React.useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SliderContainer>
      {slides.map((slide, index) => (
        <Slide key={index} style={{ display: currentSlide === index ? 'block' : 'none' }}>
          <SlideText>
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>
          </SlideText>
          <ButtonsContainer>
            <button>{slide.button1}</button>
            <button>{slide.button2}</button>
          </ButtonsContainer>
        </Slide>
      ))}
      <NavigationDots>
        {slides.map((_, index) => (
          <Dot key={index} active={currentSlide === index} onClick={() => setCurrentSlide(index)} />
        ))}
      </NavigationDots>
    </SliderContainer>
  );
};

export default ImageSlider;
