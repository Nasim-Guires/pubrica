import type { ArticleBlock } from '@/components/services/ServiceArticleRenderer';

export const ARTICLE_BLOCKS: ArticleBlock[] = [
  {
    "type": "h2",
    "text": "Table of Content"
  },
  {
    "type": "p",
    "text": "Journal Citation Reports (JCR) is a tool used to assess and compare the impact of academic journals via citation analytics.[[1]](https://clarivate.com/academia-government/scientific-and-academic-research/research-funding-analytics/journal-citation-reports/) An initiative developed by Clarivate Analytics, JCR provides bibliometric indicators for assessing journal quality and visibility. Below you will find a detailed explanation of JCR, its components, and its purpose."
  },
  {
    "type": "img",
    "src": "https://pubrica.com/wp-content/uploads/2025/05/Founders-and-Editorial-Leadership.png",
    "alt": ""
  },
  {
    "type": "h2",
    "text": "1. What is JCR?"
  },
  {
    "type": "table",
    "rows": [
      [
        "Impact Factor (IF): Measures the frequency with which articles in a journal are cited during a specific time frame (usually two years). [[3]](#)",
        "5-Year Impact Factor: Similar to the Impact Factor, but considers citations over five years for a more stable metric. [[4]](#)"
      ]
    ]
  },
  {
    "type": "img",
    "src": "https://pubrica.com/wp-content/uploads/2025/05/Core-Principles-The-Four-Pillars.png",
    "alt": "Core Principles The Four Pillars"
  },
  {
    "type": "h2",
    "text": "2. Key Metrics Provided by JCR"
  },
  {
    "type": "h3",
    "text": "2.1. Impact Factor (IF)"
  },
  {
    "type": "p",
    "text": "Measures the average number of citations received per article published in a journal over two years."
  },
  {
    "type": "p",
    "text": "Formula:"
  },
  {
    "type": "p",
    "text": "IF = Citations in year X to articles published in the previous 2 years​/ Number of articles published in the previous 2 years"
  },
  {
    "type": "p",
    "text": "Example: A journal with an IF of 3 means that, on average, each article in that journal has been cited three times."
  },
  {
    "type": "h3",
    "text": "2.2. Eigenfactor Score"
  },
  {
    "type": "p",
    "text": "This metric measures the overall influence of a journal, accounting for the origin of citations (e.g., citations from prestigious journals are weighted more heavily)."
  },
  {
    "type": "p",
    "text": "Application: Used to rank journals based on their influence within the scholarly ecosystem."
  },
  {
    "type": "h3",
    "text": "2.3. Article Influence Score"
  },
  {
    "type": "p",
    "text": "This is a measure of a journal’s average article citation influence over five years."
  },
  {
    "type": "p",
    "text": "Formula:"
  },
  {
    "type": "p",
    "text": "Article Influence Score = Eigenfactor Score of a Journal/Number of Articles Published"
  },
  {
    "type": "p",
    "text": "Example: A high Article Influence Score indicates a journal’s articles have a significant impact within its field."
  },
  {
    "type": "h3",
    "text": "2.4. Cited Half-Life:"
  },
  {
    "type": "p",
    "text": "Represents the median age of articles that are cited in a particular journal. A longer half-life suggests that the journal’s content continues to have relevance over time."
  },
  {
    "type": "h3",
    "text": "3. Applications of JCR"
  },
  {
    "type": "ul",
    "items": [
      "Journal Selection for Publication: Researchers can select journals for submitting their articles based on their Impact Factor or other relevant metrics, ensuring higher visibility and citation potential.",
      "University and Institutional Rankings: Universities often use JCR metrics to assess and compare the research output of faculty members and departments.",
      "Evaluating Research Trends: JCR can also be useful for identifying trends in specific research areas by examining how certain journals or articles are cited over time.",
      "Publisher Strategy: Academic publishers use JCR to adjust their strategies, ensuring that their journals remain competitive and influential within their respective fields."
    ]
  },
  {
    "type": "h2",
    "text": "4. Examples of High-Impact Journals (Based on JCR)"
  },
  {
    "type": "table",
    "rows": [
      [
        "Journal Name",
        "Impact Factor (IF)",
        "Field",
        "Publisher"
      ],
      [
        "[Nature](https://www.nature.com/)",
        "49.96",
        "Multidisciplinary",
        "Springer Nature"
      ],
      [
        "[The Lancet](https://www.thelancet.com/)",
        "79.32",
        "Medicine",
        "Elsevier"
      ],
      [
        "[Science](https://www.science.org/journal/science)",
        "47.72",
        "Science",
        "AAAS"
      ],
      [
        "Cell",
        "41.58",
        "Life Sciences",
        "Elsevier"
      ]
    ]
  },
  {
    "type": "h2",
    "text": "5. How to Access JCR?"
  },
  {
    "type": "p",
    "text": "JCR is available through [Clarivate’s Web of Science](https://clarivate.com/academia-government/scientific-and-academic-research/research-discovery-and-referencing/web-of-science/) platform. Access is typically provided through institutional subscriptions (universities, libraries, etc.). Individual researchers may also gain access through paid subscriptions or academic affiliations."
  },
  {
    "type": "h2",
    "text": "Conclusion"
  },
  {
    "type": "p",
    "text": "JCR is an essential resource for anyone involved in academic research. Whether for journal selection, impact evaluation, or broader institutional strategies, the insights offered by JCR are invaluable for navigating the evolving landscape of scholarly publishing. Its combination of citation metrics provides a solid foundation for informed decision-making and contributes significantly to advancing academic knowledge and collaboration."
  },
  {
    "type": "p",
    "text": "Maximize your research impact by using Journal Citation Reports to choose the right journals and track citation performance."
  },
  {
    "type": "h2",
    "text": "References"
  },
  {
    "type": "ol",
    "items": [
      "Journal Citation Reports. (2025, June 4). Academia and Government. [https://clarivate.com/academia-government/scientific-and-academic-research/research-funding-analytics/journal-citation-reports/](https://clarivate.com/academia-government/scientific-and-academic-research/research-funding-analytics/journal-citation-reports/)",
      "Measuring your impact: Impact Factor, Citation Analysis, and other metrics: Journal Impact Factor (IF). (2010, November 3). Uic.edu. [https://researchguides.uic.edu/if/impact](https://researchguides.uic.edu/if/impact)",
      "Elsevier Language Services. (2020, March 13). What is Journal Impact Factor? Elsevier Author Services – Articles. [https://scientific-publishing.webshop.elsevier.com/research-process/what-journal-impact-factor/](https://scientific-publishing.webshop.elsevier.com/research-process/what-journal-impact-factor/)",
      "Journal metrics overview. (n.d.). Wiley.com. Retrieved July 14, 2025, from [https://authorservices.wiley.com/author-resources/Journal-Authors/find-a-journal/journal-metrics.html](https://authorservices.wiley.com/author-resources/Journal-Authors/find-a-journal/journal-metrics.html)"
    ]
  }
];
