"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { Shield, Lock, FileCode, CheckCircle } from "lucide-react";

export const SmartContractOverviewSection = () => {
  const { smartContract } = siteContent;

  return (
    <section id="contract" className="relative py-24 px-4 bg-black/90 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-cyber-blue/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
           >
              <div className="aspect-square relative max-w-md mx-auto">
                 <div className="absolute inset-0 bg-cyber-blue/20 blur-3xl animate-pulse" />
                 <div className="absolute inset-4 border border-cyber-blue/30 rounded-full" />
                 <div className="absolute inset-12 border-2 border-white/5 rounded-full" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Shield className="h-32 w-32 text-cyber-blue drop-shadow-[0_0_30px_rgba(0,102,255,0.8)]" />
                 </div>
                 {/* Orbiting nodes */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 bg-black border border-cyber-blue rounded-xl animate-bounce">
                    <Lock className="h-6 w-6 text-cyber-blue" />
                 </div>
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 p-3 bg-black border border-cyber-cyan rounded-xl animate-bounce [animation-delay:0.5s]">
                    <FileCode className="h-6 w-6 text-cyber-cyan" />
                 </div>
              </div>
           </motion.div>

           <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
           >
              <SectionTitle
                 align="left"
                 eyebrow="The Protocol"
                 title={smartContract.title}
                 subtitle={`Built on ${smartContract.platform}`}
              />
              <p className="text-xl text-white/70 mb-8 font-light italic">
                 "{smartContract.mission}"
              </p>
              <div className="mb-8 p-4 border-l-2 border-cyber-blue bg-cyber-blue/5">
                 <p className="text-xs text-cyber-blue font-bold uppercase tracking-[0.3em] mb-1">Guiding Principle</p>
                 <p className="text-lg font-black text-white uppercase tracking-tighter italic">"Code is Law"</p>
                 <p className="text-sm text-white/40 mt-2">Hardcoded economic rules ensure transparency and solve the trust gap between players and operators.</p>
              </div>
              <div className="space-y-4">
                 {smartContract.keyPoints.map((point, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyber-blue/50 transition-colors">
                       <CheckCircle className="h-5 w-5 text-cyber-blue" />
                       <span className="text-white/80 font-bold tracking-wide uppercase text-sm">{point}</span>
                    </div>
                 ))}
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};
