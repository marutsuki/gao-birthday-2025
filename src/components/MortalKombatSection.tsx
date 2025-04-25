import React from "react";
import { useAppContext } from "../context/AppContext";
import MemorySection from "./MemorySection";

const MortalKombatSection: React.FC = () => {
  const { shake } = useAppContext();

  const handleVideoPlay = () => {
    shake();
  };

  return (
    <MemorySection
      sectionIndex={18}
      title="mortal kombat"
      buttonText="More Memories"
      nextSectionIndex={19}
    >
      <div
        className="bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                  transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative flex flex-col items-center"
      >
        <video controls onPlay={handleVideoPlay}>
          <source src="/mortal.mp4" type="video/mp4" />
        </video>
      </div>
    </MemorySection>
  );
};

export default MortalKombatSection;
