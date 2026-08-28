"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface InsightItem {
  title: string;
  href: string;
  image: string | null;
  snippet: string;
}

/**
 * Latest real Academy articles for a Services page's "Insights" section,
 * fetched live from Payload (via our /api/insights proxy, since Payload's
 * REST API doesn't send CORS headers for direct browser requests) instead
 * of hardcoded placeholder cards.
 */
export default function DynamicInsightsSection({
  categorySlug,
  limit = 3,
  heading = "Insights",
  className = "w-full bg-[#f4f6f6] py-14 px-4 sm:px-6 lg:px-12 font-sans",
}: {
  categorySlug?: string;
  limit?: number;
  heading?: string;
  className?: string;
}) {
  const [items, setItems] = useState<InsightItem[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    const params = new URLSearchParams({ limit: String(limit) });
    if (categorySlug) params.set("categorySlug", categorySlug);

    fetch(`/api/insights?${params.toString()}`)
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: { items?: InsightItem[] }) => {
        if (!cancelled) setItems(data.items ?? []);
      })
      .catch(() => {
        if (!cancelled) setItems([]);
      });

    return () => {
      cancelled = true;
    };
  }, [categorySlug, limit]);

  if (items && items.length === 0) return null;

  const cards = items ?? Array.from({ length: limit }, () => null);

  return (
    <section className={className}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#09322e] mb-8">
          {heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((item, i) =>
            item ? (
              <Link
                key={item.href}
                href={item.href}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between transition-all duration-200 hover:shadow-md group"
              >
                <div className="relative w-full h-48 bg-slate-100 overflow-hidden">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="p-5 flex flex-col justify-between flex-1">
                  <h3 className="font-bold text-[#09322e] text-base sm:text-lg leading-snug mb-3 group-hover:text-teal-800 transition-colors">
                    {item.title}
                  </h3>
                  {item.snippet && (
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {item.snippet}
                    </p>
                  )}
                </div>
              </Link>
            ) : (
              <div
                key={i}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm h-64 animate-pulse"
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
