"use client";

import { ArenaScene } from "@/components/three/ArenaScene";
import { BingoBoard3D } from "@/components/three/BingoBoard3D";
import { DataAthlete3D } from "@/components/three/DataAthlete3D";
import { ProjectOverviewSection } from "@/components/sections/ProjectOverviewSection";
import { ArenaPhilosophySection } from "@/components/sections/ArenaPhilosophySection";

export default function OverviewPage() {
  return (
    <main className="relative min-h-screen bg-[#050505]">
      {/* 
          LAYER 1: 3D BACKGROUND 
          - z-index: 0
          - fixed position
      */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ArenaScene showGrid={true}>
          <group position={[12, -3, -15]} scale={1.8} rotation={[0, -0.6, 0]}>
            <BingoBoard3D />
          </group>
          <group position={[-6, -2, -10]} scale={1.8}>
            <DataAthlete3D />
          </group>
        </ArenaScene>
      </div>
      
      {/* 
          LAYER 2: CONTENT MASK / OVERLAY 
          - z-index: 10
          - relative position to scroll
      */}
      <div className="relative z-10 w-full">
        <ProjectOverviewSection />
        <ArenaPhilosophySection />
      </div>
    </main>
  );
}
