import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Euler, Vector3 } from "three";

import Loader from "@components/loader";
import Popup from "@components/popup";

import Sky from "@models/sky";
import Plane from "@models/plane";

import { PlaneData } from "@interfaces/index";

import wind from "@assets/sounds/wind.mp3";
import plane from "@assets/sounds/plane.mp3";
import { soundoff, soundon } from "@assets/icons";

const Home: React.FunctionComponent = () => {
  const windAudioRef = useRef(new Audio(wind));
  const planeAudioRef = useRef(new Audio(plane));
  const [isMoving, setIsMoving] = useState<boolean>(false);
  const [currentStage, setCurrentStage] = useState<number>(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState<boolean>(false);

  useEffect(() => {
    if (isPlayingMusic) {
      windAudioRef.current.play();
      planeAudioRef.current.play();
    }
    
    return () => {
      windAudioRef.current.pause();
      planeAudioRef.current.pause();
    }
  }, [isPlayingMusic]);

  windAudioRef.current.volume = 0.03;
  windAudioRef.current.loop = true;
  planeAudioRef.current.volume = 0.01;
  planeAudioRef.current.loop = true;

  const adjustPlane = (): PlaneData => {
    let planeData: PlaneData = {
      scale: [3, 3, 3] as unknown as Vector3,
      position: [-9, -2, -4] as unknown as Vector3,
      rotation: [0, 20, 0] as unknown as Euler,
    };

    if (window.innerWidth < 768) {
      planeData = {
        ...planeData,
        scale: [1.5, 1.5, 1.5] as unknown as Vector3,
        position: [0, -1.5, 0] as unknown as Vector3,
      };
    }

    return planeData;
  };

  const planeData = adjustPlane();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-[25%] left-0 right-0 z-10 flex items-center justify-center">
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
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(prevState => !prevState)}
          className="w-10 h-10 object-contain"
        />
      </div>
    </section>
  );
};

export default Home;
