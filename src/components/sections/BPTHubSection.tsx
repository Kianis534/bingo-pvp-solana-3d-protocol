"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { Wallet, Coins, History, Copy } from "lucide-react";

export const BPTHubSection = () => {
  const { bpthub } = siteContent;

  return (
    <section id="bpthub" className="relative py-24 px-4 bg-black/80">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle
              align="left"
              eyebrow="Economic Hub"
              title={bpthub.title}
            />
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Managing your <span className="text-cyber-gold font-bold">{bpthub.token}</span> has never been easier. The BPTHub is your central command for all financial operations.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {bpthub.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-white/60">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyber-gold" />
                  <span className="text-sm font-medium uppercase tracking-tight">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard glowColor="gold" className="p-0 overflow-hidden border-cyber-gold/20">
              <div className="bg-cyber-gold/10 p-6 border-b border-cyber-gold/20 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Wallet className="h-6 w-6 text-cyber-gold" />
                  <span className="font-bold tracking-widest uppercase">Arena Wallet</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-white/40">BALANCE:</span>
                  <span className="text-lg font-black text-cyber-gold">1,250.00 BPT</span>
                </div>
              </div>
              <div className="p-8 space-y-8">
                <div>
                  <label className="text-xs font-bold text-white/40 uppercase mb-3 block">BPT Token Utilities</label>
                  <div className="flex flex-wrap gap-2">
                    {bpthub.uses.map((use, i) => (
                      <span key={i} className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-bold text-white/70 uppercase">
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-black/40 rounded-xl p-4 border border-white/5">
                   <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Deposit Address</span>
                      <Copy className="h-3 w-3 text-cyber-cyan cursor-pointer hover:text-white transition-colors" />
                   </div>
                   <div className="text-xs font-mono text-white/60 truncate">
                      AC8qx9XeZdhVxJac8k5RpZ1mVvCHtsnY59MsaauLewh9
                   </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
