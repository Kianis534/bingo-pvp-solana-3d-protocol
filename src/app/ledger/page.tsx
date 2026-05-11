"use client";

import { ArenaScene } from "@/components/three/ArenaScene";
import { TokenFlowScene } from "@/components/three/TokenFlowScene";
import { HybridLedgerSection } from "@/components/sections/HybridLedgerSection";
import { EconomicFlowSection } from "@/components/sections/EconomicFlowSection";
import { HybridSecuritySection } from "@/components/sections/HybridSecuritySection";

export default function LedgerPage() {
  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <ArenaScene>
          <TokenFlowScene />
        </ArenaScene>
      </div>
      
      <div className="relative z-10 pt-20">
        <HybridLedgerSection />
        <EconomicFlowSection />
        <HybridSecuritySection />
      </div>
    </main>
  );
}
