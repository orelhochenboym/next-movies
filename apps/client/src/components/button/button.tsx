import { PropsWithChildren } from 'react';
import { cn } from '../../utils/cn.util';

type Props = React.ComponentProps<'button'> & PropsWithChildren;

export const Button: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        'flex items-center justify-between rounded-full border border-black px-4 py-1 text-start text-lg hover:bg-black/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
