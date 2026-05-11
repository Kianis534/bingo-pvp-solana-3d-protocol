"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { siteContent } from "@/data/siteContent";

export const FinalCTASection = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden bg-gradient-to-t from-cyber-cyan/10 to-transparent">
       <div className="container mx-auto text-center relative z-10">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
             <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6">
                Bingo PVP is not just Bingo.
             </h2>
             <p className="text-xl md:text-2xl text-cyber-cyan font-bold uppercase tracking-[0.2em] mb-12">
                It is a competitive Web3 gaming arena.
             </p>
             <div className="flex flex-wrap justify-center gap-6">
                <Button size="lg" className="h-16 px-12 text-lg">Explore Game Details</Button>
                <Button size="lg" variant="secondary" className="h-16 px-12 text-lg">View Smart Contract</Button>
                <Button size="lg" variant="gold" className="h-16 px-12 text-lg">View Token Economy</Button>
             </div>
          </motion.div>
       </div>

       {/* Background decorative elements */}
       <div className="absolute top-1/2 left-0 w-full h-px bg-cyber-cyan/20 -translate-y-1/2" />
       <div className="absolute top-0 left-1/2 w-px h-full bg-cyber-cyan/20 -translate-x-1/2" />
    </section>
  );
};
