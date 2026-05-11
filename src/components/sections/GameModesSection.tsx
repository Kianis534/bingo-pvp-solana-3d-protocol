"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { Users, Bot, Smartphone } from "lucide-react";

const modeIcons = [Users, Bot, Smartphone];

export const GameModesSection = () => {
  const { gameModes } = siteContent;

  return (
    <section id="modes" className="relative py-24 px-4">
      <div className="container mx-auto">
        <SectionTitle
          eyebrow="Battlegrounds"
          title="Arena Game Modes"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {gameModes.map((mode, i) => {
            const Icon = modeIcons[i];
            const color = i === 0 ? "cyan" : i === 1 ? "purple" : "gold";
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
              >
                <GlassCard className="h-full flex flex-col p-8" glowColor={color}>
                  <div className={`mb-8 inline-flex p-4 rounded-2xl bg-cyber-${color}/10`}>
                    <Icon className={`h-12 w-12 text-cyber-${color}`} />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-4">
                    {mode.title}
                  </h3>
                  <p className="text-white/60 mb-8">
                    {mode.description}
                  </p>
                  <div className="mt-auto space-y-3">
                    {mode.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-white/40">
                        <div className={`h-1.5 w-1.5 rounded-full bg-cyber-${color}`} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
