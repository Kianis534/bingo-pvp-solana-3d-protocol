"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { ShieldAlert, ShieldCheck, ShieldClose, ShieldHalf } from "lucide-react";

const shieldIcons = [ShieldCheck, ShieldHalf, ShieldAlert, ShieldClose];

export const SmartContractSecuritySection = () => {
  const { security } = siteContent;

  return (
    <section id="security" className="relative py-24 px-4 bg-black/80">
      <div className="container mx-auto">
        <SectionTitle
          eyebrow="Fortress Architecture"
          title={security.title}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {security.layers.map((layer, i) => {
            const Icon = shieldIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard className="h-full group" glowColor="red">
                   <div className="mb-6 flex justify-center">
                      <div className="p-4 rounded-2xl bg-cyber-red/10 border border-cyber-red/30 group-hover:bg-cyber-red/20 transition-all">
                         <Icon className="h-10 w-10 text-cyber-red" />
                      </div>
                   </div>
                   <h3 className="text-sm font-bold text-cyber-red uppercase tracking-widest text-center mb-2">Layer 0{i + 1}</h3>
                   <h3 className="text-xl font-black uppercase text-center mb-3 text-white">
                      {layer.title}
                   </h3>
                   <p className="text-center text-sm text-white/50 leading-relaxed">
                      {layer.description}
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
