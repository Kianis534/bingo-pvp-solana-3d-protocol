"use client";

import { ArenaScene } from "@/components/three/ArenaScene";
import { BingoBoard3D } from "@/components/three/BingoBoard3D";
import { HowToPlaySection } from "@/components/sections/HowToPlaySection";
import { GameplayMechanicsSection } from "@/components/sections/GameplayMechanicsSection";
import { VisualIdentitySection } from "@/components/sections/VisualIdentitySection";
import { AudioSettingsSection } from "@/components/sections/AudioSettingsSection";

export default function GameplayPage() {
  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <ArenaScene>
          <group position={[-6, 0, -5]} scale={0.8}>
            <BingoBoard3D />
          </group>
        </ArenaScene>
      </div>
      
      <div className="relative z-10 pt-20">
        <HowToPlaySection />
        <GameplayMechanicsSection />
        <VisualIdentitySection />
        <AudioSettingsSection />
      </div>
    </main>
  );
}
