import React from "react";
import MemorySection from "./MemorySection";

const LucienMemorySection: React.FC = () => {
  return (
    <MemorySection
      sectionIndex={4}
      title="lucien core"
      buttonText="More Memories"
      nextSectionIndex={5}
    >
      <div
        className="bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                  transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative flex gap-4"
      >
        <img
          src="/lucien_looking_up.jpg"
          className="max-w-full rounded-lg my-4 shadow-md max-h-96"
          alt="Lucien looking up"
        />
        <img
          src="/facetime.jpg"
          className="max-w-full rounded-lg my-4 shadow-md max-h-96"
          alt="FaceTime"
        />
        <img
          src="/graduation.jpg"
          className="max-w-full rounded-lg my-4 shadow-md max-h-96"
          alt="Graduation"
        />
      </div>
    </MemorySection>
  );
};

export default LucienMemorySection;
