import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "cyan" | "purple" | "gold" | "green" | "magenta" | "red";
}

export const GlassCard = ({ children, className, glowColor = "cyan" }: GlassCardProps) => {
  const glowStyles = {
    cyan: "hover:border-cyber-cyan/50 hover:shadow-[0_0_30px_rgba(0,243,255,0.15)]",
    purple: "hover:border-cyber-purple/50 hover:shadow-[0_0_30px_rgba(157,0,255,0.15)]",
    gold: "hover:border-cyber-gold/50 hover:shadow-[0_0_30px_rgba(255,215,0,0.15)]",
    green: "hover:border-cyber-green/50 hover:shadow-[0_0_30px_rgba(0,255,102,0.15)]",
    magenta: "hover:border-cyber-magenta/50 hover:shadow-[0_0_30px_rgba(255,0,255,0.15)]",
    red: "hover:border-cyber-red/50 hover:shadow-[0_0_30px_rgba(255,0,51,0.15)]",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-500",
        glowStyles[glowColor],
        className
      )}
    >
      <div className="absolute -left-1/2 -top-1/2 h-full w-full animate-pulse bg-gradient-to-br from-white/5 to-transparent opacity-20" />
      <div className="relative z-10 p-6">{children}</div>
    </div>
  );
};
