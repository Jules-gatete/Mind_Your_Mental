import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import YouthDashboard from './components/youth/YouthDashboard';
import AdminDashboard from './components/admin/admin';
import ModeratorDashboard from './components/moderator/moderator';
import ProfessionalDashboard from './components/MentalHealthProfessional/MentalHealthProfessional';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<YouthDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/moderator-dashboard" element={<ModeratorDashboard />} />
        <Route path="/professional-dashboard" element={<ProfessionalDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;