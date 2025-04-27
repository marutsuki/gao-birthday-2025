import React from "react";
import { useAppContext } from "../context/AppContext";

interface HeroSectionProps {
  sectionIndex: number;
  title: string;
  subtitle?: string;
  buttonText: string;
  nextSectionIndex: number;
  backgroundImage?: string;
  onButtonClick?: () => void;
  children?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  sectionIndex,
  title,
  subtitle,
  buttonText,
  nextSectionIndex,
  backgroundImage,
  onButtonClick,
  children,
}) => {
  const { sectionRefs, scrollToSection } = useAppContext();

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
    scrollToSection(sectionRefs[nextSectionIndex]);
  };

  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(18, 18, 18, 0.8), rgba(18, 18, 18, 0.9)), ${backgroundImage}`,
      }
    : {};

  return (
    <section
      ref={sectionRefs[sectionIndex]}
      className="min-h-screen flex flex-col justify-center items-center p-8 relative scroll-mt-4 bg-cover bg-center relative overflow-hidden"
      style={backgroundStyle}
    >
      {/* Hero section overlay */}
      <div className="absolute inset-0 bg-neon-gradient/20 z-10"></div>

      <div className="relative z-20 w-fit max-w-full text-center">
        <h1 className="text-4xl md:text-6xl mb-4">{title}</h1>
        {subtitle && (
          <p className="text-xl md:text-2xl mb-8 text-neon-purple">
            {subtitle}
          </p>
        )}
        {children}
        <button
          className="mt-8 bg-linear-90 from-[#9c27b0] to-[#3f51b5] text-white border-none py-3 px-6 rounded-full font-bold cursor-pointer
                   shadow-neon transition-all duration-300 hover:translate-y-[-3px] hover:shadow-neon-hover"
          onClick={handleButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
