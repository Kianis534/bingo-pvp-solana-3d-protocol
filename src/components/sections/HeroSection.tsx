"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { Button } from "@/components/ui/Button";
import { ArenaScene } from "@/components/three/ArenaScene";
import { BingoBoard3D } from "@/components/three/BingoBoard3D";
import { BPTToken3D } from "@/components/three/BPTToken3D";
import Link from "next/link";

export const HeroSection = () => {
  const { hero } = siteContent;

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* 3D Scene in background */}
      <ArenaScene>
        <group position={[12, -5, -15]} scale={1.0} rotation={[0, -0.4, 0]}>
          <BingoBoard3D />
        </group>
        <group position={[-6, 2, -12]} scale={0.8} rotation={[0, 0.3, 0]}>
          <BPTToken3D />
        </group>
      </ArenaScene>

      {/* Content Layer */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        {/* Subtle Mask for background readability */}
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center gap-8"
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-xs font-bold uppercase text-cyber-cyan md:text-sm"
          >
            {hero.tagline}
          </motion.span>
          
          <div className="relative">
            <h1 className="bg-gradient-to-b from-white via-white to-white/20 bg-clip-text text-7xl font-black uppercase tracking-tighter text-transparent md:text-9xl lg:text-[12rem] leading-none">
              {hero.title}
            </h1>
            <div className="absolute -inset-2 bg-cyber-cyan/20 blur-3xl -z-10 rounded-full opacity-30" />
          </div>

          <p className="max-w-2xl text-lg text-white/50 md:text-xl font-light leading-relaxed">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <Link href="/overview">
              <Button variant="primary" size="lg" className="w-64 px-10 py-8 text-lg">
                Enter Game
              </Button>
            </Link>
            <Link href="/contract">
              <Button variant="secondary" size="lg" className="w-64 px-10 py-8 text-lg">
                Smart Contract
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll to Explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-12 w-[2px] bg-gradient-to-b from-cyber-cyan to-transparent" 
        />
      </div>
    </section>
  );
};
