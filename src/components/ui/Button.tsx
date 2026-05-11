import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyber-cyan disabled:pointer-events-none disabled:opacity-50 uppercase tracking-widest",
  {
    variants: {
      variant: {
        primary:
          "bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/50 hover:bg-cyber-cyan/20 hover:shadow-[0_0_20px_rgba(0,243,255,0.5)]",
        secondary:
          "bg-cyber-purple/10 text-cyber-purple border border-cyber-purple/50 hover:bg-cyber-purple/20 hover:shadow-[0_0_20px_rgba(157,0,255,0.5)]",
        gold:
          "bg-cyber-gold/10 text-cyber-gold border border-cyber-gold/50 hover:bg-cyber-gold/20 hover:shadow-[0_0_20px_rgba(255,215,0,0.5)]",
        outline:
          "border border-white/20 hover:border-white/50 hover:bg-white/5 text-white",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
