// Dashboard.js
import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const auth = getAuth();
  const history = useNavigate();

  const handleClick = () => {
    signOut(auth)
      .then(() => {
        console.log('User signed out successfully.');
        history('/');
      })
      .catch((error) => {
        console.error('Sign-out error:', error.message);
      });
  };

  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      <button onClick={handleClick}>Sign Out</button>
    </div>
  );
}

export default Dashboard;
