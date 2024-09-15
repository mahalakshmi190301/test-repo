import React, { useState } from 'react';
import axios from 'axios';

const JobSeekerLogin = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/api/jobseeker/login', null, {
        params: credentials
      });
      setMessage(response.data); // Success message from backend
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setMessage('Invalid credentials'); // Error message for invalid credentials
      } else {
        setMessage('Login failed. Please try again.');
      }
    }
  };

  return (
    <div>
      <h2>Job Seeker Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default JobSeekerLogin;
