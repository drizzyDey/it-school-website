import React from 'react';

import Icon1 from '../assets/icon1.png';
import Icon2 from '../assets/icon2.png';

const About = () => {
  return (
    <div id="about" className='about-section'>
      <div className="about-one">
        <h1>About us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac
          faucibus elit, sit amet ornare dui. Phasellus egestas dignissim metus,
          sit amet egestas quam. Curabitur magna dui, auctor in turpis vitae,
          suscipit aliquam ante. Donec leo enim, aliquam sed ultrices id,
          facilisis at libero. Morbi commodo fringilla iaculis. Aenean auctor eu
          turpis id interdum. Phasellus leo metus, tincidunt at turpis quis,
          eleifend dignissim nisi. Fusce egestas molestie venenatis. Suspendisse
          nec nisi ut nunc pretium commodo. Praesent convallis odio at dolor
          hendrerit tempor.
        </p>
      </div>
      <div className="about-two">
        <div className='icon-section'>
          <img src={Icon1} alt='We can help you' />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac
          faucibus elit, sit amet ornare dui. Phasellus egestas dignissim metus,
          sit amet egestas quam. Curabitur magna dui, auctor in turpis vitae,
          suscipit aliquam ante.</p>
        </div>
        <div className='icon-section'>
          <img src={Icon2} alt='Years of experience' />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac
          faucibus elit, sit amet ornare dui. Phasellus egestas dignissim metus,
          sit amet egestas quam. Curabitur magna dui, auctor in turpis vitae,
          suscipit aliquam ante.</p>
        </div>
      </div>
    </div>
  );
};

export default About;