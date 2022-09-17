import React from 'react';

import Banner from '../components/Banner';
import About from '../components/About';
import Mentors from '../components/Mentors';
import Pricing from '../components/Pricing';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <div id='home'>
      <Banner />
      <About />
      <Mentors />
      <Pricing />
      <ContactForm />
    </div>
  );
};

export default Home;