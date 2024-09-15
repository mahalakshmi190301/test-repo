// E:/React-job_portal/job-portal/src/login/signin.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './signin.css';

const SignIn = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.username && form.password) {
      // Add your authentication logic here
      alert('Signin successful!');
      navigate('/register'); // Redirect to the homepage or dashboard after successful sign-in
    } else {
      setError('All fields are required');
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign In</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
