"use client";

import { ArenaScene } from "@/components/three/ArenaScene";
import { VaultScene } from "@/components/three/VaultScene";
import { SmartContractOverviewSection } from "@/components/sections/SmartContractOverviewSection";
import { SmartContractArchitectureSection } from "@/components/sections/SmartContractArchitectureSection";
import { SmartContractAPISection } from "@/components/sections/SmartContractAPISection";

export default function ContractPage() {
  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <ArenaScene>
          <group position={[0, 0, -8]} scale={2}>
            <VaultScene />
          </group>
        </ArenaScene>
      </div>
      
      <div className="relative z-10 pt-20">
        <SmartContractOverviewSection />
        <SmartContractArchitectureSection />
        <SmartContractAPISection />
      </div>
    </main>
  );
}
