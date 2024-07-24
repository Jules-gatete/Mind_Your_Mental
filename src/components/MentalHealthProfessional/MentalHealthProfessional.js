import React from 'react';
import { Link, useNavigate, Routes, Route, useLocation } from 'react-router-dom';
import logo from '../../assets/logo1.png'; // Assuming the same logo is used
import AvailabilityManagement from './AvailabilityManagement';
import UserProfiles from './UserProfiles';
import CounselingSession from './CounselingSession';
import RecommendResources from './RecommendResources';

const navigation = [
  { name: 'Dashboard Home', href: '/professional-dashboard' },
  { name: 'Manage Availability', href: '/professional-dashboard/availability' },
  { name: 'View User Profiles', href: '/professional-dashboard/user-profiles' },
  { name: 'Counseling Sessions', href: '/professional-dashboard/counseling' },
  { name: 'Recommend Resources', href: '/professional-dashboard/recommend-resources' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const ProfessionalDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // TODO: Implement logout logic
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-blue-600 text-white flex flex-col justify-between">
        <div className="p-4">
          <img src={logo} alt="Logo" className="h-12 w-auto mb-6" />
          <nav className="space-y-1">
            <ul>
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={classNames(
                      location.pathname === item.href ? 'bg-blue-700 text-white' : 'text-white hover:bg-blue-500',
                      'block rounded-md px-3 py-2 text-base font-medium no-underline'
                    )}
                    aria-current={location.pathname === item.href ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="p-4 flex justify-center space-x-4">
          <a href="#" className="text-white hover:text-blue-300">FB</a>
          <a href="#" className="text-white hover:text-blue-300">TW</a>
          <a href="#" className="text-white hover:text-blue-300">IG</a>
        </div>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="flex justify-end p-4 bg-blue-600 text-white">
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded-md text-sm font-medium"
          >
            Logout
          </button>
        </header>
        <main className="flex-1 p-6 bg-gray-100">
          <Routes>
            <Route index element={<DashboardHome />} />
            <Route path="availability" element={<AvailabilityManagement />} />
            <Route path="user-profiles" element={<UserProfiles />} />
            <Route path="counseling" element={<CounselingSession />} />
            <Route path="recommend-resources" element={<RecommendResources />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

const DashboardHome = () => (
  <div>
    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Dashboard Overview</h3>
    <section className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
      <div className="grid grid-cols-2 gap-4">
        <Link to="/professional-dashboard/availability" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Manage Availability</Link>
        <Link to="/professional-dashboard/user-profiles" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">View User Profiles</Link>
        <Link to="/professional-dashboard/counseling" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Counseling Sessions</Link>
        <Link to="/professional-dashboard/recommend-resources" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Recommend Resources</Link>
      </div>
    </section>
    <section className="bg-white shadow-md rounded-lg p-6">
      <h4 className="text-xl font-semibold mb-4">Recent Activity</h4>
      <ul className="space-y-2">
        <li>• Scheduled a new counseling session</li>
        <li>• Updated availability status</li>
        <li>• New user profiles viewed</li>
      </ul>
    </section>
  </div>
);

export default ProfessionalDashboard;
