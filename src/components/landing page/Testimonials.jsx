// src/components/Testimonials.jsx
import React from 'react';

const Testimonials = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">What Our Users Say</h2>
      <div className="row">
        <div className="col-md-3 mb-3">
          <div className="card text-bg-primary">
            <div className="card-header">User 1</div>
            <div className="card-body">
              <h5 className="card-title">Life-changing Support</h5>
              <p className="card-text">MYM has been a life-changer. The support groups are amazing.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card text-bg-secondary">
            <div className="card-header">User 2</div>
            <div className="card-body">
              <h5 className="card-title">Professional Counseling</h5>
              <p className="card-text">The counseling sessions helped me get through tough times.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card text-bg-success">
            <div className="card-header">User 3</div>
            <div className="card-body">
              <h5 className="card-title">Highly Recommend</h5>
              <p className="card-text">Great resources and a supportive community. Highly recommend!</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card text-bg-danger">
            <div className="card-header">User 4</div>
            <div className="card-body">
              <h5 className="card-title">Helpful Resources</h5>
              <p className="card-text">The resources provided are very helpful and easy to understand.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card text-bg-warning">
            <div className="card-header">User 5</div>
            <div className="card-body">
              <h5 className="card-title">Engaging Community</h5>
              <p className="card-text">The community engagement features have helped me connect with others.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card text-bg-info">
            <div className="card-header">User 6</div>
            <div className="card-body">
              <h5 className="card-title">Mental Health Improvement</h5>
              <p className="card-text">I have noticed significant improvements in my mental health.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card text-bg-light">
            <div className="card-header">User 7</div>
            <div className="card-body">
              <h5 className="card-title">User Friendly</h5>
              <p className="card-text">The platform is user-friendly and easy to navigate.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card text-bg-dark">
            <div className="card-header">Share Your Experience</div>
            <div className="card-body">
              <h5 className="card-title">Your Feedback</h5>
              <p className="card-text">We value your feedback. Please share your experiences with us.</p>
              <a href="#feedback-form" className="btn btn-primary">Give Testimony</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
