import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import './admin.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </header>
      <div className="dashboard-content">
        <aside className="sidebar">
          <nav>
            <ul>
              <li><Link to="/admin-dashboard">Dashboard Home</Link></li>
              <li><Link to="/admin-dashboard/manage-users">Manage Users</Link></li>
              <li><Link to="/admin-dashboard/manage-content">Manage Content</Link></li>
            </ul>
          </nav>
        </aside>
        <main className="main-content">
          <h2>Welcome, Administrator</h2>
          <section className="quick-actions">
            <h3>Quick Actions</h3>
            <button>Manage Users</button>
            <button>Manage Content</button>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;