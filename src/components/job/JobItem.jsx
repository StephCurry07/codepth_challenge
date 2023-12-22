// JobItem.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const JobItem = ({ job }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Redirect to a page that displays the full details of the job
    // Replace '/job-details' with the actual route where you want to display the job details
    navigate(`/job-details/${job.id}`);
  };

  return (
    <div className="job-item" onClick={handleClick}>
      <h3>{job.companyName}</h3>
      <p>{job.jobTitle}</p>
    </div>
  );
};

export default JobItem;
