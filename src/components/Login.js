import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signin.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('youth');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally validate the credentials
    // For now, we'll just redirect based on user type
    switch(userType) {
      case 'youth':
        navigate('/dashboard');
        break;
      case 'admin':
        navigate('/admin-dashboard');
        break;
      case 'moderator':
        navigate('/moderator-dashboard');
        break;
      case 'professional':
        navigate('/professional-dashboard');
        break;
      default:
        navigate('/dashboard');
    } 
  };

  return (
    <section className="section">
      <div className="box">
        <div className="para">
          <h3>Log-In</h3>
          <p>enter your credentials</p>
          <div className="forms">
            <form onSubmit={handleSubmit}>
              <label>Email</label><br />
              <input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              /><br />
              <label>Password</label><br />
              <input 
                type="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              /><br />
              <label>User Type</label><br />
              <select 
                value={userType} 
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="youth">Youth</option>
                <option value="admin">Administrator</option>
                <option value="moderator">Community Moderator</option>
                <option value="professional">Mental Health Professional</option>
              </select><br /><br />
              <button type="submit">Log In</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;