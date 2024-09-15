import React, { useState } from 'react';
import { registerLogin } from '../api/api';  // Import registerLogin from api.js
import { useNavigate } from 'react-router-dom';
const Login = () => {
  // State variables for username, password, and message
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Prepare the data object
      const data = {
        username,
        password
      };

      // Use the registerLogin function to make the POST request
      const response = await registerLogin(data);
      navigate('/postEmployee');
      // Handle success response
      if (response) {
        setMessage('Login successful');
      }
    } catch (error) {
      // Handle error response
      if (error && error.status === 401) {
        setMessage('Invalid credentials');
      } else {
        setMessage('An error occurred');
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
