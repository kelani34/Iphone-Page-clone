import React from "react";
import styled, { keyframes } from "styled-components";

const Quote = () => {
  return (
    <QuotesSection>
      <TextBox>
        <Text delay="0s">
          <span>&#8220; You can't connect the dots looking forward;</span>
        </Text>
        <Text delay="0.4s">
          <span>
            &nbsp;&nbsp;&nbsp;You can only connect them looking backward.
          </span>
        </Text>
        <Text delay="0.8s">
          <span>&nbsp;&nbsp;&nbsp;So you have to trust the dots</span>
        </Text>
        <Text delay="1.2s">
          <span>
            &nbsp;&nbsp;&nbsp;Will somehow connect your future . &#8221;
          </span>
        </Text>
        <Text delay="1.6s">
          <span className="author">- Steve Jobs</span>
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
  width: 100vw;
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
    animation: ${up} 2.5s ease forwards ${(props) => props.delay};

    font-family: var(--fontl);
    background-image: linear-gradient(-45deg, var(--gradient));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .author {
    width: 100%;
    text-align: end;
    background-image: linear-gradient(-180deg, var(--gradient));
  }
`;
