import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import MemorySection from "./MemorySection";

const PokemonMemorySection: React.FC = () => {
  const { audio } = useAppContext();

  const [state, setState] = useState<"preview" | "full" | "secret">("preview");

  const { itsgao } = audio;
  const handleImageClick = () => {
    if (!itsgao) return;
    setState((prev) =>
      prev === "preview" ? "full" : prev === "full" ? "secret" : "preview"
    );
  };

  useEffect(() => {
    if (state !== "full") return;
    if (!itsgao) return;
    itsgao.play();
  }, [state, itsgao]);
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
        {state === "preview" ? (
          <div className="blur-lg cursor-pointer">
            <img
              src="/megamind.jpg"
              className="max-w-full rounded-lg my-4 shadow-md max-h-96"
              alt="Megamind"
            />
            <p>Click me</p>
          </div>
        ) : state === "full" ? (
          <div>
            <img
              src="/forehead.jpg"
              className="max-w-full rounded-lg my-4 shadow-md max-h-96 cursor-pointer"
              alt="Forehead"
            />
            <p>it's 4head gao</p>
          </div>
        ) : (
          <div>
            <img
              src="kim.jpg"
              className="max-w-full rounded-lg my-4 shadow-md max-h-96 cursor-pointer"
              alt="Kim"
            />
          </div>
        )}
      </div>
    </MemorySection>
  );
};

export default PokemonMemorySection;
