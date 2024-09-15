import React, { useState } from 'react';
import { jobseekersRegister } from '../api/api'; // Adjust the import path as necessary
import { useNavigate } from 'react-router-dom';

const JobSeekerRegistration = () => {
  const [jobSeeker, setJobSeeker] = useState({
    name: '',
    password: '',
    address: '',
    contactNo: '',
    email: '',
    skillSet: '',
    appliedjobs: '',
    location: ''
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Corrected from naviagate to navigate

  // Handle form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobSeeker({ ...jobSeeker, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await jobseekersRegister(jobSeeker);
      navigate('/jobseekerLogin'); // Corrected from naviagate to navigate
      setMessage('Registration successful!'); // Success message
    } catch (error) {
      if (error.message.includes('Username already taken')) {
        setMessage('Username already taken');
      } else {
        setMessage('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div>
      <h2>Job Seeker Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={jobSeeker.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={jobSeeker.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={jobSeeker.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Contact Number:</label>
          <input
            type="text"
            name="contactNo"
            value={jobSeeker.contactNo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={jobSeeker.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Skill Set:</label>
          <input
            type="text"
            name="skillSet"
            value={jobSeeker.skillSet}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Applied Jobs:</label>
          <input
            type="text"
            name="appliedjobs"
            value={jobSeeker.appliedjobs}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={jobSeeker.location}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default JobSeekerRegistration;
