import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Button({ children, asChild, className, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return(
    <Comp className={clsx(
      'py-3 px-4 bg-green-600 rounded outline-none font-semibold text-green-50 text-sm w-full transition-colors hover:ring-2 focus:ring-2 ring-green-50',
      className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
