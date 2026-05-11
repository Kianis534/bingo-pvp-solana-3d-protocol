"use client";

import { Volume2, VolumeX, Music } from "lucide-react";
import { useGlobalStore } from "@/store/useGlobalStore";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

interface SoundToggleProps {
  variant?: "floating" | "navbar";
}

export const SoundToggle = ({ variant = "floating" }: SoundToggleProps) => {
  const { isSoundEnabled, isMuted, toggleSound, toggleMute } = useGlobalStore();

  if (variant === "navbar") {
    return (
      <button
        onClick={isSoundEnabled ? toggleMute : toggleSound}
        className={cn(
          "p-2 rounded-full transition-all duration-300",
          isSoundEnabled && !isMuted ? "text-cyber-cyan shadow-[0_0_10px_rgba(0,243,255,0.3)]" : "text-white/40"
        )}
      >
        {!isSoundEnabled || isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>
    );
  }

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      {!isSoundEnabled ? (
        <Button
          variant="primary"
          onClick={toggleSound}
          className="group relative h-14 w-auto px-6 overflow-hidden shadow-[0_0_30px_rgba(0,243,255,0.2)]"
        >
          <div className="absolute inset-0 bg-cyber-cyan opacity-20 group-hover:opacity-30 transition-opacity" />
          <Music className="mr-2 h-5 w-5 animate-pulse" />
          <span className="font-bold tracking-tighter">ENABLE ARENA SOUND</span>
        </Button>
      ) : (
        <Button
          variant="secondary"
          size="icon"
          onClick={toggleMute}
          className="h-12 w-12 rounded-full border-cyber-purple/50 bg-cyber-purple/10 text-cyber-purple shadow-[0_0_15px_rgba(157,0,255,0.3)] hover:scale-110 transition-transform"
        >
          {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
        </Button>
      )}
    </div>
  );
};
