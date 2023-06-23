import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

const Color = () => {
  const sectionRef = useRef(null);
  const rightRef = useRef(null);
  const leftRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    let section = sectionRef.current;
    let right = rightRef.current;
    let left = leftRef.current;
    let text = textRef.current;

    let updateColor = (color, textp, rgbColor) => {
      text.innerText = textp;
      text.style.color = color;
      right.style.backgroundColor = `rgba(${rgbColor}, 0.4)`;
      left.style.backgroundColor = `rgba(${rgbColor}, 0.8)`;
    };
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${section.offsetWidth + 1000}`,
        scrub: true,
        pin: true,
        markers: true,
        pinSpacing: true,
      },
    });
    let t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${section.offsetWidth + 1000} `,
          scrub: true,
        },
      })
      .to(section, {
        onStart: updateColor,
        onStartParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
      })
      .to(section, {
        onStart: updateColor,
        onStartParams: ["#F9E5C9", "Gold", "249, 229, 201"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#F9E5C9", "Gold", "249, 229, 201"],
      })
      .to(section, {
        onStart: updateColor,
        onStartParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
      })
      .to(section, {
        onStart: updateColor,
        onStartParams: ["#574f6f", "Deep Purple", "87, 79, 111"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#574f6f", "Deep Purple", "87, 79, 111"],
      })
      .to(section, {
        onStart: updateColor,
        onStartParams: ["#A50011", "Red", "165, 0, 17"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#A50011", "Red", "165, 0, 17"],
      })
      .to(section, {
        onStart: updateColor,
        onStartParams: ["#215E7C", "Blue", "33, 94, 124"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#215E7C", "Blue", "33, 94, 124"],
      });
  }, []);

  return (
    <Section ref={sectionRef}>
      <Left ref={leftRef} />
      <Text ref={textRef}>Sierra Blue</Text>
      <Right ref={rightRef} />
    </Section>
  );
};

export default Color;

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  background-color: rgba(155, 181, 206, 0.8);
  position: relative;
`;

const Right = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  background-color: rgba(155, 181, 206, 0.4);
  position: relative;
`;

const Text = styled.div`
  /* width: 100%; */
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%) rotate(-90deg);

  font-size: var(--fontxxl);
  text-transform: uppercase;
  filter: brightness(0.85);
`;
