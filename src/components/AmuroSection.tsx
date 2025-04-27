import { FC, useRef } from "react";
import MemorySection from "./MemorySection";
import { useAppContext } from "../context/AppContext";

const AmuroSection: FC = () => {
  const gundam = useRef<HTMLImageElement>(null);
  const vid = useRef<HTMLVideoElement>(null);
  const amuro1 = useRef<HTMLHeadingElement>(null);
  const amuro2 = useRef<HTMLHeadingElement>(null);
  const amuro3 = useRef<HTMLHeadingElement>(null);
  const amuro4 = useRef<HTMLHeadingElement>(null);
  const amuro5 = useRef<HTMLHeadingElement>(null);
  const { audio, sectionRefs } = useAppContext();
  const { curtain } = audio;

  const gundamFly = () => {
    if (gundam.current) {
      gundam.current.animate(
        [
          { transform: "translate(0, -100px)" },
          { transform: "translate(3000px, 100px)" },
        ],
        {
          duration: 3000,
          easing: "ease-in-out",
        }
      );
    }
  };

  const gundamFlyBack = () => {
    if (gundam.current) {
      gundam.current.animate(
        [
          { transform: "translate(3000px, -100px) scale(-1, -1)" },
          { transform: "translate(0, 100px) scale(-1, -1)" },
        ],
        {
          duration: 3000,
          easing: "ease-in-out",
        }
      );
    }
  };

  const gundamHit = () => {
    if (vid.current) {
      vid.current.play();
      vid.current.style.animation = "gundam-hit 0.6s forwards";
    }
  };

  const amuroAmuroAmuro = () => {
    setTimeout(() => {
      if (amuro1.current) {
        amuro1.current.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 1000,
        });
      }
    }, 17700);

    setTimeout(() => {
      if (amuro2.current) {
        amuro2.current.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 1000,
        });
      }
    }, 18700);

    setTimeout(() => {
      if (amuro3.current) {
        amuro3.current.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 1000,
        });
      }
    }, 22300);

    setTimeout(() => {
      if (amuro4.current) {
        amuro4.current.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 1000,
        });
      }
    }, 25000);

    setTimeout(() => {
      if (amuro5.current) {
        amuro5.current.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 1000,
        });
      }
    }, 26250);

    setTimeout(() => {
      if (vid.current) {
        vid.current.animate(
          [
            { transform: "scale(1) rotate(0deg)" },
            { transform: "scale(0.5) rotate(360deg)" },
            { transform: "scale(0) rotate(720deg)" },
          ],
          {
            duration: 1000,
          }
        );
      }
    }, 35000);
  };

  return (
    <MemorySection
      sectionIndex={22}
      title="OH NO AMURO"
      buttonText="More Memories"
      nextSectionIndex={23}
      onButtonClick={() => {
        if (vid.current) {
          vid.current.pause();
        }
        curtain?.play();
        setTimeout(() => {
          if (sectionRefs[23].current) {
            sectionRefs[23].current.style.animation = "pulsate 0.769s infinite";
          }
        }, 1000);
      }}
    >
      <img
        src="/gundam.png"
        alt="Gundam"
        className="absolute max-h-96 animate-float right-full z-10"
        ref={gundam}
      />
      <div
        className="bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
            transition-all duration-300 hover:shadow-neon flex flex-col items-center"
      >
        <h2
          ref={amuro1}
          className="text-4xl absolute left-1/4 top-1/4 opacity-0 rotate-12 pointer-events-none"
        >
          NO AMURO
        </h2>
        <h2
          ref={amuro2}
          className="text-4xl absolute left-3/4 top-1/2 opacity-0 -rotate-45 pointer-events-none"
        >
          AMURO
        </h2>
        <h2
          ref={amuro3}
          className="text-4xl absolute left-2/12 top-7/12 opacity-0 rotate-45 pointer-events-none"
        >
          OH NO AMURO 😫
        </h2>

        <h2
          ref={amuro4}
          className="absolute left-2/12 top-1/2 z-0 max-h-96 opacity-0 text-4xl pointer-events-none"
        >
          GUNDAM
        </h2>
        <div
          className="absolute left-2/12 top-1/2 z-0 max-h-96 opacity-0 pointer-events-none"
          ref={amuro5}
        >
          <img
            src="/gundam_hashin.png"
            alt="Gundam Hashing"
            className=" max-h-96"
          />
          <h2 className="text-4xl">HASSHIN</h2>
        </div>

        <video
          ref={vid}
          controls
          className="max-h-96"
          onPlay={() => {
            setTimeout(() => {
              gundamFly();
            }, 2000);
            setTimeout(() => {
              gundamFlyBack();
            }, 10000);
            setTimeout(() => {
              gundamHit();
            }, 14000);

            amuroAmuroAmuro();
          }}
        >
          <source src="/amuro.mp4" type="video/mp4" />
        </video>
      </div>
    </MemorySection>
  );
};

export default AmuroSection;
