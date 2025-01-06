import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import wind from "@assets/sounds/wind.mp3";
import plane from "@assets/sounds/plane.mp3";
import sound from "@assets/icons/sound.png";
import noSound from "@assets/icons/no-sound.png";

const Navigation: React.FunctionComponent = () => {
  const { pathname } = useLocation();
  const windAudioRef = useRef(new Audio(wind));
  const planeAudioRef = useRef(new Audio(plane));
  const [isPlayingMusic, setIsPlayingMusic] = useState<boolean>(false);

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
  
  const isHomePage = pathname === "/";

  return (
    <header
      className={`header ${
        !isHomePage
          ? "mx-auto max-w-5xl bg-white shadow-md py-2"
          : "max-w-[100%] bg-transparent px-8 py-4"
      }`}
      style={{
        clipPath:
          "polygon(5% 0px, 95% 0px, 100% 50%, 95% 100%, 5% 100%, 0% 50%)",
      }}
    >
      <NavLink
        to="/"
        className="w-10 h-10 bg-white items-center justify-center flex font-bold shadow-md"
        style={{
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        }}
      >
        <p className="blue-gradient_text">{!isHomePage ? <>IMF</> : <>I</>}</p>
      </NavLink>
      {isHomePage && (
        <button
          className="border-0 outline-none px-5 py-2 cursor-none"
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          }}
          onClick={() => setIsPlayingMusic((prevState) => !prevState)}
        >
          <img src={isPlayingMusic ? sound : noSound} alt="Test" width={32} />
        </button>
      )}
      {!isHomePage && (
        <nav className="flex text-lg gap-7 font-medium">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black"
            }
          >
            Contact
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Navigation;
