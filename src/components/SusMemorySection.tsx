import React from "react";
import { useAppContext } from "../context/AppContext";
import MemorySection from "./MemorySection";
import clsx from "clsx";

const SusMemorySection: React.FC = () => {
  const { showSusSection, setShowSusSection, audio } = useAppContext();

  const { nice } = audio;

  return (
    <MemorySection
      sectionIndex={6}
      title="You knew this section was coming"
      buttonText="More Memories"
      nextSectionIndex={7}
    >
      {!showSusSection && (
        <div>
          <p>Not safe for work</p>
          <small>Click to reveal</small>
        </div>
      )}
      <div
        onClick={() => {
          setShowSusSection(!showSusSection);
          if (!nice) return;
          nice.play();
        }}
        className={clsx(
          `bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                  transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative flex gap-4 cursor-pointer`,
          { "blur-lg": !showSusSection }
        )}
      >
        <img
          src="/aria.jpg"
          className="max-w-full rounded-lg my-4 shadow-md max-h-82"
          alt="Aria"
        />
        <img
          src="/mouth.jpg"
          className="max-w-full rounded-lg my-4 shadow-md max-h-82"
          alt="Mouth"
        />
        <img
          src="/feet.jpg"
          className="max-w-full rounded-lg my-4 shadow-md max-h-82"
          alt="Feet"
        />
        <img
          src="/roger_ogre.jpg"
          className="max-w-full rounded-lg my-4 shadow-md max-h-82"
          alt="Roger Ogre"
        />
      </div>
    </MemorySection>
  );
};

export default SusMemorySection;
