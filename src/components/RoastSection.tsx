import { useAppContext } from "../context/AppContext";
import MemorySection from "./MemorySection";

const RoastSection: React.FC = () => {
  const { audio, sectionRefs } = useAppContext();
  const { oh, micdrop } = audio;
  const onPlay = () => {
    if (!oh || !micdrop) return;
    setTimeout(() => {
      oh.play();
      micdrop.play();
      if (sectionRefs[20].current) {
        sectionRefs[20].current.style.animation = "0.3s linear spin-grow";
      }
    }, 9000);
  };

  return (
    <MemorySection
      sectionIndex={20}
      title=""
      buttonText="More Memories"
      nextSectionIndex={21}
    >
      <div
        className="bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                      transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative flex gap-4"
      >
        <video controls className="max-h-96" onPlay={onPlay}>
          <source src="/roast.mov" type="video/mp4" />
        </video>
      </div>
    </MemorySection>
  );
};

export default RoastSection;
