
"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
  intensity?: "subtle" | "medium" | "high";
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  intensity = "medium",
  ...props
}: AuroraBackgroundProps) => {
  const intensityClasses = {
    subtle: "opacity-30",
    medium: "opacity-60",
    high: "opacity-80",
  };

  return (
    <div
      className={cn(
        "relative min-h-screen w-full overflow-hidden bg-white dark:bg-zinc-950",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#ddd6fe_25%,#60a5fa_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[40px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] will-change-transform`,
            intensityClasses[intensity],
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_50%_50%,black_50%,transparent_100%)]`
          )}
        ></div>
      </div>
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};
