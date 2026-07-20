'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/helpers';
import Button from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  className,
}: ModalProps) {
  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-5xl',
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      <div className="flex min-h-screen items-center justify-center p-4 text-center sm:p-0">
        {/* Backdrop overlay */}
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal content box */}
        <div
          className={cn(
            'relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:w-full',
            sizes[size],
            className
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
            {title ? (
              <h3 className="text-lg font-semibold text-gray-900 leading-6 font-display">
                {title}
              </h3>
            ) : (
              <div />
            )}
            <button
              onClick={onClose}
              className="rounded-md bg-white text-gray-400 hover:text-gray-500 hover:bg-gray-100 p-1.5 focus:outline-none cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Body */}
          <div className="px-6 py-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
