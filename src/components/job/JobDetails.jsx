import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { JobApplicationForm }from './Applicant/JobAppForm';

const JobDetails = () => {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const docRef = doc(db, 'jobs', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setJobDetails({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching job details: ', error.message);
      } 
    };

    fetchJobDetails();
  }, [id]);
  
  console.log(jobDetails);

  // Check if jobDetails is not null or undefined before destructure
  if (!jobDetails) {
    return <p>Loading...</p>;
  }
  const { about, companyName, createdBy, eligibility, jobTitle, roles, salary } = jobDetails;
  // console.log(jobDetails);
  
  return (
    <div>
      <h2>Job Details</h2>
      <p>Company Name: {companyName}</p>
      <p>Job Title: {jobTitle}</p>
      <p>Salary: {salary}</p>

      <div>
        <h3>Eligibility:</h3>
        <ul>
          {eligibility.split('\n').map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Roles:</h3>
        <ul>
          {roles.split('\n').map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>About:</h3>
        <p>{about}</p>
      </div>
      <h1>Apply for a Job</h1>
      <p>Fill out the form below to apply for the job.</p>
      <JobApplicationForm />
    </div>
  );
};

export default JobDetails;
