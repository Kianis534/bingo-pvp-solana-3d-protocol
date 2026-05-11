"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, Cpu, Activity } from "lucide-react";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { SoundToggle } from "@/components/ui/SoundToggle";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-cyber-cyan/20 py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Shield className="w-8 h-8 text-cyber-cyan group-hover:scale-110 transition-transform" />
            <Activity className="w-4 h-4 text-cyber-magenta absolute -bottom-1 -right-1" />
          </div>
          <span className="text-xl font-black uppercase tracking-tighter bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
            Bingo PVP
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-bold uppercase tracking-widest transition-colors hover:text-cyber-cyan",
                pathname === item.href ? "text-cyber-cyan" : "text-white/60"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-4">
            <SoundToggle variant="navbar" />
            <Button variant="outline" size="sm" className="hidden xl:flex">
              <Cpu className="w-4 h-4 mr-2" />
              Join Arena
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <SoundToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white/60 hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-cyber-cyan/20 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-black uppercase tracking-tighter",
                    pathname === item.href ? "text-cyber-cyan" : "text-white/60"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="primary" className="w-full">
                Join Arena
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
