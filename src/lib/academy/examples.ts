// Content of pubrica.com/academy/examples/, mirrored from the live page.
// The card list there is a hand-picked selection (a mix of Insights news posts
// and Academy study guides), not a CMS query, so it is kept here as shown live.

export interface ExampleCard {
  title: string;
  href: string;
  image: string;
  alt: string;
  /** Category chips over the image, linking to the live category archives. */
  terms: { label: string; href: string }[];
  excerpt: string;
  date: string;
}

export const EXAMPLES_BANNER_IMAGE = "https://pubrica.com/wp-content/uploads/2025/01/study-guide-banner.webp";

/** Cards per page on the live page (?_page=N). */
export const EXAMPLES_PAGE_SIZE = 9;

/** "FILTER BY: SERVICES" sidebar groups. */
export const examplesStudyGuideLinks = [
  {
    "label": "Research Writing",
    "href": "/academy/study-guide/research-writing/"
  },
  {
    "label": "Scientific Writing",
    "href": "/academy/study-guide/scientific-writing-2/"
  },
  {
    "label": "Health Medical Writing",
    "href": "/academy/study-guide/health-medical-writing/"
  },
  {
    "label": "Editing and Proofreading",
    "href": "/academy/study-guide/editing-and-proof-reading/"
  },
  {
    "label": "Publications",
    "href": "/academy/study-guide/publications/"
  },
  {
    "label": "Research Impact",
    "href": "/academy/study-guide/research-impact/"
  },
  {
    "label": "Medical Communication",
    "href": "/academy/study-guide/medical-communication/"
  }
];

export const examplesResourceLinks = [
  {
    "label": "Template",
    "href": "/academy/template/"
  },
  {
    "label": "Checklist",
    "href": "/academy/checklist/"
  },
  {
    "label": "Guidelines",
    "href": "/academy/guidelines/"
  },
  {
    "label": "Q&A",
    "href": "/academy/q-and-a/"
  },
  {
    "label": "Factsheet",
    "href": "/academy/factsheet/"
  },
  {
    "label": "Examples",
    "href": "/academy/examples/"
  }
];

