"use client";

import { ArenaScene } from "@/components/three/ArenaScene";
import { BingoBoard3D } from "@/components/three/BingoBoard3D";
import { GameModesSection } from "@/components/sections/GameModesSection";
import { AIBotsSection } from "@/components/sections/AIBotsSection";

export default function ModesPage() {
  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <ArenaScene>
          <group position={[6, 0, -5]} scale={0.8} rotation={[0, -0.5, 0]}>
            <BingoBoard3D />
          </group>
        </ArenaScene>
      </div>
      
      <div className="relative z-10 pt-20">
        <GameModesSection />
        <AIBotsSection />
      </div>
    </main>
  );
}
