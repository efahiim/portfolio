// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { arrow } from "@assets/icons";

interface PopupProps {
  currentStage: number;
}

interface InfoBoxProps {
  text: string;
  link: string;
  buttonText: string;
  currentStage: number;
}

const InfoBox: React.FunctionComponent<InfoBoxProps> = ({
  text,
  link,
  buttonText,
  currentStage,
}: InfoBoxProps) => {
  const stageRef = useRef();

  useGSAP(() => {
    gsap.to(stageRef.current, {
      opacity: 1,
      duration: 2,
    });
  }, [currentStage]);

  return (
    <div
      ref={stageRef}
      className="opacity-0 px-10 2xl:px-4 py-4 border-gradient w-full md:w-[90%] lg:w-[80%] xl:w-[60%] 2xl:w-[50%] flex flex-col items-center gap-4"
      style={{
        clipPath: "polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0% 50%)",
      }}
    >
      <p className="font-medium sm:text-xl text-center text-black">{text}</p>
      <Link to={link} className="btn">
        {buttonText}
        <img src={arrow} alt="Arrow" className="w-4 h-4 object-contain" />
      </Link>
    </div>
  );
};

const Popup: React.FunctionComponent<PopupProps> = ({
  currentStage,
}: PopupProps) => {
  const introRef = useRef();
  const flyingRef = useRef();

  useGSAP(() => {
    gsap.to(introRef.current, {
      opacity: 1,
      duration: 2,
    });

    gsap.to(flyingRef.current, {
      opacity: 1,
      duration: 1.5,
    });
  }, [currentStage]);

  const renderContent: any = {
    1: (
      <h1
        ref={introRef}
        className="sm:text-xl sm:leading-snug text-center py-4 px-4 text-black mx-5 opacity-0 border-gradient w-full md:w-[90%] lg:w-[80%] xl:w-[60%] 2xl:w-[50%]"
        style={{
          clipPath:
            "polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0% 50%)",
        }}
      >
        Hi, I am <span className="font-semibold">Isfaaq</span> 👋
        <br />A Web Developer from Mauritius.
      </h1>
    ),
    2: (
      <InfoBox
        text="Worked with many companies and picked up many skills along the way."
        link="/about"
        buttonText="Learn more"
        currentStage={currentStage}
      />
    ),
    3: (
      <InfoBox
        text="Led multiple projects to success over the years. Curious about the impact?"
        link="/projects"
        buttonText="Visit my portfolio"
        currentStage={currentStage}
      />
    ),
    4: (
      <InfoBox
        text="Need a project done or looking for a dev? I'm just a few keystrokes away."
        link="/contact"
        buttonText="Let's talk"
        currentStage={currentStage}
      />
    ),
    5: (
      <p
        ref={flyingRef}
        className="font-medium sm:text-xl text-center text-black opacity-0 px-4 py-4"
      >
        Fasten your seatbelt! We are flying to your destination! ✈️
      </p>
    ),
  };

  return renderContent[currentStage] || null;
};

export default Popup;
