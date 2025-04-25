import React from "react";
import MemorySection from "./MemorySection";

const IdentityMemorySection: React.FC = () => {
  return (
    <MemorySection
      sectionIndex={5}
      title="You are"
      buttonText="More Memories"
      nextSectionIndex={6}
    >
      <div className="mt-8 flex justify-center gap-4">
        <div
          className="bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                    transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative"
        >
          <div className="absolute -inset-0.5 bg-neon-gradient -z-10 blur-lg opacity-70 rounded-xl"></div>
          <h3>shit black manta player</h3>
          <img
            src="/sentinel.png"
            className="max-w-full rounded-lg my-4 shadow-md"
            alt="Sentinel"
          />
          <p>we never hit diamond in brawlhalla (duo queue)</p>
        </div>
        <div
          className="bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                    transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative"
        >
          <div className="absolute -inset-0.5 bg-neon-gradient -z-10 blur-lg opacity-70 rounded-xl"></div>
          <h3>stole my identity</h3>
          <img
            src="/identity.jpg"
            className="max-w-full rounded-lg my-4 shadow-md"
            alt="Identity"
          />
          <p>then i stole ur identity for 6 months on facebook</p>
        </div>
      </div>
    </MemorySection>
  );
};

export default IdentityMemorySection;
