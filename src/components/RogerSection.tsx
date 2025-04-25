import React from "react";
import HeroSection from "./HeroSection";
import { useAppContext } from "../context/AppContext";

const RogerSection: React.FC = () => {
  const { audio } = useAppContext();

  const { bgm0 } = audio;

  const handleButtonClick = () => {
    if (!bgm0) return;
    bgm0.play();
  };

  return (
    <HeroSection
      sectionIndex={1}
      title="No not you"
      buttonText="Reveal the man himself"
      nextSectionIndex={2}
      backgroundImage="url('https://source.unsplash.com/random/1920x1080/?celebration')"
      onButtonClick={handleButtonClick}
    >
      <div className="place-self-center">
        <img src="/roger.jpg" alt="Roger" />
      </div>
    </HeroSection>
  );
};

export default RogerSection;
