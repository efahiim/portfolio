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

import wind from "@assets/sounds/wind.mp3";
import plane from "@assets/sounds/plane.mp3";

const Home: React.FunctionComponent = () => {
  const windAudioRef = useRef(new Audio(wind));
  const planeAudioRef = useRef(new Audio(plane));
  const tipRef = useRef();
  const splashRef = useRef<HTMLDivElement>(null);
  const [isMoving, setIsMoving] = useState<boolean>(false);
  const [currentStage, setCurrentStage] = useState<number>(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState<boolean>(false);
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

    console.log(isMobile, isTablet, isLaptop);
  }, [window.innerWidth]);

  useEffect(() => {
    if (isPlayingMusic) {
      windAudioRef.current.play();
      planeAudioRef.current.play();
    }

    return () => {
      windAudioRef.current.pause();
      planeAudioRef.current.pause();
    };
  }, [isPlayingMusic]);

  windAudioRef.current.volume = 0.05;
  windAudioRef.current.loop = true;
  planeAudioRef.current.volume = 0.01;
  planeAudioRef.current.loop = true;

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
        position: [-1, -1, 0] as unknown as Vector3,
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
    <>
      <section className="w-full h-[90vh] lg:h-screen relative">
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
          className="sm:text-xl sm:leading-snug text-center px-8 text-black mx-auto w-full opacity-0 absolute bottom-12"
        >
          Tip:{" "}
          {(isMobile || isTablet) && (
            <>
              Tap the <span className="font-semibold">right side</span> or the{" "}
              <span className="font-semibold">left side</span> of the screen to
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

      <div
        ref={splashRef}
        className="absolute w-full h-screen top-0 left-0 bg-black/85 z-10 flex justify-center items-center"
      >
        <div
          className="bg-white flex flex-col gap-5 justify-center items-center py-5 mx-4 rounded-sm"
        >
          <p className="sm:text-xl sm:leading-snug font-medium text-center text-black px-5">Do you want to play music for the best experience?</p>
          <div className="flex gap-5">
            <button
              className="bg-[#00c6ff] border-0 outline-none px-5 py-2 cursor-none"
              style={{
                clipPath:
                  "polygon(15% 0, 85% 0, 100% 50%, 85% 100%, 15% 100%, 0% 50%)",
              }}
              onClick={() => {
                setIsPlayingMusic((prevState) => !prevState);
                if (splashRef.current) {
                  gsap.to(splashRef.current, {
                    opacity: 0,
                    duration: 1,
                  });
                  gsap.to(splashRef.current, {
                    display: "none",
                    delay: 1,
                  });
                }
              }}
            >
              Yes
            </button>
            <button
              className="bg-[#00c6ff] border-0 outline-none px-5 py-2 cursor-none"
              style={{
                clipPath:
                  "polygon(15% 0, 85% 0, 100% 50%, 85% 100%, 15% 100%, 0% 50%)",
              }}
              onClick={() => {
                if (splashRef.current) {
                  gsap.to(splashRef.current, {
                    x: "-100%",
                    duration: 1
                  });
                }
              }}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
