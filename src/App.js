import logo from './logo.svg';
import './App.css';
import SignIn from './components/auth/SignIn';
import AuthDetails from './components/AuthDetails';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/" element={<SignIn/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
