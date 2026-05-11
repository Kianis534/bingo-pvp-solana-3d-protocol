"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { PieChart, TrendingUp, Timer } from "lucide-react";

export const TokenomicsSection = () => {
  const { tokenomics } = siteContent;

  return (
    <section className="relative py-24 px-4 bg-black/50">
      <div className="container mx-auto">
        <SectionTitle
          eyebrow="Scarcity & Supply"
          title={tokenomics.title}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
           >
              <GlassCard className="h-full" glowColor="gold">
                 <div className="flex items-center gap-4 mb-6">
                    <Timer className="h-8 w-8 text-cyber-gold" />
                    <h3 className="text-2xl font-bold text-white uppercase">Daily Mint</h3>
                 </div>
                 <div className="text-4xl font-black text-cyber-gold mb-2">{tokenomics.dailyMint}</div>
                 <p className="text-white/50 text-sm">Reward generation cycle constant.</p>
              </GlassCard>
           </motion.div>

           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
           >
              <GlassCard className="h-full" glowColor="gold">
                 <div className="flex items-center gap-4 mb-6">
                    <PieChart className="h-8 w-8 text-cyber-gold" />
                    <h3 className="text-2xl font-bold text-white uppercase">Distribution</h3>
                 </div>
                 <div className="space-y-4">
                    <div className="flex justify-between items-center">
                       <span className="text-white/60">Players (Central Pool)</span>
                       <span className="text-cyber-gold font-black">{tokenomics.distribution.players}</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-cyber-gold w-[90%]" />
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-white/60">Development Pool</span>
                       <span className="text-white font-black">{tokenomics.distribution.development}</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-white/20 w-[10%]" />
                    </div>
                 </div>
              </GlassCard>
           </motion.div>

           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
           >
              <GlassCard className="h-full" glowColor="gold">
                 <div className="flex items-center gap-4 mb-6">
                    <TrendingUp className="h-8 w-8 text-cyber-gold" />
                    <h3 className="text-2xl font-bold text-white uppercase">Halving</h3>
                 </div>
                 <div className="text-2xl font-black text-white mb-4">{tokenomics.halving}</div>
                 <p className="text-white/50 text-sm leading-relaxed">
                    {tokenomics.halvingDescription}
                 </p>
              </GlassCard>
           </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12"
        >
          <GlassCard className="p-8">
            <h3 className="text-2xl font-bold text-cyber-gold mb-6 uppercase tracking-wider text-center">Strategic Purpose of Halving</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { title: "Deflationary", desc: "Reduces inflation over time." },
                { title: "Early Adopters", desc: "Rewards those who join first." },
                { title: "Scarcity", desc: "Increases token value through limited supply." },
                { title: "Sustainability", desc: "Prevents uncontrolled supply growth." },
                { title: "Long-term Value", desc: "Supports the entire game economy." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2 p-4 border border-white/5 rounded-lg bg-white/5">
                  <span className="text-cyber-gold font-bold text-sm">{item.title}</span>
                  <span className="text-white/40 text-xs">{item.desc}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
