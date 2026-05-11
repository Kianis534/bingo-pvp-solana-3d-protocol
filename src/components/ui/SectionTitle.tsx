import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionTitle = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionTitleProps) => {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-2",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyber-cyan opacity-80">
          {eyebrow}
        </span>
      )}
      <h2 className="bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-4xl font-black uppercase tracking-tight text-transparent md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-lg text-white/60">
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1 w-24 bg-cyber-cyan shadow-[0_0_10px_rgba(0,243,255,0.8)]",
        align === "center" ? "mt-4" : "mt-2"
      )} />
    </div>
  );
};
