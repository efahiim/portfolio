// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import planeScene from "@assets/3d/plane.glb";

interface Props {
  isMoving: boolean;
  setIsMoving: any;
  currentStage: number;
  setCurrentStage: any;
}

const Plane: React.FunctionComponent<Props> = ({
  isMoving,
  setIsMoving,
  currentStage,
  setCurrentStage,
  ...props
}: Props) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    actions["Take 001"]?.play();
  }, []);

  const calculateTargetPosition = (direction: "ltr" | "rtl"): number => {
    let targetPosition: number;

    switch (currentStage) {
      case 1:
        targetPosition = direction === "ltr" && -4;
        break;
      case 2:
        targetPosition = direction === "rtl" ? -9 : 4;
        break;
      case 3:
        targetPosition = direction === "rtl" ? -4 : 9;
        break;
      case 4:
        targetPosition = direction === "rtl" && 4;
    }

    return targetPosition;
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "ArrowLeft") {
      const targetPosition = calculateTargetPosition("rtl");

      if (ref.current.position.x >= -4) {
        setIsMoving(true);

        gsap.to(ref.current.position, {
          x: targetPosition,
          duration: 2,
          onComplete: () => {
            setIsMoving(false);
          },
        });
      }
    } else if (e.key === "ArrowRight") {
      const targetPosition = calculateTargetPosition("ltr");

      if (ref.current.position.x <= 4) {
        setIsMoving(true);
        
        gsap.to(ref.current.position, {
          x: targetPosition,
          duration: 2,
          onComplete: () => {
            setIsMoving(false);
          },
        });
      }
    }
  };

  useFrame(() => {
    if (isMoving) {
      const position = ref.current.position.x;

      console.log(position);

      switch (true) {
        case position >= 8.66578:
          setCurrentStage(4);
          break;
        case position >= 3.75 && position < 8.66578:
          setCurrentStage(3);
          break;
        case position >= -4.25 && position < 3.75:
          setCurrentStage(2);
          break;
        case position >= -9 && position < -4.25:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
