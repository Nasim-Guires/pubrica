import React from "react";
import type { Metadata } from "next";
import { getPosts } from "@/lib/payload";
import JobPostingTabs from "@/components/careers/JobPostingTabs";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Job Postings",
  description: "Explore current full-time, freelance, and internship openings at Pubrica.",
};

// Payload's "career" source also includes bare index stubs (e.g. slug
// "careers", "job-posting" with no real posting content) — exclude them.
const INDEX_SLUGS = new Set(["careers", "job-posting"]);

export default async function JobPostingsPage() {
  const { docs } = await getPosts({ source: "career", limit: 100 });
  const jobs = docs.filter((post) => !INDEX_SLUGS.has(post.slug) && post.urlPath);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section className="bg-slate-900 text-white py-16 text-center px-4">
        <div className="max-w-4xl mx-auto border-2 border-slate-700 py-8 px-6 bg-slate-800/50 shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide">Job positions at Pubrica</h1>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <JobPostingTabs posts={jobs} />
      </main>

      <section className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between bg-slate-800 border border-slate-700 p-8 rounded-lg shadow-xl gap-6">
          <h2 className="text-xl md:text-2xl font-semibold text-center md:text-left">
            Whether you&apos;re stuck or just want some tips on where to start, hit up our experts anytime.
          </h2>
        </div>
      </section>
    </div>
  );
}
