// api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8084';

const API = {
  employerRegister: `${BASE_URL}/employer/register`,
 jobseekersRegister: `${BASE_URL}/api/jobseekers/register`,
  jobseekersLogin: `${BASE_URL}/api/jobseekers/login`,
  employerLogin: `${BASE_URL}/employer/login`,
  postJob: `${BASE_URL}/employer/post/job`,
  editJob: (jobId) => `${BASE_URL}/employer/edit/${jobId}`,
  deleteJob: (jobId) => `${BASE_URL}/employer/delete/${jobId}`,
  searchBySkillSet: (skillSet) => `${BASE_URL}/employer/searchBySkillSet/${skillSet}`
};

export const registerEmployer = async (data) => {
  try {
    const response = await axios.post(API.employerRegister, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'An error occurred';
  }
};
export const registerLogin = async (data) => {
    try {
      const response = await axios.post(API.employerLogin, data);
      return response.data;
    } catch (error) {
      throw error.response?.data || 'An error occurred';
    }
  };
  export const  postJob = async (data) => {
    try {
      const response = await axios.post(API.postJob, data);
      return response.data;
    } catch (error) {
      throw error.response?.data || 'An error occurred';
    }
  };
  export const  editJob = async (data) => {
    try {
      const response = await axios.post(API.editJob, data);
      return response.data;
    } catch (error) {
      throw error.response?.data || 'An error occurred';
    }
  };
  export const   deleteJob = async (data) => {
    try {
      const response = await axios.post(API.deleteJob, data);
      return response.data;
    } catch (error) {
      throw error.response?.data || 'An error occurred';
    }
  };
  export const jobseekersRegister = async (data) => {
    try {
      const response = await axios.post(API.jobseekersRegister, data);
      return response.data;
    } catch (error) {
      throw error.response?.data || 'An error occurred';
    }
  };
  export const jobseekersLogin = async (data) => {
    try {
      const response = await axios.post(API.jobseekersLogin, data);
      return response.data;
    } catch (error) {
      throw error.response?.data || 'An error occurred';
    }
  };


export default API;
