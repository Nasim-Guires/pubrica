import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, ChevronRight, MessageCircle, Phone } from "lucide-react";
import { mediaUrl, getDescription } from "@/lib/payload";
import { getPostSummaries } from "@/lib/payload/summaries";
import { constructMetadata } from "@/lib/metadata";
import HeroBanner from "@/components/common/HeroBanner";
import { ShareButtons } from "./ShareButtons";

// Dedicated route for this exact URL — overrides the shared academy/[category]/[slug]
// template (which otherwise matches a single Payload post named "Scientific Writing"
// instead of this listing). Kept out of that template on purpose so no other academy
// URL is affected. Deliberately a standalone copy, not a shared import from the
// sibling research-writing page, per this task's own instructions.
//
// Content note: the live pubrica.com page at this URL doesn't actually filter its
// article grid by "Scientific Writing" — it shows the site's latest posts across every
// topic (confirmed against the live page's own content, which is unrelated to
// scientific writing and changes daily) with ~137 pages of 6. Per explicit instruction,
// this page replicates that exact live behavior — the same unfiltered, newest-first
// feed and the same paginated structure — rather than a "Scientific Writing"-only list.
export const revalidate = 300;

const CANONICAL_PATH = "/academy/study-guide/scientific-writing-2";
const PAGE_SIZE = 6;

export const metadata: Metadata = constructMetadata({
  title: "Scientific Writing - Pubrica",
  // Live pubrica.com page at this URL has no meta description tag, so this is
  // written from the page's own real content (its latest-posts listing).
  description: "Study guides and the latest Academy articles from Pubrica.",
  slug: CANONICAL_PATH,
});

interface SidebarLink {
  label: string;
  href: string;
  active?: boolean;
}

// Hrefs copied verbatim (including trailing-slash differences) from the live
// pubrica.com sidebar. Several of these don't resolve on localhost yet because
// their target pages/templates don't exist here — see the task report.
const STUDY_GUIDE_LINKS: SidebarLink[] = [
  { label: "Research Writing", href: "/academy/study-guide/research-writing/" },
  { label: "Scientific Writing", href: "/academy/study-guide/scientific-writing-2/", active: true },
  { label: "Health Medical Writing", href: "/academy/study-guide/health-medical-writing/" },
  { label: "Editing and Proofreading", href: "/academy/study-guide/editing-and-proof-reading/" },
  { label: "Publications", href: "/academy/study-guide/publications/" },
  { label: "Research Impact", href: "/academy/study-guide/research-impact/" },
  { label: "Medical Communication", href: "/academy/study-guide/medical-communication/" },
  { label: "Research Methodology", href: "/academy/study-guide/research-methodology/" },
];

const RESOURCE_LINKS: SidebarLink[] = [
  { label: "Templates", href: "/academy/templates" },
  { label: "Checklist", href: "/academy/checklist" },
  { label: "Guidelines", href: "/academy/guidelines" },
  { label: "Q&A", href: "/academy/q-and-a" },
  { label: "Factsheet", href: "/academy/factsheet" },
  { label: "Examples", href: "/academy/examples" },
];

function formatDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function pageHref(page: number) {
  return page <= 1 ? `${CANONICAL_PATH}/` : `${CANONICAL_PATH}/?page=${page}`;
}

type PaginationItem = number | "ellipsis-start" | "ellipsis-end";

/** Windowed page list (1, …, current-2..current+2, …, last) — matches the live site's own truncated pagination, which is necessary once there are 100+ pages. */
function getPaginationItems(current: number, total: number): PaginationItem[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const items: PaginationItem[] = [1];
  const windowStart = Math.max(2, current - 2);
  const windowEnd = Math.min(total - 1, current + 2);

  if (windowStart > 2) items.push("ellipsis-start");
  for (let page = windowStart; page <= windowEnd; page++) items.push(page);
  if (windowEnd < total - 1) items.push("ellipsis-end");

  items.push(total);
  return items;
}

interface PageProps {
  searchParams?: Promise<{ page?: string }>;
}

