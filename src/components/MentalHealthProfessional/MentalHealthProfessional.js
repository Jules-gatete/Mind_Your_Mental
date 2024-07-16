import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import './MentalHealthProfessional.css';

const ProfessionalDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Mental Health Professional Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </header>
      <div className="dashboard-content">
        <aside className="sidebar">
          <nav>
            <ul>
              <li><Link to="/professional-dashboard">Dashboard Home</Link></li>
              <li><Link to="/professional-dashboard/view-profiles">View User Profiles</Link></li>
              <li><Link to="/professional-dashboard/provide-counseling">Provide Counseling</Link></li>
            </ul>
          </nav>
        </aside>
        <main className="main-content">
          <h2>Welcome, Mental Health Professional</h2>
          <section className="quick-actions">
            <h3>Quick Actions</h3>
            <button>View User Profiles</button>
            <button>Provide Counseling</button>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ProfessionalDashboard;