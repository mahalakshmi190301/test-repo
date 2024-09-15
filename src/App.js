import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import SignUp from './login/signup';
import SignIn from './login/signin';
import PostJob from './register/employerPostjob';
import Register from './register/register'; 
import Login from './register/employerLogin'; 
import JobSeekerRegistration from './jobSeeker/jobSeekerRegister';
import  JobSeekerLogin from './jobSeeker/jobSeekerLogin';

import NotFound from './components/notFound';

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <main className="App-main">
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/employeelogin" element={< Login />} /> 
            <Route path="/postEmployee" element={< PostJob />} /> 
            <Route path="/jobseekerRegister" element={<JobSeekerRegistration/>} />
            <Route path="/jobseekerLogin" element={<JobSeekerLogin/>} /> 
            {/* Add the Register route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
