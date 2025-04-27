import { useAppContext } from "../context/AppContext";
import MemorySection from "./MemorySection";

const MouthSection: React.FC = () => {
  const { audio } = useAppContext();
  const { lipsmack } = audio;
  const onPlay = () => {
    if (!lipsmack) return;
    lipsmack.play();
  };

  return (
    <MemorySection
      sectionIndex={21}
      title=""
      buttonText="More Memories"
      nextSectionIndex={22}
    >
      <div
        className="bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                      transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative flex gap-4"
      >
        <video controls className="max-h-96" onPlay={onPlay}>
          <source src="/mouth.mp4" type="video/mp4" />
        </video>
      </div>
    </MemorySection>
  );
};

export default MouthSection;
