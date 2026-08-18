import type { Key } from "react";

export interface BlogPostItem {
  id?: Key | null;
  heroImage?: string;
  slug: string;
  title: string;
  date: string;
  desc: string;
  img: string;
  bannerImage: string;
  introParagraphs: string[];
  sections: {
    heading: string;
    paragraphs?: string[];
    bulletPoints?: string[];
    infographicImage?: string;
  }[];
  conclusionParagraphs?: string[];
  callToAction?: string;
  references?: string[];
}

export const blogPosts: BlogPostItem[] = [
  {
    id: "journal-submission-services-canada",
    slug: "journal-submission-services-canada",
    title: "Struggling With Journal Submission? Get Expert Help in Canada",
    date: "May 26, 2026",
    desc: "Publication of research papers in respected academic journals is an important milestone for researchers and scholars alike.",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
    bannerImage:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    introParagraphs: [
      "Publication of research papers in respected academic journals is an important milestone for researchers, scholars, and students alike. Yet, the process of submitting research articles to academic journals is not as easy as many people may think.",
      "Canadian researchers should be glad that there are professional services specializing in journal submission assistance, such as Journal Submission Services in Canada, Research Paper Publication in Canada, and Academic Editing Services in Canada.",
    ],
    sections: [
      {
        heading: "1. Why Journal Submission Is So Challenging",
        paragraphs: [
          "Submission of a manuscript is more than just submitting an article on a website of a journal. There are certain standards and specifications which need to be met. Some of the typical problems which researchers may encounter include:",
        ],
        bulletPoints: [
          "Inappropriate formatting of manuscripts",
          "Low-quality academic writing, Wrong citation style",
          "Misunderstanding journal policies",
          "Difficulties with submission guidelines, plagiarism worries",
        ],
      },
      {
        heading: "2. The Importance of Professional Journal Submission Support",
        paragraphs: [
          "Professional submission services for journals will help researchers make sure that their work meets the international standards in terms of scientific writing.",
        ],
        bulletPoints: [
          "Improve the quality of the manuscript",
          "Lower rejection rates, save time on revision",
          "Choose the proper journal, and fulfill all requirements of the submission process",
        ],
      },
    ],
    conclusionParagraphs: [
      "The submission of an article to a journal is perhaps one of the most important steps in publishing research. Journal submission services in Canada help scholars handle the complexities associated with the process effectively.",
    ],
    callToAction:
      "Struggling With Journal Submission? Get Expert Help in Canada. Our Pubrica consultants are here to guide you.",
    references: [
      "Lotoski, L., O'Brien, J., & D'Eon, M. F. (2025). Reviewers' views on the editorial review processes of the Canadian Medical Education Journal. Canadian medical education journal, 16(1), 128-140.",
    ],
  },
];

export const newsCategories = [
  { title: "Journal Submission Services", icon: "📄" },
  { title: "Manuscript Formatting", icon: "✏️" },
  { title: "Plagiarism Check", icon: "🔍" },
  { title: "Statistical Review", icon: "📊" },
  { title: "Cover Letter Writing", icon: "✉️" },
];

export const infographics: string[] = [];
export const storyboards: string[] = [];
export const sampleWorks: string[] = [];
export const factSheets: string[] = [];
export const checklists: string[] = [];