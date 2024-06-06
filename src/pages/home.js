// import React from 'react';
// import Header from '../components/Header';
// import ImageSlider from '../components/ImageSlider';

// const Home = () => (
//   <div>
//     <Header />
//     <ImageSlider />
//   </div>
// );

// export default Home;


import React from 'react';
import Header from '../components/Header';
import ImageSlider from '../components/ImageSlider';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px; /* Adjust padding around the whole content */
`;

const Home = () => (
  <div>
      <Header/>
      <HomeContainer>
        <ImageSlider />
      </HomeContainer>
    </div>
);





export default Home;
