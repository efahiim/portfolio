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
      duration: 1,
    });
  }, [currentStage]);

  return (
    <div ref={stageRef} className="opacity-0">
      <p className="font-medium sm:text-xl text-center text-black">{text}</p>
      {/* <Link to={link} className="neo-btn">
      {buttonText}
      <img src={arrow} alt="Arrow" className="w-4 h-4 object-contain" />
    </Link> */}
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
      duration: 1,
    });
    
    gsap.to(flyingRef.current, {
      opacity: 1,
      duration: 1,
    });
  }, [currentStage]);

  const renderContent: any = {
    1: (
      <h1 ref={introRef} className="sm:text-xl sm:leading-snug text-center py-4 px-8 text-black mx-5 opacity-0">
        Hi, I am <span className="font-semibold">Isfaaq</span> 👋
        <br />A Software Engineer from Mauritius.
        <br />
        You can either click on the <span className="font-semibold">
          left
        </span>{" "}
        and the <span className="font-semibold">right</span> of the screen or
        use the keyboard <span className="font-semibold">arrow left</span> and{" "}
        <span className="font-semibold">arrow right</span> keys to navigate.
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
        className="font-medium sm:text-xl text-center text-black opacity-0"
      >
        Fasten your seatbelt! We are flying to your destination ✈️
      </p>
    ),
  };

  return renderContent[currentStage] || null;
};

export default Popup;
