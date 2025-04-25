import React from "react";
import { useAppContext } from "../context/AppContext";
import MemorySection from "./MemorySection";

const JapanMemorySection: React.FC = () => {
  const { vid1, vid2, vid3 } = useAppContext();

  return (
    <MemorySection
      sectionIndex={3}
      title="Japan"
      buttonText="Next Memory"
      nextSectionIndex={4}
    >
      <div
        className="bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                  transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative flex gap-4"
      >
        <div className="absolute -inset-0.5 bg-neon-gradient -z-10 blur-lg opacity-70 rounded-xl"></div>
        <video ref={vid1} className="max-h-96" controls>
          <source src="/kevin_dancing.mp4" type="video/mp4" />
        </video>
        <video ref={vid2} className="max-h-96" controls>
          <source src="/washing_feet.mp4" type="video/mp4" />
        </video>
        <video ref={vid3} className="max-h-96" controls>
          <source src="/fapping.mp4" type="video/mp4" />
        </video>
      </div>
    </MemorySection>
  );
};

export default JapanMemorySection;
