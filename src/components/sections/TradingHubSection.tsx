"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowLeftRight, Database, ShieldCheck } from "lucide-react";

const tradingIcons = [ShieldCheck, Database, ArrowLeftRight];

export const TradingHubSection = () => {
  const { trading } = siteContent;

  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto">
        <SectionTitle
          eyebrow="Marketplace"
          title={trading.title}
          subtitle={trading.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {trading.details.map((item, i) => {
            const Icon = tradingIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="h-full"
              >
                <GlassCard className="h-full text-center p-8" glowColor="gold">
                  <Icon className="h-12 w-12 text-cyber-gold mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
