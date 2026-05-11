"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";

export const PlayerJourneySection = () => {
  const { journey } = siteContent;

  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto">
        <SectionTitle
          eyebrow="The Experience"
          title={journey.title}
        />

        <div className="relative mt-12 flex flex-wrap justify-center gap-4">
           {journey.steps.map((step, i) => (
              <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                 <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-full hover:bg-cyber-cyan/10 hover:border-cyber-cyan/30 transition-all cursor-default">
                    <span className="text-xs font-black text-cyber-cyan">0{i + 1}</span>
                    <span className="text-sm font-bold uppercase tracking-widest text-white/80">{step}</span>
                 </div>
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};
