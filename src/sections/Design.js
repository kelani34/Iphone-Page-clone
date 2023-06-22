import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

const Design = () => {
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
      .fromTo(text1.current, { x: 0 }, { x: "10%" }, "key1")
      .fromTo(text2.current, { x: 0 }, { x: "-10%" }, "key1");
    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <Section ref={container}>
      <TextContainer1 ref={text1}>
        <span>Flaw-less design with strong durability.</span>
      </TextContainer1>
      <TextContainer2 ref={text2}>
        <span>Flaw-edge design with toghest smartphone glass.</span>
      </TextContainer2>
    </Section>
  );
};

export default Design;

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  background-color: var(--white);
  overflow: hidden;
`;

const TextContainer1 = styled.div`
  width: 100%;
  height: 50vh;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  color: var(--dark);
  span {
    font-size: var(--fontBig);
    width: 90%;
    font-weight: 600;
    text-transform: capitalize;
  }
`;

const TextContainer2 = styled.div`
  width: 100%;
  height: 50vh;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  color: var(--dark);
  span {
    font-size: var(--fontxxxl);
    width: 80%;
    font-weight: 600;
    text-transform: capitalize;
  }
`;
