// src/components/professional/ProfessionalDashboard.jsx
import React from 'react';
import { Link, useNavigate, Routes, Route } from 'react-router-dom';
import AvailabilityManagement from './AvailabilityManagement';
import UserProfiles from './UserProfiles';
import CounselingSession from './CounselingSession';
import EducationalResources from './RecommendResources';

const ProfessionalDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: Implement logout logic
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-semibold text-gray-800">Professional Dashboard</h1>
        </div>
        <nav className="mt-4">
          <ul>
            <li>
              <Link to="/professional-dashboard" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
                Dashboard Home
              </Link>
            </li>
            <li>
              <Link to="/professional-dashboard/availability" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
                Manage Availability
              </Link>
            </li>
            <li>
              <Link to="/professional-dashboard/user-profiles" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
                View User Profiles
              </Link>
            </li>
            <li>
              <Link to="/professional-dashboard/counseling" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
                Counseling Sessions
              </Link>
            </li>
            <li>
              <Link to="/professional-dashboard/resources" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
                Educational Resources
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Welcome, Professional</h2>
          <button 
            onClick={handleLogout} 
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </header>

        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/availability" element={<AvailabilityManagement />} />
          <Route path="/user-profiles" element={<UserProfiles />} />
          <Route path="/counseling" element={<CounselingSession />} />
          <Route path="/resources" element={<EducationalResources />} />
        </Routes>
      </main>
    </div>
  );
};

const DashboardHome = () => (
  <div>
    <h3 className="text-xl font-semibold mb-4">Dashboard Overview</h3>
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded shadow">
        <h4 className="text-lg font-semibold mb-2">Upcoming Sessions</h4>
        {/* Add a list or calendar view of upcoming sessions */}
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h4 className="text-lg font-semibold mb-2">Recent User Activity</h4>
        {/* Add a list of recent user activities or interactions */}
      </div>
    </div>
  </div>
);

export default ProfessionalDashboard;