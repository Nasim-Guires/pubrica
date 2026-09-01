"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Users,
  ShieldCheck,
  GraduationCap,
  ChevronRight,
  FileText,
  CheckCircle,
  Layers,
  FileCheck,
  Briefcase,
  HelpCircle,
  Plus,
  Minus,
  FileEdit,
  UserCheck,
  Scale
} from 'lucide-react';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/seo/Breadcrumb';
import Image from 'next/image';
import HeroBanner from '../common/HeroBanner';
import PubricaServicesAccordion from './PubricaServicesAccordion';

// Comprehensive Accordion Interface Data mapping all 15 services with complete details
interface AccordionItem {
  id: string;
  title: string;
  description?: string;
  subHeading?: string;
  sections?: {
    title: string;
    items?: string[];
    description?: string;
  }[];
  footerText?: string;
}

const CONSULTING_SERVICES: AccordionItem[] = [
  {
    id: "research-support",
    title: "Research Support for Researchers and Authors",
    description: "Pubrica offers comprehensive research support services tailored for researchers and companies. Our expertise includes data analysis and interpretation, setting up BI dashboards with clear KPI and KRA metrics, and conducting literature reviews for process and product development, as well as for scholarly publication. We specialize in developing research designs and protocols with a focus on healthcare, medical, and life science organizations.",
    subHeading: "Our Research Support Services:",
    sections: [
      {
        title: "Data Analysis and Interpretation:",
        items: [
          "Comprehensive analysis of research data",
          "Clear and actionable insights"
        ]
      },
      {
        title: "Statistical Consulting:",
        items: [
          "Expert statistical advice and support",
          "Custom statistical models and tests"
        ]
      },
      {
        title: "Literature Review:",
        items: [
          "In-depth reviews for process and product development",
          "Scholarly writing for publication"
        ]
      },
      {
        title: "Research Design and Protocol Development:",
        items: [
          "Exclusive research design tailored to your needs",
          "Protocol development focusing on healthcare, medical, and life sciences"
        ]
      }
    ],
    footerText: "Choose Pubrica for expert research support that adheres to the highest standards, ensuring the success of your research projects."
  },
  {
    id: "medical-writing",
    title: "Medical and Scientific Writing for Researchers, Authors, and for Regulatory Submissions",
    description: "At Pubrica, we offer a comprehensive range of medical and scientific writing services designed to meet the diverse needs of researchers and professionals. Our services ensure your work is presented with clarity, precision, and adherence to industry standards.",
    subHeading: "Our Medical and Scientific Writing Services:",
    sections: [
      {
        title: "Manuscript Writing and Editing:",
        description: "Crafting and refining scientific manuscripts for publication."
      },
      {
        title: "Case Reports:",
        description: "Detailed documentation and presentation of individual clinical cases or case series."
      },
      {
        title: "Systematic Reviews and Meta-Analyses:",
        description: "Conducting thorough and structured reviews of existing literature."
      },
      {
        title: "Grant Writing:",
        description: "Developing compelling proposals to secure research funding."
      },
      {
        title: "Original Research and Empirical Paper Writing:",
        description: "Writing and structuring original research papers based on empirical data."
      },
      {
        title: "Review Article Writing:",
        description: "Producing comprehensive review articles across various disciplines including Systematic Reviews (Comprehensive and structured reviews that summarize the results of multiple studies on a specific topic using a standardized methodology)."
      },
      {
        title: "Meta-Analyses:",
        description: "Statistical analysis that combines the results of several studies to identify patterns, discrepancies, and overall effects."
      },
      {
        title: "Narrative Reviews:",
        description: "Qualitative summaries of the literature on a particular topic, providing a comprehensive overview without a systematic approach."
      },
      {
        title: "Scoping Reviews:",
        description: "Exploratory reviews that map the key concepts, types of evidence, and gaps in research related to a defined area."
      },
      {
        title: "Critical Reviews:",
        description: "In-depth analysis and critique of existing literature, providing an evaluation of the current state of knowledge and identifying future research directions."
      },
      {
        title: "Literature Reviews:",
        description: "General reviews that summarize and synthesize the existing literature on a broad topic, often as part of a larger research paper or thesis."
      },
      {
        title: "Rapid Reviews:",
        description: "Accelerated systematic reviews that provide timely and relevant evidence by streamlining the review process."
      },
      {
        title: "Umbrella Reviews:",
        description: "Reviews that compile evidence from multiple systematic reviews and meta-analyses on a specific topic."
      },
      {
        title: "State-of-the-Art Reviews:",
        description: "Current and comprehensive reviews that provide an up-to-date overview of a specific field or topic."
      },
      {
        title: "Integrative Reviews:",
        description: "Reviews that combine both theoretical and empirical literature to provide a more comprehensive understanding of a topic."
      },
      {
        title: "Why Choose Pubrica?",
        description: "At Pubrica, we provide more than just writing services. Our expert team supports you through:",
        items: [
          "Gap Identification: Identifying research gaps to ensure your work addresses critical needs.",
          "Innovative Topic Development: Assisting in the creation of innovative and impactful research topics.",
          "Content Structuring: Organizing content to enhance readability and logical flow.",
          "Editing and Writing Support: Offering meticulous editing and writing assistance to improve the quality of your work.",
          "Novelty Identification: Highlighting the novel aspects of your research to make it stand out."
        ]
      }
    ],
    footerText: "Choose Pubrica for expert medical and scientific writing services that guarantee the highest quality and help you achieve your research and publication goals."
  },
  {
    id: "regulatory-writing",
    title: "Regulatory Writing and Consulting",
    description: "At Pubrica, we provide comprehensive regulatory writing and consulting services designed to ensure your research and clinical projects meet all necessary regulatory standards and guidelines.",
    subHeading: "Our Regulatory Writing and Consulting Services:",
    sections: [
      {
        title: "Regulatory Submissions:",
        description: "Preparation and submission of regulatory documents to ensure compliance with local and international standards. We handle the entire submission process, including compiling, formatting, and submitting documents to regulatory bodies."
      },
      {
        title: "Compliance Documentation:",
        description: "Development of detailed compliance documentation to meet regulatory requirements. This includes creating standard operating procedures (SOPs), quality assurance protocols, and other necessary compliance materials."
      },
      {
        title: "Good Clinical Practice (GCP) Consulting:",
        description: "Expert consulting to ensure your clinical trials adhere to Good Clinical Practice guidelines. Our services include training, auditing, and advising on best practices to maintain the highest ethical and scientific standards."
      },
      {
        title: "Clinical Trial Protocols:",
        description: "Design and development of comprehensive clinical trial protocols. We ensure that your protocols are well-structured, scientifically sound, and comply with regulatory requirements, facilitating smooth and successful trial execution."
      },
      {
        title: "Why Choose Pubrica for Regulatory Writing and Consulting?",
        items: [
          "Expertise and Experience: Our team consists of seasoned professionals with extensive experience in regulatory writing and consulting, ensuring that your documents meet the highest standards.",
          "Thorough Understanding of Regulations: We stay updated with the latest regulatory guidelines and requirements, providing you with accurate and current advice.",
          "Customized Solutions: Tailored services to meet the specific needs of your project, ensuring compliance and facilitating successful regulatory processes.",
          "Comprehensive Support: From initial document preparation to final submission, we offer end-to-end support, ensuring a smooth and efficient regulatory process."
        ]
      }
    ],
    footerText: "Choose Pubrica for expert regulatory writing and consulting services that ensure compliance, accuracy, and success in your regulatory submissions and clinical trials."
  },
  {
    id: "scientific-publication-support",
    title: "Scientific Publication Support Services for Researchers and Authors",
    description: "At Pubrica, we understand the significant effort and time required to publish research. The selection and successful publishing of a research manuscript by the target journal are influenced by numerous factors. Often, researchers lack the resources and knowledge to choose the optimal platform for academic publication.",
    subHeading: "Our Comprehensive Publication Support Services Include:",
    sections: [
      { title: "Manuscript Preparation Support:", description: "Assistance with writing, editing, and formatting your manuscript to meet the standards of high-impact journals." },
      { title: "Journal Selection:", description: "Expert guidance in identifying and selecting the most appropriate journals for your research to maximize visibility and impact." },
      { title: "Abstract Writing:", description: "Crafting concise and compelling abstracts that accurately reflect your research and attract the attention of journal editors." },
      { title: "Reference Styling:", description: "Ensuring all references are correctly formatted according to the target journal's style guidelines." },
      { title: "Graphical Abstract and Highlights Preparation:", description: "Creating visually appealing graphical abstracts and key highlights to enhance the presentation of your research." },
      { title: "Graphical Figures and Tables:", description: "Designing clear and informative figures and tables that effectively convey your data and findings." },
      { title: "Conflict of Interest Preparation:", description: "Assisting in the preparation and declaration of any potential conflicts of interest to maintain transparency and integrity." },
      { title: "Manuscript Submission:", description: "Uploading your manuscript to the selected journal, ensuring all submission requirements are met." },
      {
        title: "Why Choose Pubrica for Publication Support?",
        items: [
          "Expert Guidance: Our team of experienced professionals provides expert advice and support throughout the publication process.",
          "Adherence to Guidelines: We strictly adhere to the authorship guidelines of ICJME, COPE, and ISMPP, ensuring ethical and compliant publication practices.",
          "End-to-End Support: From manuscript preparation to journal submission, we offer comprehensive support to facilitate a smooth and successful publication process.",
          "Tailored Services: Customized solutions to meet the specific needs of your research, enhancing the quality and impact of your publication."
        ]
      }
    ],
    footerText: "Choose Pubrica for unparalleled publication support services that help you navigate the complexities of academic publishing and achieve successful dissemination of your research."
  },
  {
    id: "publishing-support-publishers",
    title: "Publishing Support Services for Publishers",
    description: "At Pubrica, we offer a wide range of value-added publishing support services designed to assist publishers in managing the complexities of journal publication. Our services help publishers streamline their processes and reach the right audience for successful dissemination of content. With over 200 academic luminaries and industry veterans in Science, Technology, Engineering, Mathematics (STEM), and medicine, covering 170 research topics, Pubrica delivers succinct, structured, cohesive, and collated content, ensuring you reach the right audience effectively.",
    subHeading: "Our Publishing Support Services Include:",
    sections: [
      { title: "Peer Review Services:", description: "Comprehensive peer review management, ensuring the quality and integrity of published research." },
      { title: "Editorial Services:", description: "Professional editing and proofreading to enhance the clarity, accuracy, and readability of manuscripts." },
      { title: "Publishing Services:", description: "Assistance with the entire publishing process, from manuscript submission to final publication." },
      { title: "Business Development Services:", description: "Strategies and support for expanding reach and improving the business aspects of publishing." },
      {
        title: "Why Choose Pubrica for Publishing Support?",
        items: [
          "Expert Team: Over 200 academic luminaries and industry veterans in STEM and medicine covering 170 research topics, ensuring a deep understanding of various fields.",
          "Quality Content: We deliver succinct, structured, cohesive, and collated content, enhancing the impact and readability of published research.",
          "Targeted Reach: Our services help publishers effectively reach their target audience, increasing the visibility and success of their publications.",
          "Streamlined Processes: Simplify the complex process of journal publication with our end-to-end support, from peer review to business development."
        ]
      }
    ],
    footerText: "Choose Pubrica for comprehensive publishing support services that enhance the quality, reach, and success of your journal publications."
  },
  {
    id: "heor-services",
    title: "Health Economics and Outcomes Research (HEOR)",
    description: "At Pubrica, we offer specialized services in Health Economics and Outcomes Research (HEOR) to support healthcare decision-making and policy development. Our expert team provides comprehensive analyses and studies to demonstrate the value and impact of healthcare interventions.",
    subHeading: "Our HEOR Services Include:",
    sections: [
      { title: "Cost-Effectiveness Analysis:", description: "Rigorous evaluation of the cost and benefits of healthcare interventions to determine their economic value and inform resource allocation decisions." },
      { title: "Health Technology Assessment (HTA):", description: "In-depth assessment of healthcare technologies to evaluate their clinical effectiveness, cost-effectiveness, and broader impact on healthcare systems." },
      { title: "Real-World Evidence (RWE) Studies:", description: "Collection and analysis of real-world data to provide insights into the effectiveness, safety, and value of healthcare interventions in everyday clinical practice." },
      { title: "Quality of Life Studies:", description: "Comprehensive studies assessing the impact of healthcare interventions on patients' quality of life, providing valuable information for patient-centered care and decision-making." }
    ],
    footerText: "Choose Pubrica for expert HEOR services that provide robust and actionable insights, helping you demonstrate the value of healthcare interventions and make informed decisions."
  },
  {
    id: "new-product-discovery",
    title: "New Product Discovery and Development",
    description: "At Pubrica, we understand that process development requires a dynamic and innovative approach to create high-quality products while minimizing risk and meeting stringent regulatory requirements. Our comprehensive strategy helps clients enhance their chances of success, ensuring efficient and effective outcomes.",
    subHeading: "Our Approach & Offerings Include:",
    sections: [
      {
        title: "Key Objectives:",
        items: [
          "Risk Mitigation: Thoughtful product development reduces project risks, promotes a robust and adaptable manufacturing process, and ensures the consistent delivery of high-quality products.",
          "Regulatory Compliance: We ensure all products meet stringent regulatory requirements, adapting to the ever-changing needs of the commercial world.",
          "Timely Delivery: Our process is designed to deliver products on target, on budget, and on schedule, fulfilling expectations."
        ]
      },
      {
        title: "Product Offerings:",
        items: [
          "Drug and Molecular Research: Conducting advanced research to discover new drugs and molecular compounds.",
          "Disease Process Insights: Providing new insights into disease processes, enabling the design of products to stop or reverse disease effects.",
          "Active Substance Research: Investigating active substances to uncover new applications and technological advances.",
          "Scientific Discovery: Exploring new scientific knowledge that leads to innovative applications and breakthroughs."
        ]
      },
      {
        title: "Scientific Discovery and Intelligence Services:",
        items: [
          "Identification of Novel Research Opportunities: Discovering new areas for research and development to drive innovation.",
          "Scientific Data Mining: Extracting valuable insights from vast datasets to inform research and development.",
          "Competitive Intelligence and Benchmarking: Analyzing industry trends and benchmarking against competitors.",
          "Trend Analysis and Forecasting: Conducting trend analysis and forecasting to predict future developments."
        ]
      }
    ],
    footerText: "Choose Pubrica for your new product discovery and development needs. Our expert team and innovative approach ensure the creation of high-quality products that meet regulatory standards and commercial demands."
  },
  {
    id: "cme-content-development",
    title: "Continuing Medical Education (CME) Content Development",
    description: "At Pubrica, we specialize in developing high-quality Continuing Medical Education (CME) content for a wide range of healthcare and life science industries. Our services cater to pharmaceutical companies, medical device manufacturers, clinics, private practices, CROs, healthcare systems, biotechnology companies, nutraceutical and dietary supplement companies, health and wellness product providers, and other life science industries.",
    subHeading: "Target Audience & Deliverables:",
    sections: [
      {
        title: "Target Healthcare Professionals:",
        items: [
          "Doctors and Physicians across all specialties, Chiropractors, Biomedical Laboratory Scientists",
          "Professors and Principal Investigators, Executives and Purchasing Personnel",
          "Educators, Nurses, Therapists, Pharmacists, Dentists, and Allied Healthcare Professionals"
        ]
      },
      {
        title: "Our Offerings Include:",
        items: [
          "Evidence-Based Medical and Clinical Review Articles: Providing comprehensive and scholarly reviews of current practices.",
          "Medical Infographics: Summarizing the latest guidelines and clinical information in visual format.",
          "Clinical Case Reports: Detailed reports on clinical cases across various therapeutic areas (Radiology, Cardiology, Orthopaedics, Emergency Medicine, Neurology, Oncology, OB-GYN, etc.)."
        ]
      },
      {
        title: "Why Choose Pubrica for CME Content Development?",
        items: [
          "Expertise and Quality: Unique process for developing instructional content created with PhD scientists and clinicians.",
          "Comprehensive Approach: Tailored CME content that meets educational needs, ensuring it is evidence-based and peer-reviewed.",
          "Strong Industry Relationships: Excellent working relationships with academic institutes, universities, and healthcare professionals."
        ]
      }
    ],
    footerText: "Choose Pubrica for your CME content development needs and benefit from our expertise, quality, and comprehensive approach to continuing medical education."
  },
  {
    id: "branding-marketing-communication",
    title: "Branding Marketing & Communication content Development",
    description: "At Pubrica, we offer comprehensive marketing and branding content development services tailored to the needs of pharmaceutical companies, medical device manufacturers, clinics, private practices, CROs, healthcare systems, biotechnology companies, nutraceutical and dietary supplement companies, health and wellness product providers, and other life science industries.",
    subHeading: "Target Audiences & Service Portfolio:",
    sections: [
      {
        title: "Target Audiences:",
        items: [
          "Doctors and Physicians across all specialties, Chiropractors, Biomedical Laboratory Scientists",
          "Professors and Principal Investigators, Executives, Educators, Nurses, Therapists, Pharmacists, Dentists"
        ]
      },
      {
        title: "Content Development Offerings:",
        items: [
          "Blog Posts, Booklets, Brochures, E-Books, Flyers, Landing Pages, Newsletters",
          "PowerPoint Presentations, Press Releases, Social Media Posts, Web Content, Testimonials, and Video Scripts"
        ]
      },
      {
        title: "Marketing and Medical Communication Services:",
        items: [
          "Medical Marketing Strategy: Developing strategic plans to market medical products and services.",
          "Product Launch and Branding: Comprehensive support for launching new products and building brand identities.",
          "Digital Marketing and Social Media Management: Managing digital presence and social media campaigns.",
          "Content Creation and Campaign Management: Crafting compelling content and managing full marketing campaigns."
        ]
      },
      {
        title: "Therapeutic Areas Covered:",
        description: "Radiology, Cardiology, Orthopaedics, Emergency Medicine, Neurology, Internal Medicine, Nuclear Medicine, Oncology, OB-GYN, Otolaryngology, and many more."
      }
    ],
    footerText: "Choose Pubrica for expert branding and marketing communication content development that enhances your visibility, engages your audience, and drives success in the healthcare and life science industries."
  },
  {
    id: "patient-education",
    title: "Patient Education",
    description: "Pubrica provides comprehensive marketing and branding content development services to pharmaceutical, medical device, nutraceutical, and life science industries. Our peer-reviewed content targets a wide range of healthcare professionals, including doctors, educators, nurses, therapists, pharmacists, dentists, and other allied healthcare professionals.",
    subHeading: "Services Offered Under Patient Education:",
    sections: [
      {
        title: "Product Labels:",
        description: "Clear and informative labels for pharmaceuticals and medical devices."
      },
      {
        title: "Medical Education and Awareness Content:",
        items: [
          "Disease and drug information",
          "Patient guides and brochures",
          "Educational materials for various therapeutic areas"
        ]
      },
      {
        title: "Product Descriptions Across Therapeutic Areas:",
        description: "Detailed descriptions for products in Radiology, Cardiology, Orthopaedics, Emergency Medicine, Neurology, Internal Medicine, Nuclear Medicine, Oncology, OB-GYN, Otolaryngology, and more."
      }
    ],
    footerText: "Choose Pubrica for expert patient education content that enhances understanding, compliance, and engagement across the healthcare spectrum."
  },
  {
    id: "education-content-development",
    title: "Education Content Development",
    description: "Pubrica offers exceptional educational content development services to industries, educational institutions, software developers, and business executives worldwide. With a proven track record of providing high-quality academic content to national and international universities and institutes, we have honed a unique process that ensures client satisfaction and superior quality.",
    subHeading: "Our Educational Content Services:",
    sections: [
      {
        title: "Key Offerings:",
        items: [
          "Curriculum Development",
          "eLearning Modules",
          "Training Manuals and Guides",
          "Workshop and Webinar Planning"
        ]
      },
      {
        title: "Why Choose Pubrica for Educational Content Development?",
        items: [
          "Proven Expertise: Years of experience delivering top-notch educational content to prestigious institutions.",
          "Quality Assurance: Rigorous processes to ensure content meets the highest standards of quality and relevance.",
          "Collaborative Approach: Strong partnerships with academic professionals to create content that is accurate and engaging.",
          "Global Reach: Serving clients worldwide with customized educational content solutions."
        ]
      }
    ],
    footerText: "Partner with Pubrica for your educational content development needs and experience the difference that expertise and quality can make."
  },
  {
    id: "translation-localization",
    title: "Translation and Localization",
    description: "At Pubrica, we offer expert translation and localization services to ensure your medical and scientific content is accurately adapted for global audiences. Our services help you effectively communicate across languages and cultures, enhancing the reach and impact of your work.",
    subHeading: "Our Translation and Localization Services Include:",
    sections: [
      { title: "Multilingual Document Translation:", description: "Professional translation of documents into multiple languages, ensuring accuracy and clarity in medical and scientific terminology." },
      { title: "Localization of Medical and Scientific Content:", description: "Adapting your content to suit the cultural and linguistic nuances of target regions, making it relevant and accessible to local audiences." },
      { title: "Cross-Cultural Adaptation:", description: "Adjusting content to meet the cultural expectations and sensitivities of different regions, ensuring effective communication and engagement." },
      {
        title: "Why Choose Pubrica for Translation and Localization?",
        items: [
          "Expert Linguists: Experienced linguists with specialized knowledge in medical and scientific fields.",
          "Quality Assurance: Rigorous quality control processes to ensure high standards of accuracy and consistency.",
          "Cultural Sensitivity: In-depth understanding of cultural nuances to effectively adapt content for diverse audiences.",
          "Comprehensive Solutions: End-to-end solutions tailored to your specific global communication needs."
        ]
      }
    ],
    footerText: "Choose Pubrica for reliable and professional translation and localization services that help you communicate your medical and scientific content effectively across global markets."
  },
  {
    id: "ethics-and-compliance",
    title: "Ethics And Compliance",
    description: "At Pubrica, we provide comprehensive ethics and compliance services to ensure your research and publications adhere to the highest ethical standards and regulatory requirements. Our expert team is dedicated to maintaining integrity and compliance throughout your research process.",
    subHeading: "Our Ethics and Compliance Services Include:",
    sections: [
      { title: "Ethical Review Preparation:", description: "Assisting in the preparation of documents and protocols for ethical review boards, ensuring all aspects meet ethical guidelines." },
      { title: "Compliance Audits:", description: "Conducting thorough audits to ensure compliance with regulatory standards and guidelines, identifying and addressing any potential issues." },
      { title: "Adherence to International Guidelines and Standards:", description: "Ensuring your research and publications comply with international ethical guidelines including ICJME, COPE, and ISMPP." },
      {
        title: "Why Choose Pubrica for Ethics and Compliance?",
        items: [
          "Expert Guidance: Experts in ethical standards and compliance providing accurate and up-to-date advice.",
          "Thorough Assessments: Detailed assessments and audits ensuring all aspects of research are ethically sound.",
          "Comprehensive Support: End-to-end support from preparing ethical reviews to ongoing compliance monitoring.",
          "International Standards: Adherence to global guidelines, enhancing the credibility and acceptance of your research."
        ]
      }
    ],
    footerText: "Choose Pubrica for professional ethics and compliance services that safeguard the integrity of your research and ensure adherence to the highest standards."
  },
  {
    id: "consulting-services",
    title: "Consulting Services",
    description: "At Pubrica, we offer expert consulting services to support your research, innovation, and business development needs. Our team of seasoned professionals provides strategic guidance and practical solutions to help you achieve your goals and drive success.",
    subHeading: "Our Consulting Services Include:",
    sections: [
      { title: "Strategic Research Consulting:", description: "Providing expert advice on research strategies, helping you design and implement effective research projects that align with your objectives." },
      { title: "Innovation and Product Development:", description: "Assisting in the development of innovative products and solutions, from initial concept to market-ready products." },
      { title: "Market Research and Analysis:", description: "Conducting comprehensive market research to provide insights into market trends, customer needs, and competitive landscapes." },
      { title: "Business Development Support:", description: "Offering support for business development activities including identifying opportunities, creating growth strategies, and enhancing market presence." },
      {
        title: "Why Choose Pubrica for Consulting Services?",
        items: [
          "Expert Insight: Consultants are industry veterans with extensive experience providing valuable insights.",
          "Tailored Solutions: Customized consulting services specifically designed to meet your unique objectives.",
          "Innovative Approach: Leveraging latest trends and technologies to drive innovation and project success.",
          "Comprehensive Support: End-to-end support from strategic planning to execution."
        ]
      }
    ],
    footerText: "Choose Pubrica for consulting services that deliver strategic insights, innovative solutions, and comprehensive support to drive your success in research and business development."
  },
  {
    id: "coding-and-algorithm-development",
    title: "Coding And Algorithm Development",
    description: "At Pubrica, we specialize in providing cutting-edge coding and algorithm development services to support your research and technological needs. Our team of experts develops tailored solutions that integrate advanced technologies to enhance your research capabilities and outcomes.",
    subHeading: "Our Coding and Algorithm Development Services Include:",
    sections: [
      { title: "Development of Custom Algorithms:", description: "Creating bespoke algorithms designed to meet your specific research requirements, ensuring optimal performance and accuracy." },
      { title: "Machine Learning and AI Integration:", description: "Implementing machine learning and artificial intelligence techniques to analyze complex data, automate processes, and derive meaningful insights." },
      { title: "Data Processing and Analysis Tools:", description: "Developing robust tools for efficient data processing and analysis, enabling you to manage and interpret large datasets with ease." },
      { title: "Software Development for Research Applications:", description: "Crafting specialized software solutions tailored for research applications, enhancing functionality and efficiency." },
      {
        title: "Why Choose Pubrica for Coding and Algorithm Development?",
        items: [
          "Expertise and Innovation: Skilled professionals in coding, ML, AI, and software engineering delivering innovative solutions.",
          "Customized Solutions: Tailored development services specifically designed to address your unique research challenges.",
          "Advanced Technologies: Leveraging the latest technologies and methodologies to enhance your research capabilities.",
          "Comprehensive Support: End-to-end support from initial development to implementation and maintenance."
        ]
      }
    ],
    footerText: "Choose Pubrica for expert coding and algorithm development services that empower your research with advanced technologies and customized solutions."
  }
];

