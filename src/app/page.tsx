"use client";

import { useLenis } from "@/hooks/useLenis";
import { useSound } from "@/hooks/useSound";
import { HeroSection } from "@/components/sections/HeroSection";
import { PlayerJourneySection } from "@/components/sections/PlayerJourneySection";
import { HackathonAdvantagesSection } from "@/components/sections/HackathonAdvantagesSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function Home() {
  useLenis();
  useSound();

  return (
    <div className="flex flex-col">
      <HeroSection />
      
      <div className="relative">
        {/* Continuous background effect for the content sections */}
        <div className="absolute inset-0 cyber-grid-bg opacity-10 pointer-events-none" />
        
        <PlayerJourneySection />
        <HackathonAdvantagesSection />
        <FinalCTASection />
      </div>
    </div>
  );
}
