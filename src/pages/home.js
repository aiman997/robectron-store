import React from 'react';
import styled from 'styled-components';
import Header from '../components/Home/Header/Header';
import ImageSlider from '../components/Home/Body/ImageSlider';
import ImageCarousel from '../components/Home/Body/ImageCarousel';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px;
  background: ${props => props.theme.backgroundGradient};
  min-height: 150vh;
  padding-top: 80px;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1000px; /* Matches the max-width of ImageSlider */
`;

const Home = () => (
  <div>
    <Header />
    <HomeContainer>
      <ContentContainer>
        <ImageSlider />
        <ImageCarousel />
      </ContentContainer>
    </HomeContainer>
  </div>
);

export default Home;
