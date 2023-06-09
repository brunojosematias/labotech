import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes } from "react";

import { useLocation } from "react-router-dom";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

function classNames(...classes: (string | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function Button({ asChild, ...props }: IButtonProps) {
  const Component = asChild ? Slot : "button";

  const location = useLocation();

  return (
    <Component
      {...props}
      className={classNames(
        "w-full text-orange text-center bg-background font-medium border-2 border-orange rounded-3xl py-3 hover:bg-orange hover:text-black transition-all",

        location.pathname === "/ficha-anamnese" ||
          location.pathname === "/perfil" ||
          (location.pathname === "/dashboard" &&
            "w-full !text-orange font-medium border-2 border-orange rounded-xl py-2 hover:bg-orange hover:!text-white transition-all")
      )}
    >
      {props.children}
    </Component>
  );
}
