"use client";

import Link from "next/link";
import { Shield, Twitter, Github, MessageSquare } from "lucide-react";
import { navigation } from "@/data/navigation";

export const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-cyber-cyan/10 bg-black py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyber-magenta/10 blur-[100px]" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-cyber-cyan/10 blur-[100px]" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <Shield className="w-8 h-8 text-cyber-cyan group-hover:scale-110 transition-transform" />
              <span className="text-2xl font-black uppercase tracking-tighter">
                Bingo PVP
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              The futuristic competitive Bingo arena where Data Athletes compete for BPT tokens in high-speed matches.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-full border border-white/10 hover:border-cyber-cyan hover:text-cyber-cyan transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full border border-white/10 hover:border-cyber-cyan hover:text-cyber-cyan transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full border border-white/10 hover:border-cyber-cyan hover:text-cyber-cyan transition-colors">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Site Map */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-cyber-magenta">Ecosystem</h4>
            <ul className="flex flex-col gap-3">
              {navigation.slice(0, 5).map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/40 hover:text-cyber-cyan transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-cyber-cyan">Game Info</h4>
            <ul className="flex flex-col gap-3">
              {navigation.slice(5).map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/40 hover:text-cyber-cyan transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Details */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-white">Project Specs</h4>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <span className="text-[10px] text-white/30 uppercase tracking-widest">Engine</span>
                <span className="text-sm text-white/70">Godot 4.6.2</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-white/30 uppercase tracking-widest">Network</span>
                <span className="text-sm text-white/70">Solana / Anchor</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-white/30 uppercase tracking-widest">Protocol</span>
                <span className="text-sm text-white/70">AC8qx...Lewh9</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/20">
          <span>&copy; 2026 Bingo PVP Arena. All Rights Reserved.</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
