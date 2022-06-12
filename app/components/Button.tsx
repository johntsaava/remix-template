import React from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

const button = cva("rounded outline-cyan-400", {
  variants: {
    intent: {
      primary: [
        "text-white",
        "bg-cyan-500",
        "hover:bg-cyan-600",
        "active:bg-cyan-700",
      ],
      secondary: [
        "text-slate-800",
        "border",
        "border-slate-400",
        "bg-slate-100",
        "hover:bg-slate-200",
        "active:bg-slate-300",
      ],
    },
    size: {
      small: ["py-1", "px-2", "text-sm"],
      medium: ["py-2", "px-4"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "shadow-xl" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export type ButtonProps = Omit<VariantProps<typeof button>, "class"> &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;

export function Button({
  intent,
  size,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={button({ intent, size, class: className })} {...props}>
      {children}
    </button>
  );
}
