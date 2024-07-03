// src/components/KeyFeatures.jsx
import React from 'react';

const KeyFeatures = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Key Features</h2>
      <div className="row">
        <div className="col-md-3 text-center">
          <h4>Mental Health Resources</h4>
          <p>Access a wide range of educational materials to improve your mental health.</p>
        </div>
        <div className="col-md-3 text-center">
          <h4>Support Groups</h4>
          <p>Join support groups to connect with others and share your experiences.</p>
        </div>
        <div className="col-md-3 text-center">
          <h4>Counseling Sessions</h4>
          <p>Book sessions with mental health professionals for personalized support.</p>
        </div>
        <div className="col-md-3 text-center">
          <h4>Community Engagement</h4>
          <p>Engage with the community through forums and discussions.</p>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
