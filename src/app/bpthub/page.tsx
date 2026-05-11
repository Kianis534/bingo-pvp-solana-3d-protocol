"use client";

import { ArenaScene } from "@/components/three/ArenaScene";
import { BPTToken3D } from "@/components/three/BPTToken3D";
import { BPTHubSection } from "@/components/sections/BPTHubSection";
import { TradingHubSection } from "@/components/sections/TradingHubSection";
import { TokenomicsSection } from "@/components/sections/TokenomicsSection";

export default function BPTHubPage() {
  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <ArenaScene>
          <group position={[-5, 2, -5]} scale={1}>
            <BPTToken3D />
          </group>
          <group position={[5, -2, -5]} scale={1}>
            <BPTToken3D />
          </group>
        </ArenaScene>
      </div>
      
      <div className="relative z-10 pt-20">
        <BPTHubSection />
        <TradingHubSection />
        <TokenomicsSection />
      </div>
    </main>
  );
}
