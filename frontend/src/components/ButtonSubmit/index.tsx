import { ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
}

export function ButtonSubmit({ children }: IButtonProps) {
  return (
    <button
      type="submit"
      className="w-full text-orange text-center bg-background font-medium border-2 border-orange rounded-xl py-2 hover:bg-orange hover:text-black transition-all"
    >
      {children}
    </button>
  );
}
