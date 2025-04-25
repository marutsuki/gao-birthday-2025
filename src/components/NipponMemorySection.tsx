import React from "react";
import { useAppContext } from "../context/AppContext";
import MemorySection from "./MemorySection";

const NipponMemorySection: React.FC = () => {
  const { audio, happyvid, playVid } = useAppContext();

  const { nippon } = audio;
  const handleButtonClick = () => {
    playVid(happyvid);
  };

  return (
    <MemorySection
      sectionIndex={13}
      title="Click and hold"
      buttonText="More Memories"
      nextSectionIndex={14}
      onButtonClick={handleButtonClick}
    >
      <div
        className="w-fit max-w-full text-center cursor-pointer active:blur-none blur-lg"
        onClick={() => nippon && nippon.play()}
      >
        <div
          className="bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                      transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative"
        >
          <div className="absolute -inset-0.5 bg-neon-gradient -z-10 blur-lg opacity-70 rounded-xl"></div>
          <img src="/nippon.jpg" className="max-h-96" alt="Nippon" />
        </div>
      </div>
    </MemorySection>
  );
};

export default NipponMemorySection;
