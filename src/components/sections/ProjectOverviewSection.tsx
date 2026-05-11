"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ShieldCheck, Cpu, Zap } from "lucide-react";

export const ProjectOverviewSection = () => {
  const { overview } = siteContent;

  return (
    <section id="overview" className="relative py-24 px-4 overflow-hidden">
      {/* Background Yellow/Gold Circle - sent to back */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-gold/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-cyber-gold/10 rounded-full -z-10 animate-pulse" />
      
      <div className="container mx-auto relative z-20">
        <SectionTitle
          eyebrow="Introduction"
          title={overview.title}
          subtitle={overview.description}
        />

        <div className="flex flex-col gap-16 mt-16 items-center">
          {/* Visual Row - Restored to Centered Vertical Position */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-30"
          >
             {/* Tech Circle - "Lesser" (Smaller) and "Smarter" (Refined details) */}
             <div className="relative w-64 h-64 md:w-72 md:h-72 bg-black/40 rounded-full backdrop-blur-md border border-white/10 flex items-center justify-center">
                <div className="absolute inset-0 bg-cyber-cyan/5 blur-2xl rounded-full" />
                <div className="absolute inset-0 border-2 border-cyber-cyan/20 rounded-full animate-pulse" />
                <div className="absolute inset-4 border border-dashed border-white/10 rounded-full animate-reverse-spin" />
                <div className="absolute inset-8 border border-cyber-purple/10 rounded-full animate-pulse" />
                
                <div className="text-center p-8 relative z-10">
                   <Zap className="w-10 h-10 text-cyber-gold mx-auto mb-3 animate-pulse" />
                   <span className="block text-sm font-bold text-cyber-cyan tracking-[0.2em] mb-1">SOLANA SMART CONTRACT</span>
                   <div className="h-px w-16 bg-white/20 mx-auto mb-2" />
                   <span className="block text-2xl font-black text-white leading-tight">GODOT</span>
                   <span className="text-cyber-cyan font-bold tracking-[0.3em] text-[10px]">ENGINE 4.6.2</span>
                </div>

                {/* Orbiting Icon */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 p-2 bg-black border border-cyber-cyan rounded-lg shadow-[0_0_15px_rgba(0,243,255,0.4)]">
                   <Cpu className="w-5 h-5 text-cyber-cyan" />
                </div>
             </div>
          </motion.div>

          {/* Highlights Row - Restored to Position Below */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl relative z-30"
          >
            <div className="relative p-8 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyber-cyan/10 blur-[80px] group-hover:bg-cyber-cyan/20 transition-colors" />
              
              <h3 className="text-2xl font-bold text-cyber-cyan mb-8 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6" />
                Protocol Highlights
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {overview.details.map((detail, i) => (
                  <div key={i} className="flex items-center gap-4 group/item">
                    <div className="h-2 w-2 rounded-full bg-cyber-cyan shadow-[0_0_10px_rgba(0,243,255,0.8)] group-hover/item:scale-150 transition-transform" />
                    <span className="text-white/80 group-hover/item:text-white transition-colors">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