export const exampleCards: ExampleCard[] = [
  {
    "title": "Industry Trends and Forecasts in Academic Publishing: Digital Transformation & Research Insights",
    "href": "/insights/industry-trends-forecasts-academic-publishing/",
    "image": "https://pubrica.com/wp-content/uploads/2025/09/V1-Industry-Trends-and-Forecasts-in-Academic-Publishing-Digital-Transformation-Research-Insights.png",
    "alt": "V1-Industry Trends and Forecasts in Academic Publishing Digital Transformation & Research Insights",
    "terms": [
      {
        "label": "Insights",
        "href": "/category/insights/"
      },
      {
        "label": "news",
        "href": "/category/insights/news/"
      },
      {
        "label": "Research Impact",
        "href": "/category/insights/news/research-impact/"
      },
      {
        "label": "research service",
        "href": "/category/insights/news/research-service/"
      }
    ],
    "excerpt": "May 2025 | Source: Sage PublishingSAGE Publications has implemented a ...",
    "date": "September 20, 2025"
  },
  {
    "title": "Debates Over Open Access Policies: Navigating the Future of Research Publication",
    "href": "/insights/news/debates-over-open-access-policies-navigating-research-publication/",
    "image": "https://pubrica.com/wp-content/uploads/2025/09/v1-Debates-Over-Open-Access-Policies-Navigating-the-Future-of-Research-Publication-1.png",
    "alt": "v1-Debates Over Open Access Policies Navigating the Future of Research Publication",
    "terms": [
      {
        "label": "news",
        "href": "/category/insights/news/"
      },
      {
        "label": "Research Impact",
        "href": "/category/insights/news/research-impact/"
      }
    ],
    "excerpt": "May 2025 | Source: Sage PublishingSAGE Publications has implemented a ...",
    "date": "September 11, 2025"
  },
  {
    "title": "Introducing the Journal of the Academy of Public Health: A New Era in Scientific Publishing",
    "href": "/insights/journal-of-academy-of-public-health-new-era-publishing/",
    "image": "https://pubrica.com/wp-content/uploads/2025/05/Journal-of-the-Academy-of-Public-Health-New-Era-in-Publishing.jpg",
    "alt": "Journal of the Academy of Public Health New Era in Publishing",
    "terms": [
      {
        "label": "Insights",
        "href": "/category/insights/"
      },
      {
        "label": "news",
        "href": "/category/insights/news/"
      },
      {
        "label": "Research Impact",
        "href": "/category/insights/news/research-impact/"
      }
    ],
    "excerpt": "May 2025 | Source: Sage PublishingSAGE Publications has implemented a ...",
    "date": "May 13, 2025"
  },
  {
    "title": "Adoption of AI Tools to Enhance Research Integrity",
    "href": "/insights/adoption-ai-tools-research-integrity/",
    "image": "https://pubrica.com/wp-content/uploads/2025/04/Adoption-of-AI-Tools-to-Enhance-Research-Integrity-in-Publishing.jpg",
    "alt": "",
    "terms": [
      {
        "label": "Insights",
        "href": "/category/insights/"
      },
      {
        "label": "news",
        "href": "/category/insights/news/"
      },
      {
        "label": "Research Impact",
        "href": "/category/insights/news/research-impact/"
      },
      {
        "label": "research service",
        "href": "/category/insights/news/research-service/"
      }
    ],
    "excerpt": "April 2025 | Source: Inside Higher EdIn an age of ...",
    "date": "April 30, 2025"
  },
  {
    "title": "Understanding and Tackling Plagiarism in Academic and Research Settings",
    "href": "/academy/study-guide/research-writing/plagiarism-academic-research-settings-prevention/",
    "image": "https://pubrica.com/wp-content/uploads/2025/11/Article-15-Understanding-Plagiarism-in-Academic-Publishing_-Types-Causes-and-Solutions-1-1.webp",
    "alt": "Article-15-Understanding-Plagiarism-in-Academic-Publishing_-Types-Causes-and-Solutions-1",
    "terms": [
      {
        "label": "Research Writing",
        "href": "/category/academy/study-guide/research-writing/"
      }
    ],
    "excerpt": "Plagiarism, often referred to as literary theft, is a persistent ...",
    "date": "January 30, 2025"
  },
  {
    "title": "Understanding Systematic Reviews and Meta-Analyses: Definitions, Applications, and Importance",
    "href": "/academy/study-guide/research-writing/systematic-reviews-meta-analyses-definitions-applications-importance/",
    "image": "https://pubrica.com/wp-content/uploads/2025/11/Scientific-Medical-content.png",
    "alt": "Scientific-Medical-content",
    "terms": [
      {
        "label": "Research Writing",
        "href": "/category/academy/study-guide/research-writing/"
      }
    ],
    "excerpt": "Scientific research articles are broadly categorized into two types: original ...",
    "date": "January 30, 2025"
  },
  {
    "title": "Evidence-Based Medicine: The Levels of Evidence Pyramid and Systematic Reviews with Meta- Analyses",
    "href": "/academy/study-guide/research-writing/evidence-based-medicine-levels-evidence-meta-analyses/",
    "image": "https://pubrica.com/wp-content/uploads/2025/06/Systematic-Reviews-Meta-Analyses.png",
    "alt": "Systematic Reviews & Meta-Analyses",
    "terms": [
      {
        "label": "Research Writing",
        "href": "/category/academy/study-guide/research-writing/"
      }
    ],
    "excerpt": "The concept of evidence-based medicine (EBM) emerged as a transformative ...",
    "date": "January 30, 2025"
  },
  {
    "title": "Important Tips for Reviewing Systematic Reviews and Meta- Analyses",
    "href": "/academy/study-guide/research-writing/guide-reviewing-systematic-reviews-meta-analyses/",
    "image": "https://pubrica.com/wp-content/uploads/2025/12/Article-25-Important-Tips-for-Reviewing-Systematic-Reviews-and-Meta-Analyses-.webp",
    "alt": "Article-25-Important-Tips-for-Reviewing-Systematic-Reviews-and-Meta-Analyses",
    "terms": [
      {
        "label": "Research Writing",
        "href": "/category/academy/study-guide/research-writing/"
      }
    ],
    "excerpt": "Reviewing systematic reviews and meta-analyses requires meticulous attention to various ...",
    "date": "January 30, 2025"
  },
  {
    "title": "Ethical Challenges and Remedies in Academic Publishing",
    "href": "/academy/study-guide/research-writing/salami-slicing-ethics/",
    "image": "https://pubrica.com/wp-content/uploads/2025/11/Ai-Authourship-in-pulication.png",
    "alt": "Ai-Authourship-in-pulication",
    "terms": [
      {
        "label": "Research Writing",
        "href": "/category/academy/study-guide/research-writing/"
      }
    ],
    "excerpt": "Salami-Slicing in Research: Ethical Challenges and Remedies in Academic Publishing ...",
    "date": "January 29, 2025"
  },
  {
    "title": "Ensuring Credibility in Public Health Research",
    "href": "/academy/study-guide/research-writing/retractions-scholarly-publishing-public-health/",
    "image": "https://pubrica.com/wp-content/uploads/2024/01/Article-8-Retractions-in-Scholarly-Publishing_-Ensuring-Credibility-in-Public-Health-Research-.webp",
    "alt": "Retractions in Scholarly Publishing_ Ensuring Credibility in Public Health Research",
    "terms": [
      {
        "label": "Research Writing",
        "href": "/category/academy/study-guide/research-writing/"
      }
    ],
    "excerpt": "Controlled clinical trials are the highest level of clinical research ...",
    "date": "January 23, 2025"
  },
  {
    "title": "The Fragile Balance of Trust in Scientific Publishing",
    "href": "/academy/study-guide/research-writing/trust-scientific-publishing/",
    "image": "https://pubrica.com/wp-content/uploads/2024/01/Article-7-The-Fragile-Balance-of-Trust-in-Scientific-Publishing_-Retractions-Integrity-and-Accountability.webp",
    "alt": "The Fragile Balance of Trust in Scientific Publishing",
    "terms": [
      {
        "label": "Research Writing",
        "href": "/category/academy/study-guide/research-writing/"
      }
    ],
    "excerpt": "Scientific publishing thrives on trust. Readers trust that published articles ...",
    "date": "January 23, 2025"
  },
  {
    "title": "Understanding Funnel Plots-A Key Tool in Meta-Analysis",
    "href": "/academy/study-guide/research-writing/funnel-plots-meta-analysis/",
    "image": "https://pubrica.com/wp-content/uploads/2025/12/V1-The-Cochrane-Methodology-A-Proven-Approach-for-High-Quality-Systematic-Reviews-.webp",
    "alt": "V1-The Cochrane Methodology A Proven Approach for High-Quality Systematic Reviews",
    "terms": [
      {
        "label": "Research Writing",
        "href": "/category/academy/study-guide/research-writing/"
      }
    ],
    "excerpt": "Funnel plots, introduced by Light and Pillemer and later elaborated ...",
    "date": "January 23, 2025"
  },
  {
    "title": "A Key Tool for Evidence Synthesis",
    "href": "/academy/study-guide/research-writing/cumulative-meta-analysis-tool/",
    "image": "https://pubrica.com/wp-content/uploads/2025/11/v1-The-Importance-of-Editing-and-Proofreading-Before-Manuscript-Submission-banner-image-.png",
    "alt": "v1-The Importance of Editing and Proofreading Before Manuscript Submission-banner image",
    "terms": [
      {
        "label": "Research Writing",
        "href": "/category/academy/study-guide/research-writing/"
      }
    ],
    "excerpt": "Cumulative meta-analysis is a powerful method used to analyze and interpret ...",
    "date": "January 23, 2025"
  },
  {
    "title": "How to Refine Your Academic Manuscript",
    "href": "/academy/study-guide/research-writing/proofreading-academic-manuscript/",
    "image": "https://pubrica.com/wp-content/uploads/2025/11/v1-What-is-a-Journal-Submission-Service-and-How-Does-It-Help-You-Get-Published-banner-image-.png",
    "alt": "v1-What is a Journal Submission Service and How Does It Help You Get Published-banner image",
    "terms": [
      {
        "label": "Research Writing",
        "href": "/category/academy/study-guide/research-writing/"
      }
    ],
    "excerpt": "Proofreading is more than just spotting typos or grammatical errors—it’s ...",
    "date": "January 23, 2025"
  },
  {
    "title": "Measuring the Real-World Impact of Research",
    "href": "/academy/study-guide/research-writing/altmetric-clinical-guidelines-impact/",
    "image": "https://pubrica.com/wp-content/uploads/2025/11/v1-What-is-a-Journal-Submission-Service-and-How-Does-It-Help-You-Get-Published-banner-image-.png",
    "alt": "v1-What is a Journal Submission Service and How Does It Help You Get Published-banner image",
    "terms": [
      {
        "label": "Research Writing",
        "href": "/category/academy/study-guide/research-writing/"
      }
    ],
    "excerpt": "Altmetrics has transformed how researchers and institutions measure the influence ...",
    "date": "January 23, 2025"
  },
  {
    "title": "Understanding Plagiarism in Academic Publishing: Types, Causes, and Solutions",
    "href": "/academy/study-guide/research-writing/understanding-plagiarism-in-academic-publishing/",
    "image": "https://pubrica.com/wp-content/uploads/2025/11/Article-4-Cumulative-Meta-Analysis_-A-Key-Tool-for-Evidence-Synthesis.webp",
    "alt": "Article-4-Cumulative-Meta-Analysis_-A-Key-Tool-for-Evidence-Synthesis",
    "terms": [
      {
        "label": "Research Writing",
        "href": "/category/academy/study-guide/research-writing/"
      }
    ],
    "excerpt": "Controlled clinical trials are the highest level of clinical research ...",
    "date": "January 25, 2024"
  },
  {
    "title": "Editorial Guidance on Plagiarism: Upholding Research Integrity",
    "href": "/academy/study-guide/research-writing/editorial-guidance-plagiarism-integrity/",
    "image": "https://pubrica.com/wp-content/uploads/2025/12/v1-How-to-Write-a-Research-Paper-for-Publication.png",
    "alt": "v1-How to Write a Research Paper for Publication",
    "terms": [
      {
        "label": "Research Writing",
        "href": "/category/academy/study-guide/research-writing/"
      }
    ],
    "excerpt": "Controlled clinical trials are the highest level of clinical research ...",
    "date": "January 25, 2024"
  },
  {
    "title": "The Impact of Fake Papers on Scientific Publishing",
    "href": "/academy/study-guide/research-writing/fake-papers-on-scientific-publishing/",
    "image": "https://pubrica.com/wp-content/uploads/2024/01/Article-8-Retractions-in-Scholarly-Publishing_-Ensuring-Credibility-in-Public-Health-Research-.webp",
    "alt": "Retractions in Scholarly Publishing_ Ensuring Credibility in Public Health Research",
    "terms": [
      {
        "label": "Research Writing",
        "href": "/category/academy/study-guide/research-writing/"
      }
    ],
    "excerpt": "The presence of fake papers in scientific publishing has become ...",
    "date": "January 24, 2024"
  },
  {
    "title": "The Pressures and Motivations Behind Scientific Fraud",
    "href": "/academy/study-guide/research-writing/scientific-fraud-pressures-motivations/",
    "image": "https://pubrica.com/wp-content/uploads/2025/11/Article-15-Understanding-Plagiarism-in-Academic-Publishing_-Types-Causes-and-Solutions-1-2.webp",
    "alt": "Article-15-Understanding-Plagiarism-in-Academic-Publishing_-Types-Causes-and-Solutions-1",
    "terms": [
      {
        "label": "Research Writing",
        "href": "/category/academy/study-guide/research-writing/"
      }
    ],
    "excerpt": "The presence of fake papers in scientific publishing has become ...",
    "date": "January 24, 2024"
  },
  {
    "title": "Retraction Watch",
    "href": "/academy/study-guide/research-writing/retraction-watch-common-reasons-scientific-publishing/",
    "image": "https://pubrica.com/wp-content/uploads/2025/12/V1-PRISMA-Method-explained-Reporting-guidelines-for-systematic-review.webp",
    "alt": "V1-PRISMA Method explained Reporting guidelines for systematic review",
    "terms": [
      {
        "label": "Research Writing",
        "href": "/category/academy/study-guide/research-writing/"
      }
    ],
    "excerpt": "Retractions in scholarly publishing are issued for a variety of ...",
    "date": "January 22, 2024"
  },
  {
    "title": "Writing a Good Research Statement for a Faculty Position",
    "href": "/academy/study-guide/writing-a-good-research-statement-for-a-faculty-position/",
    "image": "https://pubrica.com/wp-content/uploads/2023/04/Writing-a-Good-Research-Statement-for-a-Faculty-Position.webp",
    "alt": "Writing a Good Research Statement for a Faculty Position",
    "terms": [
      {
        "label": "Research Writing",
        "href": "/category/academy/study-guide/research-writing/"
      },
      {
        "label": "Study Guide",
        "href": "/category/academy/study-guide/"
      }
    ],
    "excerpt": "In brief For prospective faculty applications, a research statement is ...",
    "date": "December 5, 2022"
  },
  {
    "title": "Accuracy of Abstracts in Pharmacy Journals for Original Research Articles",
    "href": "/academy/research-article/accuracy-of-abstracts-in-pharmacy-journals-for-original-research-articles/",
    "image": "https://pubrica.com/wp-content/uploads/2023/04/Accuracy-of-Abstracts-in-Pharmacy-Journals-for-Original-Research-Articles.webp",
    "alt": "Accuracy of Abstracts in Pharmacy Journals for Original Research Articles",
    "terms": [
      {
        "label": "Research Article",
        "href": "/category/academy/research-article/"
      }
    ],
    "excerpt": "In brief Although original research publications are widely available, the ...",
    "date": "February 9, 2022"
  },
  {
    "title": "How do you write an original research article and have it published?",
    "href": "/academy/study-guide/research-writing/how-do-you-write-an-original-research-article-and-have-it-published/",
    "image": "https://pubrica.com/wp-content/uploads/2023/04/How-do-you-write-an-original-research-article-and-have-it-published.webp",
    "alt": "How do you write an original research article and have it published",
    "terms": [
      {
        "label": "Research Writing",
        "href": "/category/academy/study-guide/research-writing/"
      }
    ],
    "excerpt": "In brief The Journal of the Medical Library Association (JMLA) ...",
    "date": "January 3, 2022"
  },
  {
    "title": "A Research study writing a Systematic Review in Clinical Investigation",
    "href": "/academy/study-guide/research-writing/a-research-study-writing-a-systematic-review-in-clinical-investigation/",
    "image": "https://pubrica.com/wp-content/uploads/2025/12/v1-Why-Concise-S–V–O-Structure-Matters-in-Academic-Writing.webp",
    "alt": "v1-Why Concise S–V–O Structure Matters in Academic Writing",
    "terms": [
      {
        "label": "Research Writing",
        "href": "/category/academy/study-guide/research-writing/"
      }
    ],
    "excerpt": "In brief A systematic review summarises the findings of precisely ...",
    "date": "December 17, 2021"
  },
  {
    "title": "How to avoid Plagiarism while ensuring the originality of their manuscript",
    "href": "/academy/study-guide/how-to-avoid-plagiarism-while-ensuring-the-originality-of-their-manuscript/",
    "image": "https://pubrica.com/wp-content/uploads/2021/09/How-to-avoid-Plagiarism-while-ensuring-the-originality-of-their-manuscript.jpg",
    "alt": "pubrica",
    "terms": [
      {
        "label": "Research Writing",
        "href": "/category/academy/study-guide/research-writing/"
      },
      {
        "label": "Study Guide",
        "href": "/category/academy/study-guide/"
      }
    ],
    "excerpt": "How to avoid Plagiarism while ensuring the originality of their ...",
    "date": "September 8, 2021"
  }
];
