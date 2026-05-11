"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowRight, ChevronDown } from "lucide-react";

export const EconomicFlowSection = () => {
  const { economicFlow } = siteContent;

  return (
    <section className="relative py-24 px-4 bg-black/60">
      <div className="container mx-auto">
        <SectionTitle
          eyebrow="Lifecycle"
          title="Economic Flow"
        />

        <div className="relative space-y-8 mt-12 max-w-4xl mx-auto">
           {/* Connecting Line */}
           <div className="absolute left-[3.25rem] top-10 bottom-10 w-[2px] bg-gradient-to-b from-cyber-gold/20 via-cyber-gold/50 to-cyber-gold/20 hidden md:block" />

           {economicFlow.map((flow, i) => (
              <motion.div
                 key={i}
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, amount: 0.1 }}
                 transition={{ duration: 0.5, delay: i * 0.1 }}
                 className="relative z-10"
              >
                 <GlassCard className="group hover:bg-white/10" glowColor="gold">
                    <div className="flex flex-col md:flex-row items-center gap-6 p-2">
                       <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black border border-cyber-gold/50 flex items-center justify-center text-xl font-black text-cyber-gold shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                          {i + 1}
                       </div>
                       <div className="flex-shrink-0 font-black text-xl uppercase tracking-widest text-white w-full md:w-40 text-center md:text-left">{flow.step}</div>
                       <ArrowRight className="text-cyber-gold hidden md:block" />
                       <ChevronDown className="text-cyber-gold md:hidden" />
                       <div className="text-white/60 text-sm flex-grow">{flow.description}</div>
                    </div>
                 </GlassCard>
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};
