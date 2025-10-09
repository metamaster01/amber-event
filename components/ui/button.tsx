import * as React from "react";
import { cn } from "@/lib/utils"; // optional helper for merging classNames

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "rounded-xl px-5 py-2 font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2",
          variant === "primary" &&
            "bg-[#B84C0E] text-white hover:bg-[#9B3F0C] focus:ring-[#B84C0E]",
          variant === "secondary" &&
            "bg-[#F3E7D0] text-[#B84C0E] border border-[#B84C0E] hover:bg-[#e8d9b9] focus:ring-[#B84C0E]",
          variant === "outline" &&
            "border border-[#B84C0E] text-[#B84C0E] bg-transparent hover:bg-[#F3E7D0] focus:ring-[#B84C0E]",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
