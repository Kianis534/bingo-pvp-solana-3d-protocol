"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { Trophy, Star, Zap, Rocket } from "lucide-react";

const advantageIcons = [Zap, Star, Rocket, Trophy];

export const HackathonAdvantagesSection = () => {
  const { advantages } = siteContent;

  return (
    <section className="relative py-24 px-4 bg-black/80">
      <div className="container mx-auto">
        <SectionTitle
          eyebrow="Innovation"
          title={advantages.title}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
           {advantages.points.map((point, i) => {
              const Icon = advantageIcons[i];
              return (
                 <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                 >
                    <GlassCard className="h-full group hover:border-cyber-gold/50" glowColor="gold">
                       <div className="mb-4 inline-flex p-3 rounded-xl bg-cyber-gold/10 group-hover:bg-cyber-gold/20 transition-all">
                          <Icon className="h-6 w-6 text-cyber-gold" />
                       </div>
                       <h3 className="text-sm font-black uppercase text-white leading-tight">
                          {point}
                       </h3>
                    </GlassCard>
                 </motion.div>
              );
           })}
        </div>
      </div>
    </section>
  );
};
