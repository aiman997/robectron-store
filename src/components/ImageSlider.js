import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';

import slide1 from '../assets/products/slider1.png';
import slide2 from '../assets/products/slider2.png';
import slide3 from '../assets/products/slider3.png';

const SliderContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 100px;
  

  .slick-prev, .slick-next {
    z-index: 1;
  }
`;

const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;  /* Adjust height as needed */
  background-color: #f5f5f5;
  padding: 0px;
`;

const SlideImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        <Slide>
          <SlideImage src={slide1} alt="Slide 1" />
        </Slide>
        <Slide>
          <SlideImage src={slide2} alt="Slide 2" />
        </Slide>
        <Slide>
          <SlideImage src={slide3} alt="Slide 3" />
        </Slide>
      </Slider>
    </SliderContainer>
  );
}

export default ImageSlider;


// import React from 'react';
// import Slider from "react-slick";
// import styled from 'styled-components';

// import slide1 from '../assets/products/slider1.png';
// import slide2 from '../assets/products/slider2.png';
// import slide3 from '../assets/products/slider3.png';

// const SliderWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: calc(100vh - 150px); /* Adjust height as needed */
// `;

// const SliderContainer = styled.div`
//   width: 80%; /* Adjust width as needed */
//   padding: 20px; /* Equal padding on all sides */
//   box-sizing: border-box;

//   .slick-prev, .slick-next {
//     z-index: 1;
//   }
// `;

// const Slide = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100%; /* Use full height of container */
//   background-color: #f5f5f5;
//   padding: 10px;
// `;

// const SlideImage = styled.img`
//   max-width: 100%;
//   max-height: 100%;
//   object-fit: cover;
// `;

// const ImageSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <SliderWrapper>
//       <SliderContainer>
//         <Slider {...settings}>
//           <Slide>
//             <SlideImage src={slide1} alt="Slide 1" />
//           </Slide>
//           <Slide>
//             <SlideImage src={slide2} alt="Slide 2" />
//           </Slide>
//           <Slide>
//             <SlideImage src={slide3} alt="Slide 3" />
//           </Slide>
//           {/* Add more slides as needed */}
//         </Slider>
//       </SliderContainer>
//     </SliderWrapper>
//   );
// }

// export default ImageSlider;
