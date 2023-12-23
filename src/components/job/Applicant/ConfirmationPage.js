import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const ConfirmationContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const ConfirmationHeading = styled.h2`
  color: #4caf50; /* Green color */
`;

const ConfirmationMessage = styled.p`
  font-size: 18px;
`;

const ConfirmationPage = () => {
    // const location = useLocation();
    // const docRefId = location.state?.docRefId;
    const { value } = useParams();
  return (
    <ConfirmationContainer>
      <ConfirmationHeading>Application Submitted</ConfirmationHeading>
      <ConfirmationMessage>Thank you for submitting your application!</ConfirmationMessage>
      <p>Your application has been submitted. Reference ID: {value}</p>
    </ConfirmationContainer>
  );
};

export default ConfirmationPage;
