import React from "react";
import HeroSection from "./HeroSection";

const IntroSection: React.FC = () => {
  return (
    <HeroSection
      sectionIndex={0}
      title="Guess who's big day it is..."
      subtitle="抠你的屁股"
      buttonText="Reveal the man himself"
      nextSectionIndex={1}
    />
  );
};

export default IntroSection;
