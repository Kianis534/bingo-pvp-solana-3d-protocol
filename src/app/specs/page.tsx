"use client";

import { ArenaScene } from "@/components/three/ArenaScene";
import { CyberGrid } from "@/components/three/CyberGrid";
import { TechnicalSpecsSection } from "@/components/sections/TechnicalSpecsSection";

export default function SpecsPage() {
  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <ArenaScene>
          <group position={[0, -2, 0]} rotation={[-Math.PI / 4, 0, 0]}>
            <CyberGrid />
          </group>
        </ArenaScene>
      </div>
      
      <div className="relative z-10 pt-20">
        <TechnicalSpecsSection />
      </div>
    </main>
  );
}
