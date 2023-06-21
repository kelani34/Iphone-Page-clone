import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Section>
      <VideoContainer>
        <video
          src="/assets/video/Ink - 21536.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
        />
      </VideoContainer>
      <Title>Iphone 14 Pro max</Title>
      <TextContainer>
        <span>So.Cool</span>
        <span>So.Bold</span>
      </TextContainer>
    </Section>
  );
};

export default Hero;

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;

  background-color: var(--dark);
  overflow: hidden;
`;

const Title = styled.h1`
  position: absolute;
  top: 2rem;
  left: 2rem;

  font-size: var(--fontlg);
  font-family: var(--fontL);
  color: var(--greyLight);
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: var(--fontxxxl);
    text-transform: uppercase;
    font-weight: 600;
    padding: 2rem;

    background-image: linear-gradient(45deg, var(--gradient));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 1;
  }
`;

const VideoContainer = styled.div`
  width: 100vw;
  min-height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  video {
    width: 100%;
    height: 100vh;

    object-fit: cover;
    object-position: bottom;
  }
`;
