// Content of the Insights "All News" section and the card pages it links to,
// mirrored from the live pubrica.com pages (hand-built Elementor layouts there,
// not CMS queries). The articles these cards link to live in Payload and are
// served by /insights/[slug]/[child].
//
// Generated from the live HTML — edit the data here rather than the components.

export interface AllNewsCard {
  title: string;
  icon: string;
  href: string;
}

export interface ZoomCard {
  image: string | null;
  alt: string;
  title: string;
  href: string | null;
  imageHref: string | null;
  excerpt: string;
  arrowHref: string | null;
}

export interface TemplateCard {
  image: string | null;
  alt: string;
  title: string;
  buttonText: string;
  pdf: string;
}

export type BannerStyle = "research" | "wide" | "solid";

interface CardPageBase {
  docTitle: string;
  description: string;
  heading: string;
}

export interface StudyGuidePage extends CardPageBase {
  kind: "study-guide";
  intro: string;
  subtitle: string;
  items: { title: string; href: string }[];
}

export interface ZoomGridPage extends CardPageBase {
  kind: "zoom-grid";
  banner: BannerStyle;
  columns: 3 | 4;
  centeredExcerpt?: boolean;
  cards: ZoomCard[];
}

export interface TemplatePage extends CardPageBase {
  kind: "template";
  cards: TemplateCard[];
}

export type InsightCardPage = StudyGuidePage | ZoomGridPage | TemplatePage;

export interface NewsIndustryPage extends CardPageBase {
  sidebarHeading: string;
  categories: { label: string; href: string }[];
  posts: { image: string | null; alt: string; title: string; href: string; date: string; dateHref: string; excerpt: string }[];
}

export const allNewsCards: AllNewsCard[] = [
  {
    "title": "Study Guide",
    "icon": "/images/insight/icons8-badge-100.png",
    "href": "/insights/study-guide/"
  },
  {
    "title": "Research Service",
    "icon": "/images/insight/Biotechnology-min.png",
    "href": "/insights/research-services/"
  },
  {
    "title": "Proof Reading",
    "icon": "https://pubrica.com/wp-content/uploads/2024/04/icons8-data-security-100.png",
    "href": "/insights/proof-reading/"
  },
  {
    "title": "Experimental Methodology",
    "icon": "/images/insight/Biosimilar-min.png",
    "href": "/insights/experimental-methodology/"
  },
  {
    "title": "Academy",
    "icon": "/images/insight/Biosimilar-min.png",
    "href": "/academy"
  },
  {
    "title": "Call for Papers",
    "icon": "/images/insight/conf_Ord.jpg",
    "href": "/call-for-papers/"
  },
  {
    "title": "Medical Journey",
    "icon": "/images/insight/Biosimilar-min.png",
    "href": "/insights/medical-journey/"
  },
  {
    "title": "Template",
    "icon": "/images/insight/conf_Ord.jpg",
    "href": "/insights/template/"
  },
  {
    "title": "Articles",
    "icon": "/images/insight/Article.webp",
    "href": "/academy/articles/"
  },
  {
    "title": "QA Forum",
    "icon": "/images/insight/Article.webp",
    "href": "/academy/qa-forum/"
  },
  {
    "title": "News & Industry",
    "icon": "/images/insight/news-and-industry-icon.png",
    "href": "/insights/news-and-industry/news/"
  },
  {
    "title": "Academy Template",
    "icon": "/images/insight/news-and-industry-icon.png",
    "href": "/academy/journal-templates/"
  }
];

