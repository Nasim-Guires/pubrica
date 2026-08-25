"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PayloadPost } from "@/lib/payload/types";

type Tab = "full-time" | "freelance" | "internship";

export default function JobPostingTabs({ posts }: { posts: PayloadPost[] }) {
  const [activeTab, setActiveTab] = useState<Tab>("full-time");

  const jobs = posts.filter((post) => (post.jobType ?? []).includes(activeTab));

  return (
    <div className="border border-gray-200 rounded-lg p-6 md:p-8 bg-white shadow-sm">
      <div className="flex flex-wrap gap-3 mb-8">
        {(
          [
            ["full-time", "FULL TIME JOBS"],
            ["freelance", "FREELANCE OPENINGS"],
            ["internship", "INTERNSHIP"],
          ] as [Tab, string][]
        ).map(([tab, label]) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-xs md:text-sm font-bold px-4 py-2 rounded transition shadow-sm ${
              activeTab === tab
                ? "bg-slate-900 text-white"
                : "bg-gray-100 text-slate-800 hover:bg-gray-200"
            }`}
          >
            {label} &gt;&gt;
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {jobs.map((post) => (
          <div
            key={post.id}
            className="border border-gray-200 rounded p-4 flex items-center justify-between hover:border-slate-400 transition bg-white shadow-xs"
          >
            <Link
              href={`/careers/${post.urlPath}`}
              className="flex items-center space-x-3 text-slate-900 hover:text-teal-600 font-medium text-sm md:text-base w-full"
            >
              <span className="bg-slate-900 text-white p-1 rounded-full flex items-center justify-center flex-shrink-0">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
              <span className="hover:underline">{post.title}</span>
            </Link>
          </div>
        ))}

        {jobs.length === 0 && (
          <p className="text-sm text-slate-500 text-center py-8">No openings in this category right now.</p>
        )}
      </div>
    </div>
  );
}
