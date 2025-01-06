import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Euler, Vector3 } from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Loader from "@components/loader";
import Popup from "@components/popup";

import Sky from "@models/sky";
import Plane from "@models/plane";

import { PlaneData } from "@interfaces/index";

const Home: React.FunctionComponent = () => {
  const tipRef = useRef();
  const [isMoving, setIsMoving] = useState<boolean>(false);
  const [currentStage, setCurrentStage] = useState<number>(1);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [isLaptop, setIsLaptop] = useState<boolean>(false);

  useEffect(() => {
    const screenSize = window.innerWidth;

    if (screenSize < 768) {
      setIsMobile(true);
    }

    if (screenSize >= 768 && screenSize < 1440) {
      setIsTablet(true);
    }

    if (screenSize >= 1440 && screenSize < 1920) {
      setIsLaptop(true);
    }
  }, [window.innerWidth]);

  useGSAP(() => {
    gsap.to(tipRef.current as unknown as gsap.TweenTarget, {
      opacity: 1,
      duration: 1,
      yoyo: true,
      repeat: -1,
    });
  }, []);

  const adjustPlane = (): PlaneData => {
    let planeData: PlaneData = {
      scale: [3, 3, 3] as unknown as Vector3,
      position: [-9, -1.5, -4] as unknown as Vector3,
      rotation: [0, 20, 0] as unknown as Euler,
    };

    if (isMobile && !isTablet && !isLaptop) {
      planeData = {
        ...planeData,
        scale: [1, 1, 1] as unknown as Vector3,
        position: [-1, -0.5, 0] as unknown as Vector3,
      };
    }

    if (!isMobile && isTablet && !isLaptop) {
      planeData = {
        ...planeData,
        scale: [1.2, 1.2, 1.2] as unknown as Vector3,
        position: [-2, -1, 0] as unknown as Vector3,
      };
    }

    if (!isMobile && !isTablet && isLaptop) {
      planeData = {
        ...planeData,
        scale: [1.2, 1.2, 1.2] as unknown as Vector3,
        position: [-3.5, -1.5, 0] as unknown as Vector3,
      };
    }

    return planeData;
  };

  const planeData = adjustPlane();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-[15%] left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <Popup currentStage={currentStage} />}
      </div>

      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />

          <ambientLight intensity={0.5} />

          <hemisphereLight
            // @ts-expect-error: Three.js
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Sky />

          <Plane
            // @ts-expect-error: Three.js
            scale={planeData.scale}
            position={planeData.position}
            rotation={planeData.rotation}
            isMoving={isMoving}
            setIsMoving={setIsMoving}
            currentStage={currentStage}
            setCurrentStage={setCurrentStage}
            isMobile={isMobile}
            isTablet={isTablet}
            isLaptop={isLaptop}
          />
        </Suspense>
      </Canvas>

      <p
        ref={
          tipRef as unknown as
            | React.LegacyRef<HTMLParagraphElement>
            | undefined
        }
        className="sm:text-xl sm:leading-snug text-center px-8 text-black mx-auto w-full opacity-0 absolute bottom-[6rem] lg:bottom-10"
      >
        Tip:{" "}
        {(isMobile || isTablet) && (
          <>
            Tap the <span className="font-semibold">right</span> or the{" "}
            <span className="font-semibold">left</span> side of the screen to
            fly.
          </>
        )}
        {window.innerWidth >= 1440 && (
          <>
            You can either click on the{" "}
            <span className="font-semibold">right</span> and the{" "}
            <span className="font-semibold">left</span> of the screen or use
            the keyboard <span className="font-semibold">arrow right</span>{" "}
            and <span className="font-semibold">arrow left</span> keys to fly.
          </>
        )}
      </p>
    </section>
  );
};

export default Home;
