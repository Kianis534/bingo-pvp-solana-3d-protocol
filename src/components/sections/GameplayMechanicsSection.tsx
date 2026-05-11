"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { Grid3X3, RefreshCw, ShieldCheck, Zap, Timer, Cpu } from "lucide-react";

const mechanicIcons = [Grid3X3, RefreshCw, ShieldCheck, Zap, Timer, Cpu];

export const GameplayMechanicsSection = () => {
  const { mechanics } = siteContent;

  return (
    <section className="relative py-24 px-4 bg-black/80">
      <div className="container mx-auto">
        <SectionTitle
          eyebrow="System Tech"
          title={mechanics.title}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {mechanics.items.map((item, i) => {
            const Icon = mechanicIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <GlassCard className="h-full border-white/5 hover:border-cyber-cyan/30 group">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="rounded-lg bg-white/5 p-3 group-hover:bg-cyber-cyan/10 transition-colors">
                        <Icon className="h-6 w-6 text-cyber-cyan" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
                    </div>
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
