import React from "react";
import { useAppContext } from "../context/AppContext";
import HeroSection from "./HeroSection";

const KevinSection: React.FC = () => {
  const { playVids } = useAppContext();

  const handleButtonClick = () => {
    playVids();
  };

  return (
    <HeroSection
      sectionIndex={2}
      title="Who's birthday is it"
      buttonText="Let's Celebrate!"
      nextSectionIndex={3}
      backgroundImage="url('https://source.unsplash.com/random/1920x1080/?celebration')"
      onButtonClick={handleButtonClick}
    >
      <div className="flex flex-col items-center">
        <div>
          <p className="text-xl md:text-2xl mb-8 text-neon-purple">
            and why is it Kevin's
          </p>
          <small>btw this is u and me</small>
        </div>

        <img src="/yuri.gif" alt="Yuri" />
      </div>
    </HeroSection>
  );
};

export default KevinSection;
