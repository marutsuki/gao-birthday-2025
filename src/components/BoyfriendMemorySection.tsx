import React from "react";
import { useAppContext } from "../context/AppContext";
import MemorySection from "./MemorySection";

const BoyfriendMemorySection: React.FC = () => {
  const { revealJoke2, setRevealJoke2, audio } = useAppContext();

  const { pokemon } = audio;

  const handleButtonClick = () => {
    if (!pokemon) return;
    pokemon.play();
  };

  const { seat } = audio;

  const reveal = () => {
    if (!seat) return;
    seat.play();
  };

  return (
    <MemorySection
      sectionIndex={8}
      title="Who is my boyfriend?"
      buttonText="More Memories"
      nextSectionIndex={9}
      onButtonClick={handleButtonClick}
    >
      <small>Click to reveal</small>
      <div
        className="bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                  transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative"
      >
        <div className="absolute -inset-0.5 bg-neon-gradient -z-10 blur-lg opacity-70 rounded-xl"></div>
        {revealJoke2 ? (
          <div>
            <img
              src="/kevin.jpg"
              className="max-w-full rounded-lg my-4 shadow-md max-h-96"
              alt="Kevin"
            />
            <p>and why is it Kevin</p>
          </div>
        ) : (
          <button
            className="rounded-lg border border-transparent px-5 py-2.5 text-base font-medium 
                         bg-dark-surface cursor-pointer transition-all duration-250 relative overflow-hidden"
            onClick={() => {
              setRevealJoke2(true);
              reveal();
            }}
          >
            <img
              src="/kevin.jpg"
              className="max-w-full rounded-lg my-4 shadow-md max-h-96 blur-2xl"
              alt="Kevin blurred"
            />
          </button>
        )}
      </div>
    </MemorySection>
  );
};

export default BoyfriendMemorySection;
