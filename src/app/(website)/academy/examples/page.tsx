import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  EXAMPLES_BANNER_IMAGE,
  EXAMPLES_PAGE_SIZE,
  exampleCards,
  examplesResourceLinks,
  examplesStudyGuideLinks,
} from "@/lib/academy/examples";
import ExamplesFilterSidebar from "@/components/academy/examples/ExamplesFilterSidebar";

// Dedicated route for /academy/examples/ (takes precedence over academy/[category]),
// matching the live pubrica.com page.

const BASE_PATH = "/academy/examples/";

export const metadata: Metadata = {
  title: { absolute: "Examples - Pubrica" },
  description:
    "Examples – Pubrica presents real-world case studies highlighting successful research, publication support, and measurable academic impact.",
};

interface ExamplesPageProps {
  searchParams: Promise<{ _page?: string }>;
}

const pageHref = (n: number) => (n <= 1 ? BASE_PATH : `${BASE_PATH}?_page=${n}`);

/** Pager as on the live page: ‹ previous, page numbers, › next. */
function Pagination({ page, totalPages }: { page: number; totalPages: number }) {
  if (totalPages <= 1) return null;
  const item = "block border border-[#dddddd] px-[12px] py-[6px] text-[15px] leading-[21.4px] -ml-px";
  const link = `${item} bg-white text-[#337ab7] hover:bg-[#eeeeee]`;
  return (
    <ul className="mt-[20px] flex">
      {page > 1 && (
        <li><Link href={pageHref(page - 1)} className={link}>‹</Link></li>
      )}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
        <li key={n}>
          {n === page ? (
            <span className={`${item} border-[#337ab7] bg-[#337ab7] text-white`}>{n}</span>
          ) : (
            <Link href={pageHref(n)} className={link}>{n}</Link>
          )}
        </li>
      ))}
      {page < totalPages && (
        <li><Link href={pageHref(page + 1)} className={link}>›</Link></li>
      )}
    </ul>
  );
}

export default async function AcademyExamplesPage({ searchParams }: ExamplesPageProps) {
  const { _page } = await searchParams;
  const totalPages = Math.ceil(exampleCards.length / EXAMPLES_PAGE_SIZE);
  const page = Math.min(totalPages, Math.max(1, Number(_page) || 1));
  const cards = exampleCards.slice((page - 1) * EXAMPLES_PAGE_SIZE, page * EXAMPLES_PAGE_SIZE);

  return (
    <div className="bg-[#fcfcfc] font-sans">
      {/* Banner */}
      <section className="relative flex h-[240px] items-center px-[10px]">
        <Image src={EXAMPLES_BANNER_IMAGE} alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="relative w-full border border-white py-[20px]">
          <h1 className="text-center text-[31px] font-semibold leading-[42px] text-white">Examples</h1>
        </div>
      </section>

      {/* Sidebar + cards — the live page shows this section on desktop only (hidden at ≤1024px). */}
      <section className="hidden min-[1025px]:flex px-[10px] pt-[45px] pb-[60px]">
        <aside className="w-[500px] shrink-0">
          <ExamplesFilterSidebar
            studyGuide={examplesStudyGuideLinks}
            resources={examplesResourceLinks}
            currentPath={BASE_PATH}
          />
        </aside>

        <div className="flex-1">
          <div className="grid grid-cols-3 gap-[20px]">
            {cards.map((card) => (
              <div key={card.href} className="self-start overflow-hidden rounded-[4px] border border-[#cbcbcb] pb-[17px]">
                <div className="relative h-[142px] w-full">
                  <a href={card.href} target="_blank" className="absolute inset-0">
                    <Image src={card.image} alt={card.alt} fill sizes="380px" className="object-cover" />
                  </a>
                  <div className="absolute bottom-[5px] left-[5px] right-0 flex flex-wrap">
                    {card.terms.map((term) => (
                      <a
                        key={term.href}
                        href={term.href}
                        className="mr-[5px] rounded-[6px] bg-[rgba(59,34,34,0.48)] px-[6px] py-px text-[14px] leading-[28px] text-white"
                      >
                        {term.label}
                      </a>
                    ))}
                  </div>
                </div>
                <h5 className="mt-[10px] mb-[10px]">
                  <a
                    href={card.href}
                    target="_blank"
                    className="block py-[8px] pr-[8px] pl-[15px] text-[18px] font-semibold leading-[23px] text-[#5f6271]"
                  >
                    {card.title}
                  </a>
                </h5>
                <div className="mb-[10px] pl-[15px] text-[16px] leading-[28px] text-[#5f5f5f]">{card.excerpt}</div>
                <div className="pl-[15px] text-[16px] font-semibold text-[#434343]">{card.date}</div>
              </div>
            ))}
          </div>

          <Pagination page={page} totalPages={totalPages} />
        </div>
      </section>
    </div>
  );
}
