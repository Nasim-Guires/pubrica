'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/helpers';

export interface AccordionItem {
  id: string | number;
  title: string;
  content: string | React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  allowMultiple?: boolean;
}

export default function Accordion({ items, className, allowMultiple = false }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      if (allowMultiple) {
        return { ...prev, [id]: !prev[id] };
      } else {
        const isOpen = prev[id];
        return isOpen ? {} : { [id]: true };
      }
    });
  };

  return (
    <div className={cn('divide-y divide-gray-200 border-t border-b border-gray-200', className)}>
      {items.map((item) => {
        const itemId = String(item.id);
        const isOpen = !!openItems[itemId];

        return (
          <div key={itemId} className="py-4">
            <button
              onClick={() => toggleItem(itemId)}
              className="flex w-full items-start justify-between text-left focus:outline-none group cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-gray-900 group-hover:text-primary-800 transition-colors pr-4">
                {item.title}
              </span>
              <span className="ml-6 flex h-7 items-center">
                <ChevronDown
                  className={cn(
                    'h-5 w-5 transform text-gray-500 transition-transform duration-200 ease-in-out group-hover:text-primary-800',
                    isOpen && 'rotate-180 text-primary-800'
                  )}
                />
              </span>
            </button>
            <div
              className={cn(
                'mt-2 transition-all duration-200 ease-in-out overflow-hidden',
                isOpen ? 'max-h-[500px] opacity-100 py-2' : 'max-h-0 opacity-0'
              )}
            >
              <div className="text-sm text-gray-600 leading-relaxed font-sans">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
