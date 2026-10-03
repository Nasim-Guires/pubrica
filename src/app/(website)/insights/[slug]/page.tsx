import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getDescription, getPostMetadata } from "@/lib/payload";
import { getPostDetail, getPostSummaries } from "@/lib/payload/summaries";
import { getInsightHub, getStaticInsightHub } from "@/lib/payload/insightHubs";
import { infographics, storyboards, factSheets } from "@/lib/data-insight";
import { insightCardPages } from "@/lib/insights/cardPages";
import ImageLightboxGrid from "@/components/insight/ImageLightboxGrid";
import InsightPostDetail from "@/components/insight/InsightPostDetail";
import { StudyGuideCardPage, TemplateCardPage, ZoomGridCardPage } from "@/components/insight/InsightCardPages";
import HeroBanner from "@/components/common/HeroBanner";

const STATIC_HUB_ITEMS: Record<string, { title: string; img?: string; description?: string; pdfUrl?: string }[]> = {
  infographics,
  storyboard: storyboards,
  "fact-sheet": factSheets,
};

export const revalidate = 300;

const HUB_PAGE_SIZE = 12;

interface InsightRouteProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

function formatDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export async function generateMetadata({ params }: InsightRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const cardPage = insightCardPages[slug];
  if (cardPage) {
    return {
      title: { absolute: cardPage.docTitle },
      ...(cardPage.description && { description: cardPage.description }),
    };
  }

  const hub = getInsightHub(slug) ?? getStaticInsightHub(slug);
  const post = await getPostDetail(slug, "insights");

  // A hub page is rendered from hard-coded labels, but the CMS holds the original site's
  // title/description for the same URL, so prefer that and keep the labels as the fallback.
  if (post) return getPostMetadata(post);
  if (hub) {
    return { title: { absolute: `${hub.label} | Pubrica Insights` }, description: hub.description };
  }
  return {};
}

export interface InsightImageItem {
  id: string;
  name: string;
  path: string;
}

