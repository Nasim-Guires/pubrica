'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO } from '@/lib/constants';
import Button from '@/components/common/Button';
import { cn } from '@/lib/helpers';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);

  // Close mobile menu when pathname changes
  useEffect(() => {
    onClose();
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Background Overlay */}
      <div
        className="fixed inset-0 bg-gray-600 bg-opacity-75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Slide-out Menu Panel */}
      <div className="relative flex flex-col w-full max-w-xs bg-white h-full shadow-2xl z-10 p-6 overflow-y-auto">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
          <Link href="/" className="flex items-center gap-2" onClick={onClose}>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-800 text-white font-bold text-lg">
              P
            </div>
            <span className="text-lg font-bold tracking-tight text-primary-800">
              Pubrica
            </span>
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-100 text-gray-500 focus:outline-none cursor-pointer"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Links Navigation */}
        <div className="flex-grow py-4">
          <div className="grid gap-3">
            {NAV_LINKS.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.label} className="grid">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={cn(
                        'flex items-center justify-between text-left py-2 text-base font-medium text-gray-800 hover:text-primary-800 focus:outline-none cursor-pointer',
                        (pathname.startsWith('/services') || servicesOpen) && 'text-primary-800'
                      )}
                    >
                      <span>{link.label}</span>
                      {servicesOpen ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>

                    {servicesOpen && (
                      <div className="grid gap-1 pl-4 mt-2 border-l-2 border-primary-50 py-1">
                        {link.dropdown.map((sublink) => (
                          <Link
                            key={sublink.href}
                            href={sublink.href}
                            className={cn(
                              'py-2 text-sm text-gray-600 hover:text-primary-800 transition-colors',
                              pathname === sublink.href && 'text-primary-800 font-semibold'
                            )}
                            onClick={onClose}
                          >
                            {sublink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'py-2 text-base font-medium text-gray-800 hover:text-primary-800 transition-colors',
                    isActive && 'text-primary-800 font-bold border-l-4 border-primary-800 pl-2'
                  )}
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Footer info & CTA */}
        <div className="border-t border-gray-100 pt-6 mt-auto">
          <div className="grid gap-4 mb-6">
            <Link href="/contact" onClick={onClose} className="w-full">
              <Button className="w-full font-semibold">Request Free Quote</Button>
            </Link>
            <Link href="/contact" onClick={onClose} className="w-full">
              <Button variant="outline" className="w-full font-semibold text-gray-800">
                Book Consultation
              </Button>
            </Link>
          </div>
          <div className="text-xs text-gray-500 space-y-1">
            <p>Tel: {CONTACT_INFO.phone}</p>
            <p>Email: {CONTACT_INFO.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
