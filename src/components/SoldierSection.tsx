import React from "react";
import { useAppContext } from "../context/AppContext";
import MemorySection from "./MemorySection";

const SoldierSection: React.FC = () => {
  const { soldierVid, soldierMuted, setSoldierMuted, audio } = useAppContext();

  const { soldier } = audio;
  const handleVideoPlay = () => {
    setTimeout(() => {
      if (!soldier) return;
      soldier.play();
      if (soldierVid.current) {
        setSoldierMuted(true);
      }
    }, 15500);
  };

  return (
    <MemorySection
      sectionIndex={19}
      title=""
      buttonText="More Memories"
      nextSectionIndex={20}
    >
      <div className="overflow-hidden w-fit max-w-full text-center">
        <video
          ref={soldierVid}
          controls
          muted={soldierMuted}
          onPlay={handleVideoPlay}
        >
          <source src="/soldier.mp4" type="video/mp4" />
        </video>
      </div>
    </MemorySection>
  );
};

export default SoldierSection;
