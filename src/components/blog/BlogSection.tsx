import { blogPosts } from "@/lib/blog";
import Image from "next/image";
import Link from "next/link";

export default async function BlogSection() {

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-4 w-full">
                    <h2 className="text-xl font-bold text-slate-900">
                        Blog
                    </h2>

                    <div className="h-[1px] flex-grow bg-slate-200" />
                </div>

                <Link
                    href="/blog"
                    className="ml-4 bg-[#004d40] text-white px-4 py-1.5 rounded text-xs font-semibold whitespace-nowrap hover:bg-[#00332a] transition-colors flex items-center gap-1"
                >
                    Explore More →
                </Link>
            </div>

            <p className="text-xs text-slate-500 mb-6">
                Stay updated with Pubrica's latest insights, tips, and expert advice
                on publishing guidelines and procedures.
            </p>

            <div className="grid md:grid-cols-3 gap-6 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                {blogPosts.map((post) => {
                   const image = post.img || "/images/blog/default.webp";

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
                                        📅 {post.date}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}