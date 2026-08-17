import { Testimonial } from "@/components/common/WhatClientsSays";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Accessibility,
  BadgeCheck,
  BookOpen,
  Cpu,
  FileSearch,
  FlaskConical,
  HeartPulse,
  PenTool,
  ScanLine,
  SearchCheck,
} from "lucide-react";

export interface DisciplineLink {
  text: string;
  href: string;
}

export interface DisciplineData {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  expandableTitle: string;
  expandableContent: string;
  links?: DisciplineLink[];
}

export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

export interface ExpertiseSectionData {
  title: string;
  subtitle: string;
  items: ExpertiseItem[];
}

export const biomedicalDisciplines: DisciplineData[] = [
  {
    id: "biomechanics",
    title: "Biomechanics",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Biomechanics.webp",
    description:
      "Biomechanics applies mechanical engineering principles to biological systems. It helps analyse movement, tissue mechanics, orthopaedic implant performance, and sports injury prevention.",
    icon: Activity,
    expandableTitle: "Related Services",
    expandableContent:
      "Our biomechanics research writing and editing services support detailed modelling, gait analysis research, and computational simulations.",
  },
  {
    id: "biomaterials-tissue-engineering",
    title: "Biomaterials and Tissue Engineering",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Biomaterials-and-Tissue-Engineering.webp",
    description:
      "This discipline focuses on biocompatible materials used in implants, prosthetics, regenerative medicine, and drug delivery systems.",
    icon: FlaskConical,
    expandableTitle: "Related Services",
    expandableContent:
      "Pubrica's biomaterials manuscript support ensures strong scientific clarity, regulatory alignment, and impactful presentation of experimental results.",
  },
  {
    id: "biomedical-imaging-instrumentation",
    title: "Biomedical Imaging and Instrumentation",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Biomedical-Imaging-and-Instrumentation.webp",
    description:
      "Innovations in MRI, CT, PET, ultrasound, and optical imaging rely heavily on engineering precision.",
    icon: ScanLine,
    expandableTitle: "What We Support",
    expandableContent:
      "Our Biomedical Engineering editing services help researchers refine complex imaging studies, segmentation algorithms, and diagnostic research papers for high-impact journals.",
  },
  {
    id: "medical-devices-therapeutic-technologies",
    title: "Medical Devices and Therapeutic Technologies",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Medical-Devices-and-Therapeutic-Technologies.webp",
    description:
      "From ventilators and infusion pumps to surgical robots and neuroprosthetics, medical device innovation demands rigorous documentation and research accuracy.",
    icon: HeartPulse,
    expandableTitle: "Related Services",
    expandableContent:
      "Pubrica supports medical device research writing, regulatory-focused documentation, and publication support for biomedical engineering.",
  },
  {
    id: "bioinformatics-computational-biology",
    title: "Bioinformatics and Computational Biology",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/Bioinformatics-and-Computational-Biology.webp",
    description:
      "This field involves analysing biological datasets, developing predictive models, and supporting precision medicine.",
    icon: Cpu,
    expandableTitle: "What We Support",
    expandableContent:
      "Our experts in computational Biomedical Engineering support with algorithm documentation, modelling papers, and AI-based diagnostic research.",
  },
  {
    id: "rehabilitation-engineering",
    title: "Rehabilitation Engineering",
            iconSrc: "/images/subject-matter-experts/biomedical-engineering/RehabilitationEngineering.webp",
    description:
      "It develops technologies such as exoskeletons, prosthetics, communication tools, and therapeutic robots to enhance mobility and independence.",
    icon: Accessibility,
    expandableTitle: "What We Support",
    expandableContent:
      "Pubrica provides specialised writing, editing, and publication support for rehabilitation-focused studies.",
  },
];

export const biomedicalEngineeringExpertiseData: ExpertiseSectionData = {
  title: "Our Expertise in Biomedical Engineering Research and Publication",

  subtitle:
    "Pubrica is globally recognised for delivering accurate, high-quality, and customised support for biomedical engineering research and publication. We support scholars, PhD candidates, universities, R&D teams, and clinical researchers with end-to-end scientific assistance tailored to biomedical engineering domains.",

  items: [
    {
      id: "research-services",
      title: "Research Services",
      description:
        "Expert guidance on project planning, execution, and data analysis.",
      image: "/images/subject-matter-experts/algorithm/Research-Services.png",
      icon: FlaskConical,
    },
    {
      id: "editing-proofreading",
      title: "Editing & Proofreading",
      description:
        "Enhance clarity, grammar, and style for polished, professional manuscripts.",
      image: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
      icon: PenTool,
    },
    {
      id: "peer-reviewing-services",
      title: "Peer-Reviewing Services",
      description:
        "Comprehensive review to refine and validate your research pre-submission.",
      image: "/images/subject-matter-experts/agriculture/Peer-Review.webp",
      icon: BadgeCheck,
    },
    {
      id: "publication-support",
      title: "Publication Support",
      description:
        "Complete support for publishing in high-impact journals, translating concepts into incisive reports.",
      image: "/images/subject-matter-experts/biomolecular-engineering/Publication-Support-1.webp",
      icon: BookOpen,
    },
    {
      id: "scientific-writing",
      title: "Scientific Writing",
      description:
        "Crafting clear, precise, and publication-ready research manuscripts.",
      image: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
      icon: FileSearch,
    },
    {
      id: "journal-selection",
      title: "Journal Selection",
      description:
        "Strategic journal selection to maximize publication success.",
      image: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
      icon: SearchCheck,
    },
  ],
};


export const BIOMEDICAL_ENGINEERING_TESTIMONIALS: Testimonial[] = [
  {
    id: "biomedical-testimonial-1",
    quote:
      "Pubrica’s biomedical engineering editors transformed my manuscript on tissue scaffolding into a clear, publication-ready paper. Their technical accuracy and guidance during revisions made the entire process smooth and stress-free.",
    authorName: "Dr. Neeraj S",
    authorRole: "Tissue Engineering Researcher",
    authorLocation: "India",
    avatarLabel: "Dr. Neeraj S testimonial image",
      avatarSrc: "/images/subject-matter-experts/biomedical-engineering/Dr.-Neeraj-S.webp",
    flagLabel: "India flag",
      flagSrc: "/images/editing-and-translation/translation-with-editing/india.png",
  },
  {
    id: "biomedical-testimonial-2",
    quote:
      "I needed expert help refining the methodology for my biomedical device study. Pubrica’s team improved the clarity, structure, and scientific tone of my manuscript, helping me meet the expectations of a top-tier journal.",
    authorName: "Prof. Elena R",
    authorRole: "Biomedical Device Innovator",
    authorLocation: "United Kingdom",
    avatarLabel: "Prof. Elena R testimonial image",
      avatarSrc: "/images/subject-matter-experts/biomedical-engineering/Prof.-Elena-R.webp",
    flagLabel: "United Kingdom flag",
      flagSrc: "/images/research-services/systematic-review/united-kingdom-.png",
  },
  {
    id: "biomedical-testimonial-3",
    quote:
      "The editors demonstrated an impressive understanding of computational modelling and biomechanics. Their edits strengthened the manuscript’s technical depth and readability. I highly recommend Pubrica for biomedical engineering support.",
    authorName: "Dr. Kai M",
    authorRole: "Biomechanics Scientist",
    authorLocation: "USA",
    avatarLabel: "Dr. Kai M testimonial image",
      avatarSrc: "/images/subject-matter-experts/biomedical-engineering/Dr.-Kai-M.webp",
    flagLabel: "USA flag",
      flagSrc: "/images/subject-matter-experts/algorithm/usa-.png",
  },
];