import React from 'react';
import SlickSlider from 'react-slick';
import { Container } from './styles';


const Slider = ({ children }) => (
  <Container>
    <SlickSlider {... {
      dots: false,
      infinite: true,
      speed: 500,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
      slidesToScroll: 3,
      slidesToShow: 3
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);



export default Slider; 