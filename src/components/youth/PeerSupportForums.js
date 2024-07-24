import React from 'react';

const PeerSupportForums = () => {
  const forums = [
    { title: 'Anxiety Support', posts: 156, lastPost: '2 hours ago' },
    { title: 'Depression Discussion', posts: 203, lastPost: '1 day ago' },
    { title: 'Stress Management', posts: 98, lastPost: '3 hours ago' },
    { title: 'Positive Thinking', posts: 134, lastPost: '5 hours ago' },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">Peer Support Forums</h1>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {forums.map((forum, index) => (
          <div key={index} className="p-4 border-b last:border-b-0">
            <h2 className="text-lg font-semibold mb-2">{forum.title}</h2>
            <p className="text-sm text-gray-600">Posts: {forum.posts}</p>
            <p className="text-sm text-gray-600">Last post: {forum.lastPost}</p>
            <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
              Join Discussion
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeerSupportForums;