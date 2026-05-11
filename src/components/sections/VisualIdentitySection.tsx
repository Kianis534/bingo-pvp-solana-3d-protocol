"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { Palette, Box, Layers } from "lucide-react";

export const VisualIdentitySection = () => {
  const { visualIdentity } = siteContent;

  return (
    <section className="relative py-24 px-4 bg-black">
      <div className="container mx-auto">
        <SectionTitle
          eyebrow="Aesthetics"
          title={visualIdentity.title}
          subtitle={`Theme: ${visualIdentity.style}`}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
             <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Palette className="text-cyber-cyan" /> Design Elements
             </h3>
             <div className="grid grid-cols-2 gap-4">
                {visualIdentity.elements.map((el, i) => (
                   <div key={i} className="p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
                      <span className="text-sm font-bold uppercase tracking-widest text-white/80">{el}</span>
                   </div>
                ))}
             </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
             <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Layers className="text-cyber-purple" /> Advanced Shaders
             </h3>
             <div className="space-y-4">
                {visualIdentity.shaders.map((shader, i) => (
                   <GlassCard key={i} className="py-4" glowColor="purple">
                      <h4 className="text-cyber-purple font-bold uppercase text-sm mb-1">{shader.name}</h4>
                      <p className="text-xs text-white/50">{shader.description}</p>
                   </GlassCard>
                ))}
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
