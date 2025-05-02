import { useState } from "react";
import MemorySection from "./MemorySection";
import { useAppContext } from "../context/AppContext";

const ThankYouSection: React.FC = () => {
  const { audio, setFinalSectionStarted } = useAppContext();
  const { snowHalation, curtain } = audio;
  const [reveal, setReveal] = useState(false);
  return (
    <MemorySection
      sectionIndex={23}
      title="Thank You"
      buttonText="Finally..."
      nextSectionIndex={24}
      onButtonClick={() => {
        setTimeout(() => {
          curtain?.pause();
          snowHalation?.play();
        }, 1179);
        setFinalSectionStarted(true);
      }}
    >
      <div
        onClick={() => setReveal(!reveal)}
        className="max-w-[40rem] bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                      transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative flex gap-4"
      >
        <p>
          Dear Kevin,
          <hr className="m-4" />
          Thank you for being a part of my life. We've done so many things
          together and I am grateful for all the memories we've shared along the
          way so far, both silly and serious (mostly stupid). I cherish the
          <br />
          <br />
          Thank you for helping me through my struggles and for being there when
          I needed somebody the most. Just know that I will in the same way
          always be there for you.
          <br />
          <br />
          You're hitting your ojisan phase now and halfway to 30. Take care of
          your health and finish your bubble tea for once.
          <br />
          <br />
          Here's to many more years of friendship, laughter, and adventures.
          <br />
          <br />
          <span className="text-7xl">🥂</span>
          <br />
          <br />
          Love, Lucien
          {reveal && <div className="flex flex-col gap-4">Suck my dick</div>}
        </p>
      </div>
    </MemorySection>
  );
};

export default ThankYouSection;
