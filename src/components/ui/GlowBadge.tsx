import { cn } from "@/lib/utils";

interface GlowBadgeProps {
  children: React.ReactNode;
  color?: "cyan" | "purple" | "gold" | "green" | "red";
  className?: string;
}

export const GlowBadge = ({ children, color = "cyan", className }: GlowBadgeProps) => {
  const colors = {
    cyan: "bg-cyber-cyan/10 text-cyber-cyan border-cyber-cyan/30 shadow-[0_0_10px_rgba(0,243,255,0.2)]",
    purple: "bg-cyber-purple/10 text-cyber-purple border-cyber-purple/30 shadow-[0_0_10px_rgba(157,0,255,0.2)]",
    gold: "bg-cyber-gold/10 text-cyber-gold border-cyber-gold/30 shadow-[0_0_10px_rgba(255,215,0,0.2)]",
    green: "bg-cyber-green/10 text-cyber-green border-cyber-green/30 shadow-[0_0_10px_rgba(0,255,102,0.2)]",
    red: "bg-cyber-red/10 text-cyber-red border-cyber-red/30 shadow-[0_0_10px_rgba(255,0,51,0.2)]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider",
        colors[color],
        className
      )}
    >
      {children}
    </span>
  );
};
