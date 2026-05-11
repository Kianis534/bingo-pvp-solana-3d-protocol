"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { Layers, Database, Cpu, Globe } from "lucide-react";

const archIcons = [Layers, Globe, Cpu, Database];

export const SmartContractArchitectureSection = () => {
  const { architecture } = siteContent;

  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto">
        <SectionTitle
          eyebrow="On-Chain Infrastructure"
          title={architecture.title}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {architecture.components.map((comp, i) => {
            const Icon = archIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard className="h-full group hover:bg-cyber-blue/10" glowColor="cyan">
                   <div className="mb-6 flex justify-center">
                      <div className="p-4 rounded-full bg-white/5 group-hover:bg-cyber-blue/20 transition-all">
                         <Icon className="h-10 w-10 text-cyber-blue" />
                      </div>
                   </div>
                   <h3 className="text-xl font-black uppercase text-center mb-3 text-white">
                      {comp.title}
                   </h3>
                   <p className="text-center text-sm text-white/50 leading-relaxed">
                      {comp.description}
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
