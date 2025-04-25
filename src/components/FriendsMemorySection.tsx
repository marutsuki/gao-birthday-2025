import React from "react";
import MemorySection from "./MemorySection";

const FriendsMemorySection: React.FC = () => {
  return (
    <MemorySection
      sectionIndex={10}
      title="kevin and friends"
      buttonText="More Memories"
      nextSectionIndex={11}
    >
      <div
        className="bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                  transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative flex gap-4"
      >
        <img
          src="/chinese_cartoon.jpg"
          className="max-w-full rounded-lg my-4 shadow-md max-h-96 blur-lg hover:blur-none"
          alt="Chinese cartoon"
        />
        <img
          src="/gao_chin.jpg"
          className="max-w-full rounded-lg my-4 shadow-md max-h-96 blur-lg hover:blur-none"
          alt="Gao chin"
        />
        <img
          src="/gundam.jpg"
          className="max-w-full rounded-lg my-4 shadow-md max-h-96 blur-lg hover:blur-none"
          alt="Gundam"
        />
        <img
          src="/tower.jpg"
          className="max-w-full rounded-lg my-4 shadow-md max-h-96 blur-lg hover:blur-none"
          alt="Tower"
        />
      </div>
    </MemorySection>
  );
};

export default FriendsMemorySection;
