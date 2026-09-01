import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { getPosts } from "@/lib/payload";
import type { LexicalNode, PayloadPost } from "@/lib/payload/types";

export const revalidate = 300;

const PAGE_SIZE = 12;

const OTHER_RESOURCES = [
  { label: "Articles", href: "/academy/articles" },
  { label: "Study Guide", href: "/insights/study-guide" },
  { label: "Infographics", href: "/insights/infographics" },
  { label: "Storyboard", href: "/insights/storyboard" },
  { label: "Sample Work", href: "/insights/sample-work" },
  { label: "Factsheet", href: "/insights/fact-sheet" },
  { label: "Checklist", href: "/insights/checklist" },
  { label: "Research Service", href: "/insights/research-services" },
  { label: "Call For Paper", href: "/academy/industry-news" },
];

export const metadata: Metadata = {
  title: "Researchers Q & A | Pubrica Academy",
  description:
    "Get all your inquiries about research writing and publishing addressed by experienced researchers and publication specialists.",
};

interface QaEntry {
  post: PayloadPost;
  topic: string;
  askedOn: string;
  preview: string;
}

function nodeText(node: LexicalNode): string {
  return (node.children ?? [])
    .filter((c) => c.type === "text")
    .map((c) => c.text ?? "")
    .join("")
    .trim();
}

function formatDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/** Q&A forum posts open with a "Q & A Forum | <Topic>" marker paragraph, then
 *  repeat the question as an h1. Extract the topic and a clean answer preview
 *  that skips both of those instead of reusing the generic excerpt helper.
 *
 *  Some posts in this dataset have content merged in from other Q&A entries
 *  (multiple unrelated "Q:" headings in one post's body). Rather than blindly
 *  grabbing the first paragraphs — which can land on a different question's
 *  answer — find the heading that actually matches this post's own title and
 *  read the preview from directly under it. */
