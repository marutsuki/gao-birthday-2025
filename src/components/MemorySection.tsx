import React from "react";
import { useAppContext } from "../context/AppContext";
import clsx from "clsx";

interface MemorySectionProps {
  sectionIndex: number;
  title: string;
  buttonText: string;
  nextSectionIndex: number;
  onButtonClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const MemorySection: React.FC<MemorySectionProps> = ({
  sectionIndex,
  title,
  buttonText,
  nextSectionIndex,
  onButtonClick,
  className,
  children,
}) => {
  const { sectionRefs, scrollToSection } = useAppContext();

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
    scrollToSection(sectionRefs[nextSectionIndex]);
  };

  return (
    <>
      <div className="w-full h-[3px] bg-neon-gradient m-0 shadow-neon"></div>
      <section
        ref={sectionRefs[sectionIndex]}
        className={clsx(
          "min-h-screen flex flex-col justify-center items-center p-8 relative scroll-mt-4",
          className
        )}
      >
        <div className="w-fit max-w-full text-center">
          <h2 className="text-xl">{title}</h2>
          {children}
          <button
            className="mt-8 bg-neon-gradient text-white border-none py-3 px-6 rounded-full font-bold cursor-pointer
                     shadow-neon transition-all duration-300 hover:translate-y-[-3px] hover:shadow-neon-hover"
            onClick={handleButtonClick}
          >
            {buttonText}
          </button>
        </div>
      </section>
    </>
  );
};

export default MemorySection;
