"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { MessageSquare, Share2, Radio, Terminal } from "lucide-react";

const socialIcons = [Share2, Radio, MessageSquare, Terminal];

export const SocialEcosystemSection = () => {
  const { social } = siteContent;

  return (
    <section id="social" className="relative py-24 px-4 bg-black/60">
      <div className="container mx-auto">
        <SectionTitle
          eyebrow="Data Athlete Network"
          title={social.title}
          subtitle={social.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {social.features.map((feature, i) => {
            const Icon = socialIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <GlassCard className="h-full group" glowColor="purple">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                       <div className="p-4 rounded-2xl bg-cyber-purple/10 border border-cyber-purple/30 group-hover:bg-cyber-purple/20 transition-all">
                          <Icon className="h-8 w-8 text-cyber-purple" />
                       </div>
                    </div>
                    <div>
                       <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyber-purple transition-colors">
                          {feature.title}
                       </h3>
                       <p className="text-white/50 leading-relaxed">
                          {feature.description}
                       </p>
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
