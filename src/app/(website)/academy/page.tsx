"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import {
  Search,
  BookOpen,
  CheckSquare,
  HelpCircle,
  Video,
  FileText,
  FileSignature,
  Layout,
  Info,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Mail,
} from 'lucide-react';
import Link from 'next/link';

// =========================================================================
// DATA STRUCTURES
// =========================================================================

const KNOWLEDGE_CATEGORIES = [
  {
    title: 'Research Writing',
    icon: FileSignature,
    description:
      'Explore hundreds of articles, videos, and other resources used by 4 million students every month.',
    links: [
      {
        label: 'Manuscript Guidelines',
        url: '/academy/manuscript-guidelines',
      },
      {
        label: 'Tables, Figures & Equations',
        url: '/academy/tables-figures',
      },
      {
        label: 'Referencing Style',
        url: '/academy/referencing-style',
      },
      {
        label: 'Grammar',
        url: '/academy/grammer',
      },
    ],
  },
  {
    title: 'Research Publication',
    icon: BookOpen,
    description:
      'Explore hundreds of articles, videos, and other resources used by 4 million students every month.',
    links: [
      {
        label: 'Journal Selection',
        url: '/academy/articles/journal-selection',
      },
      {
        label: 'Manuscript Submission',
        url: '/academy/manuscript-submission',
      },
      {
        label: 'Publication Ethics',
        url: 'academy/publication-ethics',
      },
      {
        label: 'Peer-reviewing',
        url: '/services/publication-support/peer-review-pre-submission',
      },
    ],
  },
  {
    title: 'Research Promotion',
    icon: TrendingUp,
    description:
      'Explore hundreds of articles, videos, and other resources used by 4 million students every month.',
    links: [
      {
        label: 'Online Media',
        url: '/academy/artical/parallel-construction',
      },
      {
        label: 'Guide to Social Media',
        url: '/academy/artical/phrasing-it-right',
      },
      {
        label: 'Scholar Digital Profile',
        url: '/academy/artical/be-wordly-wise',
      },
      {
        label: 'Promoting Research',
        url: '/academy/promoting-research',
      },
    ],
  },
  {
    title: 'Get Newsletter',
    icon: Mail,
    description:
      'Explore hundreds of articles, videos, and other resources used by 4 million students every month.',
    links: [
      {
        label: 'Industry News',
        url: '/academy/industry-news',
      },
      {
        label: 'QA Forums',
        url: '/academy/qa-forum',
      },
      // {
      //   label: 'Free Resources',
      //   url: '/dummy/free-resources',
      // },
      // {
      //   label: 'Subscribe Now',
      //   url: '/dummy/subscribe-now',
      // },
    ],
  },
];

const LATEST_ARTICLES = [
  {
    category: 'Publication Support',
    title: 'What Is Publication Support and How Does It Help Researchers?',
    date: 'July 15, 2026',
    author: 'admin',
    image: '/images/publication-support.jpg',
    alt: 'Researchers collaborating in front of desktop computer monitor'
  },
  {
    category: 'Research Services',
    title: 'Overcoming Challenges in Academic Writing: Articles and Grant Applications',
    date: 'July 14, 2026',
    author: 'admin',
    image: '/images/grants.jpg',
    alt: 'Stacked legal files labeled Applications and Grants'
  },
  {
    category: 'Grant Writing',
    title: 'Machine Learning: The Art of Crafting Effective Research Grant Proposals',
    date: 'July 13, 2026',
    author: 'admin',
    image: '/images/machine-learning.jpg',
    alt: 'Abstract digital interface representing online learning frameworks'
  }
];

const CONTENT_TYPES = [
  { type: 'Articles', desc: 'Ready-made slides that help teachers and professors kickstart their lectures.', dark: true, icon: Layout },
  { type: 'Q & A Forum', desc: 'Annotated examples that show you how it\'s done.', dark: false, icon: HelpCircle },
  { type: 'Workshops & Webinars', desc: 'Annotated examples that show you how it\'s done.', dark: false, icon: Video },
  { type: 'Videos', desc: 'Annotated examples that show you how it\'s done.', dark: false, icon: Video },
  { type: 'Infographics & Downloadables', desc: 'Annotated examples that show you how it\'s done.', dark: false, icon: Info },
  { type: 'Flow Diagram', desc: 'Ready-made slides that help teachers and professors kickstart their lectures.', dark: true, icon: Layout },
  { type: 'Templates', desc: 'Time-saving templates that you can download and edit in Word or Google Docs.', dark: true, icon: FileText },
  { type: 'Examples', desc: 'Annotated examples that show you how it\'s done.', dark: false, icon: FileText },
  { type: 'Checklists', desc: 'Handy checklists so that you don\'t forget anything important.', dark: false, icon: CheckSquare },
];

