import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MessageCircle, Phone } from "lucide-react";
import { getPostMetadata } from "@/lib/payload";
import { getPostDetail } from "@/lib/payload/summaries";
import { LexicalRenderer } from "@/lib/payload/lexical";
import type { LexicalContent } from "@/lib/payload/types";
import { checklistCardTitle } from "../checklist-cards";

export const revalidate = 300;

interface ChecklistCardProps {
  params: Promise<{ slug: string }>;
}

/**
 * Only the 25 checklist card posts (urlPath "checklist/<slug>") are served here.
 * Anything else under /insights/checklist/ returns 404.
 */
async function loadChecklistCard(slug: string) {
  const post = await getPostDetail(slug, "insights");
  if (!post || post.urlPath !== `checklist/${slug}`) return null;
  return post;
}

export async function generateMetadata({ params }: ChecklistCardProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await loadChecklistCard(slug);
  if (!post) return {};
  return getPostMetadata(post);
}

type LexNode = { type?: string; children?: LexNode[]; text?: string; value?: { filename?: string; url?: string } };
/** Plain text of a Lexical node, including nested children. */
function nodeText(node: LexNode): string {
  return node.children ? node.children.map(nodeText).join("") : (node.text ?? "");
}

/**
 * The CMS content of each checklist post ends with a copy of the sidebar CTA
 * (image, "Research your Services…", "Delivered on-time…", "Each order includes").
 * The original page doesn't show it in the main column, so drop those nodes here.
 * Only these four are removed; the API and other pages are unchanged.
 */
const CTA_LINES = new Set([
  "Research your Services with our experts",
  "Delivered on-time or your money back",
  "Each order includes",
]);

function isCardCtaNode(node: LexNode): boolean {
  if (node.type === "upload") {
    return /sample-workimage-for-sidebar/.test(node.value?.filename ?? node.value?.url ?? "");
  }
  return (node.type === "heading" || node.type === "paragraph") && CTA_LINES.has(nodeText(node).trim());
}

function withoutCardCta(content: LexicalContent | null | undefined): LexicalContent | null | undefined {
  if (!content?.root?.children) return content;
  const children = (content.root.children as unknown as LexNode[]).filter((n) => !isCardCtaNode(n));
  return { ...content, root: { ...content.root, children: children as unknown as typeof content.root.children } };
}

const ORDER_CHECKLIST = [
  "On-time delivery or your money back",
  "A fully qualified writer in your subject",
  "In-depth proofreading by our Quality Control Team",
  "100% confidentiality, the work is never re-sold or published",
  "Standard 7-day amendment period",
  "A paper written to the standard ordered",
  "A detailed plagiarism report",
  "A comprehensive quality report",
];

export default async function ChecklistCardPage({ params }: ChecklistCardProps) {
  const { slug } = await params;
  const post = await loadChecklistCard(slug);
  if (!post) notFound();

  const title = checklistCardTitle(slug, post.title);

  return (
    <div className="min-h-screen bg-white text-[#161922] font-sans">
      {/* Dark banner with the page title, matching the live page's header band */}
      <section
        className="relative w-full min-h-[160px] md:min-h-[210px] px-4 py-8 md:py-10 flex items-center"
        style={{ background: "linear-gradient(180deg, rgba(17, 56, 57, 0.46) 0%, rgb(17, 56, 57) 100%)" }}
      >
        <div className="relative mx-auto w-full max-w-[943px] border border-white px-4 pt-5 pb-2.5 text-center">
          <h1 className="text-[#FCFFFF] text-[14px] md:text-[31px] font-semibold leading-[1.5em] md:leading-[42px] tracking-[0.5px] md:tracking-[0.4px]">
            {title}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1000px] px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,640px)_304px] gap-8 lg:justify-between items-start">
          {/* Subtitle, intro and embedded PDF come from the CMS content */}
          <div className="min-w-0">
            <LexicalRenderer content={withoutCardCta(post.content)} title={title} />
          </div>

          {/* Order CTA column (matches the live page's right-hand column) */}
          <aside className="w-full flex flex-col gap-6">
            {/* Box 1: image and order call-to-action */}
            <div className="flex flex-col gap-4 bg-white p-4 shadow-[0_0_5px_rgba(0,0,0,0.5)]">
              <Image
                src="/images/check-list/sample-workimage-for-sidebar.png"
                alt="sample-workimage-for-sidebar"
                width={372}
                height={202}
                className="w-full h-auto"
              />
              <h4 className="text-xl font-semibold text-[#161922]">Research your Services with our experts</h4>
              <a
                href="/order-now/"
                className="block w-full text-center bg-[#61ce70] hover:bg-[#4fb85f] text-white text-sm font-medium py-2.5 rounded transition-colors"
              >
                Order Now
              </a>
              <p className="text-[15px] font-semibold text-[#161922]">Delivered on-time or your money back</p>
            </div>

            {/* Box 2: what each order includes */}
            <div className="flex flex-col gap-4 bg-white p-4 shadow-[0_0_5px_rgba(0,0,0,0.5)]">
              <p className="text-[15px] text-[#626262]">Give yourself the academic edge today</p>
              <p className="text-[15px] font-semibold text-[#161922]">Each order includes</p>
              <ul className="list-disc pl-5 space-y-1 text-[15px] text-[#626262]">
                {ORDER_CHECKLIST.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a
                href="/services/"
                className="block w-full text-center bg-[#61ce70] hover:bg-[#4fb85f] text-white text-sm font-medium py-2.5 rounded transition-colors"
              >
                Find More About Our Services
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Bottom contact band (same wording as the live page) */}
      <section className="bg-[#0d3b36] text-white">
        <div className="mx-auto max-w-[1000px] px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-base md:text-lg font-semibold leading-relaxed max-w-xl text-center md:text-left">
            Whether you&apos;re stuck or just want some tips on where to start, hit up our experts anytime.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex flex-col gap-2 text-sm text-gray-100">
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
            <a
              href="/order-now/"
              className="shrink-0 bg-white text-[#0d3b36] font-bold text-xs uppercase tracking-wide rounded-md px-6 py-3 hover:bg-gray-100 transition-colors no-underline"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
