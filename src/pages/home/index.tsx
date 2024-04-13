import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Euler, Vector3 } from "three";

import Loader from "@components/loader";
import Island from "@models/island";
import Sky from "@models/sky";
import Plane from "@models/plane";
import Popup from "@components/popup";
import { IslandData, PlaneData } from "@interfaces/index";
import sakura from "@assets/sakura.mp3";
import { soundoff, soundon } from "@assets/icons";

const Home: React.FunctionComponent = () => {
  const audioRef = useRef(new Audio(sakura));
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const [currentStage, setCurrentStage] = useState<number>(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState<boolean>(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => audioRef.current.pause();
  }, [isPlayingMusic]);

  audioRef.current.volume = 0.1;
  audioRef.current.loop = true;

  const adjustIsland = (): IslandData => {
    let islandData: IslandData = {
      scale: [1, 1, 1] as unknown as Vector3,
      position: [0, -6.5, -43] as unknown as Vector3,
      rotation: [0.1, 4.7, 0] as unknown as Euler,
    };

    if (window.innerWidth < 768) {
      islandData = {
        ...islandData,
        scale: [0.9, 0.9, 0.9] as unknown as Vector3,
      };
    }

    return islandData;
  };

  const adjustPlane = (): PlaneData => {
    let planeData: PlaneData = {
      scale: [3, 3, 3] as unknown as Vector3,
      position: [0, -4, -4] as unknown as Vector3,
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

  const islandData = adjustIsland();
  const planeData = adjustPlane();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <Popup currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
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

          <Sky isRotating={isRotating} />
          <Island
            scale={islandData.scale}
            position={islandData.position}
            rotation={islandData.rotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            // @ts-expect-error: Three.js
            scale={planeData.scale}
            position={planeData.position}
            rotation={planeData.rotation}
            isRotating={isRotating}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-10 h-10 cursor-pointer object-contain"
        />
      </div>
    </section>
  );
};

export default Home;
