// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import planeScene from "@assets/3d/plane.glb";

interface Props {
  isRotating: boolean;
}

const Plane: React.FunctionComponent<Props> = ({
  isRotating,
  ...props
}: Props) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    actions["Take 001"]?.play();
  }, [])
  

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
