import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import News from './pages/News';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;