import React from "react";
import { useAppContext } from "../context/AppContext";
import MemorySection from "./MemorySection";

const HappyBirthdaySection: React.FC = () => {
  const {
    happyvid,
    setShowBingChilling,
    bingChillingContainer,
    audio,
    glow,
    doubleboom,
    sectionRefs,
  } = useAppContext();

  const { bgm0, bgm2 } = audio;
  const handleButtonClick = () => {
    if (!bgm0 || !bgm2) return;
    bgm0.pause();
    bgm2.play();
    setShowBingChilling(true);
    glow(bingChillingContainer, 8750, 15900);
    doubleboom(sectionRefs[15], 44500);
  };

  const handleVideoPlay = () => {
    glow(sectionRefs[14], 8500, null);
  };

  return (
    <MemorySection
      sectionIndex={14}
      title="HAPPY BIRTHDAY"
      buttonText="More Memories"
      nextSectionIndex={15}
      onButtonClick={handleButtonClick}
    >
      <div
        className="bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                  transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative"
      >
        <div className="absolute -inset-0.5 bg-neon-gradient -z-10 blur-lg opacity-70 rounded-xl"></div>
        <video
          ref={happyvid}
          controls
          className="max-h-96"
          onPlay={handleVideoPlay}
        >
          <source src="/happy.mp4" type="video/mp4" />
        </video>
      </div>
    </MemorySection>
  );
};

export default HappyBirthdaySection;
