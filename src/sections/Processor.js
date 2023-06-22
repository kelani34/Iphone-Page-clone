import React from "react";
import styled, { keyframes } from "styled-components";

const Processor = () => {
  return (
    <Section>
      <Title>Fastest Processor</Title>

      <ProcessorSection>
        <img src="/assets/Images/A15-Bionic.jpg" alt="" />
      </ProcessorSection>
      <Text>
        <span>
          Et Lorem reprehenderit consectetur commodo in minim nulla non veniam
          sunt amet nulla velit. Non quis irure nostrud consequat dolore sunt
          adipisicing id culpa. Non pariatur aute et proident excepteur amet
          Lorem minim dolor irure qui minim. Deserunt dolor ipsum consectetur
        </span>
        <span>
          Et Lorem reprehenderit consectetur commodo in minim nulla non veniam
          sunt amet nulla velit. Non quis irure nostrud consequat dolore sunt
          adipisicing id culpa. Non pariatur aute et proident excepteur amet
        </span>
      </Text>
    </Section>
  );
};

export default Processor;

const glow = keyframes`
  0%{
    box-shadow: 1px 1px 10px var(--white);
  }
  50%{
    box-shadow: 2px 2px 25px var(--white);
  }
  100%{    
    box-shadow: 1px 1px 10px var(--white);
  }
`;

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--dark);
  color: var(--white);
  overflow: hidden;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: var(--fontBig);
  font-family: var(--fontL);
  z-index: 1;

  background-image: linear-gradient(90deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ProcessorSection = styled.div`
  width: 25%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${glow} 3s ease infinite;
  padding: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: auto;
  }
`;

const Text = styled.div`
  font-size: var(--fontxs);
  color: var(--greyLight);
  width: 30%;
  height: 40vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    margin: 0.2rem 0;
    padding-left: 2rem;
  }
`;
