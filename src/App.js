// import logo from './logo.svg';
import './App.css';
import SignIn from './components/auth/SignIn';
// import AuthDetails from './components/AuthDetails';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Users/Dashboard';
import CreateJob from './components/job/CreateJob';
import JobDetails from './components/job/JobDetails';
import './components/job/styles.css';
import JobApplicationForm from './components/job/Applicant/JobAppForm';
import ConfirmationPage from './components/job/Applicant/ConfirmationPage';
import ResponsesPage from './pages/ResponsesPage';
import ComingSoon from './pages/ComingSoon';

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<SignIn/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/create-job" element={<CreateJob />} />
            <Route path="/job-details/:id" element={<JobDetails />} />
            <Route path="/apply/:jobId" element={<JobApplicationForm/>} />
            <Route path="/confirmation/:value" element={<ConfirmationPage/>} />
            <Route path="/job/:jobId/responses" element={<ResponsesPage />} />
            <Route path="/coming" element={<ComingSoon/>} />
          </Routes>
        </div>
      </Router>
      
    </div>
  );
};

export default App;