const TOP_ARTICLES = [
  {
    title: 'Sci-Hub an integrated search system and its ethical use',
    desc: 'Sci-Hub is an integrated search system that works with Library Catalogs to provide instant access to millions of research papers...',
    image: '/images/academy/Screenshot-2025-11-25-153459.png',
    alt: 'Person working on a laptop showing the Sci-Hub landing interface'
  },
  {
    title: 'Nature Journal Manuscript Formatting Guide',
    image: '/images/academy/Nature-Journal-Manuscript-Formatting-Guide-1-e1764139406167.jpg',
    alt: 'Hand taking notes with scientific formatting guidelines adjacent'
  },
  {
    title: 'Sci-Hub: An Integrated Search System and Its Ethical Use',
    image: '/images/academy/Screenshot-2025-11-25-153459.png',
    alt: 'Closeup of laptop monitor exploring educational platforms'
  },
  {
    title: 'Nature Journal Manuscript Formatting Guide (Part II)',
    image: '/images/academy/What-is-the-difference-between-APA-6thand-APA7th-edition.jpg',
    alt: 'Academic researcher holding physical feedback metrics signs'
  }
];

const QA_ITEMS = [
  {
    category: 'Journal Selection & Submission',
    question: 'Add Your Heading Text How do I select the best journal for my manuscript? Here',
    answer: 'Selecting the right journal is a purposeful and tactical decision that will affect journal visibility, readership, and acceptance'
  },
  {
    category: 'Journal Selection & Submission',
    question: 'Can I submit the same manuscript to multiple journals at once?',
    answer: 'Submitting the same manuscript at the same time to more than one journal is an example of a duplicate submission; this is unethical.'
  },
  {
    category: 'Journal Selection & Submission',
    question: 'What should I include in a journal submission package?',
    answer: 'Formatted according to the guidelines of the journal and structured (IMRAD or otherwise)...'
  },
  {
    category: 'Journal Selection & Submission',
    question: 'How do I know if a journal is predatory?',
    answer: 'A predatory journal takes advantage of the open access model by charging publication fees...'
  }
];

