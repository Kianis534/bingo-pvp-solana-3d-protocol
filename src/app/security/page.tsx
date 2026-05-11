"use client";

import { ArenaScene } from "@/components/three/ArenaScene";
import { VaultScene } from "@/components/three/VaultScene";
import { SmartContractSecuritySection } from "@/components/sections/SmartContractSecuritySection";
import { HackathonAdvantagesSection } from "@/components/sections/HackathonAdvantagesSection";

export default function SecurityPage() {
  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <ArenaScene>
          <group position={[0, 0, -5]} scale={1.2}>
            <VaultScene />
          </group>
        </ArenaScene>
      </div>
      
      <div className="relative z-10 pt-20">
        <SmartContractSecuritySection />
        <HackathonAdvantagesSection />
      </div>
    </main>
  );
}
