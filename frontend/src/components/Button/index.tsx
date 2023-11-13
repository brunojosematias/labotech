import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export function Button({ asChild, ...props }: IButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      {...props}
      className="w-full text-orange text-center bg-background font-medium border-2 border-orange rounded-3xl py-3 hover:bg-orange hover:text-black transition-all"
    >
      {props.children}
    </Component>
  );
}
