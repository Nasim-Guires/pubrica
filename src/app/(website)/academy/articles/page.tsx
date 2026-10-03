import React from "react";
import Link from "next/link";
import { Send } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";

// Live pubrica.com page at this URL has no meta description tag, so the description
// below is written from this page's own real content (its hero subheading).
export const metadata = constructMetadata({
  title: "Articles - Pubrica",
  description: "Guides, explainers, and research-writing resources from the Pubrica Academy.",
  slug: "/academy/articles",
});

// The live page is a hand-built list (not a feed), so its entries are listed here as-is.
const ARTICLES = [
  {
    title: "English Editing of Scientific Manuscripts for Publication",
    href: "/academy/articles/english-editing-of-scientific-manuscripts-for-publication/",
  },
  {
    title: "Speed up the publication process: Easy way to find the right journal for your research",
    href: "/academy/articles/journal-selection/easy-way-to-find-the-right-journal-for-your-research/",
  },
];

export default function AcademyArticlesPage() {
  return (
    <div className="bg-[#fcfcfc] font-sans">
      <div className="mx-auto w-full max-w-[1196px] px-4 xl:px-0 pb-[40px]">
        <h1 className="pb-[40px] text-[31px] font-semibold leading-[42px] text-black">Articles</h1>

        <ul>
          {ARTICLES.map((article) => (
            <li
              key={article.href}
              className="mb-[40px] flex items-center rounded-[5px] border border-[#5b5b5b] p-[10px]"
            >
              <Send className="mr-[10px] h-[20px] w-[20px] shrink-0 text-[#161922]" aria-hidden />
              <Link href={article.href} className="text-[16px] font-normal leading-[28px] text-[#0089f7]">
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
