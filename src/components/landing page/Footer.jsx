// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <p>&copy; 2024 MYM. All rights reserved.</p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
