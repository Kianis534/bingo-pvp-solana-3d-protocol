"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

export const HowToPlaySection = () => {
  const { howToPlay } = siteContent;

  return (
    <section id="gameplay" className="relative py-24 px-4">
      <div className="container mx-auto">
        <SectionTitle
          eyebrow="Rules of Engagement"
          title={howToPlay.title}
        />

        <div className="relative mt-20">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyber-cyan via-cyber-purple to-transparent opacity-20 hidden md:block" />
          
          <div className="flex flex-col gap-12">
            {howToPlay.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={cn(
                  "flex w-full items-center justify-center md:justify-between",
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                <div className="w-full md:w-[45%]">
                  <GlassCard className="relative overflow-visible" glowColor={i % 2 === 0 ? "cyan" : "purple"}>
                    <div className={cn(
                      "absolute -top-10 flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-black text-black shadow-lg",
                      i % 2 === 0 ? "left-6 bg-cyber-cyan shadow-cyber-cyan/50" : "right-6 bg-cyber-purple shadow-cyber-purple/50"
                    )}>
                      0{i + 1}
                    </div>
                    <h3 className="mt-4 text-2xl font-bold uppercase text-white">{step.title}</h3>
                    <p className="mt-4 text-white/60 leading-relaxed">{step.description}</p>
                  </GlassCard>
                </div>
                <div className="hidden md:block w-[5%]" />
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
