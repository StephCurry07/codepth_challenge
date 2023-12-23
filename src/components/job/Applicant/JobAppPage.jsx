import React, { useState } from 'react';
import JobApplicationForm from './JobAppForm';

const JobApplicationPage = () => {
    const [applicationLink, setApplicationLink] = useState('');

    const generateAndCopyLink = () => {
      const link = `${window.location.origin}/apply/${Math.random().toString(36).substring(7)}`;
      navigator.clipboard.writeText(link);
      setApplicationLink(link);
    };
  
    return (
      <div>
        <JobApplicationForm />
        <button onClick={generateAndCopyLink}>Generate and Copy Application Link</button>
        {applicationLink && <p>Application Link: {applicationLink}</p>}
      </div>
    );
  };

export default JobApplicationPage;
