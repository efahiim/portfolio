// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

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

  const handleKeyPress = (event: KeyboardEvent): void => {
    if (!isMoving) {
      if (event.key === "ArrowLeft") {
        const targetPosition = calculateTargetPosition("rtl");

        if (ref.current.position.x >= -4) {
          setIsMoving(true);

          gsap.to(ref.current.position, {
            x: targetPosition,
            duration: 2,
            onUpdate: () => setCurrentStage(5),
            onComplete: () => setIsMoving(false),
          });
        }
      } else if (event.key === "ArrowRight") {
        const targetPosition = calculateTargetPosition("ltr");

        if (ref.current.position.x <= 4) {
          setIsMoving(true);

          gsap.to(ref.current.position, {
            x: targetPosition,
            duration: 2,
            onUpdate: () => setCurrentStage(5),
            onComplete: () => setIsMoving(false),
          });
        }
      }
    }
  };

  const handleTouchOrClick = (event: MouseEvent | TouchEvent) => {
    event.stopPropagation();
    event.preventDefault();

    const canvas = document.getElementsByTagName("canvas")[0];
    const touchOrClickX = event.touches
      ? event.touches[0].clientX
      : event.clientX;
    const screenWidth = window.innerWidth;

    if (event.target === canvas) {
      if (touchOrClickX < screenWidth / 2) {
        const targetPosition = calculateTargetPosition("rtl");

        if (ref.current.position.x >= -4) {
          setIsMoving(true);

          gsap.to(ref.current.position, {
            x: targetPosition,
            duration: 2,
            onUpdate: () => setCurrentStage(5),
            onComplete: () => setIsMoving(false),
          });
        }
      } else {
        const targetPosition = calculateTargetPosition("ltr");

        if (ref.current.position.x <= 4) {
          setIsMoving(true);

          gsap.to(ref.current.position, {
            x: targetPosition,
            duration: 2,
            onUpdate: () => setCurrentStage(5),
            onComplete: () => setIsMoving(false),
          });
        }
      }
    }
  };

  useFrame(() => {
    if (isMoving) {
      const position = ref.current.position.x;

      switch (true) {
        case position === 9:
          setCurrentStage(4);
          break;
        case position === 4:
          setCurrentStage(3);
          break;
        case position === -4:
          setCurrentStage(2);
          break;
        case position === -9:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(5);
      }
    }
  });

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("touchstart", handleTouchOrClick);
    window.addEventListener("pointerdown", handleTouchOrClick);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("touchstart", handleTouchOrClick);
      window.removeEventListener("pointerdown", handleTouchOrClick);
    };
  }, [handleKeyPress, handleTouchOrClick]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
