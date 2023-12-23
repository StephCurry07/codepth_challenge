// CreateJob.js
import React, { useEffect, useState } from "react";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { getCurrentUserId } from "../Users/AuthDetails";

const CreateJob = () => {
  const navigate = useNavigate();
  const [hasCreatedJob, setHasCreatedJob] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [eligibility, setEligibility] = useState("");
  const [roles, setRole] = useState("");
  const [salary, setSalary] = useState("");
  const [about, setAbout] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const userId = getCurrentUserId();

  useEffect(() => {
    const checkUserCreatedJob = async () => {
      try {
        const userId = getCurrentUserId();
        const querySnapshot = await getDocs(
          query(collection(db, 'jobs'), where('createdBy', '==', userId))
        );

        setHasCreatedJob(!querySnapshot.empty);
      } catch (error) {
        console.error('Error checking user-created job:', error.message);
      }
    };

    checkUserCreatedJob();
  }, []);
  const handleCreateJob = async () => {
    try {
      const jobData = {
        companyName,
        jobTitle,
        salary,
        eligibility,
        roles,
        about,
        createdBy : userId,
      };

      const docRef = await addDoc(collection(db, "jobs"), jobData);
      console.log("Job added with ID: ", docRef.id);

      setSuccessMessage("Job created successfully");

      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (error) {
      console.error("Error adding job: ", error.message);
    }
  };
  return (
    <div>
  {hasCreatedJob ? (
    <p>You can only create one job.</p>
  ) : (
    <>
      <h2>Create a Job</h2>
      <label>
        Company Name:
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </label>

      <label>
        Job Title:
        <input
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
      </label>

      <label>
        Salary:
        <input
          type="text"
          pattern="[0-9]*"
          inputMode="numeric"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
      </label>

      <label>
        Eligibility:
        <textarea
          value={eligibility}
          onChange={(e) => setEligibility(e.target.value)}
        />
      </label>
      <br />

      <label>
        Roles:
        <textarea
          value={roles}
          onChange={(e) => setRole(e.target.value)}
        />
      </label>
      <br />
      <label>
        About:
        <textarea
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleCreateJob}>Create Job</button>

      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </>
  )}
</div>
  );
};

export default CreateJob;
