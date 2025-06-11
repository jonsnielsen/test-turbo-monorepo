'use client';

import { ReactNode } from 'react';

interface RadioButtonProps {
  children: ReactNode;
  className?: string;
}

const RadioButtonn = ({ children, className }: RadioButtonProps) => {
  return (
    <div className={className} onClick={() => alert(`Hello from your  app!`)}>
      {children}
    </div>
  );
};

export default RadioButtonn;
