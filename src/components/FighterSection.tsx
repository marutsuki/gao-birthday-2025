import React from "react";
import MemorySection from "./MemorySection";
import { useAppContext } from "../context/AppContext";

const FighterSection: React.FC = () => {
  const { audio } = useAppContext();
  const { bgm4 } = audio;
  const handleButtonClick = () => {
    if (!bgm4) return;
    bgm4.pause();
  };

  return (
    <MemorySection
      sectionIndex={17}
      title=""
      buttonText="More Memories"
      nextSectionIndex={18}
      onButtonClick={handleButtonClick}
    >
      <div
        className="bg-[url('/bg.png')] rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                  transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative flex gap-4"
      >
        <img
          src="/fighter.png"
          className="max-w-full rounded-lg my-4 shadow-md max-h-96 animate-spin"
          style={{
            animationDelay: "0.5s",
          }}
          alt="Fighter"
        />
        <img
          src="/fighter.png"
          className="max-w-full rounded-lg my-4 shadow-md max-h-96 animate-spin"
          alt="Fighter"
        />
        <ul className="flex items-end flex-col bg-[rgba(0,0,0,0.5)] rounded-lg p-4">
          <li>Unity to do list UPDATED</li>
          <li>kick animation ME</li>
          <li>knock down animation ME</li>
          <li>sound effects SOMEONE</li>
          <li>air attack animation ME</li>
          <li>player change direction LUCIEN</li>
          <li>color change for player PLACHOLDER</li>
          <li>player double jump error LUCIEN</li>
          <li>character select back button ROGER</li>
          <li>character design LUCIEN + ME</li>
          <li>story??? dunno bonus mode (unicycle) someone</li>
        </ul>
      </div>
    </MemorySection>
  );
};

export default FighterSection;
