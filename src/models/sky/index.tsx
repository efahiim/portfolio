// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import skyScene from "@assets/3d/sky.glb";

interface Props {
    isRotating: boolean;
  }

const Sky: React.FunctionComponent<Props> = ({ isRotating }: Props) => {
  const sky = useGLTF(skyScene);
  const ref = useRef();

  useFrame((_, delta) => {
    if (isRotating) {
        ref.current.rotation.y += 0.05 * delta;
    }
  });

  return (
    <mesh ref={ref}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
