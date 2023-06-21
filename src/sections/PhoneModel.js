import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "../model/Scene";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  z-index: 1;
  background-color: transparent;
`;
const PhoneModel = () => {
  return (
    <Container>
      <Canvas>
        <ambientLight intensity={5} />
        <directionalLight position={0.4} />
        <Model />
        <Environment preset="sunset" />
        <OrbitControls />
      </Canvas>
    </Container>
  );
};

export default PhoneModel;
