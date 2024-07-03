// src/App.jsx
import React from 'react';
import Navbar from './components/landing page/Navbar';
import Hero from './components/landing page/Hero';
import KeyFeatures from './components/landing page/KeyFeatures';
import HowItWorks from './components/landing page/HowItWorks';
import Testimonials from './components/landing page/Testimonials';
import Footer from './components/landing page/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <KeyFeatures />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
