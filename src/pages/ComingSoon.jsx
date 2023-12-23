import React from 'react';
import styled from 'styled-components';

const ComingSoonPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa; /* Choose your background color */
`;

const Heading = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
  color: #343a40; /* Choose your text color */
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  color: #6c757d; /* Choose your text color */
`;

const ComingSoon = () => {
  return (
    <ComingSoonPage>
      <Heading>Coming Soon</Heading>
    </ComingSoonPage>
  );
};

export default ComingSoon;