export const insightCardPages: Record<string, InsightCardPage> = {
  "study-guide": {
    "kind": "study-guide",
    "docTitle": "Study Guides for All Subjects | Pubrica Expertise",
    "description": "Pubrica develops adaptable study guides across subjects, helping learners understand concepts through clear examples and expert support.",
    "heading": "Study Guide",
    "intro": "Pubrica’s Study Guide is a meticulously curated reservoir of knowledge, meticulously crafted to illuminate your academic journey with clarity and precision. Empowering you to embark on a voyage of learning and discovery with unwavering confidence and assurance.",
    "subtitle": "Your comprehensive companion for academic excellence, blending expertise with accessible insights, ensuring your journey through research and study is guided with precision and clarity",
    "items": [
      {
        "title": "Strategies for Clinical Data Integration in Medical Data Collection",
        "href": "/insights/study-guide/strategies-for-clinical-data-integration-in-medical-data-collection/"
      },
      {
        "title": "What type of patient data is Collected in an EHR?",
        "href": "/insights/study-guide/what-type-of-patient-data-is-collected-in-an-ehr/"
      },
      {
        "title": "A step-by-step guide to the process of publishing a research paper",
        "href": "/insights/study-guide/step-by-step-guide-to-the-process-of-publishing-a-research-paper/"
      },
      {
        "title": "What are the guidelines for ICMJE reviewers?",
        "href": "/insights/study-guide/what-are-the-guidelines-for-icmje-reviewers/"
      },
      {
        "title": "What is a statistical review in the publication process?",
        "href": "/insights/study-guide/what-is-a-statistical-review-in-the-publication-process/"
      },
      {
        "title": "What is Epidemiological study design in meta-analysis research?",
        "href": "/insights/study-guide/what-is-epidemiological-study-design-in-meta-analysis-research/"
      },
      {
        "title": "How important is scientific editing for research?",
        "href": "/insights/study-guide/how-important-is-scientific-editing-for-research/"
      },
      {
        "title": "What Is the Purpose and Importance of Literature Reviews in Research?",
        "href": "/insights/study-guide/what-is-the-purpose-and-importance-of-literature-reviews-in-research/"
      },
      {
        "title": "What are the most prevalent clinical examination methods in case reports?",
        "href": "/insights/study-guide/the-most-prevalent-clinical-examination-methods-in-case-report/"
      },
      {
        "title": "How should a case presentation be structured?",
        "href": "/insights/study-guide/how-should-a-case-presentation-be-structured/"
      },
      {
        "title": "What is Epidemiological study design in meta-analysis research?",
        "href": "/insights/study-guide/what-is-epidemiological-study-design-in-meta-analysis-research/"
      },
      {
        "title": "What are the research applications of predictive analysis?",
        "href": "/insights/study-guide/what-are-the-research-applications-of-predictive-analysis/"
      },
      {
        "title": "What is the significance of clinical research in biostatistics?",
        "href": "/insights/study-guide/the-significance-of-clinical-research-in-biostatistics/"
      },
      {
        "title": "What Are The Principles Of Experimental Design For Research",
        "href": "/insights/study-guide/the-principles-of-experimental-design-for-research/"
      },
      {
        "title": "A Step-by-Step Guide to develop an effective research proposal",
        "href": "/insights/study-guide/guide-to-develop-an-effective-research-proposal/"
      },
      {
        "title": "What are the methods and techniques of data collection in health care research?",
        "href": "/insights/study-guide/techniques-of-data-collection-in-health-care-research/"
      },
      {
        "title": "How to Choose the Best Title for Your Medical Research Paper",
        "href": "/insights/study-guide/best-title-for-your-medical-research-paper/"
      },
      {
        "title": "How to assess publication bias in clinical research",
        "href": "/insights/study-guide/publication-bias-in-clinical-research/"
      },
      {
        "title": "How to conduct clinical trials?",
        "href": "/insights/study-guide/how-to-conduct-clinical-trails/"
      },
      {
        "title": "What Qualifies as an Original Research Article in the looks of Reviewers?",
        "href": "/insights/study-guide/what-qualifies-as-an-original-research-article-in-the-looks-of-reviewers/"
      },
      {
        "title": "What are examples of medical survey data collection?",
        "href": "/insights/study-guide/what-are-examples-of-medical-survey-data-collection/"
      },
      {
        "title": "How to do a meta-analysis for a manuscript?",
        "href": "/insights/study-guide/how-to-do-a-meta-analysis-for-a-manuscript/"
      },
      {
        "title": "How to Write a Systematic Review Manuscript?",
        "href": "/insights/study-guide/how-to-write-a-systematic-review-manuscript/"
      },
      {
        "title": "How to Edit a Manuscript?",
        "href": "/insights/study-guide/how-to-edit-a-manuscript/"
      },
      {
        "title": "What are the Guidelines for Writing a Case Report?",
        "href": "/insights/study-guide/what-are-the-guidelines-for-writing-a-case-report/"
      },
      {
        "title": "How do you respond to the reviewers of your manuscript?",
        "href": "/insights/study-guide/how-do-you-respond-to-the-reviewers-of-your-manuscript/"
      },
      {
        "title": "What are the different sorts of scientific communication in research methodology? ?",
        "href": "/insights/study-guide/different-sorts-of-scientific-communication-in-research-methodology/"
      },
      {
        "title": "How to Critically Peer Review a Systematic Review Manuscript?",
        "href": "/insights/study-guide/how-to-critically-peer-review-a-systematic-review-manuscript/"
      },
      {
        "title": "What Are The Process Involved In Journal Submission?",
        "href": "/insights/study-guide/what-are-the-process-involved-in-journal-submission/"
      },
      {
        "title": "How should a Data-Analysis Write-Up For a Manuscript be Formatted?",
        "href": "/insights/study-guide/how-should-a-data-analysis-write-up-for-a-manuscript-be-formatted/"
      },
      {
        "title": "What steps are involved in proofreading a manuscript?",
        "href": "/insights/study-guide/what-steps-are-involved-in-proofreading-a-manuscript/"
      },
      {
        "title": "How to assess publication bias in clinical research",
        "href": "/insights/study-guide/publication-bias-in-clinical-research/"
      },
      {
        "title": "From Lab Notebook to Published Paper : A Beginner’s Journey into Scientific Writing",
        "href": "/insights/study-guide/scientific-writing-journey/"
      }
    ]
  },
  "research-services": {
    "kind": "zoom-grid",
    "banner": "research",
    "docTitle": "01 Research Service - Pubrica",
    "description": "There are several sorts of evidence synthesis efforts, such as systematic reviews and others.",
    "heading": "Research Services",
    "columns": 4,
    "cards": [
      {
        "image": "/images/insights/Research-services_Different-Types-Of-Reviews.webp",
        "alt": "Research-services_Different Types Of Reviews",
        "title": "Different Types Of Reviews",
        "href": "/insights/research-services/what-are-the-different-types-of-reviews/",
        "imageHref": "/insights/research-services/what-are-the-different-types-of-reviews/",
        "excerpt": "There are several sorts of evidence synthesis efforts, such as systematic reviews and others.",
        "arrowHref": "/insights/research-services/what-are-the-different-types-of-reviews/"
      },
      {
        "image": "/images/insights/Research-services_Cochrane-Handbook-For-Systematic-Reviews-Of-Interventions.webp",
        "alt": "Research-services_Cochrane Handbook For Systematic Reviews Of Interventions",
        "title": "Cochrane Handbook For Systematic Reviews Of Interventions",
        "href": "/insights/research-services/cochrane-handbook-for-systematic-reviews-of-interventions/",
        "imageHref": "/insights/research-services/cochrane-handbook-for-systematic-reviews-of-interventions/",
        "excerpt": "The authoritative guidance for creating and maintaining",
        "arrowHref": "/insights/research-services/cochrane-handbook-for-systematic-reviews-of-interventions/"
      },
      {
        "image": "/images/insights/Research-services_Finding-What-Works-In-Health-Care_-Standards-For-Systematic-Reviews.webp",
        "alt": "Research-services_Finding What Works In Health Care_ Standards For Systematic Reviews",
        "title": "Finding What Works In Health Care: Standards For Systematic Reviews",
        "href": "/insights/research-services/health-care-standards-for-systematic-reviews/",
        "imageHref": "/insights/research-services/health-care-standards-for-systematic-reviews/",
        "excerpt": "Systematic reviews (SRs) of comparative effectiveness",
        "arrowHref": "/insights/research-services/health-care-standards-for-systematic-reviews/"
      },
      {
        "image": "/images/insights/Research-services_Methods-Guide-For-Effectiveness-And-Comparative-Effectiveness-Reviews-2.webp",
        "alt": "Research-services_Methods Guide For Effectiveness And Comparative Effectiveness Reviews (2)",
        "title": "Methods Guide For Effectiveness And Comparative Effectiveness Reviews",
        "href": "/insights/research-services/methods-guide-for-effectiveness-and-comparative-effectiveness-reviews/",
        "imageHref": "/insights/research-services/methods-guide-for-effectiveness-and-comparative-effectiveness-reviews/",
        "excerpt": "Effectiveness and Comparative Effectiveness",
        "arrowHref": "/insights/research-services/methods-guide-for-effectiveness-and-comparative-effectiveness-reviews/"
      },
      {
        "image": "/images/insights/Foods-and-Nutraceuticals.webp",
        "alt": "Foods and Nutraceuticals",
        "title": "AAFP Clinical Practice Guideline Manual",
        "href": "/insights/research-services/aafp-clinical-practice-guideline-manual/",
        "imageHref": "/insights/research-services/aafp-clinical-practice-guideline-manual/",
        "excerpt": "The American Academy of Family Physicians (AAFP)",
        "arrowHref": "/insights/research-services/aafp-clinical-practice-guideline-manual/"
      },
      {
        "image": "/images/insights/Research-services_MOOSE-Guidelines-For-Meta-Analyses-Of-Observational-Studies-In-Epidemiology.webp",
        "alt": "Research-services_MOOSE Guidelines For Meta-Analyses Of Observational Studies In Epidemiology",
        "title": "MOOSE Guidelines For Meta-Analyses Of Observational Studies In Epidemiology",
        "href": "/insights/research-services/moose-guidelines-for-meta-analyses-of-observational-studies-in-epidemiology/",
        "imageHref": "/insights/research-services/moose-guidelines-for-meta-analyses-of-observational-studies-in-epidemiology/",
        "excerpt": "Effectiveness and Comparative Effectiveness",
        "arrowHref": "/insights/research-services/moose-guidelines-for-meta-analyses-of-observational-studies-in-epidemiology/"
      },
      {
        "image": "/images/insights/Trial-protocol.webp",
        "alt": "Trial protocol",
        "title": "JBI Manual For Evidence Synthesis: Scoping Reviews",
        "href": "/insights/research-services/jbi-manual-for-evidence-synthesis-scoping-reviews/",
        "imageHref": "/insights/research-services/jbi-manual-for-evidence-synthesis-scoping-reviews/",
        "excerpt": "As new empirical data emerges and our understanding",
        "arrowHref": "/insights/research-services/jbi-manual-for-evidence-synthesis-scoping-reviews/"
      },
      {
        "image": "/images/insights/Research-services_Equator-Network_-Systematic-Reviews-Meta-Analysis-Reviews-Overview-HTA.webp",
        "alt": "Research-services_Equator Network_ Systematic Reviews, Meta-Analysis, Reviews, Overview, HTA",
        "title": "Equator Network: Systematic Reviews, Meta-Analysis, Reviews, Overview, HTA",
        "href": "/insights/research-services/equator-network-systematic-reviews-meta-analysis-reviews-overview-hta/",
        "imageHref": "/insights/research-services/equator-network-systematic-reviews-meta-analysis-reviews-overview-hta/",
        "excerpt": "Systematic reviews (SRs) of comparative effectiveness",
        "arrowHref": "/insights/research-services/equator-network-systematic-reviews-meta-analysis-reviews-overview-hta/"
      },
      {
        "image": "/images/insights/Research-services_EQUATOR-Network_-Enhancing-The-Quality-And-Transparency-Of-Health-Research.webp",
        "alt": "Research-services_EQUATOR Network_ Enhancing The Quality And Transparency Of Health Research",
        "title": "EQUATOR Network: Enhancing The Quality And Transparency Of Health Research",
        "href": "/insights/research-services/equator-network-enhancing-the-quality-and-transparency-of-health-research/",
        "imageHref": "/insights/research-services/equator-network-enhancing-the-quality-and-transparency-of-health-research/",
        "excerpt": "The authoritative guidance for creating",
        "arrowHref": "/insights/research-services/equator-network-enhancing-the-quality-and-transparency-of-health-research/"
      },
      {
        "image": "/images/insights/Research-services_Open-Meta-Analyst_-Powerful-Open-Source-Software-For-Meta-Analysis.webp",
        "alt": "Research-services_Open Meta Analyst_ Powerful Open-Source Software For Meta-Analysis",
        "title": "Open Meta Analyst: Powerful Open-Source Software For Meta-Analysis",
        "href": "/insights/research-services/open-meta-analyst-powerful-open-source-software-for-meta-analysis/",
        "imageHref": "/insights/research-services/open-meta-analyst-powerful-open-source-software-for-meta-analysis/",
        "excerpt": "The American Academy of Family Physicians (AAFP)",
        "arrowHref": "/insights/research-services/open-meta-analyst-powerful-open-source-software-for-meta-analysis/"
      },
      {
        "image": "/images/insights/Research-services_Systematic-Review-Data-Repository-Plus-SRDR.webp",
        "alt": "Research-services_Systematic Review Data Repository Plus (SRDR+)",
        "title": "Systematic Review Data Repository Plus (SRDR+)",
        "href": "/insights/research-services/systematic-review-data-repository-plus/",
        "imageHref": "/insights/research-services/systematic-review-data-repository-plus/",
        "excerpt": "Conducting systematic reviews (\"reviews\") requires",
        "arrowHref": "/insights/research-services/systematic-review-data-repository-plus/"
      },
      {
        "image": "/images/insights/Research-services_Standardized-Library-Of-Depression-Outcome-Measures.webp",
        "alt": "Research-services_Standardized Library Of Depression Outcome Measures",
        "title": "Standardized Library Of Depression Outcome Measures",
        "href": "/insights/research-services/standardized-library-of-depression-outcome-measures/",
        "imageHref": "/insights/research-services/standardized-library-of-depression-outcome-measures/",
        "excerpt": "Depression is a mental illness that affects millions of individuals",
        "arrowHref": "/insights/research-services/standardized-library-of-depression-outcome-measures/"
      },
      {
        "image": "/images/insights/Research-services_Integrating-Health-System-Data-With-Systematic-Reviews.webp",
        "alt": "Research-services_Integrating Health System Data With Systematic Reviews",
        "title": "Integrating Health System Data With Systematic Reviews",
        "href": "/insights/research-services/integrating-health-system-data-with-systematic-reviews/",
        "imageHref": "/insights/research-services/integrating-health-system-data-with-systematic-reviews/",
        "excerpt": "Integrating health system data with systematic",
        "arrowHref": "/insights/research-services/integrating-health-system-data-with-systematic-reviews/"
      },
      {
        "image": "/images/insights/Research-services_MOOSE-Guidelines-For-Meta-Analyses-Of-Observational-Studies-In-Epidemiology-1.webp",
        "alt": "Research-services_MOOSE Guidelines For Meta-Analyses Of Observational Studies In Epidemiology",
        "title": "Machine Learning Screening Performance And Usability In Systematic Reviews",
        "href": "/insights/research-services/machine-learning-screening-performance-and-usability-in-systematic-reviews/",
        "imageHref": "/insights/research-services/machine-learning-screening-performance-and-usability-in-systematic-reviews/",
        "excerpt": "Machine learning has become an increasingly popular",
        "arrowHref": "/insights/research-services/machine-learning-screening-performance-and-usability-in-systematic-reviews/"
      },
      {
        "image": "/images/insights/Research-services_Quantitative-Synthesis—An-Update-1.webp",
        "alt": "Research-services_Quantitative Synthesis—An Update",
        "title": "Quantitative Synthesis—An Update",
        "href": "/insights/research-services/quantitative-synthesis/",
        "imageHref": "/insights/research-services/quantitative-synthesis/",
        "excerpt": "Quantitative synthesis, also known as meta-analysis,",
        "arrowHref": "/insights/research-services/quantitative-synthesis/"
      },
      {
        "image": "/images/insights/Research-services_A-Framework-For-Conceptualizing-Evidence-Needs-Of-Health-Systems.webp",
        "alt": "Research-services_A Framework For Conceptualizing Evidence Needs Of Health Systems",
        "title": "A Framework For Conceptualizing Evidence Needs Of Health Systems",
        "href": "#",
        "imageHref": "#",
        "excerpt": "According to the findings of the literature study",
        "arrowHref": null
      },
      {
        "image": "/images/insights/Research-services_Evaluating-The-Bias-Risk-In-Systematic-Reviews-Of-Health-Care-Interventions.webp",
        "alt": "Research-services_Evaluating The Bias Risk In Systematic Reviews Of Health Care Interventions",
        "title": "Evaluating The Bias Risk In Systematic Reviews Of Health Care Interventions",
        "href": "/insights/research-services/evaluating-the-bias-risk-in-systematic-reviews-of-health-care-interventions/",
        "imageHref": "/insights/research-services/evaluating-the-bias-risk-in-systematic-reviews-of-health-care-interventions/",
        "excerpt": "The evaluation of the risk of bias is an essentia",
        "arrowHref": "/insights/research-services/evaluating-the-bias-risk-in-systematic-reviews-of-health-care-interventions/"
      },
      {
        "image": "/images/insights/Research-services_-New-FAI-Guidelines_-STROBE-MOOSE-PRISMA-CONSORT-2.webp",
        "alt": "Research-services_ New FAI Guidelines_ STROBE, MOOSE, PRISMA, CONSORT (2)",
        "title": "Systematic Reviews For Health: Standards For Reporting",
        "href": "/insights/research-services/systematic-reviews-for-health-standards-for-reporting/",
        "imageHref": "/insights/research-services/systematic-reviews-for-health-standards-for-reporting/",
        "excerpt": "Systematic reviews are comprehensive, critical",
        "arrowHref": "/insights/research-services/systematic-reviews-for-health-standards-for-reporting/"
      },
      {
        "image": "/images/insights/Research-services_-New-FAI-Guidelines_-STROBE-MOOSE-PRISMA-CONSORT.webp",
        "alt": "Research-services_ New FAI Guidelines_ STROBE, MOOSE, PRISMA, CONSORT",
        "title": "New FAI Guidelines: STROBE, MOOSE, PRISMA, CONSORT Synthesis",
        "href": "/insights/research-services/new-fai-guidelines-strobe-moose-prisma-consort/",
        "imageHref": "/insights/research-services/new-fai-guidelines-strobe-moose-prisma-consort/",
        "excerpt": "The FAI Guidelines are not widely recognized",
        "arrowHref": "/insights/research-services/new-fai-guidelines-strobe-moose-prisma-consort/"
      },
      {
        "image": "/images/insights/Biotechnology-2.webp",
        "alt": "Biotechnology",
        "title": "Professional Medical Writing Support",
        "href": "/insights/research-services/professional-medical-writing-support/",
        "imageHref": "/insights/research-services/professional-medical-writing-support/",
        "excerpt": "An ethical requirement is the prompt and",
        "arrowHref": "/insights/research-services/professional-medical-writing-support/"
      },
      {
        "image": "/images/insights/Research-services_-What-Is-Publication-Bias-In-A-Systematic-Review.webp",
        "alt": "Research-services_ What Is Publication Bias In A Systematic Review",
        "title": "What Is Publication Bias In A Systematic Review?",
        "href": "/insights/research-services/what-is-publication-bias-in-a-systematic-review/",
        "imageHref": "/insights/research-services/what-is-publication-bias-in-a-systematic-review/",
        "excerpt": "Publication bias is one threat to delivering",
        "arrowHref": "/insights/research-services/what-is-publication-bias-in-a-systematic-review/"
      },
      {
        "image": "/images/insights/Research-services_Standardized-Library-Of-Depression-Outcome-Measures-1.webp",
        "alt": "Research-services_ What Is Publication Bias In A Systematic Review",
        "title": "What Is A Meta-Analysis In Cochrane Reviews?",
        "href": "/insights/research-services/what-is-a-meta-analysis-in-cochrane-reviews/",
        "imageHref": "/insights/research-services/what-is-a-meta-analysis-in-cochrane-reviews/",
        "excerpt": "Cochrane Reviews base their conclusions on the",
        "arrowHref": "/insights/research-services/what-is-a-meta-analysis-in-cochrane-reviews/"
      },
      {
        "image": "/images/insights/ai-ml-support-Insight-Generation-and-Interpretation.webp",
        "alt": "ai-ml-support Insight Generation and Interpretation",
        "title": "What Kind Of Medical Data Is Collected Through Survey Research?",
        "href": "/insights/research-services/kind-of-medical-data-is-collected-through-survey-research/",
        "imageHref": "/insights/research-services/kind-of-medical-data-is-collected-through-survey-research/",
        "excerpt": "The majority of research may be classified into",
        "arrowHref": "/insights/research-services/kind-of-medical-data-is-collected-through-survey-research/"
      }
    ]
  },
  "proof-reading": {
    "kind": "zoom-grid",
    "banner": "wide",
    "docTitle": "Proof Reading - Pubrica",
    "description": "Spellchecking is available in all word Spellchecking",
    "heading": "Proof Reading",
    "columns": 4,
    "cards": [
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/copyediting.png",
        "alt": "copyediting",
        "title": "Different Levels Of Copy Editing",
        "href": "/insights/proof-reading/what-are-the-different-levels-of-copyediting/",
        "imageHref": null,
        "excerpt": "Spellchecking is available in all word Spellchecking",
        "arrowHref": "/insights/proof-reading/what-are-the-different-levels-of-copyediting/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/how-we-edit.jpg",
        "alt": "how we edit",
        "title": "Editorial Triage In Copy Editing",
        "href": "/insights/proof-reading/editorial-triage-in-copy-editing/",
        "imageHref": null,
        "excerpt": "Sometimes a copyeditor is required to fulfil a deadline that",
        "arrowHref": "/insights/proof-reading/editorial-triage-in-copy-editing/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/querying.webp",
        "alt": "querying",
        "title": "Querying - How To Do It",
        "href": "/insights/proof-reading/querying-how-to-do-it/",
        "imageHref": null,
        "excerpt": "A copyeditor is frequently required to address a query,",
        "arrowHref": "/insights/proof-reading/querying-how-to-do-it/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/termnal-punctuations.png",
        "alt": "termnal punctuations",
        "title": "Terminal Punctuations",
        "href": "/insights/proof-reading/terminal-punctuations/",
        "imageHref": null,
        "excerpt": "Every phrase in English begins with a capital letter and",
        "arrowHref": "/insights/proof-reading/terminal-punctuations/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/Joining-Clauses.webp",
        "alt": "Joining Clauses",
        "title": "Joining Clauses",
        "href": "/insights/proof-reading/joining-clauses/",
        "imageHref": null,
        "excerpt": "Commas, semicolons, colons, and dashes can all be used",
        "arrowHref": "/insights/proof-reading/joining-clauses/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/Setting-off-Phrases-2.webp",
        "alt": "Setting off Phrases (2)",
        "title": "Setting Of Phrases",
        "href": "/insights/proof-reading/setting-off-phrases/",
        "imageHref": null,
        "excerpt": "A sentence-opening statement's grammatical",
        "arrowHref": "/insights/proof-reading/terminal-punctuations/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/Multiple-Punctuations.webp",
        "alt": "Multiple Punctuations",
        "title": "Multiple Punctuations",
        "href": "/insights/proof-reading/multiple-punctuations/",
        "imageHref": null,
        "excerpt": "Every phrase in English begins with a capital letter and",
        "arrowHref": "/insights/proof-reading/multiple-punctuations/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/Indicating-Omission.webp",
        "alt": "Indicating Omission",
        "title": "Indicating Omission",
        "href": "/insights/proof-reading/indicating-omission/",
        "imageHref": null,
        "excerpt": "A sentence-opening statement's grammatical",
        "arrowHref": "/insights/proof-reading/indicating-omission/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/Controversial-Techniques.webp",
        "alt": "Controversial Techniques",
        "title": "Controversial Techniques – Punctuations",
        "href": "/insights/proof-reading/controversial-techniques-punctuations/",
        "imageHref": null,
        "excerpt": "Commas, semicolons, colons, and dashes can",
        "arrowHref": "/insights/proof-reading/joining-clauses/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/Improving-your-Spelling-Skills.webp",
        "alt": "Improving your Spelling Skills",
        "title": "Improving Your Spelling Skills",
        "href": "/insights/proof-reading/improving-your-spelling-skills/",
        "imageHref": null,
        "excerpt": "Commas, semicolons, colons, and dashes can",
        "arrowHref": "/insights/proof-reading/terminal-punctuations/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/Research-services_Quantitative-Synthesis—An-Update.webp",
        "alt": "Research-services_Quantitative Synthesis—An Update",
        "title": "Variant Spelings",
        "href": "/insights/proof-reading/multiple-punctuations/",
        "imageHref": null,
        "excerpt": "Some terms have multiple spellings,",
        "arrowHref": "/insights/proof-reading/multiple-punctuations/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/British-Spellings.webp",
        "alt": "British Spellings",
        "title": "British Spellings",
        "href": "/insights/proof-reading/british-spellings/",
        "imageHref": null,
        "excerpt": "If you've read a lot of books and magazines published",
        "arrowHref": "/insights/proof-reading/indicating-omission/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/Homophones.webp",
        "alt": "Homophones",
        "title": "Homophones",
        "href": "/insights/proof-reading/homophones/",
        "imageHref": null,
        "excerpt": "A copyeditor must be mindful of homophones as well.",
        "arrowHref": "/insights/proof-reading/homophones/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/Foreign-Words-and-Phrases.webp",
        "alt": "Foreign Words and Phrases",
        "title": "Foreign Words And Phrases",
        "href": "/insights/proof-reading/foreign-words-and-phrases/",
        "imageHref": null,
        "excerpt": "Foreign words and phrases now naturalized into English",
        "arrowHref": "/insights/proof-reading/terminal-punctuations/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/Proper-Noun-and-Adjectives.webp",
        "alt": "Proper Noun and Adjectives",
        "title": "Variant Proper Noun And Adjectiveslings",
        "href": "/insights/proof-reading/proper-noun-and-adjectives/",
        "imageHref": null,
        "excerpt": "Copyeditors are instructed to check or question",
        "arrowHref": "/insights/proof-reading/proper-noun-and-adjectives/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/Plurals.webp",
        "alt": "Plurals",
        "title": "Plurals",
        "href": "/insights/proof-reading/plurals/",
        "imageHref": null,
        "excerpt": "The norms for plural construction are covered",
        "arrowHref": "/insights/proof-reading/plurals/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/Possessives.webp",
        "alt": "Possessives",
        "title": "Possessives",
        "href": "/insights/proof-reading/possessives/",
        "imageHref": null,
        "excerpt": "The possessive form of common nouns.",
        "arrowHref": "/insights/proof-reading/possessives/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/Possessives.webp",
        "alt": "Possessives",
        "title": "One word or Two?",
        "href": "/insights/proof-reading/one-word-or-two/",
        "imageHref": null,
        "excerpt": "Some compounds are treated consistently, while their",
        "arrowHref": "/insights/proof-reading/one-word-or-two/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/Spell-Checkers.webp",
        "alt": "Spell Checkers",
        "title": "Spell Checkers",
        "href": "/insights/proof-reading/spell-checkers/",
        "imageHref": null,
        "excerpt": "Spellchecking is available in all word processing systems.",
        "arrowHref": "/insights/proof-reading/spell-checkers/"
      }
    ]
  },
  "experimental-methodology": {
    "kind": "zoom-grid",
    "banner": "solid",
    "docTitle": "Experimental Methodology - Pubrica",
    "description": "The research impact study is a new field of scientific endeavor",
    "heading": "Experimental Methodology",
    "columns": 4,
    "cards": [
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/what-is-research-methodology-768x419.jpg",
        "alt": "what is research methodology",
        "title": "Study Methodology In Research",
        "href": "/insights/experimental-methodology/methodology-research/",
        "imageHref": "/insights/experimental-methodology/methodology-research/",
        "excerpt": "The research impact study is a new field of scientific endeavor",
        "arrowHref": "/insights/experimental-methodology/cross-sectional-research-design/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/case-study-methodology-768x432.jpg",
        "alt": "case study methodology",
        "title": "Case Study Research Methodology",
        "href": "/insights/experimental-methodology/case-study-research-methodology/",
        "imageHref": "/insights/experimental-methodology/case-study-research-methodology/",
        "excerpt": "The case study method enables in-depth,",
        "arrowHref": "/insights/experimental-methodology/case-study-research-methodology/"
      },
      {
        "image": "/images/insights/Research-services_Open-Meta-Analyst_-Powerful-Open-Source-Software-For-Meta-Analysis.webp",
        "alt": "Research-services_Open Meta Analyst_ Powerful Open-Source Software For Meta-Analysis",
        "title": "Comparative Study Methodology",
        "href": "/insights/experimental-methodology/comparative-study-methodology/",
        "imageHref": "/insights/experimental-methodology/comparative-study-methodology/",
        "excerpt": "The comparative method involves examining one thing",
        "arrowHref": "/insights/experimental-methodology/comparative-study-methodology/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/delphi-sudy-methodology-768x432.jpg",
        "alt": "delphi study methodology",
        "title": "Delphi Study Methodology",
        "href": "/insights/experimental-methodology/delphi-study-methodology/",
        "imageHref": "/insights/experimental-methodology/delphi-study-methodology/",
        "excerpt": "The Delphi approach is a systematic forecasting",
        "arrowHref": "/insights/experimental-methodology/delphi-study-methodology/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/desk-research.png",
        "alt": "desk research",
        "title": "Desk Study Methodology",
        "href": "/insights/experimental-methodology/desk-study-methodology/",
        "imageHref": "/insights/experimental-methodology/desk-study-methodology/",
        "excerpt": "The Delphi approach is a systematic forecasting",
        "arrowHref": "/insights/experimental-methodology/desk-study-methodology/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/Impact-study-methodology-1-320.webp",
        "alt": "Impact-study-methodology-1-320",
        "title": "Impact Study Methodology",
        "href": "/insights/experimental-methodology/impact-study-methodology/",
        "imageHref": "/insights/experimental-methodology/impact-study-methodology/",
        "excerpt": "The research impact study is a new field of",
        "arrowHref": "/insights/experimental-methodology/impact-study-methodology/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/cohotrt-study-methofology-768x512.png",
        "alt": "cohotrt study methofology",
        "title": "Cohort Study Methodology",
        "href": "/insights/experimental-methodology/cohort-study-methodology/",
        "imageHref": "/insights/experimental-methodology/cohort-study-methodology/",
        "excerpt": "A cohort study is a non-experimental",
        "arrowHref": "/insights/experimental-methodology/cohort-study-methodology/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/feasibiloty-study.jpg",
        "alt": "feasibiloty study",
        "title": "Feasibility Study Methodology",
        "href": "/insights/experimental-methodology/feasibility-study-methodology/",
        "imageHref": "/insights/experimental-methodology/feasibility-study-methodology/",
        "excerpt": "A feasibility study evaluates the viability of a project",
        "arrowHref": "/insights/experimental-methodology/feasibility-study-methodology/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/experimental-methodology.jpg",
        "alt": "experimental methodology",
        "title": "Experimental Design",
        "href": "/insights/experimental-methodology/experimental-design-in-research-methodology/",
        "imageHref": "/insights/experimental-methodology/experimental-design-in-research-methodology/",
        "excerpt": "In Research MethodologyAn Experimental Research",
        "arrowHref": "/insights/experimental-methodology/experimental-design-in-research-methodology/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/surface-methodology-768x720.jpg",
        "alt": "surface methodology",
        "title": "Surface Response Methodology",
        "href": "/insights/experimental-methodology/surface-response-methodology/",
        "imageHref": "/insights/experimental-methodology/surface-response-methodology/",
        "excerpt": "Surface response methodology (SRM) is a statistical approach",
        "arrowHref": "/insights/experimental-methodology/surface-response-methodology/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/psychology-researh-methods.webp",
        "alt": "psychology researh methods",
        "title": "Psychology Research Methods",
        "href": "/insights/experimental-methodology/psychology-research-methods/",
        "imageHref": "/insights/experimental-methodology/psychology-research-methods/",
        "excerpt": "Psychology is the scientific study of the human mind and",
        "arrowHref": "/insights/experimental-methodology/psychology-research-methods/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/qualitative-case-study.png",
        "alt": "qualitative case study",
        "title": "Qualitative Case Study Methodology",
        "href": "/insights/experimental-methodology/qualitative-case-study-methodology/",
        "imageHref": "/insights/experimental-methodology/qualitative-case-study-methodology/",
        "excerpt": "The qualitative case study methodology allows",
        "arrowHref": "/insights/experimental-methodology/qualitative-case-study-methodology/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/Quasi-Experimental-Design.jpg",
        "alt": "Quasi-Experimental Design",
        "title": "Quasi-Experimental Methodology",
        "href": "/insights/experimental-methodology/quasi-experimental-methodology/",
        "imageHref": "/insights/experimental-methodology/quasi-experimental-methodology/",
        "excerpt": "Quasi-experimental methodology is a type of",
        "arrowHref": "/insights/experimental-methodology/quasi-experimental-design-disadvantages/"
      },
      {
        "image": "/images/insights/Research-services_A-Framework-For-Conceptualizing-Evidence-Needs-Of-Health-Systems.webp",
        "alt": "Research-services_A Framework For Conceptualizing Evidence Needs Of Health Systems",
        "title": "Primary Research Methods",
        "href": "/insights/experimental-methodology/primary-research-methods/",
        "imageHref": "/insights/experimental-methodology/primary-research-methods/",
        "excerpt": "Primary research refers to collecting original data",
        "arrowHref": "/insights/experimental-methodology/primary-research-methods/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/Mixed-Method-Research-768x432.jpg",
        "alt": "Mixed Method Research",
        "title": "Mixed Method Research",
        "href": "/insights/experimental-methodology/mixed-methods-research/",
        "imageHref": "/insights/experimental-methodology/mixed-methods-research/",
        "excerpt": "Primary research refers to collecting original data directly",
        "arrowHref": "/insights/experimental-methodology/mixed-methods-research/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/Secondary-Research-Methods.png",
        "alt": "Secondary Research Methods",
        "title": "Secondary Research Methods",
        "href": "/insights/experimental-methodology/secondary-research-methods/",
        "imageHref": "/insights/experimental-methodology/secondary-research-methods/",
        "excerpt": "Secondary research methods refer to the process",
        "arrowHref": "/insights/experimental-methodology/secondary-research-methods/"
      },
      {
        "image": "/images/insights/Foods-and-Nutraceuticals.webp",
        "alt": "Foods and Nutraceuticals",
        "title": "Types Of Scientific Research",
        "href": "/insights/experimental-methodology/types-of-scientific-research/",
        "imageHref": "/insights/experimental-methodology/types-of-scientific-research/",
        "excerpt": "There are several definitions of research. Simply described",
        "arrowHref": "/insights/experimental-methodology/types-of-scientific-research/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/Evaluation-Of-Scientific-Research.jpg",
        "alt": "Evaluation Of Scientific Research",
        "title": "Evaluation Of Scientific Research",
        "href": "/insights/experimental-methodology/evaluation-of-scientific-research/",
        "imageHref": "/insights/experimental-methodology/evaluation-of-scientific-research/",
        "excerpt": "Scientific evaluation helps us: computing research",
        "arrowHref": "/insights/experimental-methodology/evaluation-of-scientific-research/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/Adaptive-Trial-Design-ATD.webp",
        "alt": "Adaptive Trial Design (ATD)",
        "title": "Scientific Approach In Research",
        "href": "/insights/experimental-methodology/scientific-approach-in-research/",
        "imageHref": "/insights/experimental-methodology/scientific-approach-in-research/",
        "excerpt": "A scientific approach in research refers",
        "arrowHref": "/insights/experimental-methodology/scientific-approach-in-research/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/04/Life-Science-companies-1.jpg",
        "alt": "Evaluation Of Scientific Research",
        "title": "Reflexivity In Qualitative Research",
        "href": "/insights/experimental-methodology/reflexivity-in-qualitative-research/",
        "imageHref": "/insights/experimental-methodology/reflexivity-in-qualitative-research/",
        "excerpt": "All qualitative research is contextual; it occurs",
        "arrowHref": "/insights/experimental-methodology/reflexivity-in-qualitative-research/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/ai-ml-support-Model-Training-and-Validation.webp",
        "alt": "ai-ml-support Model Training and Validation",
        "title": "Quasi-Experimental Design Disadvantages",
        "href": "/insights/experimental-methodology/quasi-experimental-design-disadvantages/",
        "imageHref": "/insights/experimental-methodology/quasi-experimental-design-disadvantages/",
        "excerpt": "Quasi-experimental research designs lack full randomization",
        "arrowHref": "/insights/experimental-methodology/quasi-experimental-design-disadvantages/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/ai-ml-supportDeliverables-and-Implementation.webp",
        "alt": "ai-ml-supportDeliverables and Implementation",
        "title": "Descriptive Research Design",
        "href": "/insights/experimental-methodology/descriptive-research-design/",
        "imageHref": "/insights/experimental-methodology/descriptive-research-design/",
        "excerpt": "The purpose of descriptive studies is to describe",
        "arrowHref": "/insights/experimental-methodology/descriptive-research-design/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/Research-services_Quantitative-Synthesis—An-Update.webp",
        "alt": "Research-services_Quantitative Synthesis—An Update",
        "title": "Longitudinal Research Design",
        "href": "/insights/experimental-methodology/longitudinal-research-design/",
        "imageHref": "/insights/experimental-methodology/longitudinal-research-design/",
        "excerpt": "Longitudinal research design is a type of study that involves",
        "arrowHref": "/insights/experimental-methodology/longitudinal-research-design/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/Joining-Clauses.webp",
        "alt": "Joining Clauses",
        "title": "Correlational Research Design",
        "href": "/insights/experimental-methodology/correlational-research-design/",
        "imageHref": "/insights/experimental-methodology/correlational-research-design/",
        "excerpt": "Correlational research design is a type of non-experimental",
        "arrowHref": "/insights/experimental-methodology/correlational-research-design/"
      },
      {
        "image": "/images/insights/Research-services_Finding-What-Works-In-Health-Care_-Standards-For-Systematic-Reviews.webp",
        "alt": "Research-services_Finding What Works In Health Care_ Standards For Systematic Reviews",
        "title": "Empathic Design Research",
        "href": "/insights/experimental-methodology/empathic-design-research/",
        "imageHref": "/insights/experimental-methodology/empathic-design-research/",
        "excerpt": "The relevance of empathy in human-centred",
        "arrowHref": "/insights/experimental-methodology/empathic-design-research/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/06/ai-ml-supportInitial-Data-Annotation-and-Preparation.webp",
        "alt": "ai-ml-supportInitial Data Annotation and Preparation",
        "title": "Cross-Sectional Research Design",
        "href": "/insights/experimental-methodology/cross-sectional-research-design/",
        "imageHref": "/insights/experimental-methodology/cross-sectional-research-design/",
        "excerpt": "A cross-sectional research design is an observation",
        "arrowHref": "/insights/experimental-methodology/cross-sectional-research-design/"
      }
    ]
  },
  "medical-journey": {
    "kind": "zoom-grid",
    "banner": "wide",
    "docTitle": "Medical Journey - Pubrica",
    "description": "A literature review is a critical overview of all published works on a certain subject. The Pubrica Researcher Team creates an excellent evaluation that",
    "heading": "Medical Journey",
    "columns": 3,
    "centeredExcerpt": true,
    "cards": [
      {
        "image": "https://pubrica.com/wp-content/uploads/2024/04/Life-Science-companies-1.jpg",
        "alt": "Evaluation Of Scientific Research",
        "title": "Journey",
        "href": "/insights/medical-journey/journey/",
        "imageHref": null,
        "excerpt": "A literature review is a critical overview of all published works on a certain subject. The Pubrica Researcher Team creates an excellent evaluation that serves as a useful implement for practitioners by offering a concise summary.",
        "arrowHref": "/insights/medical-journey/journey/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2026/03/pile-books-bookstore1-768x512.webp",
        "alt": "pile-books-bookstore",
        "title": "Scientific Literature Journey",
        "href": "/insights/medical-journey/scientific-literature-journey/",
        "imageHref": null,
        "excerpt": "A literature review is a critical overview of all published works on a certain subject. The Pubrica Researcher Team creates an excellent evaluation that serves as a useful implement for practitioners by offering a concise summary.",
        "arrowHref": "/insights/medical-journey/scientific-literature-journey/"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/2026/03/businessman-writing-book-2-768x512.webp",
        "alt": "businessman-writing-book",
        "title": "Manuscript Writing Journey",
        "href": "/insights/medical-journey/manuscript-writing-journey/",
        "imageHref": null,
        "excerpt": "A literature review is a critical overview of all published works on a certain subject. The Pubrica Researcher Team creates an excellent evaluation that serves as a useful implement for practitioners by offering a concise summary.",
        "arrowHref": "/insights/medical-journey/manuscript-writing-journey/"
      }
    ]
  },
  "template": {
    "kind": "template",
    "docTitle": "Template - Pubrica",
    "description": "",
    "heading": "Template",
    "cards": [
      {
        "image": "https://pubrica.com/wp-content/uploads/elementor/thumbs/British-Medical-Journal-BMJ-Case-Reports-1-rf2b3g6ud6mjojddev9f5m2borhn0x284lveaf1f98.webp",
        "alt": "British Medical Journal BMJ Case Reports",
        "title": "British Medical Journal BMJ Case Reports",
        "buttonText": "View Template",
        "pdf": "/templates/british-medical-journal-bmj-case-reports.pdf"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/elementor/thumbs/crafting-Precise-Research-From-Figure-Legends-to-Rationale-Writing-rf2b3g6ud6mjojddev9f5m2borhn0x284lveaf1f98.webp",
        "alt": "Crafting Precise Research",
        "title": "Crafting Precise Research – Figure Legends to Rationale Writingl",
        "buttonText": "View Template",
        "pdf": "/templates/crafting-precise-research-from-figure-legends-to-rationale-writing.pdf"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/elementor/thumbs/BioMEd-Central-rf2b3g6ud6mjojddev9f5m2borhn0x284lveaf1f98.webp",
        "alt": "BioMEd-Central",
        "title": "BioMEd Central",
        "buttonText": "View Template",
        "pdf": "/templates/biomed-central.pdf"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/elementor/thumbs/a-template-for-responding-to-peer-reviewer-comments-rf2b3g6ud6mjojddev9f5m2borhn0x284lveaf1f98.webp",
        "alt": "responding to peer reviewer comments",
        "title": "A template for Responding to peer reviewer Comments",
        "buttonText": "View Template",
        "pdf": "/templates/template-for-responding-to-peer-reviewer-comments.pdf"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/elementor/thumbs/Exploring-Research-Boundaries-Delimitations-and-Limitations-Unveiled-rf2b3j0cxoqend99yehav3cpgx3qo0df4ztuq8x8qk.webp",
        "alt": "Exploring-Research-Boundaries-Delimitations-and-Limitations-Unveiled",
        "title": "Exploring Research Boundaries Delimitations and Limitations Unveiled",
        "buttonText": "View Template",
        "pdf": "/templates/exploring-research-boundaries-delimitations-and-limitations-unveiled.pdf"
      },
      {
        "image": "https://pubrica.com/wp-content/uploads/elementor/thumbs/W-1--rf2b3j0cxoqend99yehav3cpgx3qo0df4ztuq8x8qk.jpg",
        "alt": "Development of meta analysis",
        "title": "Development of Meta-Analysis Research Question in AIDS and Cancer Re-search",
        "buttonText": "View Template",
        "pdf": "/templates/development-of-meta-analysis-research-question-in-aids-and-cancer-research.pdf"
      }
    ]
  }
};

