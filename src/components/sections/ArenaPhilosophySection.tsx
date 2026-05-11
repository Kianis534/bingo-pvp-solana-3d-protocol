"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { Zap, Target, Brain } from "lucide-react";

const iconMap = {
  Speed: Zap,
  Focus: Target,
  Tactics: Brain,
};

export const ArenaPhilosophySection = () => {
  const { philosophy } = siteContent;

  return (
    <section className="relative py-24 px-4 bg-black/50">
      <div className="container mx-auto">
        <SectionTitle
          eyebrow="Our Mission"
          title={philosophy.title}
          subtitle={philosophy.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {philosophy.features.map((feature, i) => {
            const Icon = iconMap[feature.title as keyof typeof iconMap];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard className="text-center group h-full">
                  <div className="mb-6 flex justify-center">
                    <div className="rounded-2xl bg-cyber-cyan/10 p-4 transition-transform group-hover:scale-110">
                      <Icon className="h-10 w-10 text-cyber-cyan" />
                    </div>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold uppercase tracking-wider text-white">
                    {feature.title}
                  </h3>
                  <p className="text-white/60">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