export default async function InsightRoutePage({ params, searchParams }: InsightRouteProps) {
  const { slug } = await params;

  // All News card pages — same layout and content as the live pubrica.com pages.
  const cardPage = insightCardPages[slug];
  if (cardPage) {
    if (cardPage.kind === "study-guide") return <StudyGuideCardPage page={cardPage} />;
    if (cardPage.kind === "template") return <TemplateCardPage page={cardPage} />;
    return <ZoomGridCardPage page={cardPage} />;
  }

  const hub = getInsightHub(slug);

  if (hub) {
    const { page: pageParam } = await searchParams;
    const page = Math.max(1, Number(pageParam) || 1);
    const { docs: posts, hasNextPage, hasPrevPage } = await getPostSummaries({
      source: "insights",
      urlPathPrefix: `${hub.slug}/`,
      page,
      limit: HUB_PAGE_SIZE,
    });



    const insightImagesList: InsightImageItem[] = [
      { id: "1", name: "ai-ml-support-Insight-Generation-and-In", path: "/images/insights/ai-ml-support-Insight-Generation-and-Interpretation-1.webp" },
      { id: "2", name: "Biotechnology-2", path: "/images/insights/Biotechnology-2.webp" },
      { id: "3", name: "Foods-and-Nutraceuticals", path: "/images/insights/Foods-and-Nutraceuticals.webp" },
      { id: "4", name: "Research-services_A-Framework-For-Con", path: "/images/insights/Research-services_A-Framework-For-Conceptualizing-Evidence-Needs-Of-Health-Systems.webp" },
      { id: "5", name: "Research-services_Cochrane-Handbook-F", path: "/images/insights/Research-services_Cochrane-Handbook-For-Systematic-Reviews-Of-Interventions.webp" },
      { id: "6", name: "Research-services_Different-Types-Of-Re", path: "/images/insights/Research-services_Different-Types-Of-Reviews.webp" },
      { id: "7", name: "Research-services_EQUATOR-Network_-E", path: "/images/insights/Research-services_Different-Types-Of-Reviews.webp" },
      { id: "8", name: "Research-services_Equator-Network_Sys", path: "/images/insights/Research-services_EQUATOR-Network_-Enhancing-The-Quality-And-Transparency-Of-Health-Research.webp" },
      { id: "9", name: "Research-services_Evaluating-The-Bias-Ri", path: "/images/insights/Research-services_Equator-Network_-Systematic-Reviews-Meta-Analysis-Reviews-Overview-HTA.webp" },
      { id: "10", name: "Research-services_Finding-What-Works-I", path: "/images/insights/Research-services_Evaluating-The-Bias-Risk-In-Systematic-Reviews-Of-Health-Care-Interventions.webp" },
      { id: "11", name: "Research-services_Integrating-Health-Sys", path: "/images/insights/Research-services_Finding-What-Works-In-Health-Care_-Standards-For-Systematic-Reviews.webp" },
      { id: "12", name: "Research-services_Methods-Guide-For-Ef", path: "/images/insights/Research-services_Integrating-Health-System-Data-With-Systematic-Reviews.webp" },
      { id: "13", name: "Research-services_MOOSE-Guidelines-Fo", path: "/images/insights/Research-services_Methods-Guide-For-Effectiveness-And-Comparative-Effectiveness-Reviews-2.webp" },
      { id: "14", name: "Research-services_-New-FAI-Guidelines_-", path: "/images/insights/Research-services_MOOSE-Guidelines-For-Meta-Analyses-Of-Observational-Studies-In-Epidemiology.webp" },
      { id: "15", name: "Research-services_Open-Meta-Analyst_-P", path: "/images/insights/Research-services_MOOSE-Guidelines-For-Meta-Analyses-Of-Observational-Studies-In-Epidemiology-1.webp" },
      { id: "16", name: "Research-services_Quantitative-Synthesis", path: "/images/insights/Research-services_-New-FAI-Guidelines_-STROBE-MOOSE-PRISMA-CONSORT.webp" },
      { id: "17", name: "Research-services_Standardized-Library-", path: "/images/insights/Research-services_-New-FAI-Guidelines_-STROBE-MOOSE-PRISMA-CONSORT-2.webp" },
      { id: "18", name: "Research-services_Systematic-Review-Da", path: "/images/insights/Research-services_Open-Meta-Analyst_-Powerful-Open-Source-Software-For-Meta-Analysis.webp" },
      { id: "19", name: "Research-services_-What-Is-Publication-", path: "/images/insights/Research-services_Quantitative-Synthesis—An-Update-1.webp" },
      { id: "20", name: "Trial-protocol", path: "/images/insights/Research-services_Standardized-Library-Of-Depression-Outcome-Measures.webp" },
    ];


    // console.log("InsightsPage", posts)


    return (
      <div className="min-h-screen bg-[#f8f9fa] text-slate-800 font-sans pb-10">
        <HeroBanner
          title={hub.label}
          description={hub.description}
          headingAs="h1"
        />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="mb-6">
            <Link
              href="/insights"
              className="text-xs font-semibold text-blue-600 no-underline hover:no-underline"
            >
              &larr; Back to Insights
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post: any, index: number) => {
              // Find matching image by slug/title, or map by index, or fallback to the list
              const matchedImage =
                insightImagesList.find((img) =>
                  post.slug?.toLowerCase().includes(img.name.toLowerCase()) ||
                  post.title?.toLowerCase().includes(img.name.toLowerCase())
                )?.path ||
                insightImagesList[index % insightImagesList.length]?.path ||
                "/images/insights/Trial-protocol.webp";

              const desc = getDescription(post);

              return (
                <Link
                  key={post.id}
                  href={`/insights/${post.slug}`}
                  className="group flex flex-col border border-slate-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow bg-white"
                >
                  <div className="h-44 overflow-hidden relative">
                    <Image
                      src={matchedImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow justify-between space-y-3">
                    <div className="space-y-2">
                      <h3 className="text-sm font-bold text-slate-800 line-clamp-2 group-hover:text-[#004d40]">
                        {post.title}
                      </h3>
                      <span className="text-[11px] text-slate-400 block">
                        📅 {formatDate(post.publishing?.publishedAt)}
                      </span>
                      <p className="text-xs text-slate-500 line-clamp-2">{desc}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {posts.length === 0 && (
            <p className="text-sm text-slate-500 text-center py-6">
              No entries found in this section yet.
            </p>
          )}

          {(hasPrevPage || hasNextPage) && (
            <div className="flex justify-center items-center gap-3 mt-10">
              <Link
                href={`/insights/${hub.slug}?page=${page - 1}`}
                className={`px-4 py-2 rounded text-xs font-semibold border transition-colors ${hasPrevPage
                    ? "border-slate-200 text-slate-700 hover:border-[#004d40] hover:text-[#004d40]"
                    : "border-slate-100 text-slate-300 pointer-events-none"
                  }`}
              >
                &larr; Previous
              </Link>
              <Link
                href={`/insights/${hub.slug}?page=${page + 1}`}
                className={`px-4 py-2 rounded text-xs font-semibold transition-colors ${hasNextPage
                    ? "bg-[#004d40] text-white hover:bg-[#00332a]"
                    : "bg-slate-100 text-slate-300 pointer-events-none"
                  }`}
              >
                Next &rarr;
              </Link>
            </div>
          )}
        </section>
      </div>
    );
  }

  const staticHub = getStaticInsightHub(slug);
  if (staticHub) {
    const items = STATIC_HUB_ITEMS[staticHub.slug] ?? [];
    return (
      <div className="min-h-screen bg-[#f8f9fa] text-slate-800 font-sans pb-10">
        <HeroBanner
          title={staticHub.label}
          description={staticHub.description}
          headingAs="h1"
        />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="mb-6">
            <Link href="/insights" className="text-xs font-semibold text-blue-600 no-underline hover:no-underline">
              &larr; Back to Insights
            </Link>
          </div>

          <ImageLightboxGrid items={items} />
        </section>
      </div>
    );
  }

  // Not a hub — treat as a single insight post detail page.
  return <InsightPostDetail slug={slug} />;
}
