import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase"; // Replace with your Firebase configuration

const JobApplicationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add the job application to Firestore
      const docRef = await addDoc(collection(db, "Applicants"), {
        name,
        email,
        resume,
      });

      console.log("Job application submitted with ID:", docRef.id);

      // Add any additional logic or UI updates here (e.g., a success message)
    } catch (error) {
      console.error("Error submitting job application:", error.message);
    }
  };

  return (
    <div>
      <h2>Job Application Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Resume (Paste or provide a link):
          <textarea
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export {JobApplicationForm};
