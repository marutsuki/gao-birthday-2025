import React from "react";
import { useAppContext } from "../context/AppContext";
import MemorySection from "./MemorySection";

const BingChillingSection: React.FC = () => {
  const {
    showBingChilling,
    setShowBingChilling,
    audio,
    bingChillingContainer,
    renderConfetti,
  } = useAppContext();

  const { bgm2, bgm3 } = audio;

  const handleButtonClick = () => {
    if (!bgm2 || !bgm3) return;
    bgm2.pause();
    bgm3.play();
    setShowBingChilling(false);
  };

  return (
    <MemorySection
      sectionIndex={15}
      title="現在我有冰淇淋 我很喜歡冰淇淋"
      buttonText="More Memories"
      nextSectionIndex={16}
      onButtonClick={handleButtonClick}
    >
      <div
        ref={bingChillingContainer}
        className="bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                  transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative flex gap-4"
      >
        <div className="absolute -inset-0.5 bg-neon-gradient -z-10 blur-lg opacity-70 rounded-xl"></div>
        <video autoPlay loop muted>
          <source src="/dance1.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col items-center justify-between">
          <img src="/laoganma.gif" alt="Laoganma" />
          <img src="/bop.gif" alt="Bop" />
        </div>
        <video autoPlay loop muted>
          <source src="/dance2.mp4" type="video/mp4" />
        </video>
      </div>
      {showBingChilling && (
        <>
          {renderConfetti("🍦")}
          {renderConfetti("🥦")}
        </>
      )}
    </MemorySection>
  );
};

export default BingChillingSection;
