import React from "react";
import styled from "styled-components";

const Quote = () => {
  return (
    <QuotesSection>
      <div>Line 1</div>
      <div>Line 2</div>
      <div>Line 3</div>
      <div>Line 4</div>
      <div>Line 5</div>
    </QuotesSection>
  );
};

export default Quote;

const QuotesSection = styled.section`
  width: 100vh;
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--dark);
  color: var(--white);
`;