function normalizeForMatch(s: string): string {
  return s
    .toLowerCase()
    .replace(/^q\s*[:.]?\s*/, "")
    .replace(/^\d+[.)]\s*/, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function parseQaPost(post: PayloadPost): QaEntry | null {
  const children = post.content?.root?.children ?? [];
  const marker = children[0];
  if (marker?.type !== "paragraph") return null;
  const markerText = (marker.children ?? []).filter((c) => c.type === "text").map((c) => c.text ?? "");
  if (!markerText[0]?.toLowerCase().includes("q & a forum") && !markerText[0]?.toLowerCase().includes("q&a forum")) {
    return null;
  }
  const topic = (markerText[1] ?? "").trim() || "General";

  const normalizedTitle = normalizeForMatch(post.title);
  const questionHeadingIndex = children.findIndex(
    (node, i) =>
      i > 0 &&
      (node.type === "heading" || node.type === "paragraph") &&
      normalizeForMatch(nodeText(node)).includes(normalizedTitle)
  );

  let preview = "";
  if (questionHeadingIndex !== -1) {
    for (let i = questionHeadingIndex + 1; i < children.length && preview.length < 200; i++) {
      const node = children[i];
      if (node.type === "heading") break;
      if (node.type === "paragraph") {
        const text = nodeText(node);
        if (text) preview += (preview ? " " : "") + text;
      }
    }
  }
  preview = preview.replace(/\s+/g, " ").trim();
  if (preview.length > 180) preview = `${preview.slice(0, 180).trim()}…`;

  return {
    post,
    topic,
    askedOn: formatDate(post.publishing?.publishedAt),
    preview,
  };
}

interface QaForumPageProps {
  searchParams: Promise<{ topic?: string; page?: string }>;
}

export default async function QaForumPage({ searchParams }: QaForumPageProps) {
  const { topic: topicParam, page: pageParam } = await searchParams;
  const page = Math.max(1, Number(pageParam) || 1);

  const { docs } = await getPosts({ source: "academy", limit: 1069 });
  const allEntries = docs.map(parseQaPost).filter((e): e is QaEntry => e !== null);

  const topicCounts = new Map<string, number>();
  for (const entry of allEntries) {
    topicCounts.set(entry.topic, (topicCounts.get(entry.topic) ?? 0) + 1);
  }
  const topics = Array.from(topicCounts.entries()).sort((a, b) => b[1] - a[1]);

  const filtered = topicParam ? allEntries.filter((e) => e.topic === topicParam) : allEntries;
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageEntries = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const topicQuery = (t?: string) => (t ? `?topic=${encodeURIComponent(t)}` : "");

  return (
    <div className="bg-[#f8f9fa] min-h-screen text-slate-800 font-sans pb-10">
      <section className="bg-[#0b2825] text-white py-6 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Researchers Q &amp; A</h1>
        <p className="text-gray-300 text-sm max-w-2xl mx-auto">
          Get all your inquiries about research writing and publishing addressed by experienced researchers and
          publication specialists.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <aside className="lg:col-span-3 flex flex-col gap-6">
          <div className="bg-white p-5 rounded-md border border-gray-200/80 shadow-xs">
            <h4 className="text-sm font-bold text-[#0b2825] mb-3">Q &amp; A Topics</h4>
            <div className="flex flex-col gap-1.5">
              <Link
                href="/academy/qa-forum"
                className={`text-xs px-2.5 py-1.5 rounded transition-colors ${
                  !topicParam ? "bg-[#0b2825] text-white font-semibold" : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                All ({allEntries.length})
              </Link>
              {topics.map(([topic, count]) => (
                <Link
                  key={topic}
                  href={`/academy/qa-forum${topicQuery(topic)}`}
                  className={`text-xs px-2.5 py-1.5 rounded transition-colors ${
                    topicParam === topic ? "bg-[#0b2825] text-white font-semibold" : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {topic} ({count})
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white p-5 rounded-md border border-gray-200/80 shadow-xs">
            <h4 className="text-sm font-bold text-[#0b2825] mb-3">Other Resources</h4>
            <div className="flex flex-col gap-1.5">
              {OTHER_RESOURCES.map((r) => (
                <Link
                  key={r.label}
                  href={r.href}
                  className="text-xs text-blue-600 no-underline hover:no-underline px-2.5 py-1"
                >
                  {r.label}
                </Link>
              ))}
            </div>
          </div>
        </aside>

        <main className="lg:col-span-9 flex flex-col gap-4">
          {pageEntries.map((entry) => (
            <Link
              key={entry.post.id}
              href={`/academy/${entry.post.urlPath}`}
              className="bg-white p-5 rounded-md border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow block"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                {entry.topic}
              </span>
              <h3 className="text-sm md:text-base font-bold text-[#0b2825] mt-2 mb-1 leading-snug">
                Q: {entry.post.title}
              </h3>
              <span className="text-[11px] text-slate-400 block mb-2">Asked on {entry.askedOn}</span>
              {entry.preview && <p className="text-xs text-slate-600 leading-relaxed">{entry.preview}</p>}
            </Link>
          ))}

          {pageEntries.length === 0 && (
            <p className="text-sm text-slate-500 text-center py-6">No questions found in this topic yet.</p>
          )}

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 mt-6">
              <Link
                href={`/academy/qa-forum${topicQuery(topicParam)}${topicParam ? "&" : "?"}page=${page - 1}`}
                className={`px-4 py-2 rounded text-xs font-semibold border transition-colors ${
                  page > 1
                    ? "border-slate-200 text-slate-700 hover:border-emerald-700 hover:text-emerald-700"
                    : "border-slate-100 text-slate-300 pointer-events-none"
                }`}
              >
                &larr; Previous
              </Link>
              <span className="text-xs text-slate-500">
                Page {page} of {totalPages}
              </span>
              <Link
                href={`/academy/qa-forum${topicQuery(topicParam)}${topicParam ? "&" : "?"}page=${page + 1}`}
                className={`px-4 py-2 rounded text-xs font-semibold transition-colors ${
                  page < totalPages
                    ? "bg-[#0b2825] text-white hover:bg-[#123633]"
                    : "bg-slate-100 text-slate-300 pointer-events-none"
                }`}
              >
                Next &rarr;
              </Link>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
