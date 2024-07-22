import React from 'react';
import './LandingPage.css';
import logo from '../assets/logo1.png';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <section className="section1" id="section1">
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="nav-link">
            <ul>
              <li><a href="#section1" className="uppercase">Home</a></li>
              <li><a href="#section4">How it works</a></li>
              <li><a href="#section2">Key Features</a></li>
              <li><a href="#section3">Testimonials</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>
        </div>

        <div className="intro">
          <h3>Welcome to <span>Mind Your Mental Hub.</span><br />Start your mental health journey today! <br/></h3>
          <p>We're glad you're here! Explore resources, connect with others, and take care of your mental well-being</p>
          <Link to="/signup"><button>GET STARTED</button></Link>
        </div>
      </section>

      <section className="section4" id="section4">
        <div className="works">
          <div>
            <h3>Step 1: Sign-Up/Login</h3>
            <p>Create an account & Login to access all features of the Platform.</p>
            <Link to="/signup"><button>Go to your Account</button></Link>
          </div>

          <div>
            <h3>Step 2: Explore</h3>
            <p>Browse Resources, join support groups, and book Counseling sessions.</p>
          </div>

          <div>
            <h3>Step 3: Engage</h3>
            <p>Engage with the community, share testimonials, and improve your mental health.</p>
          </div>
        </div>
      </section>

      <section className="section2" id="section2">
        <div className="features">
          <h2>OUR Key Features</h2>
          <div className="keys">
            <div>
              <h4>Mental Health<br />Resources</h4>
              <p>Access a wide range of educational materials to improve your mental health.</p>
            </div>

            <div>
              <h4>Support Groups</h4>
              <p>Access a wide range of educational materials to improve your mental health.</p>
            </div>

            <div>
              <h4>Counseling Sessions</h4>
              <p>Access a wide range of educational materials to improve your mental health.</p>
            </div>

            <div>
              <h4>Community<br />Engagement</h4>
              <p>Access a wide range of educational materials to improve your mental health.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section3" id="section3">
        <div className="testimonials">
          <h2>What Our Users Say</h2>
          <div className="keys">
            <div>
              <h3>User1</h3>
              <h4>Life-Changing Support</h4>
              <p>Access a wide range of educational materials to improve your mental health.</p>
            </div>

            <div>
              <h3>User2</h3>
              <h4>Professional Counseling</h4>
              <p>Access a wide range of educational materials to improve your mental health.</p>
            </div>

            <div>
              <h3>User3</h3>
              <h4>Highly Recommend</h4>
              <p>Access a wide range of educational materials to improve your mental health.</p>
            </div>

            <div>
              <h3>User4</h3>
              <h4>Helpful Resources</h4>
              <p>Access a wide range of educational materials to improve your mental health.</p>
            </div>

            <div>
              <h3>User5</h3>
              <h4>Engaging Community</h4>
              <p>Access a wide range of educational materials to improve your mental health.</p>
            </div>

            <div>
              <h3>User6</h3>
              <h4>Mental Health <br />Improvement</h4>
              <p>Access a wide range of educational materials to improve your mental health.</p>
            </div>

            <div>
              <h3>User7</h3>
              <h4>User Friendly</h4>
              <p>Access a wide range of educational materials to improve your mental health.</p>
            </div>
          </div>

          <div>
            <h3>Share Your Experience</h3>
            <h4>Your Feedback</h4>
            <p>Access a wide range of educational materials to improve your mental health.</p>
          </div>
        </div>
      </section>

      <section className="section5" id="section5">
        <div className="contact">
          <div>
            {/* Contact content here */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
