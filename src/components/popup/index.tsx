import React from "react";
import { Link } from "react-router-dom";

import { arrow } from "@assets/icons";

interface PopupProps {
  currentStage: number;
}

interface InfoBoxProps {
  text: string;
  link: string;
  buttonText: string;
}

const InfoBox: React.FunctionComponent<InfoBoxProps> = ({
  text,
  link,
  buttonText,
}: InfoBoxProps) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {buttonText}
      <img src={arrow} alt="Arrow" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const Popup: React.FunctionComponent<PopupProps> = ({
  currentStage,
}: PopupProps) => {
  const renderContent: any = {
    1: (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, I am <span className="font-semibold">Isfaaq</span> 👋
        <br />A Software Engineer from Mauritius.
      </h1>
    ),
    2: (
      <InfoBox
        text="Worked with many companies and picked up many skills along the way."
        link="/about"
        buttonText="Learn more"
      />
    ),
    3: (
      <InfoBox
        text="Led multiple projects to success over the years. Curious about the impact?"
        link="/projects"
        buttonText="Visit my portfolio"
      />
    ),
    4: (
      <InfoBox
        text="Need a project done or looking for a dev? I'm just a few keystrokes away."
        link="/contact"
        buttonText="Let's talk"
      />
    ),
  };

  return renderContent[currentStage] || null;
};

export default Popup;
