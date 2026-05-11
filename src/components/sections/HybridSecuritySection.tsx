"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { Shield, Server, Database, UserCheck } from "lucide-react";

const roleIcons = [Server, Shield, UserCheck];

export const HybridSecuritySection = () => {
  const { hybridSecurity } = siteContent;

  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto">
        <SectionTitle
          eyebrow="Redundancy"
          title={hybridSecurity.title}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
           {hybridSecurity.roles.map((role, i) => {
              const Icon = roleIcons[i];
              return (
                 <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                 >
                    <GlassCard className="h-full border-t-4 border-t-cyber-cyan text-center" glowColor="cyan">
                       <Icon className="h-10 w-10 text-cyber-cyan mx-auto mb-4" />
                       <h3 className="text-xl font-black uppercase text-white mb-2">{role.role}</h3>
                       <p className="text-white/50 text-sm leading-relaxed">{role.responsibility}</p>
                    </GlassCard>
                 </motion.div>
              );
           })}
        </div>
      </div>
    </section>
  );
};
