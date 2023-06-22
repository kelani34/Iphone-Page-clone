import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

const Display = () => {
  const container = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  useLayoutEffect(() => {
    let t1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top-=500 top",
          end: "bottom top",
          scrub: true,
        },
      })
      .fromTo(text1.current, { x: 0 }, { x: "20%" }, "key1")
      .fromTo(text2.current, { x: 0 }, { x: "-10%" }, "key1");

    return () => {
      if (t1) t1.kill();
    };
  }, []);
  return (
    <Section>
      <MainTitle>
        Immersive <br /> display
      </MainTitle>
      <TextBlockRight>
        <Title>Super Retina XDR display</Title>
        <Text>
          Labore sint laboris ullamco laboris ut culpa tempor. Ea culpa deserunt
          minim irure ex.
        </Text>
      </TextBlockRight>

      <TextBlockLeft ref={container}>
        <Title>Big is better</Title>
        <Text>
          Labore sint laboris ullamco laboris ut culpa tempor. Ea culpa deserunt
          minim irure ex.
        </Text>
      </TextBlockLeft>
      <TextContainer>
        <MovingText ref={text1}>Tougher than ever!</MovingText>
        <MovingText ref={text2}>Every touch matters.</MovingText>
      </TextContainer>
    </Section>
  );
};

export default Display;

const Section = styled.div`
  width: 100vw;
  height: 200vh;
  position: relative;

  display: flex;
  justify-content: space-around;
  flex-direction: column;

  background-color: var(--dark);
  color: var(--white);

  & > *:nth-child(even) {
    align-self: flex-end;
    margin-right: 4rem;
    text-align: right;
  }

  & > *:nth-child(odd) {
    align-self: flex-start;
    margin-left: 4rem;
    text-align: left;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: rotate(-25deg);
  z-index: 1;
  margin-bottom: 4rem;

  align-items: center;
`;

const MainTitle = styled.h1`
  font-size: var(--fontBig);
  font-family: var(--fontL);

  background-image: linear-gradient(-45deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const TextBlockRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
`;

const TextBlockLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
`;

const Title = styled.div`
  font-size: var(--fontlg);
  margin-bottom: 1rem;
  text-transform: capitalize;
`;

const Text = styled.div`
  font-size: var(--fontlg);
  color: var(--greyLight);
  margin-bottom: 0.5rem;
  width: 55%;
`;

const MovingText = styled.h1`
  font-size: var(--fontBig);
  font-family: var(--fontL);

  background-image: linear-gradient(-45deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
