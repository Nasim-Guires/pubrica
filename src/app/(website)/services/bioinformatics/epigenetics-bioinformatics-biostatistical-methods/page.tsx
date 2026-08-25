import type { Metadata } from 'next';
import GuideLayout, { type TocItem } from '@/components/guides/GuideLayout';
import ServiceArticleRenderer from '@/components/services/ServiceArticleRenderer';
import { ARTICLE_BLOCKS } from '@/lib/services-content/bioinformatics__epigenetics-bioinformatics-biostatistical-methods';

export const metadata: Metadata = {
  title: "Epigenetics Bioinformatics for Research Teams | Pubrica",
  description: "Explore epigenetics, bioinformatics, and biostatistical methods powering epigenomic research, NGS analysis, and multi-omics insights.",
};

const TOC: TocItem[] = [
  {
    "id": "1-what-is-epigenetics-bioinformatics",
    "label": "1. What Is Epigenetics Bioinformatics?"
  },
  {
    "id": "2-why-biostatistics-is-central-to-epigenomic-research",
    "label": "2. Why Biostatistics Is Central to Epigenomic Research"
  },
  {
    "id": "3-epigenomic-data-types-and-analytical-focus",
    "label": "3. Epigenomic Data Types and Analytical Focus"
  },
  {
    "id": "4-core-biostatistical-methods-in-epigenetics-bioinformatics",
    "label": "4. Core Biostatistical Methods in Epigenetics Bioinformatics"
  },
  {
    "id": "5-statistical-models-used-in-epigenomic-studies",
    "label": "5. Statistical Models Used in Epigenomic Studies"
  },
  {
    "id": "6-integrative-and-multi-omics",
    "label": "6. Integrative and multi-omics"
  },
  {
    "id": "conclusion",
    "label": "Conclusion"
  },
  {
    "id": "references",
    "label": "References"
  }
];

export default function BioinformaticsEpigeneticsBioinformaticsBiostatisticalMethodsPage() {
  return (
    <GuideLayout title={"Epigenetics Bioinformatics: Biostatistical Methods for Epigenomic Researchers"} toc={TOC}>
      <ServiceArticleRenderer blocks={ARTICLE_BLOCKS} />
    </GuideLayout>
  );
}
