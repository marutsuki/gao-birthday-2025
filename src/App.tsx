import { useRef, useState } from "react";
import "./App.css";

const audio = new Audio("/nippon.mp3");

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
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        backgroundColor: Math.random() > 0.5 ? "#bb86fc" : "#3f51b5",
      };
      confetti.push(
        <div key={i} className="confetti" style={style}>
          {emoji}
        </div>
      );
    }
    return confetti;
  };

  return (
    <div className="app-container">
      {/* Hero Section */}
      <section ref={section0Ref} className="section">
        <div className="section-content">
          <h2>Guess who's big day it is...</h2>
          <p className="hero-subtitle">抠你的屁股</p>
          <button
            className="next-section-btn"
            onClick={() => scrollToSection(section1Ref)}
          >
            Reveal the man himself
          </button>
        </div>
      </section>
      <section ref={section1Ref} className="section hero-section">
        <div className="hero-content section-content">
          <h1 className="birthday-title">No not you</h1>
          <div>
            <img src="/roger.jpg" />
          </div>
          <button
            className="next-section-btn"
            onClick={() => scrollToSection(section2Ref)}
          >
            Reveal the man himself
          </button>
        </div>
      </section>
      <section ref={section2Ref} className="section hero-section">
        <div className="hero-content section-content">
          <h1 className="birthday-title">Who's birthday is it</h1>

          <div>
            <div>
              <p className="birthday-subtitle">and why is it Kevin's</p>
              <small>btw this is u and me</small>
            </div>

            <img src="/yuri.gif" />
          </div>
          <button
            className="next-section-btn"
            onClick={() => scrollToSection(section3Ref)}
          >
            Let's Celebrate!
          </button>
          {renderConfetti("🤰")}
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Memory Section 1 */}
      <section ref={section3Ref} className="section">
        <div className="section-content">
          <h2>Japan</h2>
          <div className="memory-card neon-border">
            <video controls>
              <source src="/kevin_dancing.mp4" type="video/mp4" />
            </video>
            <video controls>
              <source src="/washing_feet.mp4" type="video/mp4" />
            </video>
            <video controls>
              <source src="/fapping.mp4" type="video/mp4" />
            </video>
          </div>
          <button
            className="next-section-btn"
            onClick={() => scrollToSection(section4Ref)}
          >
            Next Memory
          </button>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Memory Section 2 */}
      <section ref={section4Ref} className="section">
        <div className="section-content">
          <h2>lucien core</h2>
          <div className="memory-card neon-border">
            <img src="/lucien_looking_up.jpg" className="memory-image" />
            <img src="/facetime.jpg" className="memory-image" />
            <img src="/graduation.jpg" className="memory-image" />
          </div>
          <button
            className="next-section-btn"
            onClick={() => scrollToSection(section5Ref)}
          >
            More Memories
          </button>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Memory Section 3 */}
      <section ref={section5Ref} className="section">
        <div className="section-content">
          <h2>You are</h2>
          <div className="memory-grid">
            <div className="memory-card neon-border">
              <h3>shit black manta player</h3>
              <img src="/sentinel.png" className="memory-image" />
              <p>we never hit diamond in brawlhalla (duo queue)</p>
            </div>
            <div className="memory-card neon-border">
              <h3>identity theft</h3>
              <img src="/identity.jpg" className="memory-image" />
              <p>then i stole ur identity for 6 months on facebook</p>
            </div>
          </div>
          <button
            className="next-section-btn"
            onClick={() => scrollToSection(section6Ref)}
          >
            More Memories
          </button>
        </div>
      </section>

      <div className="section-divider"></div>

      <section ref={section6Ref} className="section">
        <div className="section-content">
          <h2>You knew this section was coming</h2>
          <div className="memory-card neon-border">
            <img src="/aria.jpg" className="memory-image" />
            <img src="/mouth.jpg" className="memory-image" />
            <img src="/feet.jpg" className="memory-image" />
            <img src="/roger_ogre.jpg" className="memory-image" />
          </div>
          <button
            className="next-section-btn"
            onClick={() => scrollToSection(section5Ref)}
          >
            More Memories
          </button>
        </div>
      </section>

      <div className="section-divider"></div>

      <section ref={section6Ref} className="section">
        <div className="section-content">
          <h2>why was 7 scared of 8</h2>
          <div className="memory-card neon-border">
            {revealJoke ? (
              <div>
                <img src="/apple.jpg" />
                <p>cause 6 7 8</p>
              </div>
            ) : (
              <button className="joke-btn" onClick={() => setRevealJoke(true)}>
                Click to reveal the punchline!
              </button>
            )}
          </div>
          <button
            className="next-section-btn"
            onClick={() => scrollToSection(section7Ref)}
          >
            More Memories
          </button>
        </div>
      </section>

      <div className="section-divider"></div>

      <section ref={section7Ref} className="section">
        <div className="section-content">
          <h2>who is my boyfriend</h2>
          <div className="memory-card neon-border">
            {revealJoke2 ? (
              <div>
                <img src="/kevin.jpg" className="memory-image" />
                <p>and why is it Kevin</p>
              </div>
            ) : (
              <button className="joke-btn" onClick={() => setRevealJoke2(true)}>
                Click to reveal the punchline!
              </button>
            )}
          </div>
          <button
            className="next-section-btn"
            onClick={() => scrollToSection(section8Ref)}
          >
            More Memories
          </button>
        </div>
      </section>

      <section ref={section8Ref} className="section">
        <div className="section-content">
          <h2>who is that pokemon!?</h2>
          <div
            className="memory-card neon-border"
            onClick={() => setShowForehead(!showForehead)}
          >
            {showForehead ? (
              <div>
                <img src="/forehead.jpg" className="memory-image" />
                <p>it's 4head gao</p>
              </div>
            ) : (
              <div>
                <img src="/megamind.jpg" className="memory-image" />
                <p>Click here</p>
              </div>
            )}
          </div>
          <button
            className="next-section-btn"
            onClick={() => scrollToSection(section9Ref)}
          >
            More Memories
          </button>
        </div>
      </section>

      <div className="section-divider"></div>

      <section ref={section9Ref} className="section">
        <div className="section-content">
          <h2>kevin and friends</h2>
          <div className="memory-card neon-border">
            <img src="/chinese_cartoon.jpg" className="memory-image" />
            <img src="/gao_chin.jpg" className="memory-image" />
            <img src="/gundam.jpg" className="memory-image" />
            <img src="/tower.jpg" className="memory-image" />
          </div>
          <button
            className="next-section-btn"
            onClick={() => scrollToSection(section10Ref)}
          >
            More Memories
          </button>
        </div>
      </section>

      <div className="section-divider"></div>

      <section ref={section10Ref} className="section">
        <div className="section-content">
          <h2>😏</h2>
          <div className="memory-card neon-border">
            <video controls>
              <source src="/brush.mp4" type="video/mp4" />
            </video>
          </div>
          <button
            className="next-section-btn"
            onClick={() => scrollToSection(section11Ref)}
          >
            More Memories
          </button>
        </div>
      </section>

      <div className="section-divider"></div>

      <section ref={section11Ref} className="section">
        <div className="section-content">
          <h2>😏 part 2</h2>
          <div className="memory-card neon-border">
            <video controls>
              <source src="/cheeky.mp4" type="video/mp4" />
            </video>
          </div>
          <button
            className="next-section-btn"
            onClick={() => scrollToSection(section12Ref)}
          >
            More Memories
          </button>
        </div>
      </section>

      <div className="section-divider"></div>

      <section ref={section12Ref} className="section">
        <div className="section-content" onClick={() => audio.play()}>
          <div className="memory-card neon-border">
            <img src="/nippon.jpg" />
            <h2>Click me</h2>
          </div>
          <button
            className="next-section-btn"
            onClick={() => scrollToSection(section13Ref)}
          >
            More Memories
          </button>
        </div>
      </section>

      <div className="section-divider"></div>

      <section ref={section13Ref} className="section">
        <h1>HAPPY BIRTHDAY</h1>

        <div className="section-content">
          <div className="memory-card neon-border">
            <video controls>
              <source src="/happy.mp4" type="video/mp4" />
            </video>
            <h2>Click me</h2>
          </div>
          <button
            className="next-section-btn"
            onClick={() => {
              bgm2.play();
              setShowBingChilling(true);
              scrollToSection(section14Ref);
            }}
          >
            More Memories
          </button>
        </div>
      </section>

      <div className="section-divider"></div>

      <section ref={section14Ref} className="section">
        <h1>現在我有冰淇淋 我很喜歡冰淇淋</h1>

        <div className="section-content">
          <div className="memory-card neon-border">
            <video autoPlay loop muted>
              <source src="/dance1.mp4" type="video/mp4" />
            </video>
            <img src="/bop.gif" />
            <video autoPlay loop muted>
              <source src="/dance2.mp4" type="video/mp4" />
            </video>
          </div>
          <button
            className="next-section-btn"
            onClick={() => {
              bgm3.play();
              scrollToSection(section15Ref);
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

      <div className="section-divider"></div>

      <section ref={section15Ref} className="section">
        <h1>kevin yonezu</h1>

        <div className="section-content">
          <div className="memory-card neon-border">
            <img src="/kevin_yonezu.jpg" className="memory-image" />
            <img src="/kenshi_yonezu.jpg" className="memory-image" />
          </div>
          <button
            className="next-section-btn"
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

      <section ref={section16Ref} className="section">
        <h1>kevin yonezu</h1>

        <div className="section-content">
          <div className="memory-card neon-border">
            <img src="/kevin_yonezu.jpg" className="memory-image" />
            <img src="/kenshi_yonezu.jpg" className="memory-image" />
            <p>
              <ul>
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
            </p>
          </div>
          <button
            className="next-section-btn"
            onClick={() => {
              bgm4.play();
              scrollToSection(section17Ref);
            }}
          >
            More Memories
          </button>
        </div>
      </section>

      <div className="section-divider"></div>
      {/* Final Section */}
      <section ref={section18Ref} className="section">
        <div className="section-content">
          <h2>Happy Birthday, Friend!</h2>
          <div className="memory-card neon-border">
            <h3>Here's to Many More Years</h3>
            <img
              src="https://source.unsplash.com/random/800x600/?celebration,friends"
              alt="Celebration"
              className="memory-image"
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
            className="next-section-btn"
            onClick={() => scrollToSection(section1Ref)}
          >
            Back to Top
          </button>
        </div>
      </section>

      <footer className="footer">
        <p>Made with ❤️ for Kevin's Birthday 2025</p>
      </footer>
    </div>
  );
}

export default App;
