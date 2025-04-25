import React from "react";
import { useAppContext } from "../context/AppContext";
import MemorySection from "./MemorySection";

const JokeMemorySection: React.FC = () => {
  const { revealJoke, setRevealJoke } = useAppContext();

  return (
    <MemorySection
      sectionIndex={7}
      title="Why was 7 scared of 8?"
      buttonText="More Memories"
      nextSectionIndex={8}
    >
      <small>Click to reveal</small>
      <div
        className="bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                  transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative"
      >
        <div className="bg-neon-gradient -z-10 opacity-70 rounded-xl">
          {revealJoke ? (
            <div className="flex flex-col gap-4">
              <img src="/apple.jpg" className="max-h-96" alt="Apple" />
              <p>cause 6 7 8</p>
            </div>
          ) : (
            <div
              className="blur-lg cursor-pointer flex flex-col gap-4"
              onClick={() => setRevealJoke(true)}
            >
              <img src="/apple.jpg" className="max-h-96" alt="Apple" />
              <p>cause 6 7 8</p>
            </div>
          )}
        </div>
      </div>
    </MemorySection>
  );
};

export default JokeMemorySection;
