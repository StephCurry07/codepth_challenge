import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const JobDetails = () => {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState(null);
  const [copied, setCopied] = useState(false);
  const appLink = `${window.location.origin}/apply/${id}`;
  
  const copyLink = () => {
    navigator.clipboard.writeText(appLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const docRef = doc(db, 'jobs', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setJobDetails({ id: docSnap.id, ...docSnap.data() });
        } else {
          // console.log('No such document!');
          alert('No such document!')
        }
      } catch (error) {
        // console.error('Error fetching job details: ', error.message);
        alert('Error fetching job details: ', error.message)
      } 
    };

    fetchJobDetails();
  }, [id]);
  
  // console.log(jobDetails);

  if (!jobDetails) {
    return <p>Loading...</p>;
  }
  const { about, companyName, eligibility, jobTitle, roles, salary } = jobDetails;
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
      <Link to={`/apply/${id}`}>
        <button>Apply for this Job</button>
      </Link>
      &nbsp; <button onClick={copyLink}>Copy Application Link</button>
      {copied && <label style={{ color: 'green' }}>Copied!</label>}
    </div>
  );
};

export default JobDetails;
