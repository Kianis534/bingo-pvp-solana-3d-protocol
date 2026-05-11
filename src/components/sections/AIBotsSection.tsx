"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { Cpu } from "lucide-react";

export const AIBotsSection = () => {
  const { aiBots } = siteContent;

  return (
    <section className="relative py-24 px-4 bg-black/40">
      <div className="container mx-auto">
        <SectionTitle
          eyebrow="Artificial Adversaries"
          title="AI Bot System"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {aiBots.map((bot, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className="relative group overflow-visible" glowColor={bot.glow as any}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-cyber-${bot.glow}/10 border border-cyber-${bot.glow}/30 group-hover:scale-110 transition-transform`}>
                    <Cpu className={`h-8 w-8 text-cyber-${bot.glow}`} />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-black uppercase text-cyber-${bot.glow}`}>
                      {bot.level}
                    </h3>
                    <span className="text-xs font-bold text-white/40 tracking-widest">
                      REACTION: {bot.delay}
                    </span>
                  </div>
                </div>
                <p className="text-white/60 leading-relaxed">
                  {bot.behavior}
                </p>
                <div className={`absolute -right-2 top-1/2 -translate-y-1/2 h-12 w-1 bg-cyber-${bot.glow} shadow-[0_0_15px_rgba(var(--color-rgb),0.8)]`} />
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
