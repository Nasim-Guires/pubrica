import React from 'react';
import { cn } from '@/lib/helpers';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger' | 'info';
  children: React.ReactNode;
}

export default function Badge({ children, className, variant = 'primary', ...props }: BadgeProps) {
  const baseStyles = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide border';

  const variants = {
    primary: 'bg-primary-50 text-primary-800 border-primary-100',
    secondary: 'bg-secondary-50 text-secondary-700 border-secondary-100',
    accent: 'bg-accent-50 text-accent-700 border-accent-100',
    success: 'bg-green-50 text-green-700 border-green-100',
    warning: 'bg-yellow-50 text-yellow-700 border-yellow-100',
    danger: 'bg-red-50 text-red-700 border-red-100',
    info: 'bg-blue-50 text-blue-700 border-blue-100',
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </span>
  );
}
