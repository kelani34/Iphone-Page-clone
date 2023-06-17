import React from "react";
import styled, { keyframes } from "styled-components";

const Quote = () => {
  return (
    <QuotesSection>
      <TextBox>
        <Text>
          <span>Line 1</span>
        </Text>
        <Text>
          <span>Line 2</span>
        </Text>
        <Text>
          <span>Line 3</span>
        </Text>
        <Text>
          <span>Line 4</span>
        </Text>
        <Text>
          <span>Line 5</span>
        </Text>
      </TextBox>
    </QuotesSection>
  );
};

export default Quote;

const up = keyframes`
    100% {
        transform: translateY(0);
    }
`;

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
const TextBox = styled.div`
  width: 100vh;
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Text = styled.p`
  width: 50%;
  font-size: var(--fontlg);
  height: var(--fontmd);
  position: relative;
  overflow: hidden;

  span {
    position: absolute;
    transform: translateY(3rem);
    animation: ${up} 2.5s ease forwards;

    font-family: var(--fontl);
    background-image: linear-gradient(-45deg, var(--gradient));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