export const newsIndustryPage: NewsIndustryPage = {
  "docTitle": "news - Pubrica",
  "description": "News – Pubrica provides the latest updates, insights, and announcements on research, publications, and industry developments.",
  "heading": "News & Industry",
  "sidebarHeading": "Categories",
  "categories": [
    {
      "label": "News & Industry",
      "href": "/insights/categories/news/"
    },
    {
      "label": "Medico Legal",
      "href": "/insights/categories/news/medico-legal/"
    },
    {
      "label": "E-Book",
      "href": "/category/insights/news/medico-legal/"
    },
    {
      "label": "Research Impact",
      "href": "/insights/news-and-industry/news/research-impact/"
    },
    {
      "label": "Response To Reviewer",
      "href": "/insights/news-and-industry/news/response-to-reviewers/"
    }
  ],
  "posts": [
    {
      "image": "https://pubrica.com/wp-content/uploads/2025/09/V1-Industry-Trends-and-Forecasts-in-Academic-Publishing-Digital-Transformation-Research-Insights-768x368.png",
      "alt": "V1-Industry Trends and Forecasts in Academic Publishing Digital Transformation & Research Insights",
      "title": "Industry Trends and Forecasts in Academic Publishing: Digital Transformation & Research Insights",
      "href": "/insights/industry-trends-forecasts-academic-publishing/",
      "date": "September 20, 2025",
      "dateHref": "/2025/09/20/",
      "excerpt": "May 2025 | Source: Sage Publishing SAGE Publications has implemented a response to reviewers..."
    },
    {
      "image": "https://pubrica.com/wp-content/uploads/2025/09/v1-Industry-Discussions-on-Peer-Review-Processes-768x368.png",
      "alt": "v1-Industry Discussions on Peer Review Processes",
      "title": "Industry Discussions on Peer Review Processes",
      "href": "/insights/peer-review-process-academic-publishing-discussions/",
      "date": "September 16, 2025",
      "dateHref": "/2025/09/16/",
      "excerpt": "Industry Discussions on Peer Review Processes Home Insights News Industry Discussions on Peer Review..."
    },
    {
      "image": "https://pubrica.com/wp-content/uploads/2025/09/v1-Debates-Over-Open-Access-Policies-Navigating-the-Future-of-Research-Publication-1-768x368.png",
      "alt": "v1-Debates Over Open Access Policies Navigating the Future of Research Publication",
      "title": "Debates Over Open Access Policies: Navigating the Future of Research Publication",
      "href": "/insights/news/debates-over-open-access-policies-navigating-research-publication/",
      "date": "September 11, 2025",
      "dateHref": "/2025/09/11/",
      "excerpt": "May 2025 | Source: Sage Publishing SAGE Publications has implemented a response to reviewers..."
    },
    {
      "image": "https://pubrica.com/wp-content/uploads/2025/09/v1-Educational-Resources-and-Workshops-Enhancing-Learning-and-Professional-Development-768x368.png",
      "alt": "v1-Educational Resources and Workshops Enhancing Learning and Professional Development",
      "title": "Educational Resources and Workshops: Enhancing Learning and Professional Development",
      "href": "/insights/news/educational-resources-workshops-learning-development/",
      "date": "September 11, 2025",
      "dateHref": "/2025/09/11/",
      "excerpt": "May 2025 | Source: Sage Publishing SAGE Publications has implemented a response to reviewers..."
    },
    {
      "image": "https://pubrica.com/wp-content/uploads/2025/05/Journal-of-the-Academy-of-Public-Health-New-Era-in-Publishing-768x368.jpg",
      "alt": "Journal of the Academy of Public Health New Era in Publishing",
      "title": "Introducing the Journal of the Academy of Public Health: A New Era in Scientific Publishing",
      "href": "/insights/journal-of-academy-of-public-health-new-era-publishing/",
      "date": "May 13, 2025",
      "dateHref": "/2025/05/13/",
      "excerpt": "May 2025 | Source: Sage Publishing SAGE Publications has implemented a response to reviewers..."
    },
    {
      "image": "https://pubrica.com/wp-content/uploads/2025/05/SAGE-Enhances-Author-Support-with-Response-to-Reviewers-Template-768x368.jpg",
      "alt": "SAGE Publications Enhances Author Support with Structured Response to Reviewers Template",
      "title": "SAGE Publications Enhances Author Support with Structured Response to Reviewers Template",
      "href": "/insights/sage-enhances-author-support-structured-reviewer-response/",
      "date": "May 8, 2025",
      "dateHref": "/2025/05/08/",
      "excerpt": "May 2025 | Source: Sage Publishing SAGE Publications has implemented a response to reviewers..."
    },
    {
      "image": "https://pubrica.com/wp-content/uploads/2025/04/Adoption-of-AI-Tools-to-Enhance-Research-Integrity-in-Publishing-768x368.jpg",
      "alt": "Adoption of AI Tools to Enhance Research Integrity",
      "title": "Adoption of AI Tools to Enhance Research Integrity",
      "href": "/insights/adoption-ai-tools-research-integrity/",
      "date": "April 30, 2025",
      "dateHref": "/2025/04/30/",
      "excerpt": "April 2025 | Source: Inside Higher Ed In an age of enormous growth in academic publishing..."
    },
    {
      "image": "https://pubrica.com/wp-content/uploads/2025/04/New-Jersey-Healthcare-Law-Updates-768x368.jpg",
      "alt": "Healthcare Law Updates in New Jersey",
      "title": "Healthcare Law Updates in New Jersey",
      "href": "/insights/new-jersey-healthcare-law-updates-april-2025/",
      "date": "April 24, 2025",
      "dateHref": "/2025/04/24/",
      "excerpt": "April 2025 | Source: Brach Eichler As of April 2025, the healthcare legal landscape in New Jersey..."
    },
    {
      "image": "https://pubrica.com/wp-content/uploads/2025/04/Webinars-Legal-Needs-of-Older-Adults-in-Healthcare-768x368.jpg",
      "alt": "Upcoming Webinars on Health-Related Legal Needs of Older Adults",
      "title": "Upcoming Webinars on Health-Related Legal Needs of Older Adults",
      "href": "/insights/legal-needs-older-adults/",
      "date": "April 24, 2025",
      "dateHref": "/2025/04/24/",
      "excerpt": "April 2025 | Source: Medical-Legal Partnership The National Center for Medical-Legal Partnership..."
    }
  ]
};
