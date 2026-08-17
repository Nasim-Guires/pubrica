import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EnquireNowForm } from "@/components/common/EnquireNowForm";
import { blogPosts } from "@/lib/blog";


interface BlogDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }

  const otherBlogs = blogPosts.filter((p) => p.slug !== slug);

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-800 font-sans pb-24">
      {/* Banner Header */}
      <div className="relative h-64 md:h-80 w-full bg-slate-900">
        <Image
          src={post.bannerImage}
          alt={post.title}
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <h1 className="max-w-4xl text-center text-2xl md:text-4xl font-bold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content Area */}
          <main className="lg:col-span-8 bg-white p-6 md:p-10 rounded-2xl border border-slate-100 shadow-sm">
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 leading-snug">
              {post.title}
            </h1>

            {/* Intro Paragraphs */}
            {post.introParagraphs.map((para, i) => (
              <p key={i} className="mb-4 text-slate-700 text-sm md:text-base leading-relaxed">
                {para}
              </p>
            ))}

            {/* Content Sections */}
            {post.sections.map((section, idx) => (
              <section key={idx} className="mt-8">
                <h2 className="text-xl font-bold text-slate-900 mb-3">
                  {section.heading}
                </h2>

                {section.paragraphs?.map((p, pIdx) => (
                  <p key={pIdx} className="mb-3 text-sm md:text-base leading-relaxed text-slate-700">
                    {p}
                  </p>
                ))}

                {section.bulletPoints && section.bulletPoints.length > 0 && (
                  <ul className="mb-4 list-disc pl-6 space-y-2 text-sm md:text-base text-slate-700">
                    {section.bulletPoints.map((pt, bpIdx) => (
                      <li key={bpIdx}>{pt}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* Conclusion */}
            {post.conclusionParagraphs && post.conclusionParagraphs.length > 0 && (
              <section className="mt-10 border-t border-slate-100 pt-6">
                <h2 className="text-xl font-bold text-slate-900 mb-3">Conclusion</h2>
                {post.conclusionParagraphs.map((cPara, idx) => (
                  <p key={idx} className="mb-4 text-sm md:text-base leading-relaxed text-slate-700">
                    {cPara}
                  </p>
                ))}
              </section>
            )}

            {/* Call to Action Box */}
            {post.callToAction && (
              <div className="my-6 p-4 rounded-lg bg-emerald-50 border-l-4 border-[#004d40] text-sm md:text-base font-medium text-slate-800">
                {post.callToAction}
              </div>
            )}

            {/* References */}
            {post.references && post.references.length > 0 && (
              <section className="mt-8 border-t border-slate-200 pt-4">
                <h3 className="text-base font-bold text-slate-900 mb-2">References</h3>
                <ol className="list-decimal pl-5 text-xs text-slate-500 space-y-2">
                  {post.references.map((ref, rIdx) => (
                    <li key={rIdx}>{ref}</li>
                  ))}
                </ol>
              </section>
            )}
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4 flex flex-col gap-6">
            {/* Search Box */}
            <div className="w-full bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center">
              <span className="text-slate-400 mr-2">🔍</span>
              <input
                type="text"
                placeholder="Enter your search"
                className="w-full bg-transparent text-sm outline-none text-slate-700"
              />
            </div>

            {/* Enquire Now Form */}
            <div>
              <h4 className="text-base font-bold text-slate-900 mb-3">Enquire Now</h4>
              <EnquireNowForm />
            </div>

            {/* Interesting Blogs */}
            {otherBlogs.length > 0 && (
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="text-base font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">
                  Interesting Blogs
                </h4>
                <div className="flex flex-col gap-4">
                  {otherBlogs.map((b, idx) => (
                    <Link key={idx} href={`/blog/${b.slug}`} className="group flex gap-3 items-start">
                      <div className="relative w-16 h-16 flex-shrink-0 rounded overflow-hidden">
                        <Image src={b.img} alt={b.title} fill className="object-cover" />
                      </div>
                      <div>
                        <h5 className="text-xs font-semibold text-slate-800 group-hover:text-[#004d40] leading-snug line-clamp-2">
                          {b.title}
                        </h5>
                        <span className="text-[10px] text-slate-400 mt-1 block">📅 {b.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>

        </div>
      </div>
    </div>
  );
}