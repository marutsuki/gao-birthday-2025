import React, {
  createContext,
  useContext,
  useRef,
  useState,
  ReactNode,
} from "react";

type AudioStore = {
  [key: string]: HTMLAudioElement | undefined;
};

const audioStore: AudioStore = {
  bgm0: new Audio("/sailing.mp3"),
  bgm1: new Audio("/shutup.mp3"),
  bgm2: new Audio("/bgm2.mp3"),
  bgm3: new Audio("/kanden.mp3"),
  bgm4: new Audio("/p_ah.mp3"),
  seat: new Audio("/seat.mp3"),
  pokemon: new Audio("/pokemon.mp3"),
  itsgao: new Audio("/itsgao.mp3"),
  soldier: new Audio("/soldier.mp3"),
  nice: new Audio("/nice.mp3"),
  curtain: new Audio("/curtain.mp3"),
  nippon: new Audio("/nippon.mp3"),
  oh: new Audio("/oh.mp3"),
  micdrop: new Audio("/micdrop.mp3"),
  lipsmack: new Audio("/lipsmack.mp3"),
};

// Define the context type
interface AppContextType {
  // State
  showForehead: boolean;
  setShowForehead: React.Dispatch<React.SetStateAction<boolean>>;
  revealJoke: boolean;
  setRevealJoke: React.Dispatch<React.SetStateAction<boolean>>;
  revealJoke2: boolean;
  setRevealJoke2: React.Dispatch<React.SetStateAction<boolean>>;
  showBingChilling: boolean;
  setShowBingChilling: React.Dispatch<React.SetStateAction<boolean>>;
  showSusSection: boolean;
  setShowSusSection: React.Dispatch<React.SetStateAction<boolean>>;
  soldierMuted: boolean;
  setSoldierMuted: React.Dispatch<React.SetStateAction<boolean>>;

  // Video refs
  vid1: React.RefObject<HTMLVideoElement | null>;
  vid2: React.RefObject<HTMLVideoElement | null>;
  vid3: React.RefObject<HTMLVideoElement | null>;
  happyvid: React.RefObject<HTMLVideoElement | null>;
  soldierVid: React.RefObject<HTMLVideoElement | null>;

  // Container refs
  bingChillingContainer: React.RefObject<HTMLDivElement | null>;

  // Section refs
  sectionRefs: React.RefObject<HTMLDivElement | null>[];

  // Audio elements
  audio: AudioStore;

  // Utility functions
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
  renderConfetti: (emoji: string) => React.ReactNode[];
  voicecrack: (
    ref: React.RefObject<HTMLDivElement | null>,
    timeout: number
  ) => void;
  glow: (
    ref: React.RefObject<HTMLDivElement | null>,
    timeout: number | null,
    timeout2: number | null,
    infinite?: boolean
  ) => void;
  doubleboom: (
    ref: React.RefObject<HTMLDivElement | null>,
    timeout: number
  ) => void;
  shake: () => void;
  playVids: () => void;
  playVid: (vid: React.RefObject<HTMLVideoElement | null>) => void;
}

// Create the context with a default undefined value
const AppContext = createContext<AppContextType | undefined>(undefined);

// Custom hook to create refs outside of render
const useSectionRefs = (
  count: number
): React.RefObject<HTMLDivElement | null>[] => {
  const refs: React.RefObject<HTMLDivElement | null>[] = [];

  // Create refs outside of render
  for (let i = 0; i < count; i++) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    refs.push(useRef<HTMLDivElement>(null));
  }

  return refs;
};

// Provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // State
  const [showForehead, setShowForehead] = useState(false);
  const [revealJoke, setRevealJoke] = useState(false);
  const [revealJoke2, setRevealJoke2] = useState(false);
  const [showBingChilling, setShowBingChilling] = useState(false);
  const [showSusSection, setShowSusSection] = useState(false);
  const [soldierMuted, setSoldierMuted] = useState(false);

  // Video refs
  const vid1 = useRef<HTMLVideoElement>(null);
  const vid2 = useRef<HTMLVideoElement>(null);
  const vid3 = useRef<HTMLVideoElement>(null);
  const happyvid = useRef<HTMLVideoElement>(null);
  const soldierVid = useRef<HTMLVideoElement>(null);

  // Container refs
  const bingChillingContainer = useRef<HTMLDivElement>(null);

  // Create an array of section refs (22 sections from 0 to 21)
  const sectionRefs = useSectionRefs(22);

  // Function to scroll to the next section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Generate random confetti elements
  const renderConfetti = (emoji: string) => {
    const confetti = [];
    for (let i = 0; i < 50; i++) {
      confetti.push(
        <div
          key={i}
          className="absolute text-6xl w-2.5 h-2.5 bg-neon-purple rounded-full animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            backgroundColor: Math.random() > 0.5 ? "#bb86fc" : "#3f51b5",
          }}
        >
          {emoji}
        </div>
      );
    }
    return confetti;
  };

  const voicecrack = (
    ref: React.RefObject<HTMLDivElement | null>,
    timeout: number
  ) => {
    const screen = ref.current;
    if (screen) {
      setTimeout(() => {
        screen.style.animation = "linear voicecrack 1.9s forwards";
      }, timeout);
    }
  };

  const glow = (
    ref: React.RefObject<HTMLDivElement | null>,
    timeout: number | null,
    timeout2: number | null,
    infinite: boolean = true
  ) => {
    const screen = ref.current;
    if (screen) {
      if (timeout) {
        setTimeout(() => {
          screen.style.animation =
            "glow 0.4615s " + (infinite ? "infinite" : "forwards");
        }, timeout);
      }
      if (timeout2) {
        setTimeout(() => {
          screen.style.animation =
            "super-glow 0.4615s " + (infinite ? "infinite" : "forwards");
        }, timeout2);
      }
    }
  };

  const doubleboom = (
    ref: React.RefObject<HTMLDivElement | null>,
    timeout: number
  ) => {
    const screen = ref.current;
    if (screen) {
      setTimeout(() => {
        screen.style.animation = "doubleboom 0.82s forwards";
      }, timeout);
    }
  };

  const shake = () => {
    const screen = sectionRefs[18].current;
    if (screen) {
      setTimeout(() => {
        screen.style.animation = "spin 0.3s";
      }, 4000);
      setTimeout(() => {
        screen.style.animation = "punch 8s forwards";
      }, 11500);
    }
  };

  const playVids = () => {
    vid1.current?.play();
    vid2.current?.play();
    vid3.current?.play();
  };

  const playVid = (vid: React.RefObject<HTMLVideoElement | null>) => {
    if (vid.current) {
      vid.current.play();
    }
  };

  // Create the context value object
  const contextValue: AppContextType = {
    // State
    showForehead,
    setShowForehead,
    revealJoke,
    setRevealJoke,
    revealJoke2,
    setRevealJoke2,
    showBingChilling,
    setShowBingChilling,
    showSusSection,
    setShowSusSection,
    soldierMuted,
    setSoldierMuted,

    // Video refs
    vid1,
    vid2,
    vid3,
    happyvid,
    soldierVid,

    // Container refs
    bingChillingContainer,

    // Section refs
    sectionRefs,

    // Audio elements
    audio: audioStore,

    // Utility functions
    scrollToSection,
    renderConfetti,
    voicecrack,
    glow,
    doubleboom,
    shake,
    playVids,
    playVid,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
