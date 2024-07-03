// src/components/HowItWorks.jsx
import React from 'react';

const HowItWorks = () => {
  return (
    <div className="row">
      <div className="col-sm-6 mb-3 mb-sm-0">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Step 1: Sign Up/Login</h5>
            <p className="card-text">Create an account & Login to access all features of the platform.</p>
            <a href="#" className="btn btn-primary">Go to your account</a>
          </div>
        </div>
      </div>
      <div className="col-sm-6 mb-3 mb-sm-0">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Step 2: Explore</h5>
            <p className="card-text">Browse resources, join support groups, and book counseling sessions.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Step 3: Engage</h5>
            <p className="card-text">Engage with the community, share testimonials, and improve your mental health.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
