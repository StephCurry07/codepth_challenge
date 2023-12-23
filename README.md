# Job Hiring Portal

This is a job hiring portal built with React, Firebase, and Firestore. The application allows users to create job listings, apply for jobs, and view job details.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Creating a Job](#creating-a-job)
  - [Applying for a Job](#applying-for-a-job)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Job Listing:** Users can create and view job listings.
- **Job Application Form:** Users can apply for jobs by filling out a form.
- **Real-time Updates:** The application provides real-time updates using Firebase.
- **Authentication:** Firebase Authentication is used for user login and management.
- **Firestore:** Firestore is used for storing job listings and applicant details.

## Getting Started

### Prerequisites

- Node.js and npm installed
- Firebase project set up

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/job-application-system.git
   cd job-application-system
   ```
2. Install dependencies:
   ```npm install```

3. Set up Firebase:

Create a Firebase project: Firebase Console
Update the firebase-config.js file with your Firebase project configuration.

4. Run the application:
   ```npm start```
   
## Usage
### Creating a Job
  1. Log in to the application.
  2. Navigate to the "Create a Job" section.
  3. Fill in the job details and submit the form.

### Applying for a Job
1. View the list of job listings.
2. Click on a job to view its details.
3. Click the "Apply" button to fill out the job application form.

## Folder Structure

/job-application-system
  /public
  /src
    /components
    /pages
    /firebase
    ...
  /...
  
## Technologies Used
React
Firebase
Firestore
Authentication
Cloud Functions (for notifications)
Node.js
npm
