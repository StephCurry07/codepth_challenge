// ResponsesPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const ResponsesPage = () => {
  const { jobId } = useParams();
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const responsesQuery = query(
          collection(db, 'Applicants'),
          where('jobId', '==', jobId)
        );

        const querySnapshot = await getDocs(responsesQuery);
        const fetchedResponses = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setResponses(fetchedResponses);
      } catch (error) {
        console.error('Error fetching responses:', error.message);
      }
    };

    fetchResponses();
  }, [jobId]);

  return (
    <div>
      <h2>Responses for Job Listing #{jobId}</h2>
      {responses.length === 0 ? (
        <p>No responses yet.</p>
      ) : (
        <ol>
          {responses.map((response) => (
            <li key={response.id}>
            <h3>{response.name}</h3>
            <p>Email: {response.email}</p>
            <p>Age: {response.age}</p>
            <p>Work Experience: {response.workExperience} years</p>
            <p>Current Salary: {response.currentSalary}</p>
            <p>Reason to Join: {response.reasonToJoin}</p>
          </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default ResponsesPage;
