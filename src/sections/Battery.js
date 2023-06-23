import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

const Battery = () => {
  const battery = useRef(null);

  let elements = gsap.utils.selector(battery);

  useLayoutEffect(() => {
    console.log(elements("li"));
    let t1 = gsap.timeline({});

    elements("li").forEach((element) => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
        opacity: 1,
      });
    });
  }, []);
  return (
    <Section id="battery">
      <Title>Go all day with single charge...</Title>
      <BatterySection ref={battery}>
        <li />
        <li />
        <li />
        <li />
        <li />
      </BatterySection>
    </Section>
  );
};

export default Battery;

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: var(--white);
`;

const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-55%, -50%);

  text-transform: uppercase;
  font-size: var(--fontBig);
  z-index: 1;
`;

const BatterySection = styled.ul`
  position: absolute;
  right: 4rem;
  list-style: none;
  background-color: var(--white);
  border: 3px solid var(--dark);
  border-radius: 8px;
  padding: 0.5rem;
  width: 15rem;

  li {
    width: 100%;
    height: 5rem;
    background-color: var(--dark);
    background-image: linear-gradient(-90deg, var(--gradient));
    opacity: 0;
  }
  & > *:not(:first-child):not(:last-child) {
    margin: 0.5rem 0;
  }
`;
