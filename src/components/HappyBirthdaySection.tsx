import React, { useRef } from "react";
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
    voicecrack,
  } = useAppContext();

  const vid = useRef<HTMLDivElement | null>(null);

  const { bgm0, bgm2 } = audio;
  const handleButtonClick = () => {
    if (!bgm0 || !bgm2) return;
    bgm0.pause();
    bgm2.play();
    happyvid.current?.pause();
    setShowBingChilling(true);
    glow(bingChillingContainer, 8750, 16000);
    doubleboom(sectionRefs[15], 44500);
  };

  const handleVideoPlay = () => {
    voicecrack(vid, 7700);
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
        ref={vid}
        className="bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                  transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative"
      >
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
