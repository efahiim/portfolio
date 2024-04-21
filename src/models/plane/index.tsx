// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useEffect, useRef, useState } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

import planeScene from "@assets/3d/plane.glb";

interface Props {
  isMoving: boolean;
  setIsMoving: any;
  currentStage: number;
  setCurrentStage: any;
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
}

const Plane: React.FunctionComponent<Props> = ({
  isMoving,
  setIsMoving,
  currentStage,
  setCurrentStage,
  isMobile,
  isTablet,
  isLaptop,
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

    if (isMobile && !isTablet && !isLaptop) {
      switch (currentStage) {
        case 1:
          targetPosition = direction === "ltr" && -0.3;
          break;
        case 2:
          targetPosition = direction === "rtl" ? -1 : 0.3;
          break;
        case 3:
          targetPosition = direction === "rtl" ? -0.3 : 1;
          break;
        case 4:
          targetPosition = direction === "rtl" && 0.3;
      }
    }

    if (!isMobile && isTablet && !isLaptop) {
      switch (currentStage) {
        case 1:
          targetPosition = direction === "ltr" && -1;
          break;
        case 2:
          targetPosition = direction === "rtl" ? -2 : 0.5;
          break;
        case 3:
          targetPosition = direction === "rtl" ? -1 : 2;
          break;
        case 4:
          targetPosition = direction === "rtl" && 0.5;
      }
    }

    if (!isMobile && !isTablet && isLaptop) {
      switch (currentStage) {
        case 1:
          targetPosition = direction === "ltr" && -1.5;
          break;
        case 2:
          targetPosition = direction === "rtl" ? -3.5 : 1.5;
          break;
        case 3:
          targetPosition = direction === "rtl" ? -1.5 : 3.5;
          break;
        case 4:
          targetPosition = direction === "rtl" && 1.5;
      }
    }

    if (!isMobile && !isTablet && !isLaptop) {
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
    if (!isMoving) {
      if (!isMobile && !isTablet) {
        event.stopPropagation();
        event.preventDefault();
      }

      const canvas = document.getElementsByTagName("canvas")[0];
      const touchOrClickX = event.touches
        ? event.touches[0].clientX
        : event.clientX;
      const screenWidth = window.innerWidth;

      if (event.target === canvas) {
        if (touchOrClickX < screenWidth / 2) {
          const targetPosition = calculateTargetPosition("rtl");

          if (isMobile && !isTablet && !isLaptop) {
            if (ref.current.position.x >= -0.3) {
              setIsMoving(true);

              gsap.to(ref.current.position, {
                x: targetPosition,
                duration: 2,
                onUpdate: () => setCurrentStage(5),
                onComplete: () => setIsMoving(false),
              });
            }
          }

          if (!isMobile && isTablet && !isLaptop) {
            if (ref.current.position.x >= -1) {
              setIsMoving(true);

              gsap.to(ref.current.position, {
                x: targetPosition,
                duration: 2,
                onUpdate: () => setCurrentStage(5),
                onComplete: () => setIsMoving(false),
              });
            }
          }

          if (!isMobile && !isTablet && isLaptop) {
            if (ref.current.position.x >= -1.5) {
              setIsMoving(true);

              gsap.to(ref.current.position, {
                x: targetPosition,
                duration: 2,
                onUpdate: () => setCurrentStage(5),
                onComplete: () => setIsMoving(false),
              });
            }
          }

          if (!isMobile && !isTablet && !isLaptop) {
            if (ref.current.position.x >= -4) {
              setIsMoving(true);

              gsap.to(ref.current.position, {
                x: targetPosition,
                duration: 2,
                onUpdate: () => setCurrentStage(5),
                onComplete: () => setIsMoving(false),
              });
            }
          }
        } else {
          const targetPosition = calculateTargetPosition("ltr");

          if (isMobile && !isTablet && !isLaptop) {
            if (ref.current.position.x <= 0.3) {
              setIsMoving(true);

              gsap.to(ref.current.position, {
                x: targetPosition,
                duration: 2,
                onUpdate: () => setCurrentStage(5),
                onComplete: () => setIsMoving(false),
              });
            }
          }

          if (!isMobile && isTablet && !isLaptop) {
            if (ref.current.position.x <= 0.5) {
              setIsMoving(true);

              gsap.to(ref.current.position, {
                x: targetPosition,
                duration: 2,
                onUpdate: () => setCurrentStage(5),
                onComplete: () => setIsMoving(false),
              });
            }
          }

          if (!isMobile && !isTablet && isLaptop) {
            if (ref.current.position.x <= 1.5) {
              setIsMoving(true);

              gsap.to(ref.current.position, {
                x: targetPosition,
                duration: 2,
                onUpdate: () => setCurrentStage(5),
                onComplete: () => setIsMoving(false),
              });
            }
          }

          if (!isMobile && !isTablet && !isLaptop) {
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
      }
    }
  };

  useFrame(() => {
    if (isMoving) {
      const position = ref.current.position.x;

      if (isMobile && !isTablet && !isLaptop) {
        switch (true) {
          case position > 0.99 && position < 1.01:
            setCurrentStage(4);
            break;
          case position > 0.299 && position < 0.301:
            setCurrentStage(3);
            break;
          case position > -0.301 && position < -0.299:
            setCurrentStage(2);
            break;
          case position > -1.01 && position < -0.99:
            setCurrentStage(1);
            break;
          default:
            setCurrentStage(5);
        }
      }

      if (!isMobile && isTablet && !isLaptop) {
        console.log(position);
        
        switch (true) {
          case position > 1.99 && position < 2.01:
            setCurrentStage(4);
            break;
          case position > 0.49 && position < 0.51:
            setCurrentStage(3);
            break;
          case position > -1.01 && position < -0.99:
            setCurrentStage(2);
            break;
          case position > -2.01 && position < -1.99:
            setCurrentStage(1);
            break;
          default:
            setCurrentStage(5);
        }
      }

      if (!isMobile && !isTablet && isLaptop) {
        console.log(position);
        
        switch (true) {
          case position > 3.49 && position < 3.51:
            setCurrentStage(4);
            break;
          case position > 1.49 && position < 1.51:
            setCurrentStage(3);
            break;
          case position > -1.51 && position < -1.49:
            setCurrentStage(2);
            break;
          case position > -3.51 && position < -3.49:
            setCurrentStage(1);
            break;
          default:
            setCurrentStage(5);
        }
      }

      if (!isMobile && !isTablet && !isLaptop) {
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
