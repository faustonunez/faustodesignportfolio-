import type { ReactNode } from "react";
import { clsx } from "clsx";

export interface StickyToggleBarProps {
  children: ReactNode;
  className?: string;
}

/** Sticky below fixed nav (`Nav` ~py-10 + content); tune `top` if nav height changes. */
export function StickyToggleBar({ children, className }: StickyToggleBarProps) {
  return (
    <div
      className={clsx(
        "sticky top-28 z-40 w-full flex justify-center",
        "border-b border-black/[0.06] dark:border-white/10",
        "bg-brand-greys-0/90 dark:bg-[#1b1d27]/90 backdrop-blur-sm",
        className,
      )}
    >
      <div className="responsive-width-case-study w-full flex justify-center py-3 px-2">
        {children}
      </div>
    </div>
  );
}
