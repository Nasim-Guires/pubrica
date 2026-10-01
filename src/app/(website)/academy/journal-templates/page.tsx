import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { mediaUrl, getDescription } from "@/lib/payload";
import { getPostSummaries } from "@/lib/payload/summaries";
import {
  JOURNAL_TEMPLATES_CATEGORY,
  JOURNAL_TEMPLATES_HERO_IMAGE,
  journalTemplateExcerpts,
  journalTemplateSidebar,
} from "@/lib/academy/journalTemplates";
import JournalFilterList from "@/components/academy/journal-templates/JournalFilterList";

export const revalidate = 300;

const PAGE_SIZE = 12;
const BASE_PATH = "/academy/journal-templates/";

export const metadata: Metadata = {
  title: { absolute: "Journal Templates - Pubrica" },
  description: "Formatting templates for leading academic and medical journals.",
};

interface JournalTemplatesPageProps {
  searchParams: Promise<{ _page?: string }>;
}

/** Fallback for posts without a snapshotted live excerpt: first 20 words, as WordPress trims. */
function trimWords(text: string, count = 20) {
  const words = text.trim().split(/\s+/);
  return words.length > count ? `${words.slice(0, count).join(" ")} ...` : text;
}

const pageHref = (n: number) => (n <= 1 ? BASE_PATH : `${BASE_PATH}?_page=${n}`);

/** Bootstrap-style pager used by the live page: up to 5 numbers, plus ‹ « and › ». */
function Pagination({ page, totalPages }: { page: number; totalPages: number }) {
  if (totalPages <= 1) return null;
  const start = Math.max(1, Math.min(page - 2, totalPages - 4));
  const numbers = Array.from({ length: Math.min(5, totalPages) }, (_, i) => start + i);
  const item = "block border border-[#dddddd] px-[12px] py-[6px] text-[15px] leading-[21.4px] -ml-px";
  const link = `${item} bg-white text-[#337ab7] hover:bg-[#eeeeee]`;
  return (
    <ul className="mt-[20px] flex">
      {page > 1 && (
        <>
          <li><Link href={pageHref(1)} className={link}>«</Link></li>
          <li><Link href={pageHref(page - 1)} className={link}>‹</Link></li>
        </>
      )}
      {numbers.map((n) => (
        <li key={n}>
          {n === page ? (
            <span className={`${item} border-[#337ab7] bg-[#337ab7] text-white`}>{n}</span>
          ) : (
            <Link href={pageHref(n)} className={link}>{n}</Link>
          )}
        </li>
      ))}
      {page < totalPages && (
        <>
          <li><Link href={pageHref(page + 1)} className={link}>›</Link></li>
          <li><Link href={pageHref(totalPages)} className={link}>»</Link></li>
        </>
      )}
    </ul>
  );
}

export default async function JournalTemplatesPage({ searchParams }: JournalTemplatesPageProps) {
  const { _page } = await searchParams;

  // All journal templates (small, card fields only); paginated here as on the live page.
  const { docs } = await getPostSummaries({ source: "academy", urlPathPrefix: "journals-templates/", limit: 200 });
  const totalPages = Math.max(1, Math.ceil(docs.length / PAGE_SIZE));
  const page = Math.min(totalPages, Math.max(1, Number(_page) || 1));
  const posts = docs.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="bg-[#fcfcfc] font-sans">
      {/* Hero */}
      <section className="relative h-[280px] w-full overflow-hidden">
        <Image src={JOURNAL_TEMPLATES_HERO_IMAGE} alt="" fill priority sizes="100vw" className="object-cover object-left-top" />
        <div className="absolute inset-0 bg-black/50" />
      </section>

      <div className="flex flex-col lg:flex-row gap-[30px] px-4 lg:px-[30px] pt-[60px] pb-[60px]">
        {/* Sidebar */}
        <aside className="self-start w-full lg:w-[423px] lg:shrink-0 border border-[#626262] p-[20px]">
          <h3 className="text-[15px] font-normal leading-[15px] text-black">FILTER BY:</h3>
          <div className="mt-[10px] h-px w-4/5 bg-[#c9c9c9]" />
          <h1 className="mt-[29px] text-[20px] font-medium leading-[20px] text-black">Journal Template</h1>
          <div className="mt-[20px]">
            <JournalFilterList journals={journalTemplateSidebar} />
          </div>
        </aside>

        {/* Cards */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {posts.map((post) => {
              const href = `/academy/${post.urlPath}/`;
              const image = mediaUrl(post.heroImage);
              const excerpt = journalTemplateExcerpts[post.urlPath ?? ""] ?? trimWords(getDescription(post, 1000));
              return (
                <div key={post.id} className="self-start overflow-hidden rounded-[5px] border border-[#e8f2fc] bg-[#f8f8f8] pb-[31px]">
                  <Link href={href} className="relative block h-[190px] w-full">
                    {image && (
                      <Image
                        src={image}
                        alt={post.heroImage?.altText || post.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 370px"
                        className="object-cover"
                      />
                    )}
                  </Link>
                  <div className="mt-[10px] mb-[10px] pl-[10px] text-[15px] leading-[28px] capitalize">
                    <a href={JOURNAL_TEMPLATES_CATEGORY.href} className="text-[#295153]">
                      {JOURNAL_TEMPLATES_CATEGORY.label}
                    </a>
                  </div>
                  <h4 className="mb-[10px] px-[10px] text-[18px] font-semibold leading-[19.8px]">
                    <Link href={href} className="text-[#295153]">
                      {post.title.trim()}
                    </Link>
                  </h4>
                  <div className="px-[10px] text-[15px] leading-[28px] text-[#626262]">{excerpt}</div>
                </div>
              );
            })}
          </div>

          <Pagination page={page} totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
}
