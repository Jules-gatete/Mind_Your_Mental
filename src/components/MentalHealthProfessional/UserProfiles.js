// src/components/professional/UserProfiles.jsx
import React, { useState, useEffect } from 'react';

const UserProfiles = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // TODO: Fetch user profiles from the backend
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-4">User Profiles</h3>
      <input
        type="text"
        placeholder="Search users..."
        className="w-full p-2 mb-4 border rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.map(user => (
          <div key={user.id} className="bg-white p-4 rounded shadow">
            <h4 className="text-lg font-semibold">{user.name}</h4>
            <p>Email: {user.email}</p>
            <p>Last Session: {user.lastSession}</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfiles;
