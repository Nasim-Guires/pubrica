"use client";

import React from "react";
import Image from "next/image";
import {
  FileText,
  Edit3,
  Wrench,
  CheckCircle2,
  Search,
  BookOpen,
  PieChart,
  PenTool,
  Layers,
} from "lucide-react";
import CommonExpertiseCards, { ExpertiseCardItem } from "@/components/common/CommonExpertiseCards";

export default function BiomolecularExpertiseServicesComponent() {
  const biomolecularCards: ExpertiseCardItem[] = [
    {
      title: "Journal Formatting",
      desc: "Tailored manuscript formatting to meet specific journal guidelines.",
      href: "/services/publication-support/journal-manuscript-formatting-services/",
      imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
      iconSrc: "/images/subject-matter-experts/biomolecular-engineering/Environmental-Technologies.webp",
      icon: FileText,
    },
    {
      title: "Editing & Proofreading",
      desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
      href: "/services/editing-and-translation/",
      imageUrl: "/images/subject-matter-experts/biomolecular-engineering/Editing-Proofreading.png",
      iconSrc: "/images/subject-matter-experts/biomolecular-engineering/Genetic-Protein-Engineering.webp",
      icon: Edit3,
    },
    {
      title: "Artwork Editing",
      desc: "Professional visuals for your figures, tables, and graphical abstracts",
      href: "/services/publication-support/art-work-preparation/",
      imageUrl: "/images/subject-matter-experts/biomolecular-engineering/Graphical-Abstract.png",
      iconSrc: "/images/subject-matter-experts/biomolecular-engineering/Bioprocess-Engineering.webp",
      icon: Wrench,
    },
    {
      title: "Publication Support",
      desc: "Complete support for publishing in high-impact journals, translating concepts into incisive reports.",
      href: "/services/publication-support/",
      imageUrl: "/images/subject-matter-experts/biomolecular-engineering/Publication-Support-1.webp",
      iconSrc: "/images/subject-matter-experts/biomolecular-engineering/Bioprocess-Engineering.webp",
      icon: CheckCircle2,
    },
    {
      title: "Research Services",
      desc: "Expert guidance on project planning, execution, and data analysis.",
      href: "/services/research-services/",
      imageUrl: "/images/subject-matter-experts/biomolecular-engineering/Research-Services.webp",
      iconSrc: "/images/subject-matter-experts/biomolecular-engineering/Molecular-Diagnostics-and-Therapeutics.webp",
      icon: Search,
    },
    {
      title: "Systematic Reviews",
      desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
      href: "/services/research-services/systematic-review/",
      imageUrl: "/images/subject-matter-experts/biomolecular-engineering/Journal-Selection.png",
      iconSrc: "/images/subject-matter-experts/biomolecular-engineering/Molecular-Diagnostics-and-Therapeutics.webp",
      icon: BookOpen,
    },
    {
      title: "Graphical Abstract",
      desc: "Engaging summaries of your research in a single, informative graphic.",
      href: "/services/research-impact/graphical-abstract/",
      imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
      icon: PieChart,
    },
    {
      title: "Scientific Writing",
      desc: "Crafting clear, precise, and publication-ready research manuscripts.",
      href: "/services/research-services/scientific-writing/",
      imageUrl: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
      icon: PenTool,
    },
    {
      title: "Literature Review and Gap Analysis",
      desc: "Identifying research gaps and providing comprehensive literature reviews.",
      href: "/services/research-services/literature-review-and-gap/",
      imageUrl: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
      icon: Layers,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <CommonExpertiseCards
        title="Our Expertise in Biomolecular Engineering Research and Publication"
        description="Pubrica provides specialized support to academic researchers, graduate students, biotech innovators, and industry professionals working in biomolecular engineering. Our team comprises PhD-qualified experts with strong backgrounds in molecular biology, biotechnology, computational modeling, and bioprocess engineering. Our Key Services Include:"
        cards={biomolecularCards}
      />
    </div>
  );
}