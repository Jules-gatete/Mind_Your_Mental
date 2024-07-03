import React from 'react';
import logo from '../../assets/logo1.png'; // Correct path to your logo image

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#home">
        <img src={logo} alt="MYM Logo" style={{ height: '140px', marginRight: '10px' }} />
        MYM
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto"> {/* Adjust margin as needed */}
          <li className="nav-item">
            <a className="nav-link" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#logout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
