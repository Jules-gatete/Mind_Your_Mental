import React from 'react';

const CounselingServices = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">Counseling Services</h1>
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <h2 className="text-lg font-semibold mb-2">Book a Session</h2>
        <p className="mb-2">Choose a counselor and schedule your appointment:</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Schedule Now
        </button>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Upcoming Sessions</h2>
        <ul className="list-disc pl-5">
          <li>Dr. Smith - Tuesday, 3:00 PM</li>
          <li>Group Session: Anxiety Support - Thursday, 5:00 PM</li>
        </ul>
      </div>
    </div>
  );
};

export default CounselingServices;