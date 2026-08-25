import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  newsCategories,
  infographics,
  storyboards,
  sampleWorks,
  factSheets,
} from "@/lib/data-insight";
import { getPosts, mediaUrl, getDescription } from "@/lib/payload";
import CategoriesCarousel from "@/components/insight/CategoriesCarousel";
import ImageLightboxGrid from "@/components/insight/ImageLightboxGrid";

export const revalidate = 300;

function formatDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

const InsightsPage = async () => {
  const { docs: blogPosts } = await getPosts({ source: "blog", limit: 3 });
  const { docs: checklistPosts } = await getPosts({
    source: "insights",
    urlPathPrefix: "checklist/",
    limit: 4,
  });

  return (
    <div className="bg-[#f8f9fa] min-h-screen text-slate-800 font-sans pb-24">
      {/* 1. HERO BANNER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-wider text-[#004d40] uppercase border-b-2 border-[#004d40] pb-1 inline-block">
              Insights
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Insights for Research Services
            </h1>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Pubrica Insights offers a range of services under Patient Journey & Insights — Machine Learning Services, including Data Extraction, data analytics, and specific analytics such as Multivariate Analytics and Health Economic Modeling.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md h-64 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/academy/Forensics-2.webp"
                alt="Research Insights Graphics"
                fill
                priority
                sizes="(max-w-7xl) 100vw, 500px"
                className="object-cover filter grayscale contrast-125"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORIES CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 overflow-hidden">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 whitespace-nowrap">All News</h2>
          <div className="h-[1px] w-full bg-slate-200"></div>
        </div>

        <CategoriesCarousel categories={newsCategories} />
      </section>

      {/* 3. BLOG SECTION (live from Payload — always reflects the latest posts) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-4 w-full">
            <h2 className="text-xl font-bold text-slate-900">Blog</h2>
            <div className="h-[1px] flex-grow bg-slate-200" />
          </div>
          <Link
            href="/blog"
            className="ml-4 bg-[#004d40] text-white px-4 py-1.5 rounded text-xs font-semibold whitespace-nowrap hover:bg-[#00332a] transition-colors flex items-center gap-1"
          >
            Explore More &rarr;
          </Link>
        </div>

        <p className="text-xs text-slate-500 mb-6">
          Stay updated with Pubrica&apos;s latest insights, tips, and expert advice on
          publishing guidelines and procedures.
        </p>

        <div className="grid md:grid-cols-3 gap-6 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          {blogPosts.map((post) => {
            const image = mediaUrl(post.heroImage) || "/images/blog/default.webp";
            const desc = getDescription(post);

            return (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col border border-slate-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow bg-slate-50"
              >
                <div className="h-44 overflow-hidden relative">
                  <Image
                    src={image}
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
      </section>

      {/* 4. STORYBOARDS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-4 w-full">
            <h2 className="text-xl font-bold text-[#004d40]">Storyboards</h2>
            <div className="h-[1px] flex-grow bg-slate-200"></div>
          </div>
          <Link
            href="/insights/storyboard"
            className="ml-4 bg-[#004d40] text-white px-4 py-1.5 rounded text-xs font-semibold whitespace-nowrap hover:bg-[#00332a] transition-colors"
          >
            Explore More &rarr;
          </Link>
        </div>
        <p className="text-xs text-slate-500 mb-6">
          Storyboarding is how we dialogue with you; we want to communicate news, views, trends, and technology via storyboarding.
        </p>

        <ImageLightboxGrid items={storyboards} />
      </section>

      {/* 5. SAMPLE WORKS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-4 w-full">
            <h2 className="text-xl font-bold text-[#004d40]">Sample Works</h2>
            <div className="h-[1px] flex-grow bg-slate-200"></div>
          </div>
          <Link
            href="/insights/sample-work"
            className="ml-4 bg-[#004d40] text-white px-4 py-1.5 rounded text-xs font-semibold whitespace-nowrap hover:bg-[#00332a] transition-colors"
          >
            Explore More &rarr;
          </Link>
        </div>
        <p className="text-xs text-slate-500 mb-6">
          We take pride in the high quality of our work. To learn more, take a look at some of our samples created by Pubrica writers.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {sampleWorks.map((work, i) => (
            <div
              key={i}
              className="flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-44 overflow-hidden relative">
                <Image
                  src={work.img}
                  alt={work.title}
                  fill
                  sizes="(max-w-7xl) 33vw, 400px"
                  className="object-cover"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-[#004d40] line-clamp-2 hover:underline cursor-pointer">
                    {work.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                    {work.desc}
                  </p>
                </div>
                <div className="flex justify-end pt-2">
                  <span className="text-blue-500 hover:translate-x-1 transition-transform cursor-pointer">
                    &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. INFOGRAPHICS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-4 w-full">
            <h2 className="text-xl font-bold text-slate-900">Infographics</h2>
            <div className="h-[1px] flex-grow bg-slate-200"></div>
          </div>
          <Link
            href="/insights/infographics"
            className="ml-4 bg-[#004d40] text-white px-4 py-1.5 rounded text-xs font-semibold whitespace-nowrap hover:bg-[#00332a] transition-colors"
          >
            Explore More &rarr;
          </Link>
        </div>
        <p className="text-xs text-slate-500 mb-6">
          Infographics are the way to go when it comes to presenting new or trending topics of interest.
        </p>

        <ImageLightboxGrid items={infographics.slice(0, 4)} />
      </section>

      {/* 7. FACT SHEETS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-4 w-full">
            <h2 className="text-xl font-bold text-slate-900">Fact sheet</h2>
            <div className="h-[1px] flex-grow bg-slate-200"></div>
          </div>
          <Link
            href="/insights/fact-sheet"
            className="ml-4 bg-[#004d40] text-white px-4 py-1.5 rounded text-xs font-semibold whitespace-nowrap hover:bg-[#00332a] transition-colors"
          >
            Explore More &rarr;
          </Link>
        </div>
        <p className="text-xs text-slate-500 mb-6">
          Our factsheets are designed to help you enhance your knowledge across subjects.
        </p>

        <ImageLightboxGrid items={factSheets} />
      </section>

      {/* 8. CHECKLISTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-4 w-full">
            <h2 className="text-xl font-bold text-[#004d40]">Checklist</h2>
            <div className="h-[1px] flex-grow bg-slate-200"></div>
          </div>
          <Link
            href="/insights/checklist"
            className="ml-4 bg-[#004d40] text-white px-4 py-1.5 rounded text-xs font-semibold whitespace-nowrap hover:bg-[#00332a] transition-colors"
          >
            Explore More &rarr;
          </Link>
        </div>
        <p className="text-xs text-slate-500 mb-6">
          Our collection of checklists is designed to support you throughout your research process.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {checklistPosts.map((post) => (
            <Link
              key={post.id}
              href={`/insights/${post.slug}`}
              className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 flex flex-col justify-between items-center text-center space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden relative">
                <Image
                  src={mediaUrl(post.heroImage) || "/images/blog/default.webp"}
                  alt={post.title}
                  fill
                  sizes="(max-w-7xl) 25vw, 300px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center text-white text-[10px] p-2 uppercase tracking-wider font-bold z-10">
                  {post.title.split(" ").slice(0, 3).join(" ")}...
                </div>
              </div>
              <h4 className="text-xs font-bold text-slate-800 line-clamp-2 min-h-[2rem] leading-relaxed">
                {post.title}
              </h4>
              <span className="block w-full py-1.5 bg-[#004d40] hover:bg-[#00332a] text-white text-xs font-medium rounded-md transition-colors shadow-sm">
                View Checklist
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;
