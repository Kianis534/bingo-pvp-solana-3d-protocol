"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { Volume2, Smartphone, Settings } from "lucide-react";

export const AudioSettingsSection = () => {
  const { audioHaptics } = siteContent;

  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto">
        <SectionTitle
          eyebrow="Immersion"
          title={audioHaptics.title}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {audioHaptics.features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className="h-full border-b-4 border-b-cyber-green" glowColor="green">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-cyber-green/10">
                       {i === 0 ? <Smartphone className="text-cyber-green" /> : i === 1 ? <Volume2 className="text-cyber-green" /> : <Settings className="text-cyber-green" />}
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase">{feature.title}</h3>
                 </div>
                 <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mt-12 bg-black/40 border border-white/5 rounded-2xl p-8 backdrop-blur-xl"
        >
           <h3 className="text-sm font-bold text-white/40 uppercase tracking-[0.3em] mb-8 text-center">Tactical Audio Channels</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {audioHaptics.channels.map((channel, i) => (
                 <div key={i} className="space-y-4">
                    <div className="flex justify-between text-xs font-bold uppercase text-cyber-green">
                       <span>{channel}</span>
                       <span>{80 - i * 15}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                       <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${80 - i * 15}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                          className="h-full bg-cyber-green shadow-[0_0_10px_rgba(0,255,102,0.5)]"
                       />
                    </div>
                 </div>
              ))}
           </div>
        </motion.div>
      </div>
    </section>
  );
};
