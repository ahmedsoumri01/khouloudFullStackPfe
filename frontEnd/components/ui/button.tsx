import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
          destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
          secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
          link: "text-primary underline-offset-4 hover:underline", 
          yellow: "bg-[#ffcc00] font-bold text-black shadow-sm hover:bg-yellow/90",
          red:  "bg-red-500 text-primary-foreground shadow hover:bg-red-500/90",
       
          outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
          ghost: "hover:bg-accent hover:text-accent-foreground",
        signInButton:
          "bg-blue-600 rounded-full text-white font-semibold cursor-pointer hover:bg-white hover:border-2 hover:border-blue-600 hover:text-blue-500 ease-in-out duration-500",
        signUpButton:
          "rounded-full text-blue-600 border-2 border-blue-600  font-semibold cursor-pointer hover:bg-blue-600 hover:border-2 hover:border-blue-600 hover:text-white ease-in-out duration-500",
        searchBtnStyleOne:
          "font-bold bg-blue-600 min-h-12 min-w-28 mx-2 text-white cursor-pointer hover:bg-blue-500 ease-in-out duration-500",
        outlinedBtn:
          "border-2 border-blue-600 rounded-full !h-14 text-blue-500 font-bold w-2/3 mx-2 text-lg cursor-pointer duration-300 ease-in-out hover:bg-blue-600 hover:text-white",
        findWorkerBtn:
          " bg-blue-600 w-1/3 text-white rounded-full !h-14 mx-2 text-lg cursor-pointer duration-300 ease-in-out hover:bg-blue-500 ",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10  px-6 has-[>svg]:px-4",
        icon: "size-9",
        fullWidth: "w-full h-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
