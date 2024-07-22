import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    email: '',
    password: '',
    userType: '',
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the form data to your backend
    // For now, we'll just redirect to the login page
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background dark:bg-black">
      <div className="bg-card dark:bg-card rounded-lg shadow-lg p-8 max-w-md w-full">
        <img src="https://placehold.co/150" alt="Company Logo" className="mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-primary text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-primary">Full Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:ring-primary" placeholder="Enter your full name" />
          </div>
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-primary">Age</label>
            <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:ring-primary" placeholder="Enter your age" />
          </div>
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-primary">Gender</label>
            <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:ring-primary">
              <option value="" disabled>Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary">Email Address</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:ring-primary" placeholder="Enter your email" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-primary">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:ring-primary" placeholder="Enter your password" />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary">Select User Type</label>
            {['youth', 'mentalHealthProfessional', 'communityModerator', 'administrator'].map((user) => (
              <div key={user} className="flex items-center">
                <input 
                  type="radio" 
                  id={user} 
                  name="userType" 
                  value={user} 
                  checked={formData.userType === user}
                  onChange={handleChange}
                  className="rounded text-primary border-zinc-300 focus:ring focus:ring-primary" 
                />
                <label htmlFor={user} className="ml-2 text-sm text-primary">
                  {user.split(/(?=[A-Z])/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </label>
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="agree" 
              name="agree" 
              checked={formData.agree}
              onChange={handleChange}
              className="rounded text-primary border-zinc-300 focus:ring focus:ring-primary" 
            />
            <label htmlFor="agree" className="ml-2 text-sm text-primary">I agree to the terms and conditions</label>
          </div>
          <button type="submit" className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/80 transition-colors">Sign Up</button>
        </form>
        <p className="text-xs text-center text-muted-foreground mt-4">By signing up, you agree to our <a href="#" className="text-accent">policies</a>.</p>
      </div>
    </div>
  );
};

export default SignUp;