export default function PubricaKnowledgeBase() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="bg-[#f9fbfb] min-h-screen text-gray-800 font-sans selection:bg-[#0f3430] selection:text-white">

      {/* ========================================================================= */}
      {/* SECTION 1: KNOWLEDGE BASE SEARCH HERO                                      */}
      {/* ========================================================================= */}
      <section className="bg-[#0b2825] text-white pt-16 pb-32 text-center px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Pubrica Knowledge Base
          </h1>
          <p className="text-gray-300 text-sm md:text-base font-light max-w-2xl mx-auto mb-8">
            Explore hundreds of articles, videos, and other resources used by 4 million students every month.
          </p>

          <div className="max-w-3xl mx-auto bg-white rounded-md shadow-lg flex items-center px-4 py-3 text-gray-700">
            <Search className="h-5 w-5 text-gray-400 mr-3 shrink-0" />
            <input
              type="text"
              placeholder="Enter your search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent outline-none text-sm md:text-base text-gray-850 placeholder:text-gray-400 font-light"
            />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: 4-COLUMN FLOATING VALUE CARDS                                  */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {KNOWLEDGE_CATEGORIES.map((category, idx) => {
            const IconComponent = category.icon;

            return (
              <div
                key={idx}
                className="bg-white rounded-md p-6 border border-gray-200/60 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-3.5 mb-4">
                    <div className="p-2 border border-gray-200 rounded-sm bg-gray-50 text-gray-700">
                      <IconComponent className="h-5 w-5" />
                    </div>

                    <h3 className="text-lg font-bold text-[#0b2825] leading-tight">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-500 font-light leading-relaxed mb-6">
                    {category.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {category.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link
                          href={link.url}
                          className="text-xs font-semibold text-sky-800 hover:text-emerald-700 flex items-center gap-1.5 transition-colors"
                        >
                          <span className="text-xs text-gray-400">»</span>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100 mt-auto">
                  <button className="text-xs font-bold text-[#0b2825] border-b-2 border-[#0b2825] pb-1 hover:text-emerald-600 hover:border-emerald-600 transition-all uppercase tracking-wider">
                    View More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: LATEST ARTICLES CAROUSEL-STYLE ROW                             */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-[#0b2825]">Latest Articles</h2>
          <div className="flex gap-2">
            <button className="p-2 border border-gray-200 bg-white text-emerald-800 rounded-full hover:bg-emerald-50 transition-colors">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="p-2 border border-gray-200 bg-white text-emerald-800 rounded-full hover:bg-emerald-50 transition-colors">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LATEST_ARTICLES.map((article, idx) => (
            <article
              key={idx}
              className="bg-white border border-gray-200/80 rounded-sm overflow-hidden shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[16/10] w-full bg-gray-100 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.alt}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <span className="text-xs font-semibold text-gray-400 block mb-2 uppercase tracking-wide">
                  {article.category}
                </span>
                <h3 className="text-sm md:text-base font-bold text-[#0b2825] leading-snug mb-3 hover:text-sky-800 cursor-pointer transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2 text-[11px] text-gray-400 font-light">
                  <span>{article.date}</span>
                  <span>/</span>
                  <span>{article.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: EXPLORE BY CONTENT TYPE (GRID LAYOUT)                          */}
      {/* ========================================================================= */}
      <section className="bg-white py-16 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-[#0b2825] mb-12 tracking-tight">
            Explore by Content Type
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {CONTENT_TYPES.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-md transition-transform hover:-translate-y-1 duration-200 flex flex-col justify-between ${item.dark
                    ? 'bg-[#0d2a27] text-white'
                    : 'bg-[#e2eff1] text-gray-800 border border-transparent'
                    }`}
                >
                  <div>
                    <div className="mb-4">
                      <IconComp className={`h-7 w-7 ${item.dark ? 'text-white' : 'text-[#0d2a27]'}`} />
                    </div>
                    <h3 className="text-lg font-bold mb-2 tracking-tight">
                      {item.type}
                    </h3>
                    <p className={`text-xs leading-relaxed font-light ${item.dark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: TOP ARTICLES SPLIT NARRATIVE SECTION                           */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-[#0b2825]">Top Articles</h2>
          <button className="text-xs font-semibold text-gray-600 hover:text-emerald-700 transition-colors uppercase tracking-wider">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Main Hero Column (Left) */}
          <div className="lg:col-span-6 bg-white border border-gray-200 rounded-sm overflow-hidden p-3 shadow-xs">
            <div className="relative aspect-[16/10] w-full bg-gray-150 overflow-hidden mb-4 rounded-xs">
              <Image
                src={TOP_ARTICLES[0].image}
                alt={TOP_ARTICLES[0].alt}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-2">
              <h3 className="text-base md:text-lg font-bold text-[#0b2825] mb-2 leading-snug">
                {TOP_ARTICLES[0].title}
              </h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                {TOP_ARTICLES[0].desc}
              </p>
            </div>
          </div>

          {/* Vertical Banner Card Stack List (Right Column - Matching Target Design) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            {TOP_ARTICLES.slice(1).map((item, idx) => (
              <div
                key={idx}
                className="relative h-28 md:h-32 rounded-lg overflow-hidden shadow-md group cursor-pointer"
              >
                {/* Full Background Image */}
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Dark Overlay for Text Contrast */}
                <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors" />

                {/* Overlay Card Title */}
                <div className="absolute inset-0 p-5 flex items-center z-10">
                  <h4 className="text-sm md:text-base font-bold text-white leading-snug drop-shadow-sm max-w-md">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: Q & A COMPONENT LIST                                          */}
      {/* ========================================================================= */}
      <section className="bg-[#f0f5f5] py-16 border-t border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-[#0b2825]">Q &amp; A</h2>
            <button className="text-xs font-semibold text-sky-800 hover:text-emerald-700 transition-colors uppercase tracking-wider">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {QA_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0b2825] text-white rounded-md p-6 flex flex-col justify-between shadow-md hover:-translate-y-1 transition-all duration-200 min-h-[280px]"
              >
                <div>
                  <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block mb-3 pb-1 border-b border-emerald-800/60">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-bold leading-snug mb-4 line-clamp-4">
                    {item.question}
                  </h3>
                </div>
                <div className="pt-4 border-t border-emerald-950/40">
                  <p className="text-xs text-gray-300 font-light leading-relaxed line-clamp-3">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}