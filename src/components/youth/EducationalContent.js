import React from 'react';

const EducationalContent = () => {
  const resources = [
    { title: 'Understanding Anxiety', type: 'Article', duration: '10 min read' },
    { title: 'Coping with Stress', type: 'Video', duration: '15 min' },
    { title: 'Mindfulness Techniques', type: 'Audio', duration: '20 min' },
    { title: 'Building Self-Esteem', type: 'Interactive', duration: '30 min' },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">Educational Content</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">{resource.title}</h2>
            <p className="text-sm text-gray-600">Type: {resource.type}</p>
            <p className="text-sm text-gray-600">Duration: {resource.duration}</p>
            <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
              Start Learning
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationalContent;