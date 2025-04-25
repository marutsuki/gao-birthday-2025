import React from "react";
import MemorySection from "./MemorySection";

const BrushMemorySection: React.FC = () => {
  return (
    <MemorySection
      sectionIndex={11}
      title="😏"
      buttonText="More Memories"
      nextSectionIndex={12}
    >
      <div
        className="bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                  transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative"
      >
        <div className="absolute -inset-0.5 bg-neon-gradient -z-10 blur-lg opacity-70 rounded-xl"></div>
        <video autoPlay muted loop className="max-h-96">
          <source src="/brush.mp4" type="video/mp4" />
        </video>
      </div>
    </MemorySection>
  );
};

export default BrushMemorySection;
