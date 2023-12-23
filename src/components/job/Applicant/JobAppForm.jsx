import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { useNavigate, useParams } from "react-router-dom";

const JobApplicationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [currentSalary, setCurrentSalary] = useState("");
  const [resume, setResume] = useState(null);
  const [reasonToJoin, setReasonToJoin] = useState("");
  const navigate = useNavigate();
  const { jobId } = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const docRef = await addDoc(collection(db, "Applicants"), {
        name,
        email,
        age,
        workExperience,
        currentSalary,
        resume,
        reasonToJoin,
        jobId: `${jobId}`,
      });
      console.log("Job application submitted with ID:", docRef.id);
      console.log("Job ID:", jobId);
      // alert("Job application submitted with ID:", docRef.id);
      navigate(`/confirmation/${docRef.id}`);
    } catch (error) {
      alert("Error submitting job application:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Job Application Form</h2>

      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', marginBottom: '10px' }} />
      </label>

      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', marginBottom: '10px' }} />
      </label>

      <label>
        Age:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} style={{ width: '100%', marginBottom: '10px' }} />
      </label>

      <label>
        Work Experience (in years):
        <input type="number" value={workExperience} onChange={(e) => setWorkExperience(e.target.value)} style={{ width: '100%', marginBottom: '10px' }} />
      </label>

      <label>
        Current Salary:
        <input type="number" value={currentSalary} onChange={(e) => setCurrentSalary(e.target.value)} style={{ width: '100%', marginBottom: '10px' }} />
      </label>

      <label>
        Why do you want to join this company:
        <textarea value={reasonToJoin} onChange={(e) => setReasonToJoin(e.target.value)} style={{ width: '100%', marginBottom: '10px' }} />
      </label>

      <label>
        Resume(Share Drive Link/Website):
        <input type="text" value={resume} onChange={(e) => setResume(e.target.files[0])} style={{ marginBottom: '10px' }} />
      </label>

      <button type="submit" style={{ background: '#4caf50', color: 'white', padding: '10px', borderRadius: '5px', cursor: 'pointer' }}>
        Submit Application
      </button>
    </form>
  );
};

export default JobApplicationForm;
