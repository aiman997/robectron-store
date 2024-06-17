import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import ImageSlider from '../components/Home/ImageSlider';
import ImageCarousel from '../components/Home/ImageCarousel';
import TopSelling from '../components/Home/TopSelling';
import dummyProducts from '../data/dummyData';
import Footer from '../components/Footer/Footer';


const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px;
  background: ${props => props.theme.backgroundGradient};
  min-height: 150vh;
  padding-top: 80px;
  width: 100%;
`;

const ContentContainer = styled.div`
  width: 100%;
  /* max-width: 1000px;  */
  max-width: 100%;
  margin: 0 auto;
`;

const Home = () => (
  <div>
    <Header />
    <HomeContainer>
      <ContentContainer>
        <ImageSlider />
        <ImageCarousel />
        <TopSelling products={dummyProducts}/>
        <Footer />
      </ContentContainer>
    </HomeContainer>
  </div>
);

export default Home;
