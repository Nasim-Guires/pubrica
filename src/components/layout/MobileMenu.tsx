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
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});

  const toggleDropdown = (key: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  useEffect(() => {
    onClose();
  }, [pathname]);

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
            {NAV_LINKS.map((link: any) => {
              const mainSubItems = link.dropdown || link.items || link.children || link.submenu;
              const hasMainSub = Array.isArray(mainSubItems) && mainSubItems.length > 0;

              if (hasMainSub) {
                const isParentOpen = !!openDropdowns[link.label];

                return (
                  <div key={link.label} className="grid">
                    {/* LEVEL 0 MAIN HEADER (e.g., Services) */}
                    <button
                      onClick={() => toggleDropdown(link.label)}
                      className={cn(
                        'flex items-center justify-between text-left py-2 text-base font-medium text-gray-800 hover:text-primary-800 focus:outline-none cursor-pointer',
                        isParentOpen && 'text-primary-800 font-semibold'
                      )}
                    >
                      <span>{link.label}</span>
                      {isParentOpen ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>

                    {/* LEVEL 1 SUBMENU CONTAINER */}
                    {isParentOpen && (
                      <div className="grid gap-1 pl-4 mt-1 border-l-2 border-primary-100 py-1">
                        {mainSubItems.map((sublink: any) => {
                          const level2Items = sublink.dropdown || sublink.items || sublink.children || sublink.submenu;
                          const hasLevel2 = Array.isArray(level2Items) && level2Items.length > 0;
                          const subKey = sublink.label || sublink.href;
                          const isSubOpen = !!openDropdowns[subKey];

                          if (hasLevel2) {
                            return (
                              <div key={subKey} className="grid">
                                {/* LEVEL 1 ITEM WITH SUBMENU (e.g., Editing & Translation) */}
                                <button
                                  onClick={() => toggleDropdown(subKey)}
                                  className={cn(
                                    'flex items-center justify-between text-left py-2 text-sm font-medium text-gray-700 hover:text-primary-800 focus:outline-none cursor-pointer',
                                    isSubOpen && 'text-primary-800 font-semibold'
                                  )}
                                >
                                  <span>{sublink.label}</span>
                                  {isSubOpen ? (
                                    <ChevronUp className="h-4 w-4" />
                                  ) : (
                                    <ChevronDown className="h-4 w-4" />
                                  )}
                                </button>

                                {/* LEVEL 2 SUBMENU (e.g., Scientific Editing, Manuscript Editing) */}
                                {isSubOpen && (
                                  <div className="grid gap-1 pl-3 border-l-2 border-gray-200 my-1 ml-1">
                                    {level2Items.map((nestedLink: any) => (
                                      <Link
                                        key={nestedLink.href || nestedLink.label}
                                        href={nestedLink.href || '#'}
                                        className={cn(
                                          'py-1.5 text-xs text-gray-600 hover:text-primary-800 transition-colors',
                                          pathname === nestedLink.href &&
                                            'text-primary-800 font-bold'
                                        )}
                                        onClick={onClose}
                                      >
                                        {nestedLink.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          }

                          // LEVEL 1 DIRECT LINK
                          return (
                            <Link
                              key={sublink.href || sublink.label}
                              href={sublink.href || '#'}
                              className={cn(
                                'py-2 text-sm text-gray-600 hover:text-primary-800 transition-colors',
                                pathname === sublink.href &&
                                  'text-primary-800 font-semibold'
                              )}
                              onClick={onClose}
                            >
                              {sublink.label}
                            </Link>
                          );
                        })}
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
                    isActive &&
                      'text-primary-800 font-bold border-l-4 border-primary-800 pl-2'
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