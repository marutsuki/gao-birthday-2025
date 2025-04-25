import React from "react";
import "./index.css";
import { AppProvider } from "./context/AppContext";
import IntroSection from "./components/IntroSection";
import RogerSection from "./components/RogerSection";
import KevinSection from "./components/KevinSection";
import JapanMemorySection from "./components/JapanMemorySection";
import LucienMemorySection from "./components/LucienMemorySection";
import IdentityMemorySection from "./components/IdentityMemorySection";
import SusMemorySection from "./components/SusMemorySection";
import JokeMemorySection from "./components/JokeMemorySection";
import BoyfriendMemorySection from "./components/BoyfriendMemorySection";
import PokemonMemorySection from "./components/PokemonMemorySection";
import FriendsMemorySection from "./components/FriendsMemorySection";
import BrushMemorySection from "./components/BrushMemorySection";
import CheekyMemorySection from "./components/CheekyMemorySection";
import NipponMemorySection from "./components/NipponMemorySection";
import HappyBirthdaySection from "./components/HappyBirthdaySection";
import BingChillingSection from "./components/BingChillingSection";
import YonezuSection from "./components/YonezuSection";
import FighterSection from "./components/FighterSection";
import MortalKombatSection from "./components/MortalKombatSection";
import SoldierSection from "./components/SoldierSection";
import Footer from "./components/Footer";
import RoastSection from "./components/RoastSection";

function App() {
  return (
    <AppProvider>
      <div className="flex flex-col w-full overflow-x-hidden">
        <IntroSection />
        <RogerSection />
        <KevinSection />
        <JapanMemorySection />
        <LucienMemorySection />
        <IdentityMemorySection />
        <SusMemorySection />
        <JokeMemorySection />
        <BoyfriendMemorySection />
        <PokemonMemorySection />
        <FriendsMemorySection />
        <BrushMemorySection />
        <CheekyMemorySection />
        <NipponMemorySection />
        <HappyBirthdaySection />
        <BingChillingSection />
        <YonezuSection />
        <FighterSection />
        <MortalKombatSection />
        <SoldierSection />
        <RoastSection />
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
