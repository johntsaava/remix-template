import React from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

const input = cva("rounded outline-cyan-400", {
  variants: {
    intent: {
      primary: ["border", "border-slate-400"],
    },
    size: {
      medium: ["p-2"],
    },
    width: {
      full: "w-full",
    },
    state: {
      error: "border-red-500",
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export type InputProps = Omit<VariantProps<typeof input>, "class"> &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input({ intent, size, width, className, state, ...props }, ref) {
    return (
      <input
        className={input({ intent, size, width, state, class: className })}
        {...props}
        ref={ref}
      />
    );
  }
);
