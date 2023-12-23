import React, { useEffect, useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import JobItem from './job/JobItem';
import styled from 'styled-components';


// const Container = styled.div`
//   position: relative;
// `;

const CreateJobLink = styled(Link)`
  position: relative;
  bottom: 10px;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const SignOutButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ff0000;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c70000;
  }
`;

const Dashboard = () => {
  const auth = getAuth();
  const history = useNavigate();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'jobs'));
        const jobsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setJobs(jobsData);
      } catch (error) {
        console.error('Error fetching jobs: ', error.message);
      }
    };

    fetchJobs();
  }, []);

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
        <h1>Welcome</h1>
        <SignOutButton onClick={handleClick}>Sign Out</SignOutButton>
        <h2>List of Jobs:</h2>
        <ul className='job-list'>
        {jobs.map((job) => (
          <li key={job.id}>
            <JobItem job={job} />
          </li>
        ))}
        </ul>
      {/* <Container> */}
        <CreateJobLink to="/create-job">Create a Job</CreateJobLink>
      {/* </Container> */}
      </div>
    );
  };

export default Dashboard;
