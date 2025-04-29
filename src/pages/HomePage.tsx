import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Portfolio from '../sections/Portfolio';
import Services from '../sections/Services';
import Contact from '../sections/Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </>
  );
};

export default HomePage;