import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "../model/Scene";

const PhoneModel = () => {
  return (
    <Container id="phone-model">
      <Canvas camera={{ fov: 40 }}>
        <ambientLight intensity={1} />
        <directionalLight position={0.2} />
        <Suspense>
          <Model />
        </Suspense>
        <Environment preset="night" />
        {/* <OrbitControls /> */}
      </Canvas>
    </Container>
  );
};

export default PhoneModel;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  z-index: 1;
  background-color: transparent;
`;
