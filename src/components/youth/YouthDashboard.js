import React from 'react';
import { Link, useNavigate, Routes, Route, useLocation } from 'react-router-dom';
import logo from '../../assets/logo1.png';
import EducationalContent from './EducationalContent';
import CounselingServices from './CounselingServices';
import PeerSupportForums from './PeerSupportForums';
import Testimonies from './Testimonies';
import ProfileSettings from './ProfileSettings';

const navigation = [
  { name: 'Home', href: '/dashboard' },
  { name: 'Educational Content', href: '/dashboard/education' },
  { name: 'Counseling Services', href: '/dashboard/counseling' },
  { name: 'Peer Support Forums', href: '/dashboard/forums' },
  { name: 'Testimonies', href: '/dashboard/testimonies' },
  { name: 'Profile Settings', href: '/dashboard/profile' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const YouthDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // Implement logout logic here
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
            <Route path="/" element={
              <>
                <h1 className="text-2xl font-semibold text-gray-900 mb-4">Welcome to Your Dashboard</h1>
                <section className="bg-white shadow-md rounded-lg p-6 mb-6">
                  <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <Link to="/dashboard/education" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Educational Resources</Link>
                    <Link to="/dashboard/forums" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Join Support Group</Link>
                    <Link to="/dashboard/testimonies" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Share Testimony</Link>
                    <Link to="/dashboard/forums" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">View Forums</Link>
                  </div>
                </section>
                <section className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                  <ul className="space-y-2">
                    <li>• You joined the "Anxiety Support" group</li>
                    <li>• New educational content: "Coping with Stress"</li>
                    <li>• 3 new replies to your forum post</li>
                  </ul>
                </section>
              </>
            } />
            <Route path="education" element={<EducationalContent />} />
            <Route path="counseling" element={<CounselingServices />} />
            <Route path="forums" element={<PeerSupportForums />} />
            <Route path="testimonies" element={<Testimonies />} />
            <Route path="profile" element={<ProfileSettings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default YouthDashboard;
