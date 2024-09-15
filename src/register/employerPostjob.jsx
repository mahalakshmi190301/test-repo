import React, { useState, useEffect } from 'react';
import { postJob, editJob, deleteJob } from '../api/api'; // Adjust import paths as necessary

const JobManagement = () => {
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);
  const [formData, setFormData] = useState({
    jobTitle: '',
    location: '',
    description: '',
    experience: '',
    salary: '',
    noticePeriod: '',
    contactEmail: '',
    status: '',
    skill: '',
    designation: '',
    company: '',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Load initial job list (fetch from API)
    // Example: setJobs(fetchJobs());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const response = await postJob(formData);
      setJobs([...jobs, response]); // Add the new job to the list
      setMessage('Job created successfully');
      setFormData({
        jobTitle: '',
        location: '',
        description: '',
        experience: '',
        salary: '',
        noticePeriod: '',
        contactEmail: '',
        status: '',
        skill: '',
        designation: '',
        company: '',
      });
    } catch (error) {
      setMessage('Failed to create job');
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await editJob(editingJob.id, formData);
      setJobs(jobs.map((job) => (job.id === editingJob.id ? response : job)));
      setMessage('Job updated successfully');
      setEditingJob(null);
      setFormData({
        jobTitle: '',
        location: '',
        description: '',
        experience: '',
        salary: '',
        noticePeriod: '',
        contactEmail: '',
        status: '',
        skill: '',
        designation: '',
        company: '',
      });
    } catch (error) {
      setMessage('Failed to update job');
    }
  };

  const handleDelete = async (jobId) => {
    try {
      await deleteJob(jobId);
      setJobs(jobs.filter((job) => job.id !== jobId));
      setMessage('Job deleted successfully');
    } catch (error) {
      setMessage('Failed to delete job');
    }
  };

  return (
    <div className="job-management-container">
      <h2>{editingJob ? 'Edit Job' : 'Create Job'}</h2>
      <form onSubmit={editingJob ? handleEdit : handleCreate} className="job-form">
        <div className="form-group">
          <label htmlFor="jobTitle">Job Title:</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="experience">Experience:</label>
          <input
            type="text"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="salary">Salary:</label>
          <input
            type="text"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="noticePeriod">Notice Period:</label>
          <input
            type="text"
            id="noticePeriod"
            name="noticePeriod"
            value={formData.noticePeriod}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactEmail">Contact Email:</label>
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <input
            type="text"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="skill">Skill:</label>
          <input
            type="text"
            id="skill"
            name="skill"
            value={formData.skill}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="designation">Designation:</label>
          <input
            type="text"
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{editingJob ? 'Update Job' : 'Create Job'}</button>
        {editingJob && <button type="button" onClick={() => setEditingJob(null)}>Cancel</button>}
      </form>

      {message && <p className="message">{message}</p>}

      <h2>Job List</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h3>{job.jobTitle}</h3>
            <p>{job.location}</p>
            <p>{job.description}</p>
            <p>{job.experience}</p>
            <p>{job.salary}</p>
            <p>{job.noticePeriod}</p>
            <p>{job.contactEmail}</p>
            <p>{job.status}</p>
            <p>{job.skill}</p>
            <p>{job.designation}</p>
            <p>{job.company}</p>
            <button onClick={() => setEditingJob(job)}>Edit</button>
            <button onClick={() => handleDelete(job.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobManagement;
