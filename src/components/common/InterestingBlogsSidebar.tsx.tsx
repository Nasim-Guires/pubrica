import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { PayloadPost } from "@/lib/payload/types";
import { mediaUrl } from "@/lib/payload/client";

interface InterestingBlogsSidebarProps {
    blogs: PayloadPost[];
}

function formatDate(iso?: string) {
    if (!iso) return "";
    return new Date(iso).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
}

export default function InterestingBlogsSidebar({ blogs }: InterestingBlogsSidebarProps) {
    if (!blogs || blogs.length === 0) return null;

    return (
        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-6">
                Interesting Blogs
            </h3>

            <div className="flex flex-col gap-8">
                {blogs.map((blog) => {
                    const bannerImg = mediaUrl(blog.heroImage) || "/images/blog/default.webp";
                    const formattedDate = formatDate(blog.publishing?.publishedAt);

                    return (
                        <div key={blog.id} className="flex flex-col">
                            {/* Post Title */}
                            <Link
                                href={`/blog/${blog.slug}`}
                                className="text-sm font-semibold text-blue-600 hover:text-blue-800 leading-snug transition-colors"
                            >
                                {blog.title}
                            </Link>

                            {/* Date */}
                            {formattedDate && (
                                <span className="text-xs text-slate-500 mt-1 mb-3 inline-block">
                                    {formattedDate}
                                </span>
                            )}

                            {/* Full-width Image Card */}
                            <Link
                                href={`/blog/${blog.slug}`}
                                className="group relative w-full h-48 rounded-xl overflow-hidden bg-slate-100 block"
                            >
                                <Image
                                    src={bannerImg}
                                    alt={blog.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}