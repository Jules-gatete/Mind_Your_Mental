import React from 'react';
import './signin.css'; // Ensure this file exists and contains your CSS

const SignUp = () => {
  return (
    <section className="section">
      <div className="box">
        <div className="para">
          <h3>Sign-In</h3>
          <p>register your information</p>
          <div className="forms">
            <form action="/login" method="POST">
              <label>Full names</label><br />
              <input type="text" id="fname" name="fname" required /><br />
              <label>Email</label><br />
              <input type="email" id="email" name="email" required /><br />
              <label>Password</label><br />
              <input type="password" id="password" name="password" required /><br /><br />
              <button type="submit">create an account</button>
            </form>
            <div className="login">
              <a href="/login"><p>Log-In</p></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