export default async function StudyGuideScientificWritingPage({ searchParams }: PageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const requestedPage = Number(resolvedSearchParams?.page) || 1;
  const currentPage = Number.isFinite(requestedPage) && requestedPage > 0 ? Math.floor(requestedPage) : 1;

  // Unfiltered, newest-first academy posts — matches the live page's actual feed
  // (see the file-level comment above for why this isn't scoped to "Scientific Writing").
  const { docs: posts, totalPages, hasNextPage } = await getPostSummaries({
    source: "academy",
    page: currentPage,
    limit: PAGE_SIZE,
  });

  const paginationItems = getPaginationItems(currentPage, totalPages);

  return (
    <div className="bg-[#f8f9fa] min-h-screen text-[#333333] font-sans pb-16">
      <HeroBanner title="Scientific Writing" headingAs="h1" />

      <div className="max-w-[1340px] mx-auto pt-10 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8">
        {/* LEFT SIDEBAR - FILTER BY: SERVICES & RESOURCES */}
        <aside className="w-full md:w-[280px] shrink-0 space-y-6">
          <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
            FILTER BY: SERVICES
          </h2>

          <div className="bg-white border border-gray-200/80 rounded-xl p-6 shadow-xs">
            <h3 className="font-bold text-gray-800 text-base mb-4">Study Guide</h3>
            <ul className="space-y-3.5 text-sm font-medium list-none p-0">
              {STUDY_GUIDE_LINKS.map((item) => (
                <li key={item.href} className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    readOnly
                    checked={!!item.active}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-0 cursor-pointer"
                  />
                  <Link
                    href={item.href}
                    className={`no-underline hover:underline ${
                      item.active ? "text-blue-600 font-bold" : "text-gray-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-gray-200/80 rounded-xl p-6 shadow-xs">
            <h3 className="font-bold text-gray-800 text-base mb-4">Resources</h3>
            <ul className="space-y-3.5 text-sm font-medium text-gray-600 list-none p-0">
              {RESOURCE_LINKS.map((item) => (
                <li key={item.href} className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    readOnly
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-0 cursor-pointer"
                  />
                  <Link href={item.href} className="no-underline hover:underline text-gray-600">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="bg-[#0d3b36] text-white rounded-xl p-6 shadow-xs space-y-4">
            <p className="text-sm font-semibold leading-relaxed">
              Whether you&apos;re stuck or just want some tips on where to start, hit up our experts
              anytime.
            </p>
            <div className="space-y-2.5 text-sm text-gray-100">
              <a href="tel:+919884350006" className="flex items-center gap-2 hover:underline">
                <Phone className="w-4 h-4 shrink-0" /> India +91 9884350006
              </a>
              <a href="tel:+19725029262" className="flex items-center gap-2 hover:underline">
                <Phone className="w-4 h-4 shrink-0" /> US +1-972-502-9262
              </a>
              <a
                href="https://wa.me/919884350006"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <MessageCircle className="w-4 h-4 shrink-0" /> WhatsApp
              </a>
            </div>
            <Link
              href="/contact"
              className="block text-center bg-white text-[#0d3b36] font-bold text-xs uppercase tracking-wide rounded-md py-2.5 hover:bg-gray-100 transition-colors no-underline"
            >
              Get a Free Quote
            </Link>
          </div>

          <ShareButtons />
        </aside>

        {/* MAIN ARTICLE LIST & PAGINATION */}
        <main className="flex-1 min-w-0 flex flex-col justify-between">
          <div className="flex flex-col gap-6 mb-8">
            {posts.map((post) => {
              const image = mediaUrl(post.heroImage) || "/images/academy/Forensics-2.webp";
              const href = `/academy/${post.urlPath}/`;
              return (
                <article
                  key={post.id}
                  className="bg-white border border-gray-200/80 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col sm:flex-row"
                >
                  <Link href={href} className="relative w-full sm:w-64 h-48 sm:h-auto shrink-0 bg-gray-100 block">
                    <Image
                      src={image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 256px"
                      className="object-cover"
                    />
                  </Link>
                  <div className="p-5 sm:p-6 flex flex-col justify-center min-w-0">
                    <span className="inline-block w-fit bg-[#0d3b36] text-white text-[10px] px-2.5 py-1 rounded-md font-semibold tracking-wide uppercase mb-3">
                      {post.categories?.[0]?.name || "Academy"}
                    </span>
                    <Link href={href} className="no-underline hover:no-underline">
                      <h2 className="text-lg font-bold text-[#0b2825] leading-snug mb-2 hover:text-sky-800 transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-3">
                      {getDescription(post)}
                    </p>
                    <span className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(post.publishing?.publishedAt)}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-1 pt-2 flex-wrap">
              {paginationItems.map((item, idx) => {
                if (item === "ellipsis-start" || item === "ellipsis-end") {
                  return (
                    <span
                      key={item}
                      className="w-9 h-9 flex items-center justify-center text-gray-400 text-sm"
                    >
                      …
                    </span>
                  );
                }
                const isActive = currentPage === item;
                return (
                  <Link
                    key={`${item}-${idx}`}
                    href={pageHref(item)}
                    className={`w-9 h-9 flex items-center justify-center font-medium text-sm border transition-colors ${
                      isActive
                        ? "bg-[#3182ce] text-white border-[#3182ce]"
                        : "bg-white text-gray-700 hover:bg-gray-100 border-gray-300"
                    }`}
                  >
                    {item}
                  </Link>
                );
              })}
              {hasNextPage && (
                <Link
                  href={pageHref(currentPage + 1)}
                  className="w-9 h-9 flex items-center justify-center bg-white text-gray-600 hover:bg-gray-100 font-medium text-sm border border-gray-300 transition-colors"
                  aria-label="Next Page"
                >
                  <ChevronRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
