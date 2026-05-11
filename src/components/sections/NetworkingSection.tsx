"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { Network, Activity, Globe, Lock } from "lucide-react";

const networkingIcons = [Network, Activity, Lock, Globe];

export const NetworkingSection = () => {
  const { networking } = siteContent;

  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto">
        <SectionTitle
          eyebrow="Network Layer"
          title={networking.title}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {networking.details.map((item, i) => {
            const Icon = networkingIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard className="h-full border-l-4 border-l-cyber-cyan group hover:bg-cyber-cyan/5">
                  <div className="flex items-start gap-4">
                    <Icon className="h-8 w-8 text-cyber-cyan mt-1 group-hover:animate-pulse" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/50">{item.description}</p>
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
