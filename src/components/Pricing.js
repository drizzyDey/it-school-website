import React from 'react';

import Icon from '../assets/course-icon.png';

const Pricing = () => {
  return (
    <div id='pricing' className='pricing-section'>
      <h2>We Offer</h2>
      <div className='boxes'>
        <div className='box'>
          <img src={Icon} alt='web dev course' />
          <h5>Course Title</h5>
          <h6>01.10.2022</h6>
          <p>Description of a course. Short explanation, pricing included</p>
        </div>
        <div className='box'>
          <img src={Icon} alt='web dev course' />
          <h5>Course Title</h5>
          <h6>01.10.2022</h6>
          <p>Description of a course. Short explanation, pricing included</p>
        </div>
        <div className='box'>
          <img src={Icon} alt='web dev course' />
          <h5>Course Title</h5>
          <h6>01.10.2022</h6>
          <p>Description of a course. Short explanation, pricing included</p>
        </div>
        <div className='box'>
          <img src={Icon} alt='web dev course' />
          <h5>Course Title</h5>
          <h6>01.10.2022</h6>
          <p>Description of a course. Short explanation, pricing included</p>
        </div>
        
      </div>
    </div>
  );
};

export default Pricing;