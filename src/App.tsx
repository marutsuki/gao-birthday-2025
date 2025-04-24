import { useEffect, useRef, useState } from "react";
import "./index.css";

const audio = new Audio("/nippon.mp3");

const bgm0 = new Audio("/sailing.mp3");
const bgm2 = new Audio("/bgm2.mp3");
const bgm3 = new Audio("/kanden.mp3");
const bgm4 = new Audio("/p_ah.mp3");

function App() {
  // References for each section

  const [showForehead, setShowForehead] = useState(false);
  const [revealJoke, setRevealJoke] = useState(false);
  const [revealJoke2, setRevealJoke2] = useState(false);
  const [showBingChilling, setShowBingChilling] = useState(false);

  const section0Ref = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);
  const section6Ref = useRef<HTMLDivElement>(null);
  const section7Ref = useRef<HTMLDivElement>(null);
  const section8Ref = useRef<HTMLDivElement>(null);
  const section9Ref = useRef<HTMLDivElement>(null);
  const section10Ref = useRef<HTMLDivElement>(null);
  const section11Ref = useRef<HTMLDivElement>(null);
  const section12Ref = useRef<HTMLDivElement>(null);
  const section13Ref = useRef<HTMLDivElement>(null);
  const section14Ref = useRef<HTMLDivElement>(null);
  const section15Ref = useRef<HTMLDivElement>(null);
  const section16Ref = useRef<HTMLDivElement>(null);
  const section17Ref = useRef<HTMLDivElement>(null);
  const section18Ref = useRef<HTMLDivElement>(null);

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

  const shake = () => {
    const screen = section17Ref.current;
    if (screen) {
      setTimeout(() => {
        screen.style.animation = "spin 0.3s";
      }, 4000);
      setTimeout(() => {
        screen.style.animation = "punch 8s forwards";
      }, 11500);
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section
        ref={section0Ref}
        className="min-h-screen flex flex-col justify-center items-center p-8 relative scroll-mt-4"
      >
        <div className="w-fit max-w-full text-center">
          <h2>Guess who's big day it is...</h2>
          <p className="text-xl md:text-2xl mb-8 text-neon-purple">
            抠你的屁股
          </p>
          <button
            className="mt-8 bg-neon-gradient text-white border-none py-3 px-6 rounded-full font-bold cursor-pointer
                     shadow-neon transition-all duration-300 hover:translate-y-[-3px] hover:shadow-neon-hover"
            onClick={() => scrollToSection(section1Ref)}
          >
            Reveal the man himself
          </button>
        </div>
      </section>
      <section
        ref={section1Ref}
        className="min-h-screen flex flex-col justify-center items-center p-8 relative scroll-mt-4 bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(18, 18, 18, 0.8), rgba(18, 18, 18, 0.9)), url('https://source.unsplash.com/random/1920x1080/?celebration')",
        }}
      >
        {/* Hero section overlay */}
        <div className="absolute inset-0 bg-neon-gradient/20 z-10"></div>

        <div className="relative z-20 w-fit max-w-full text-center">
          <h1 className="text-4xl md:text-6xl mb-4">No not you</h1>
          <div className="place-self-center">
            <img src="/roger.jpg" />
          </div>
          <button
            className="mt-8 bg-neon-gradient text-white border-none py-3 px-6 rounded-full font-bold cursor-pointer
                     shadow-neon transition-all duration-300 hover:translate-y-[-3px] hover:shadow-neon-hover"
            onClick={() => {
              bgm0.play();
              scrollToSection(section2Ref);
            }}
          >
            Reveal the man himself
          </button>
        </div>
      </section>
      <section
        ref={section2Ref}
        className="min-h-screen flex flex-col justify-center items-center p-8 relative scroll-mt-4 bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(18, 18, 18, 0.8), rgba(18, 18, 18, 0.9)), url('https://source.unsplash.com/random/1920x1080/?celebration')",
        }}
      >
        {/* Hero section overlay */}
        <div className="absolute inset-0 bg-neon-gradient/20 z-10"></div>

        <div className="relative z-20 w-fit max-w-full text-center">
          <h1 className="text-4xl md:text-6xl mb-4">Who's birthday is it</h1>

          <div className="flex flex-col items-center">
            <div>
              <p className="text-xl md:text-2xl mb-8 text-neon-purple">
                and why is it Kevin's
              </p>
              <small>btw this is u and me</small>
            </div>

            <img src="/yuri.gif" />
          </div>
          <button
            className="mt-8 bg-neon-gradient text-white border-none py-3 px-6 rounded-full font-bold cursor-pointer
                     shadow-neon transition-all duration-300 hover:translate-y-[-3px] hover:shadow-neon-hover"
            onClick={() => scrollToSection(section3Ref)}
          >
            Let's Celebrate!
          </button>
          {renderConfetti("🤰")}
        </div>
      </section>

      <div className="w-full h-[3px] bg-neon-gradient m-0 shadow-neon"></div>

      {/* Memory Section 1 */}
      <section
        ref={section3Ref}
        className="min-h-screen flex flex-col justify-center items-center p-8 relative scroll-mt-4"
      >
        <div className="w-fit max-w-full text-center">
          <h2>Japan</h2>
          <div
            className="bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                        transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative flex gap-4"
          >
            <div className="absolute -inset-0.5 bg-neon-gradient -z-10 blur-lg opacity-70 rounded-xl"></div>
            <video className="max-h-96" controls>
              <source src="/kevin_dancing.mp4" type="video/mp4" />
            </video>
            <video className="max-h-96" controls>
              <source src="/washing_feet.mp4" type="video/mp4" />
            </video>
            <video className="max-h-96" controls>
              <source src="/fapping.mp4" type="video/mp4" />
            </video>
          </div>
          <button
            className="mt-8 bg-neon-gradient text-white border-none py-3 px-6 rounded-full font-bold cursor-pointer
                     shadow-neon transition-all duration-300 hover:translate-y-[-3px] hover:shadow-neon-hover"
            onClick={() => scrollToSection(section4Ref)}
          >
            Next Memory
          </button>
        </div>
      </section>

      <div className="w-full h-[3px] bg-neon-gradient m-0 shadow-neon"></div>

      {/* Memory Section 2 */}
      <section
        ref={section4Ref}
        className="min-h-screen flex flex-col justify-center items-center p-8 relative scroll-mt-4"
      >
        <div className="w-fit max-w-full text-center">
          <h2>lucien core</h2>
          <div
            className="bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                        transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative flex gap-4"
          >
            <img
              src="/lucien_looking_up.jpg"
              className="max-w-full rounded-lg my-4 shadow-md max-h-96"
            />
            <img
              src="/facetime.jpg"
              className="max-w-full rounded-lg my-4 shadow-md max-h-96"
            />
            <img
              src="/graduation.jpg"
              className="max-w-full rounded-lg my-4 shadow-md max-h-96"
            />
          </div>
          <button
            className="mt-8 bg-neon-gradient text-white border-none py-3 px-6 rounded-full font-bold 
                     shadow-neon transition-all duration-300 hover:translate-y-[-3px] hover:shadow-neon-hover cursor-pointer"
            onClick={() => scrollToSection(section5Ref)}
          >
            More Memories
          </button>
        </div>
      </section>

      <div className="w-full h-[3px] bg-neon-gradient m-0 shadow-neon"></div>

      {/* Memory Section 3 */}
      <section
        ref={section5Ref}
        className="min-h-screen flex flex-col justify-center items-center p-8 relative scroll-mt-4"
      >
        <div className="w-fit max-w-full text-center">
          <h2>You are</h2>
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
              />
              <p>then i stole ur identity for 6 months on facebook</p>
            </div>
          </div>
          <button
            className="mt-8 bg-neon-gradient text-white border-none py-3 px-6 rounded-full font-bold cursor-pointer 
                     shadow-neon transition-all duration-300 hover:translate-y-[-3px] hover:shadow-neon-hover"
            onClick={() => scrollToSection(section6Ref)}
          >
            More Memories
          </button>
        </div>
      </section>

      <div className="w-full h-[3px] bg-neon-gradient m-0 shadow-neon"></div>

      <section
        ref={section6Ref}
        className="min-h-screen flex flex-col justify-center items-center p-8 relative scroll-mt-4"
      >
        <div className="w-fit max-w-full text-center">
          <h2>You knew this section was coming</h2>
          <div
            className="bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                        transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative flex gap-4"
          >
            <img
              src="/aria.jpg"
              className="max-w-full rounded-lg my-4 shadow-md max-h-82"
            />
            <img
              src="/mouth.jpg"
              className="max-w-full rounded-lg my-4 shadow-md max-h-82"
            />
            <img
              src="/feet.jpg"
              className="max-w-full rounded-lg my-4 shadow-md max-h-82"
            />
            <img
              src="/roger_ogre.jpg"
              className="max-w-full rounded-lg my-4 shadow-md max-h-82"
            />
          </div>
          <button
            className="mt-8 bg-neon-gradient text-white border-none py-3 px-6 rounded-full font-bold cursor-pointer
                     shadow-neon transition-all duration-300 hover:translate-y-[-3px] hover:shadow-neon-hover"
            onClick={() => scrollToSection(section7Ref)}
          >
            More Memories
          </button>
        </div>
      </section>

      <div className="w-full h-[3px] bg-neon-gradient m-0 shadow-neon"></div>

      <section
        ref={section7Ref}
        className="min-h-screen flex flex-col justify-center items-center p-8 relative scroll-mt-4"
      >
        <div className="w-fit max-w-full text-center">
          <h2>why was 7 scared of 8</h2>
          <div
            className="bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                        transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative"
          >
            <div className="bg-neon-gradient -z-10 opacity-70 rounded-xl">
              {revealJoke ? (
                <div className="flex flex-col gap-4">
                  <img src="/apple.jpg" className="max-h-96" />
                  <p>cause 6 7 8</p>
                </div>
              ) : (
                <div
                  className="blur-lg cursor-pointer flex flex-col gap-4"
                  onClick={() => setRevealJoke(true)}
                >
                  <img src="/apple.jpg" className="max-h-96" />
                  <p>cause 6 7 8</p>
                </div>
              )}
            </div>
          </div>

          <button
            className="mt-8 bg-neon-gradient text-white border-none py-3 px-6 rounded-full font-bold cursor-pointer
                     shadow-neon transition-all duration-300 hover:translate-y-[-3px] hover:shadow-neon-hover"
            onClick={() => scrollToSection(section8Ref)}
          >
            More Memories
          </button>
        </div>
      </section>

      <div className="w-full h-[3px] bg-neon-gradient m-0 shadow-neon"></div>

      <section
        ref={section8Ref}
        className="min-h-screen flex flex-col justify-center items-center p-8 relative scroll-mt-4"
      >
        <div className="w-fit max-w-full text-center">
          <h2>who is my boyfriend</h2>
          <div
            className="bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                        transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative"
          >
            <div className="absolute -inset-0.5 bg-neon-gradient -z-10 blur-lg opacity-70 rounded-xl"></div>
            {revealJoke2 ? (
              <div>
                <img
                  src="/kevin.jpg"
                  className="max-w-full rounded-lg my-4 shadow-md max-h-96"
                />
                <p>and why is it Kevin</p>
              </div>
            ) : (
              <button
                className="rounded-lg border border-transparent px-5 py-2.5 text-base font-medium 
                               bg-dark-surface cursor-pointer transition-all duration-250 relative overflow-hidden"
                onClick={() => setRevealJoke2(true)}
              >
                <img
                  src="/kevin.jpg"
                  className="max-w-full rounded-lg my-4 shadow-md max-h-96 blur-2xl"
                />
              </button>
            )}
          </div>
          <button
            className="mt-8 bg-neon-gradient text-white border-none py-3 px-6 rounded-full font-bold cursor-pointer
                     shadow-neon transition-all duration-300 hover:translate-y-[-3px] hover:shadow-neon-hover"
            onClick={() => scrollToSection(section9Ref)}
          >
            More Memories
          </button>
        </div>
      </section>

      <section
        ref={section9Ref}
        className="min-h-screen flex flex-col justify-center items-center p-8 relative scroll-mt-4"
      >
        <div className="w-fit max-w-full text-center">
          <h2>who is that pokemon!?</h2>
          <div
            className="bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                     transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative"
            onClick={() => setShowForehead(!showForehead)}
          >
            {showForehead ? (
              <div>
                <img
                  src="/forehead.jpg"
                  className="max-w-full rounded-lg my-4 shadow-md max-h-96"
                />
                <p>it's 4head gao</p>
              </div>
            ) : (
              <div className="blur-lg cursor-pointer">
                <img
                  src="/megamind.jpg"
                  className="max-w-full rounded-lg my-4 shadow-md max-h-96"
                />
                <p>Click me</p>
              </div>
            )}
          </div>
          <button
            className="mt-8 bg-neon-gradient text-white border-none py-3 px-6 rounded-full font-bold cursor-pointer
                     shadow-neon transition-all duration-300 hover:translate-y-[-3px] hover:shadow-neon-hover"
            onClick={() => scrollToSection(section10Ref)}
          >
            More Memories
          </button>
        </div>
      </section>

      <div className="w-full h-[3px] bg-neon-gradient m-0 shadow-neon"></div>

      <section
        ref={section9Ref}
        className="min-h-screen flex flex-col justify-center items-center p-8 relative scroll-mt-4"
      >
        <div className="w-fit max-w-full text-center">
          <h2>kevin and friends</h2>
          <div
            className="bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                        transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative flex gap-4"
          >
            <img
              src="/chinese_cartoon.jpg"
              className="max-w-full rounded-lg my-4 shadow-md max-h-96 blur-lg hover:blur-none"
            />
            <img
              src="/gao_chin.jpg"
              className="max-w-full rounded-lg my-4 shadow-md max-h-96 blur-lg hover:blur-none"
            />
            <img
              src="/gundam.jpg"
              className="max-w-full rounded-lg my-4 shadow-md max-h-96 blur-lg hover:blur-none"
            />
            <img
              src="/tower.jpg"
              className="max-w-full rounded-lg my-4 shadow-md max-h-96 blur-lg hover:blur-none"
            />
          </div>
          <button
            className="mt-8 bg-neon-gradient text-white border-none py-3 px-6 rounded-full font-bold cursor-pointer
                     shadow-neon transition-all duration-300 hover:translate-y-[-3px] hover:shadow-neon-hover"
            onClick={() => scrollToSection(section10Ref)}
          >
            More Memories
          </button>
        </div>
      </section>

      <div className="w-full h-[3px] bg-neon-gradient m-0 shadow-neon"></div>

      <section
        ref={section10Ref}
        className="min-h-screen flex flex-col justify-center items-center p-8 relative scroll-mt-4"
      >
        <div className="w-fit max-w-full text-center">
          <h2>😏</h2>
          <div
            className="bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                        transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative"
          >
            <div className="absolute -inset-0.5 bg-neon-gradient -z-10 blur-lg opacity-70 rounded-xl"></div>
            <video autoPlay muted loop className="max-h-96">
              <source src="/brush.mp4" type="video/mp4" />
            </video>
          </div>
          <button
            className="mt-8 bg-neon-gradient text-white border-none py-3 px-6 rounded-full font-bold cursor-pointer 
                     shadow-neon transition-all duration-300 hover:translate-y-[-3px] hover:shadow-neon-hover"
            onClick={() => scrollToSection(section11Ref)}
          >
            More Memories
          </button>
        </div>
      </section>

      <div className="w-full h-[3px] bg-neon-gradient m-0 shadow-neon"></div>

      <section
        ref={section11Ref}
        className="min-h-screen flex flex-col justify-center items-center p-8 relative scroll-mt-4"
      >
        <div className="w-fit max-w-full text-center">
          <h2>😏 part 2</h2>
          <div
            className="bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                        transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative"
          >
            <div className="absolute -inset-0.5 bg-neon-gradient -z-10 blur-lg opacity-70 rounded-xl"></div>
            <video autoPlay muted loop className="max-h-96">
              <source src="/cheeky.mp4" type="video/mp4" />
            </video>
          </div>
          <button
            className="mt-8 bg-neon-gradient text-white border-none py-3 px-6 rounded-full font-bold cursor-pointer
                     shadow-neon transition-all duration-300 hover:translate-y-[-3px] hover:shadow-neon-hover"
            onClick={() => scrollToSection(section12Ref)}
          >
            More Memories
          </button>
        </div>
      </section>

      <div className="w-full h-[3px] bg-neon-gradient m-0 shadow-neon"></div>

      <section
        ref={section12Ref}
        className="min-h-screen flex flex-col justify-center items-center p-8 relative scroll-mt-4"
      >
        <h2>Click and hold</h2>
        <div
          className="w-fit max-w-full text-center cursor-pointer active:blur-none blur-lg"
          onClick={() => audio.play()}
        >
          <div
            className="bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                        transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative"
          >
            <div className="absolute -inset-0.5 bg-neon-gradient -z-10 blur-lg opacity-70 rounded-xl"></div>
            <img src="/nippon.jpg" className="max-h-96" />
          </div>
        </div>
        <button
          className="mt-8 bg-neon-gradient text-white border-none py-3 px-6 rounded-full font-bold cursor-pointer
                     shadow-neon transition-all duration-300 hover:translate-y-[-3px] hover:shadow-neon-hover"
          onClick={() => scrollToSection(section13Ref)}
        >
          More Memories
        </button>
      </section>

      <div className="w-full h-[3px] bg-neon-gradient m-0 shadow-neon"></div>

      <section
        ref={section13Ref}
        className="min-h-screen flex flex-col justify-center items-center p-8 relative scroll-mt-4"
      >
        <h1 className="text-4xl md:text-6xl mb-4">HAPPY BIRTHDAY</h1>

        <div className="w-fit max-w-full text-center">
          <div
            className="bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                        transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative"
          >
            <div className="absolute -inset-0.5 bg-neon-gradient -z-10 blur-lg opacity-70 rounded-xl"></div>
            <video controls className="max-h-96">
              <source src="/happy.mp4" type="video/mp4" />
            </video>
            <h2>Click me</h2>
          </div>
          <button
            className="mt-8 bg-neon-gradient text-white border-none py-3 px-6 rounded-full font-bold cursor-pointer
                     shadow-neon transition-all duration-300 hover:translate-y-[-3px] hover:shadow-neon-hover"
            onClick={() => {
              bgm0.pause();
              bgm2.play();
              setShowBingChilling(true);
              scrollToSection(section14Ref);
            }}
          >
            More Memories
          </button>
        </div>
      </section>

      <div className="w-full h-[3px] bg-neon-gradient m-0 shadow-neon"></div>

      <section
        ref={section14Ref}
        className="min-h-screen flex flex-col justify-center items-center p-8 relative scroll-mt-4"
      >
        <h1 className="text-4xl md:text-6xl mb-4">
          現在我有冰淇淋 我很喜歡冰淇淋
        </h1>

        <div className="w-fit max-w-full text-center">
          <div
            className="bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                        transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative flex gap-4"
          >
            <div className="absolute -inset-0.5 bg-neon-gradient -z-10 blur-lg opacity-70 rounded-xl"></div>
            <video autoPlay loop muted>
              <source src="/dance1.mp4" type="video/mp4" />
            </video>
            <div className="flex flex-col items-center justify-between">
              <img src="/laoganma.gif" />
              <img src="/bop.gif" />
            </div>
            <video autoPlay loop muted>
              <source src="/dance2.mp4" type="video/mp4" />
            </video>
          </div>
          <button
            className="mt-8 bg-neon-gradient text-white border-none py-3 px-6 rounded-full font-bold cursor-pointer
                     shadow-neon transition-all duration-300 hover:translate-y-[-3px] hover:shadow-neon-hover"
            onClick={() => {
              bgm2.pause();
              bgm3.play();
              scrollToSection(section15Ref);
              setShowBingChilling(false);
            }}
          >
            More Memories
          </button>
          {showBingChilling && (
            <>
              {renderConfetti("🍦")}
              {renderConfetti("🥦")}
            </>
          )}
        </div>
      </section>

      <div className="w-full h-[3px] bg-neon-gradient m-0 shadow-neon"></div>

      <section
        ref={section15Ref}
        className="min-h-screen flex flex-col justify-center items-center p-8 relative scroll-mt-4"
      >
        <h1 className="text-4xl md:text-6xl mb-4">kevin yonezu</h1>

        <div className="w-fit max-w-full text-center">
          <div
            className="bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                        transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative flex gap-4"
          >
            <img
              src="/kevin_yonezu.jpg"
              className="max-w-full rounded-lg my-4 shadow-md animate-blur max-h-96"
              style={{
                animationDelay: "0.5s",
              }}
            />
            <img
              src="/kenshi_yonezu.jpg"
              className="max-w-full rounded-lg my-4 shadow-md animate-blur max-h-96"
            />
          </div>
          <button
            className="mt-8 bg-neon-gradient text-white border-none py-3 px-6 rounded-full font-bold cursor-pointer
                     shadow-neon transition-all duration-300 hover:translate-y-[-3px] hover:shadow-neon-hover"
            onClick={() => {
              bgm4.play();
              scrollToSection(section16Ref);
            }}
          >
            More Memories
          </button>
          {showBingChilling && (
            <>
              {renderConfetti("🍦")}
              {renderConfetti("🥦")}
            </>
          )}
        </div>
      </section>

      <section
        ref={section16Ref}
        className="min-h-screen flex flex-col justify-center items-center p-8 relative scroll-mt-4"
      >
        <div className="w-fit max-w-full text-center">
          <div
            className="bg-[url('/bg.png')] rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                        transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative flex gap-4"
          >
            <img
              src="/fighter.png"
              className="max-w-full rounded-lg my-4 shadow-md max-h-96 animate-spin"
              style={{
                animationDelay: "0.5s",
              }}
            />
            <img
              src="/fighter.png"
              className="max-w-full rounded-lg my-4 shadow-md max-h-96 animate-spin"
            />
            <ul className="flex items-end flex-col bg-[rgba(0,0,0,0.5)] rounded-lg p-4">
              <li>Unity to do list UPDATED</li>
              <li>kick animation ME</li>
              <li>knock down animation ME</li>
              <li>sound effects SOMEONE</li>
              <li>air attack animation ME</li>
              <li>player change direction LUCIEN</li>
              <li>color change for player PLACHOLDER</li>
              <li>player double jump error LUCIEN</li>
              <li>character select back button ROGER</li>
              <li>character design LUCIEN + ME</li>
              <li>story??? dunno bonus mode (unicycle) someone</li>
            </ul>
          </div>
          <button
            className="mt-8 bg-neon-gradient text-white border-none py-3 px-6 rounded-full font-bold cursor-pointer
                     shadow-neon transition-all duration-300 hover:translate-y-[-3px] hover:shadow-neon-hover"
            onClick={() => {
              scrollToSection(section17Ref);
            }}
          >
            More Memories
          </button>
        </div>
      </section>

      <div className="w-full h-[3px] bg-neon-gradient m-0 shadow-neon"></div>

      <section
        ref={section17Ref}
        className="min-h-screen flex flex-col justify-center items-center p-8 relative scroll-mt-4"
      >
        <h1 className="text-4xl md:text-6xl mb-4">mortal kombat</h1>

        <div
          className="bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                        transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative flex flex-col items-center"
        >
          <video controls onPlay={() => shake()}>
            <source src="/mortal.mp4" type="video/mp4" />
          </video>
          <button
            className="mt-8 bg-neon-gradient text-white border-none py-3 px-6 rounded-full font-bold cursor-pointer
                     shadow-neon transition-all duration-300 hover:translate-y-[-3px] hover:shadow-neon-hover"
            onClick={() => {
              scrollToSection(section16Ref);
            }}
          >
            More Memories
          </button>
        </div>
      </section>

      <div className="w-full h-[3px] bg-neon-gradient m-0 shadow-neon"></div>
      {/* Final Section */}
      <section
        ref={section18Ref}
        className="min-h-screen flex flex-col justify-center items-center p-8 relative scroll-mt-4"
      >
        <div className="overflow-hidden w-fit max-w-full text-center">
          <h2>Happy Birthday, Friend!</h2>
          <div
            className="bg-dark-surface/70 rounded-lg p-8 my-4 shadow-lg border border-purple-500/30
                        transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon relative"
          >
            <div className="absolute -inset-0.5 bg-neon-gradient -z-10 blur-lg opacity-70 rounded-xl"></div>
            <h3>Here's to Many More Years</h3>
            <img
              src="https://source.unsplash.com/random/800x600/?celebration,friends"
              alt="Celebration"
              className="max-w-full rounded-lg my-4 shadow-md"
            />
            <p>
              Kevin, your friendship has been one of the greatest gifts in my
              life. Through all our adventures, inside jokes, and even the
              occasional disagreements, you've been an amazing friend. Here's to
              many more years of creating memories together!
            </p>
            <p>
              Wishing you the happiest of birthdays and a year filled with joy,
              success, and plenty of new stories to add to our collection.
            </p>
          </div>
          <button
            className="mt-8 bg-neon-gradient text-white border-none py-3 px-6 rounded-full font-bold 
                     shadow-neon transition-all duration-300 hover:translate-y-[-3px] hover:shadow-neon-hover"
            onClick={() => scrollToSection(section1Ref)}
          >
            Back to Top
          </button>
        </div>
      </section>

      <footer className="p-8 bg-dark-surface mt-8 border-t border-purple-500/30">
        <p className="text-gray-400">Made with ❤️ for Kevin's Birthday 2025</p>
      </footer>
    </div>
  );
}

export default App;
