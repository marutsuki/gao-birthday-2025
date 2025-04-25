import React from "react";
import { useAppContext } from "../context/AppContext";
import MemorySection from "./MemorySection";

const YonezuSection: React.FC = () => {
  const { audio } = useAppContext();

  const { bgm4 } = audio;
  const handleButtonClick = () => {
    if (!bgm4) return;
    bgm4.play();
  };

  return (
    <MemorySection
      sectionIndex={16}
      title="kevin yonezu"
      buttonText="More Memories"
      nextSectionIndex={17}
      onButtonClick={handleButtonClick}
    >
      <div
        className="bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                  transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative flex gap-4"
      >
        <img
          src="/kevin_yonezu.jpg"
          className="max-w-full rounded-lg my-4 shadow-md animate-blur max-h-96"
          style={{
            animationDelay: "0.5s",
          }}
          alt="Kevin Yonezu"
        />
        <img
          src="/kenshi_yonezu.jpg"
          className="max-w-full rounded-lg my-4 shadow-md animate-blur max-h-96"
          alt="Kenshi Yonezu"
        />
      </div>
    </MemorySection>
  );
};

export default YonezuSection;