const NAV_ITEMS = [
  { label: "Our Editors", href: "/about-us/our-editors/" },
  { label: "Editor Profile", href: "/scientific-editor-profile" },
  { label: "Editor Speak", href: "/editor-speak" },
  { label: "Subject Area", href: "/subject-matter-experts/" },
  { label: "Therapeutic Expertise", href: "/therapeutic-expertise/" },
  { label: "Global Partners and Membership", href: "/strategic-partnerships-memberships/" },
];

const INDUSTRIES_SERVED = [
  { title: "Life Sciences:", items: ["Biotechnology", "Pharmaceuticals", "Medical Devices", "Nutraceuticals"] },
  { title: "Healthcare:", items: ["Hospitals and Clinics", "Public Health Organizations", "Healthcare Providers", "Health Insurance Companies"] },
  { title: "Financial Services:", items: ["Health Insurance Providers", "Medical Investment Firms", "Financial Institutions supporting Health and Science Sectors"] },
  { title: "Technology:", items: ["Health IT", "Medical Informatics", "Software Development for Healthcare Applications"] },
  { title: "Education:", items: ["Universities and Colleges", "Educational Publishers", "eLearning Platforms"] },
  { title: "Publishing:", items: ["Scientific Journals", "Medical Publishers", "Academic Publishing Houses"] },
  { title: "Consumer Goods:", items: ["Health and Wellness Products", "Cosmetics and Personal Care", "Food and Beverage Industry"] },
  { title: "Non-Profit Organizations:", items: ["NGOs focused on Health and Medicine", "Advocacy Groups for Medical Research and Public Health"] },
  { title: "Medical Research:", items: ["Academic and Research Institutions", "Contract Research Organizations (CROs)", "Clinical Trials Management"] },
  { title: "Regulatory and Compliance:", items: ["Regulatory Affairs Consulting", "Quality Assurance and Control", "Compliance with International Standards"] },
  { title: "Marketing:", items: ["Medical and Healthcare Marketing", "Product Launches and Brand Development", "Digital Marketing for Scientific and Medical Fields"] }
];

