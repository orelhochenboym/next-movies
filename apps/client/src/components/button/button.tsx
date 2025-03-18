import { PropsWithChildren } from 'react';
import { cn } from '../../utils/cn.util';
import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren;

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'flex items-center justify-between rounded-full border border-black px-4 py-1 text-start text-sm hover:bg-black/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black md:text-lg',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
