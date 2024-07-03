// src/components/Hero.jsx
import React from 'react';
const Hero = () => {
  return (
    <div className="jumbotron text-center">
      <h1 className="display-4">Welcome to MYM Hub</h1>
      <p className="lead">Your mental health matters. Join us to access resources and support.</p>
      <a className="btn btn-primary btn-lg" href="#about" role="button">Learn more</a>
    </div>
  );
};

export default Hero;
