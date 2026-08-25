import React from "react";
import type { Metadata } from "next";
import CareersPage from "@/components/careers/CareersPage";
import { getPosts } from "@/lib/payload";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Careers in Publishing & Editing",
  description:
    "Scale up your career with Pubrica—a place to learn, grow, and change. Explore job opportunities in academic editing, scientific writing, and research publishing.",
  keywords: [
    "Careers in Publishing",
    "Scientific Writing Jobs",
    "Academic Editing Jobs",
    "Medical Editor Openings",
    "Pubrica Careers",
  ],
  openGraph: {
    title: "Careers in Publishing | Pubrica",
    description:
      "Join an elite team of scientists, professors, and editors at Pubrica. Check our current job openings.",
    type: "website",
  },
};

const INDEX_SLUGS = new Set(["careers", "job-posting"]);

const page = async () => {
  const { docs } = await getPosts({ source: "career", limit: 100 });
  const jobs = docs.filter((post) => !INDEX_SLUGS.has(post.slug) && post.urlPath);

  return <CareersPage jobs={jobs} />;
};

export default page;
