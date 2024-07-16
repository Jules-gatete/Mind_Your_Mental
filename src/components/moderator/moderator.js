import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import './moderator.css';

const ModeratorDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Moderator Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </header>
      <div className="dashboard-content">
        <aside className="sidebar">
          <nav>
            <ul>
              <li><Link to="/moderator-dashboard">Dashboard Home</Link></li>
              <li><Link to="/moderator-dashboard/approve-posts">Approve Posts</Link></li>
              <li><Link to="/moderator-dashboard/review-posts">Review Posts</Link></li>
            </ul>
          </nav>
        </aside>
        <main className="main-content">
          <h2>Welcome, Moderator</h2>
          <section className="pending-actions">
            <h3>Pending Actions</h3>
            <button>Approve Posts</button>
            <button>Review Posts</button>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ModeratorDashboard;