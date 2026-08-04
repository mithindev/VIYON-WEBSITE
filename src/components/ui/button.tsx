import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-sky-dark text-white shadow hover:bg-sky-primary hover:-translate-y-0.5 hover:shadow-lg",
        sky:
          "bg-sky-primary text-white shadow hover:bg-sky-dark hover:-translate-y-0.5 hover:shadow-lg",
        outline:
          "border-2 border-sky-dark text-sky-dark bg-transparent hover:bg-sky-dark hover:text-white hover:-translate-y-0.5",
        "outline-white":
          "border-2 border-white/70 text-white bg-transparent hover:bg-white hover:text-sky-dark hover:-translate-y-0.5",
        white:
          "bg-white text-sky-dark shadow hover:bg-sky-light hover:-translate-y-0.5 hover:shadow-lg",
        ghost:
          "bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
        link:
          "text-sky-primary underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-11 px-7 py-2.5",
        sm:      "h-9 px-5 text-xs",
        lg:      "h-13 px-9 text-base",
        icon:    "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
