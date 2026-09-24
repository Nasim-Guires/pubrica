"use client";

import React, { useTransition, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Layout,
  HelpCircle,
  Video,
  Info,
  FileText,
  CheckSquare,
} from "lucide-react";

const CONTENT_TYPES = [
  { type: 'Articles', desc: 'Ready-made slides that help teachers and professors kickstart their lectures.', dark: true, icon: Layout, href: '/academy/articles' },
  { type: 'Q & A Forum', desc: 'Annotated examples that show you how it\'s done.', dark: false, icon: HelpCircle, href: '/academy/qa-forum' },
  { type: 'Workshops & Webinars', desc: 'Annotated examples that show you how it\'s done.', dark: false, icon: Video, href: '/academy' },
  { type: 'Videos', desc: 'Annotated examples that show you how it\'s done.', dark: false, icon: Video, href: '/insights' },
  { type: 'Infographics & Downloadables', desc: 'Annotated examples that show you how it\'s done.', dark: false, icon: Info, href: '/insights' },
  { type: 'Flow Diagram', desc: 'Ready-made slides that help teachers and professors kickstart their lectures.', dark: true, icon: Layout, href: '/academy/flow-diagram' },
  { type: 'Templates', desc: 'Time-saving templates that you can download and edit in Word or Google Docs.', dark: true, icon: FileText, href: '/academy/journal-templates' },
  { type: 'Examples', desc: 'Annotated examples that show you how it\'s done.', dark: false, icon: FileText, href: '/insights/sample-work' },
  { type: 'Checklists', desc: 'Handy checklists so that you don\'t forget anything important.', dark: false, icon: CheckSquare, href: '/insights/checklist' },
];

export default function ExploreContentTypeSection() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [loadingHref, setLoadingHref] = useState<string | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setLoadingHref(href);
    startTransition(() => {
      router.push(href);
    });
  };

  return (
    <section className="bg-white py-7 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-[#0b2825] mb-12 tracking-tight">
          Explore by Content Type
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {CONTENT_TYPES.map((item, idx) => {
            const IconComp = item.icon;
            const isLoadingThisCard = isPending && loadingHref === item.href;

            if (isLoadingThisCard) {
              return (
                <div
                  key={idx}
                  className="p-6 rounded-md bg-[#e2eff1] border border-transparent animate-pulse flex flex-col justify-between h-[160px]"
                >
                  <div>
                    <div className="h-7 w-7 bg-[#0d2a27]/20 rounded mb-4" />
                    <div className="h-5 w-3/4 bg-[#0d2a27]/20 rounded mb-2" />
                    <div className="h-3 w-full bg-[#0d2a27]/10 rounded mb-1" />
                    <div className="h-3 w-2/3 bg-[#0d2a27]/10 rounded" />
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={idx}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`p-6 rounded-md transition-transform hover:-translate-y-1 duration-200 flex flex-col justify-between ${
                  item.dark
                    ? 'bg-[#0d2a27] text-white'
                    : 'bg-[#e2eff1] text-gray-800 border border-transparent'
                }`}
              >
                <div>
                  <div className="mb-4">
                    <IconComp className={`h-7 w-7 ${item.dark ? 'text-white' : 'text-[#0d2a27]'}`} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 tracking-tight">
                    {item.type}
                  </h3>
                  <p className={`text-xs leading-relaxed font-light ${item.dark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {item.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}