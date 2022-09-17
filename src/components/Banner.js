import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Img from '../assets/hero1.jpg';

const Banner = () => {
  
  return (
    <Carousel className='banner-section'>
      <Carousel.Item className='banner-Item'>
        <img
          className="banner-image"
          src={Img}
          alt="Slide Show"
        />
      </Carousel.Item>
      <Carousel.Item className='banner-Item'>
        <img
          className="banner-image"
          src={Img}
          alt="Slide Show"
        />
      </Carousel.Item>
      <Carousel.Item className='banner-Item'>
        <img
          className="banner-image"
          src={Img}
          alt="Slide Show"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;