export default function AboutPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const pathname = usePathname();

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <>
      <HeroBanner
        title="About Us"
        description="Pubrica is a trusted partner for leading publishers, organizations, and institutions worldwide. We have a team of experts in Science, Technology, Engineering, and Mathematics (STEM) and professionals with therapeutic backgrounds. Whether you need to develop a new product, publish a medical paper, obtain regulatory medication approval, or manage medical communications, we can help. Our services are designed to save you time and money, making the entire process simpler and more efficient."
        headingAs="h1"
      />

      <main className="bg-white min-h-screen text-gray-800 antialiased selection:bg-emerald-600 selection:text-white">

        {/* ========================================================================= */}
        {/* SECTION 1: CORE PROFILE HERO SPLIT LAYOUT                                 */}
        {/* ========================================================================= */}
        <div className="font-['Poppins',sans-serif] bg-white text-[#11231f]">
          {/* ========================================================================= */}
          {/* SECTION 1: COMPANY OVERVIEW                                              */}
          {/* ========================================================================= */}
          <section className="py-16 bg-white" aria-label="Company Overview">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

                {/* Image Box */}
                <div className="lg:col-span-5 relative">
                  <div className="relative aspect-[4/4] w-full rounded-xs overflow-hidden bg-gray-100 border border-gray-200 shadow-xs">
                    <Image
                      src="/images/academy/single-first-image-1-480x537.jpg"
                      alt="Female researcher working with laboratory high-precision microscope setup"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                </div>

                {/* Text Content Box */}
                <div className="lg:col-span-7 flex flex-col">
                  <span className="text-emerald-800 font-bold underline decoration-emerald-600 decoration-2 underline-offset-4 text-[18px] mb-4 tracking-wide">
                    About Us
                  </span>

                  {/* Main Heading (> 16px) */}
                  <h1 className="text-[26px] md:text-[32px] font-extrabold text-[#11231f] leading-tight mb-6">
                    With over 50 years of expertise in Life sciences, Healthcare and Medical Scientific Research, Pubrica excels in analyses, development, Publication and Communication.
                  </h1>

                  {/* Main Description (Strictly 16px) */}
                  <p className="text-gray-600 text-[16px] leading-[1.7] mb-8 font-normal">
                    At Pubrica, we transform your concepts into incisive reports with our comprehensive writing services. Our global team of experts supports industries, institutions, authors, researchers, and publishers in new product or process development, publishing and publications, branding, and educational content development. We have collaborated with researchers worldwide, enhancing the communication of their research and helping them achieve successful publication.
                  </p>

                  {/* Vision & Mission Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-100">

                    {/* Vision Box */}
                    <div className="flex items-start gap-4">
                      <div className="relative w-12 h-12 shrink-0">
                        <Image
                          src="/images/icon-vision.png"
                          alt="Our Vision Icon"
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-[18px] text-[#0f2a24] mb-2">Our Vision</h3>
                        <p className="text-[15px] text-gray-600 leading-relaxed font-normal">
                          To be the global leader in scientific research support and communication, driving innovation and excellence.
                        </p>
                      </div>
                    </div>

                    {/* Mission Box */}
                    <div className="flex gap-4 items-start">
                      <div className="relative w-12 h-12 shrink-0">
                        <Image
                          src="/images/icon-mission.png"
                          alt="Our Mission Icon"
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-[18px] text-[#11231f]">Our Mission</h3>
                        <p className="text-[16px] text-gray-500 mt-1 leading-relaxed font-normal">
                          To empower researchers and institutions with expert services that streamline research development, publication, and communication.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* SECTION 2: WHY CHOOSE PUBRICA MATRICES                                    */}
          {/* ========================================================================= */}
          <section className="bg-[#0e3b38] py-16 text-white font-['Poppins',sans-serif]" aria-label="Key Capabilities">

            {/* Outer Layout Wrapper */}
            <div className="max-w-6xl mx-auto px-4">

              {/* Main Grid: Left Sidebar + Right Metrics */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                {/* ========================================================= */}
                {/* LEFT SIDEBAR NAVIGATION BLOCK                             */}
                {/* ========================================================= */}
                <div className="lg:col-span-4 bg-white p-6 shadow-2xl rounded-sm">
                  <nav className="divide-y divide-dashed divide-gray-300 text-[14px] font-bold tracking-wide">
                    {NAV_ITEMS.map((item, idx) => {
                      const isActive = pathname === item.href;

                      return (
                        /* Navigation Link Item */
                        <Link
                          key={idx}
                          href={item.href}
                          className={`flex items-center justify-between py-4 transition-colors group no-underline ${isActive ? "text-[#0e3b38]" : "text-black hover:text-[#0e3b38]"
                            }`}
                        >
                          {/* Link Inner Content Wrapper */}
                          <div className="flex items-center gap-3">

                            {/* Left Circle Chevron Bullet Icon */}
                            <div className="w-5 h-5 shrink-0 flex items-center justify-center bg-black rounded-full text-white group-hover:scale-105 transition-transform">
                              <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                              </svg>
                            </div>

                            {/* Nav Label Text */}
                            <span className="no-underline">{item.label} &gt;&gt;</span>

                          </div>
                        </Link>
                      );
                    })}
                  </nav>
                </div>

                {/* ========================================================= */}
                {/* RIGHT CONTENT & STATS METRICS BLOCK                       */}
                {/* ========================================================= */}
                <div className="lg:col-span-8 flex flex-col justify-center items-center text-center px-4">

                  {/* Header Text & Description */}
                  <div className="mb-10 max-w-2xl flex flex-col items-center">

                    {/* Main Heading (Above 16px) */}
                    <h2 className="text-[32px] md:text-[36px] font-extrabold tracking-tight text-white mb-2">
                      Why Choose Pubrica ?
                    </h2>

                    {/* Decorative Accent Line */}
                    <div className="h-[3px] w-16 bg-white my-2"></div>

                    {/* Main Section Description (Exact 16px) */}
                    <p className="text-[16px] text-gray-200 font-normal leading-relaxed mt-3">
                      Our dedicated team is ready to join your efforts across various diagnostic areas. With scientists helping scientists, we ensure collaborative excellence and innovation.
                    </p>

                  </div>

                  {/* Stats Grid Container */}
                  <div className="w-full max-w-2xl">

                    {/* --- Top Row Metrics (3 Columns) --- */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-left">

                      {/* Metric Item 1: Papers Edited */}
                      <div className="flex items-center gap-4">
                        {/* Icon Box Placeholder */}
                        <div className="w-9 h-9 shrink-0 flex items-center justify-center text-white">
                          <svg className="w-8 h-8 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        </div>
                        {/* Text Container */}
                        <div>
                          <h4 className="text-[24px] font-bold text-white leading-tight">850,000 +</h4>
                          <p className="text-[16px] text-gray-300 font-normal mt-0.5">Papers edited</p>
                        </div>
                      </div>

                      {/* Metric Item 2: Authors Served */}
                      <div className="flex items-center gap-4">
                        {/* Icon Box Placeholder */}
                        <div className="w-9 h-9 shrink-0 flex items-center justify-center text-white">
                          <svg className="w-8 h-8 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                            <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                          </svg>
                        </div>
                        {/* Text Container */}
                        <div>
                          <h4 className="text-[24px] font-bold text-white leading-tight">260,000+</h4>
                          <p className="text-[16px] text-gray-300 font-normal mt-0.5">Authors served</p>
                        </div>
                      </div>

                      {/* Metric Item 3: Subjects Covered */}
                      <div className="flex items-center gap-4">
                        {/* Icon Box Placeholder */}
                        <div className="w-9 h-9 shrink-0 flex items-center justify-center text-white">
                          <svg className="w-8 h-8 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                        </div>
                        {/* Text Container */}
                        <div>
                          <h4 className="text-[24px] font-bold text-white leading-tight">1200+</h4>
                          <p className="text-[16px] text-gray-300 font-normal mt-0.5">Subjects covered</p>
                        </div>
                      </div>

                    </div>

                    {/* --- Bottom Row Metrics (2 Columns Centered) --- */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">

                      {/* Metric Item 4: Experts */}
                      <div className="flex items-center gap-4 min-w-[180px] text-left">
                        {/* Icon Box Placeholder */}
                        <div className="w-9 h-9 shrink-0 flex items-center justify-center text-white">
                          <svg className="w-8 h-8 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </div>
                        {/* Text Container */}
                        <div>
                          <h4 className="text-[24px] font-bold text-white leading-tight">2000+</h4>
                          <p className="text-[16px] text-gray-300 font-normal mt-0.5">Experts</p>
                        </div>
                      </div>

                      {/* Metric Item 5: Years of Experience */}
                      <div className="flex items-center gap-4 min-w-[180px] text-left">
                        {/* Icon Box Placeholder */}
                        <div className="w-9 h-9 shrink-0 flex items-center justify-center text-white">
                          <svg className="w-8 h-8 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </div>
                        {/* Text Container */}
                        <div>
                          <h4 className="text-[24px] font-bold text-white leading-tight">16+</h4>
                          <p className="text-[16px] text-gray-300 font-normal mt-0.5">years of experience</p>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Call To Action Footer */}
                  <div className="mt-12 text-center text-[16px] font-normal tracking-wide text-gray-200">
                    To know more about purica research services{" "}
                    <Link href="/contact-us" className="text-blue-600 font-bold transition-colors ml-1 no-underline hover:no-underline">
                      Reach Us
                    </Link>
                  </div>

                </div>

              </div>
            </div>
          </section>
        </div>
        {/* ========================================================================= */}
        {/* SECTION 3: STREAMLINED STEPPING WORKFLOW (SOFT BLUE BLOCK)                */}
        {/* ========================================================================= */}
        <section
          className="bg-[#ebf8f6] py-16 text-[#11231f] font-['Poppins',sans-serif]"
          aria-label="Our Operational Process"
        >
          {/* Center Wrapper Container */}
          <div className="max-w-7xl mx-auto px-4 text-center">

            {/* Section Header Title (Higher than 16px) */}
            <h2 className="text-[28px] md:text-[34px] font-extrabold tracking-tight">
              Our Working Process
            </h2>

            {/* Section Subtitle (Exact 16px) */}
            <p className="text-[16px] text-gray-600 mt-2 font-light max-w-2xl mx-auto">
              At Pubrica, we follow a streamlined process to ensure the highest quality of service:
            </p>

            {/* Process Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-12 text-center max-w-6xl mx-auto">

              {/* Step 1: Addressing Queries */}
              <div className="flex flex-col items-center group">
                {/* Icon Box Placeholder */}
                <div className="w-14 h-14 bg-sky-400 rounded-xl flex items-center justify-center text-white mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  <HelpCircle className="h-6 w-6" />
                </div>
                {/* Step Heading (Higher than 16px) */}
                <h3 className="font-bold text-[18px] mb-2">Addressing your queries</h3>
                {/* Step Description (Exact 16px) */}
                <p className="text-[16px] text-gray-600 leading-relaxed font-light px-2">
                  We begin by thoroughly understanding and addressing all your questions and concerns.
                </p>
              </div>

              {/* Step 2: Order Confirmation */}
              <div className="flex flex-col items-center group">
                {/* Icon Box Placeholder */}
                <div className="w-14 h-14 bg-emerald-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  <FileText className="h-6 w-6" />
                </div>
                {/* Step Heading (Higher than 16px) */}
                <h3 className="font-bold text-[18px] mb-2">Confirmation of your Order</h3>
                {/* Step Description (Exact 16px) */}
                <p className="text-[16px] text-gray-600 leading-relaxed font-light px-2">
                  Once your requirements are clear, we confirm your order and outline the project details.
                </p>
              </div>

              {/* Step 3: Assigning Order */}
              <div className="flex flex-col items-center group">
                {/* Icon Box Placeholder */}
                <div className="w-14 h-14 bg-lime-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  <Users className="h-6 w-6" />
                </div>
                {/* Step Heading (Higher than 16px) */}
                <h3 className="font-bold text-[18px] mb-2">Assigning your Order</h3>
                {/* Step Description (Exact 16px) */}
                <p className="text-[16px] text-gray-600 leading-relaxed font-light px-2">
                  Your project is assigned to the most suitable expert from our team.
                </p>
              </div>

              {/* Step 4: Review in Progress */}
              <div className="flex flex-col items-center group">
                {/* Icon Box Placeholder */}
                <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  <Briefcase className="h-6 w-6" />
                </div>
                {/* Step Heading (Higher than 16px) */}
                <h3 className="font-bold text-[18px] mb-2">Review in Progress</h3>
                {/* Step Description (Exact 16px) */}
                <p className="text-[16px] text-gray-600 leading-relaxed font-light px-2">
                  Our team rigorously reviews and works on your project, ensuring accuracy and quality.
                </p>
              </div>

              {/* Step 5: Delivering Paper */}
              <div className="flex flex-col items-center group">
                {/* Icon Box Placeholder */}
                <div className="w-14 h-14 bg-pink-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  <CheckCircle className="h-6 w-6" />
                </div>
                {/* Step Heading (Higher than 16px) */}
                <h3 className="font-bold text-[18px] mb-2">Delivering the Polished Paper</h3>
                {/* Step Description (Exact 16px) */}
                <p className="text-[16px] text-gray-600 leading-relaxed font-light px-2">
                  Finally, we deliver a meticulously polished paper, ready for your use or publication.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION: WHY CHOOSE PUBRICA (IMAGE & COMPLIANCE FEATURES SPLIT)          */}
        {/* ========================================================================= */}
        <section className="bg-white py-16 font-['Poppins',sans-serif] text-gray-800 border-t border-gray-100" aria-label="Why Choose Pubrica Details">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

              {/* Left Column: Image & Feature Items Below */}
              <div className="lg:col-span-5 flex flex-col space-y-10">
                {/* Main Hero Composite Image */}
                <div className="relative aspect-[4/3.5] w-full rounded-xs overflow-hidden">
                  <Image
                    src="/images/academy/about-us-768x661.webp"
                    alt="Why Choose Pubrica Quality Assurance and Research Capabilities"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>

                {/* Left Side Feature 1: Ethical Standards */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#eaf4f2] text-[#11231f] rounded-xs shrink-0 mt-1">
                    <Scale className="h-6 w-6 stroke-[1.75]" />
                  </div>
                  <div>
                    <h3 className="text-[18px] md:text-[20px] font-bold text-[#11231f] mb-1.5">
                      Ethical Standards:
                    </h3>
                    <p className="text-[16px] text-gray-600 font-light leading-relaxed">
                      Pubrica strictly adheres to the ISMPP Code of Ethics in all our medical publication services. We follow Good Publication Practice (GPP) and the ethical principles outlined in the World Medical Association Declaration of Helsinki. Additionally, we comply with the Principles on Conduct of Clinical Trials and Communication of Clinical Trial Results (PhRMA), Joint Position on the Publication of Clinical Trial Results in Scientific Literature (IFPMA/EFPIA/JPMA/PhRMA), the EQUATOR Network, and Good Practices for Outcomes Research (ISPOR).
                    </p>
                  </div>
                </div>

                {/* Left Side Feature 2: Efficient Process */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#eaf4f2] text-[#11231f] rounded-xs shrink-0 mt-1">
                    <UserCheck className="h-6 w-6 stroke-[1.75]" />
                  </div>
                  <div>
                    <h3 className="text-[18px] md:text-[20px] font-bold text-[#11231f] mb-1.5">
                      Efficient Process:
                    </h3>
                    <p className="text-[16px] text-gray-600 font-light leading-relaxed">
                      Our streamlined process saves you time and money, making publishing in journals or obtaining regulatory drug approvals easy and hassle-free. Choose Pubrica for a seamless, high-quality, and ethically sound research and publication experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Title, Intro & Feature Items */}
              <div className="lg:col-span-7 flex flex-col space-y-8">
                <div>
                  <h2 className="text-[28px] md:text-[34px] font-extrabold text-[#11231f] mb-3">
                    Why Choose Pubrica?
                  </h2>
                  <p className="text-[16px] text-gray-600 font-light leading-relaxed">
                    Pubrica stands out as a leader in scientific research support and communication, offering unparalleled expertise and quality. Here's why you should choose us:
                  </p>
                </div>

                {/* Right Side Feature 1: Expert Team */}
                <div className="flex items-start gap-4 pt-2">
                  <div className="p-2.5 bg-[#eaf4f2] text-[#11231f] rounded-xs shrink-0 mt-1">
                    <UserCheck className="h-6 w-6 stroke-[1.75]" />
                  </div>
                  <div>
                    <h3 className="text-[18px] md:text-[20px] font-bold text-[#11231f] mb-1.5">
                      Expert Team:
                    </h3>
                    <p className="text-[16px] text-gray-600 font-light leading-relaxed">
                      Our team of certified professionals, including the American Medical Writers Association (AMWA) and the European Medical Writers Association (EMWA) certified writers, ensures the highest standards in medical writing and research support.
                    </p>
                  </div>
                </div>

                {/* Right Side Feature 2: Comprehensive Compliance */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#eaf4f2] text-[#11231f] rounded-xs shrink-0 mt-1">
                    <ShieldCheck className="h-6 w-6 stroke-[1.75]" />
                  </div>
                  <div>
                    <h3 className="text-[18px] md:text-[20px] font-bold text-[#11231f] mb-1.5">
                      Comprehensive Compliance:
                    </h3>
                    <p className="text-[16px] text-gray-600 font-light leading-relaxed">
                      We guarantee 100% quality assurance by adhering to guidelines set by the International Conference on Harmonisation (ICH), Conformité Européenne (CE), EU General Data Protection Regulation (GDPR), Food and Drug Administration Amendment Act (FDAAA), Foreign Corrupt Practices Act (FCPA), Good Clinical Practice (GCP), and Clinical Data Interchange Standards Consortium (CDISC), among others.
                    </p>
                  </div>
                </div>

                {/* Right Side Feature 3: Comprehensive Support */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#eaf4f2] text-[#11231f] rounded-xs shrink-0 mt-1">
                    <FileEdit className="h-6 w-6 stroke-[1.75]" />
                  </div>
                  <div>
                    <h3 className="text-[18px] md:text-[20px] font-bold text-[#11231f] mb-1.5">
                      Comprehensive Support:
                    </h3>
                    <p className="text-[16px] text-gray-600 font-light leading-relaxed">
                      Our team includes PhD-level Subject-Matter Experts (SMEs) across life sciences, computer science, medicine, and technology. These PhD-level experts with specialized therapeutic knowledge are available at every stage of your project. Our Scientific Writing &amp; Publishing team is dedicated to aiding you in publishing in journals or obtaining regulatory drug approvals, making the process efficient and cost-effective.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: FULL EXPANDABLE ACCORDIONS WITH RICH TEXT CONTENT              */}
        {/* ========================================================================= */}
        <section className="bg-gray-50 py-7 font-sans border-t border-gray-100" aria-label="Outsourcing Domains">
          <Container className="max-w-6xl px-4">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#11231f] font-display">
                Our Generics Contract Research &amp; Development Consulting &amp; Outsourcing Services
              </h2>
              <p className="text-xs md:text-sm text-gray-600 mt-1.5 font-light leading-relaxed max-w-5xl">
                Pubrica provides a wide array of services targeting various aspects of research, development, publication, and communication across multiple industries:
              </p>
            </div>

            {/* Accordion List mapping all 15 services */}
            <PubricaServicesAccordion />
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: INDUSTRIES SERVED BY PUBRICA (GRID CARD LAYOUT)                 */}
        {/* ========================================================================= */}
        <section className="bg-white py-16 font-['Poppins',sans-serif] text-gray-800 border-t border-gray-100" aria-label="Industries Served">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <h2 className="text-[28px] md:text-[34px] font-extrabold text-[#11231f]">
                Industries Served by Pubrica
              </h2>
              <p className="text-[16px] text-gray-600 mt-3 font-light leading-relaxed">
                Pubrica offers a wide range of services tailored to various industries, ensuring expert support and high-quality outcomes across different sectors:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {INDUSTRIES_SERVED.map((industry, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200/90 rounded-sm p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-start"
                >
                  <h3 className="text-[18px] md:text-[20px] font-bold text-[#11231f] mb-3">
                    {industry.title}
                  </h3>
                  <ul className="space-y-2 list-disc list-inside text-[16px] text-gray-600 font-light leading-relaxed">
                    {industry.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="leading-snug">
                        <span className="-ml-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}