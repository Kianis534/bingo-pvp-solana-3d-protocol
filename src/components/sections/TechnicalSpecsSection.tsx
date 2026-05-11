"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { Code2, Hash, Fingerprint } from "lucide-react";

export const TechnicalSpecsSection = () => {
  const { specs } = siteContent;

  return (
    <section id="specs" className="relative py-24 px-4 bg-black/40">
      <div className="container mx-auto">
        <SectionTitle
          eyebrow="Technical Data"
          title="Protocol Specifications"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
           <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
           >
              <GlassCard className="h-full font-mono text-sm relative overflow-hidden">
                 {/* Terminal Header */}
                 <div className="absolute top-0 left-0 right-0 h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                    <span className="text-[10px] text-white/20 ml-2 uppercase tracking-widest">Protocol_Specs.sh</span>
                 </div>
                 
                 <div className="mt-8 pt-4">
                    <div className="flex items-center gap-3 mb-6">
                       <Code2 className="text-cyber-cyan h-5 w-5" />
                       <span className="text-white font-bold uppercase tracking-widest">Environment</span>
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-white/40">BLOCKCHAIN</span>
                        <span className="text-cyber-cyan">{specs.blockchain}</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-white/40">FRAMEWORK</span>
                        <span className="text-cyber-cyan">{specs.framework}</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-white/40">PROGRAM ID</span>
                        <span className="text-cyber-cyan truncate ml-4">{specs.programId}</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-white/40">TOKEN DECIMALS</span>
                        <span className="text-cyber-cyan">{specs.decimals}</span>
                        </div>
                    </div>
                 </div>
              </GlassCard>
           </motion.div>

           <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
           >
              <GlassCard className="h-full font-mono text-sm" glowColor="purple">
                 <div className="flex items-center gap-3 mb-6">
                    <Fingerprint className="text-cyber-purple h-5 w-5" />
                    <span className="text-white font-bold uppercase tracking-widest">PDA Seeds</span>
                 </div>
                 <ul className="space-y-4">
                    {specs.seeds.map((seed, i) => (
                       <li key={i} className="flex items-center gap-3 text-white/60">
                          <Hash className="h-4 w-4 text-cyber-purple" />
                          <span>{seed}</span>
                       </li>
                    ))}
                 </ul>
              </GlassCard>
           </motion.div>
        </div>
      </div>
    </section>
  );
};
