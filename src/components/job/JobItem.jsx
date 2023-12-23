// JobItem.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const JobItem = ({ job }) => {
  const navigate = useNavigate();

  const handleClick = () => {

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
