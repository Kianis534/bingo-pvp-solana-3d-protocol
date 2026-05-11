"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { Server, Database, Zap } from "lucide-react";

export const HybridLedgerSection = () => {
  const { hybridLedger } = siteContent;

  return (
    <section id="ledger" className="relative py-24 px-4 overflow-hidden">
      <div className="container mx-auto">
        <SectionTitle
          eyebrow="Integration"
          title={hybridLedger.title}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12 items-center">
           <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8 }}
           >
              <GlassCard glowColor="purple">
                 <Server className="h-10 w-10 text-cyber-purple mb-4" />
                 <h3 className="text-xl font-bold text-white mb-2 uppercase">The Vault</h3>
                 <p className="text-cyber-purple font-bold text-sm mb-4">{hybridLedger.vault}</p>
                 <p className="text-white/50 text-sm italic">"Real tokens, high security."</p>
              </GlassCard>
           </motion.div>

           <motion.div
              initial={{ opacity: 1 }}
              className="flex flex-col items-center gap-4 py-8"
           >
              <div className="h-px w-full bg-gradient-to-r from-cyber-purple via-cyber-cyan to-cyber-cyan opacity-50" />
              <div className="bg-black border border-cyber-cyan rounded-full p-4 animate-pulse">
                 <Zap className="h-8 w-8 text-cyber-cyan" />
              </div>
              <div className="text-xs font-bold text-cyber-cyan uppercase tracking-[0.4em]">Hybrid Bridge</div>
              <div className="h-px w-full bg-gradient-to-r from-cyber-cyan via-cyber-cyan to-cyber-purple opacity-50" />
           </motion.div>

           <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
           >
              <GlassCard glowColor="cyan">
                 <Database className="h-10 w-10 text-cyber-cyan mb-4" />
                 <h3 className="text-xl font-bold text-white mb-2 uppercase">The Ledger</h3>
                 <p className="text-cyber-cyan font-bold text-sm mb-4">{hybridLedger.ledger}</p>
                 <p className="text-white/50 text-sm italic">"Instant actions, zero gas."</p>
              </GlassCard>
           </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
           {hybridLedger.advantages.map((adv, i) => (
              <motion.div
                 key={i}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.4, delay: i * 0.1 }}
                 className="p-4 rounded-xl border border-white/5 bg-white/5 text-center"
              >
                 <span className="text-[10px] md:text-xs font-bold text-cyber-cyan uppercase tracking-tighter">{adv}</span>
              </motion.div>
           ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="mt-20 max-w-3xl mx-auto"
        >
           <GlassCard className="p-8 border-cyber-cyan/30">
              <h3 className="text-2xl font-bold text-cyber-cyan mb-6 uppercase tracking-wider text-center">Why the Hybrid Model?</h3>
              <p className="text-white/60 text-center leading-relaxed italic">
                 "A pure blockchain game requires on-chain transactions for every action, creating gas fee friction and poor mobile UX. The hybrid model allows for instant gameplay, zero gas fees during active play, and smooth mobile-native experience while maintaining Web3 security finality."
              </p>
           </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
