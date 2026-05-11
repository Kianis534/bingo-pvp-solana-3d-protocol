"use client";

import { ArenaScene } from "@/components/three/ArenaScene";
import { ParticleField } from "@/components/three/ParticleField";
import { NetworkingSection } from "@/components/sections/NetworkingSection";
import { SocialEcosystemSection } from "@/components/sections/SocialEcosystemSection";
import { PlayerJourneySection } from "@/components/sections/PlayerJourneySection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function SocialPage() {
  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <ArenaScene>
          <ParticleField />
        </ArenaScene>
      </div>
      
      <div className="relative z-10 pt-20">
        <NetworkingSection />
        <SocialEcosystemSection />
        <PlayerJourneySection />
        <FinalCTASection />
      </div>
    </main>
  );
}
