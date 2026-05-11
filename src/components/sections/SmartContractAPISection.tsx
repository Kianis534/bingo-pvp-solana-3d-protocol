"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CyberTable } from "@/components/ui/CyberTable";

export const SmartContractAPISection = () => {
  const { api } = siteContent;

  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto">
        <SectionTitle
          eyebrow="Developer Reference"
          title="Smart Contract API"
        />

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mt-12"
        >
           <CyberTable
              headers={["Instruction", "Authorization", "Purpose"]}
              rows={api.map(item => [item.name, item.auth, item.purpose])}
           />
        </motion.div>
      </div>
    </section>
  );
};
