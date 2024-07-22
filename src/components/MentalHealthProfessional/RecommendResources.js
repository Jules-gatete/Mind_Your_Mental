// src/components/professional/RecomendResources.jsx
import React, { useState, useEffect } from 'react';

const RecommendResources = () => {
  const [resources, setResources] = useState([]);
  const [newResource, setNewResource] = useState({ title: '', url: '', description: '' });
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');

  useEffect(() => {
    // TODO: Fetch existing resources and users from the backend
  }, []);

  const handleInputChange = (e) => {
    setNewResource({ ...newResource, [e.target.name]: e.target.value });
  };

  const addResource = (e) => {
    e.preventDefault();
    // TODO: Save the new resource to the backend
    setResources([...resources, newResource]);
    setNewResource({ title: '', url: '', description: '' });
  };

  const recommendResource = (resourceId, userId) => {
    // TODO: Implement recommendation logic and update backend
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h3 className="text-xl font-semibold mb-4">Add Educational Resource</h3>
        <form onSubmit={addResource}>
          <input
            type="text"
            name="title"
            placeholder="Resource Title"
            value={newResource.title}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            type="url"
            name="url"
            placeholder="Resource URL"
            value={newResource.url}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border rounded"
          />
          <textarea
            name="description"
            placeholder="Resource Description"
            value={newResource.description}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border rounded"
          ></textarea>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Resource
          </button>
        </form>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Existing Resources</h3>
        {resources.map(resource => (
          <div key={resource.id} className="bg-white p-4 rounded shadow mb-4">
            <h4 className="text-lg font-semibold">{resource.title}</h4>
            <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              {resource.url}
            </a>
            <p>{resource.description}</p>
            <div className="mt-2">
              <select
                value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
                className="p-2 border rounded mr-2"
              >
                <option value="">Select User</option>
                {users.map(user => (
                  <option key={user.id} value={user.id}>{user.name}</option>
                ))}
              </select>
              <button
                onClick={() => recommendResource(resource.id, selectedUser)}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Recommend
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendResources;