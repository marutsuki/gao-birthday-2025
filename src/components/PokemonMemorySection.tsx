import React from "react";
import { useAppContext } from "../context/AppContext";
import MemorySection from "./MemorySection";

const PokemonMemorySection: React.FC = () => {
  const { showForehead, setShowForehead, audio } = useAppContext();

  const { itsgao } = audio;
  const handleImageClick = () => {
    if (!itsgao) return;
    itsgao.play();
    setShowForehead(!showForehead);
  };

  return (
    <MemorySection
      sectionIndex={9}
      title="Who is that pokemon!?"
      buttonText="More Memories"
      nextSectionIndex={10}
    >
      <div
        className="bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative"
        onClick={handleImageClick}
      >
        {showForehead ? (
          <div>
            <img
              src="/forehead.jpg"
              className="max-w-full rounded-lg my-4 shadow-md max-h-96"
              alt="Forehead"
            />
            <p>it's 4head gao</p>
          </div>
        ) : (
          <div className="blur-lg cursor-pointer">
            <img
              src="/megamind.jpg"
              className="max-w-full rounded-lg my-4 shadow-md max-h-96"
              alt="Megamind"
            />
            <p>Click me</p>
          </div>
        )}
      </div>
    </MemorySection>
  );
};

export default PokemonMemorySection;
