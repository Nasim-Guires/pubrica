import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Container from '@/components/common/Container';
import { getBlogs } from '@/lib/api';

export default async function LatestBlogs() {
  const blogs = await getBlogs(3);

  return (
    <section className="bg-white py-8 border-t border-gray-100">
      <Container>
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-bold tracking-wider text-primary-800 uppercase bg-primary-100/50 px-3 py-1 rounded-full">
              Resources & Updates
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 font-display mt-3">
              Latest Insights & Publishing Trends
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-primary-800 hover:text-primary-600 font-bold text-sm flex items-center gap-1.5 shrink-0 group hover:translate-x-1 duration-150 transform transition-transform"
          >
            <span>View All Articles</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans">
          {blogs.map((blog) => (
            <article
              key={blog.slug}
              className="flex flex-col border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all group bg-white"
            >
              <div className="h-48 w-full overflow-hidden bg-gray-100 relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 bg-primary-800 text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
                  {blog.category}
                </span>
              </div>

              <div className="flex-grow p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-[11px] text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{blog.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{blog.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-primary-800 transition-colors">
                    <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                  </h3>

                  <p className="text-xs text-gray-500 leading-relaxed mt-2 line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="border-t border-gray-50 pt-4 mt-6 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-gray-400">
                    By {blog.author.name}
                  </span>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="text-primary-800 hover:text-primary-600 font-bold text-xs flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
