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
      }
    ]
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
      <header aria-label="Breadcrumb Navigation" className="bg-white py-2">
        <Breadcrumb items={[{ label: 'About Us', href: '/about-us' }]} />
      </header>

      <main className="bg-white min-h-screen text-gray-800 antialiased selection:bg-emerald-600 selection:text-white">

        {/* ========================================================================= */}
        {/* SECTION 1: CORE PROFILE HERO SPLIT LAYOUT                                 */}
        {/* ========================================================================= */}
        <section className="py-7 bg-white font-sans" aria-label="Company Overview">
          <Container className="max-w-6xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

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
              <div className="lg:col-span-7 flex flex-col">
                <span className="text-emerald-800 font-bold underline decoration-emerald-600 decoration-2 underline-offset-4 text-sm mb-4 tracking-wide font-display">
                  About Us
                </span>
                <h1 className="text-2xl md:text-3xl font-extrabold text-[#11231f] leading-tight mb-6 font-display">
                  With over 50 years of expertise in Life sciences, Healthcare and Medical Scientific Research, Pubrica excels in analyses, development, Publication and Communication.
                </h1>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 font-light">
                  At Pubrica, we transform your concepts into incisive reports with our comprehensive writing services. Our global team of experts supports industries, institutions, authors, researchers, and publishers in new product or process development, publishing and publications, branding, and educational content development. We have collaborated with researchers worldwide, enhancing the communication of their research and helping them achieve successful publication.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                  <div className="flex gap-3">
                    <div className="p-2 h-10 w-10 border border-dashed border-emerald-700 text-emerald-800 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-[#11231f] font-display">Our Vision</h3>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed font-light">
                        To be the global leader in scientific research support and communication, driving innovation and excellence.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="p-2 h-10 w-10 border border-dashed border-emerald-700 text-emerald-800 rounded-full flex items-center justify-center shrink-0">
                      <FileCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-[#11231f] font-display">Our Mision</h3>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed font-light">
                        To empower researchers and institutions with expert services that streamline research development, publication, and communication.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: WHY CHOOSE PUBRICA MATRICES (DEEP EMERALD BLOCK)               */}
        {/* ========================================================================= */}
        <section className="bg-[#11231f] py-7 text-white font-sans" aria-label="Key Capabilities">
          <Container className="max-w-7xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              <div className="lg:col-span-4 bg-white rounded-xs p-2 text-[#11231f] shadow-xl">
                <nav className="divide-y divide-gray-100 text-xs font-bold font-sans tracking-wide uppercase">
                  {NAV_ITEMS.map((item, idx) => {
                    const isActive = pathname === item.href;

                    return (
                      <Link
                        key={idx}
                        href={item.href}
                        className={`flex items-center justify-between p-4 transition-colors group ${isActive ? "bg-gray-100 text-[#1b8c6e]" : "bg-white hover:bg-gray-50"
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          <ChevronRight className="h-4 w-4 text-white bg-black rounded-full p-0.5 group-hover:scale-110 transition-transform" />
                          <span>{item.label} &gt;&gt;</span>
                        </div>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="lg:col-span-8 flex flex-col justify-center">
                <div className="text-center lg:text-left mb-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold font-display tracking-tight text-white mb-1">
                    Why Choose Pubrica ?
                  </h2>
                  <div className="h-0.5 w-20 bg-emerald-500 mx-auto lg:mx-0 my-3"></div>
                  <p className="text-xs md:text-sm text-gray-300 max-w-2xl font-light leading-relaxed mt-2">
                    Our dedicated team is ready to join your efforts across various diagnostic areas. With scientists helping scientists, we ensure collaborative excellence and innovation.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 mt-8 pt-4 border-t border-emerald-950/40 text-left">
                  <div className="flex items-start gap-3">
                    <FileText className="h-8 w-8 text-emerald-400 shrink-0 mt-1 stroke-[1.25]" />
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold font-display">850,000 +</h4>
                      <p className="text-xs text-gray-400 mt-0.5 font-light">Papers edited</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-8 w-8 text-emerald-400 shrink-0 mt-1 stroke-[1.25]" />
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold font-display">260,000+</h4>
                      <p className="text-xs text-gray-400 mt-0.5 font-light">Authors served</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Layers className="h-8 w-8 text-emerald-400 shrink-0 mt-1 stroke-[1.25]" />
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold font-display">1200+</h4>
                      <p className="text-xs text-gray-400 mt-0.5 font-light">Subjects covered</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:col-start-2">
                    <ShieldCheck className="h-8 w-8 text-emerald-400 shrink-0 mt-1 stroke-[1.25]" />
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold font-display">2000+</h4>
                      <p className="text-xs text-gray-400 mt-0.5 font-light">Experts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="h-8 w-8 text-emerald-400 shrink-0 mt-1 stroke-[1.25]" />
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold font-display">16+</h4>
                      <p className="text-xs text-gray-400 mt-0.5 font-light">years of experience</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 text-center lg:text-left text-xs font-medium tracking-wide">
                  To know more about purica research services{' '}
                  <Link href="/contact" className="text-sky-400 underline hover:text-sky-300 transition-colors ml-1">
                    Reach Us
                  </Link>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: STREAMLINED STEPPING WORKFLOW (SOFT BLUE BLOCK)                */}
        {/* ========================================================================= */}
        <section className="bg-[#ebf8f6] py-7 font-sans text-[#11231f]" aria-label="Our Operational Process">
          <Container className="max-w-7xl px-4 text-center">
            <h2 className="text-2xl font-extrabold font-display">Our Working Process</h2>
            <p className="text-xs md:text-sm text-gray-600 mt-2 font-light">
              At Pubrica, we follow a streamlined process to ensure the highest quality of service:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-12 text-center max-w-6xl mx-auto">
              <div className="flex flex-col items-center group">
                <div className="w-12 h-12 bg-sky-400 rounded-xl flex items-center justify-center text-white mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-sm font-display mb-2">Addressing your queries</h4>
                <p className="text-xs text-gray-600 leading-relaxed font-light px-2">
                  We begin by thoroughly understanding and addressing all your questions and concerns.
                </p>
              </div>

              <div className="flex flex-col items-center group">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  <FileText className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-sm font-display mb-2">Confirmation of your Order</h4>
                <p className="text-xs text-gray-600 leading-relaxed font-light px-2">
                  Once your requirements are clear, we confirm your order and outline the project details.
                </p>
              </div>

              <div className="flex flex-col items-center group">
                <div className="w-12 h-12 bg-lime-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  <Users className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-sm font-display mb-2">Assigning your Order</h4>
                <p className="text-xs text-gray-600 leading-relaxed font-light px-2">
                  Your project is assigned to the most suitable expert from our team.
                </p>
              </div>

              <div className="flex flex-col items-center group">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-sm font-display mb-2">Review in Progress</h4>
                <p className="text-xs text-gray-600 leading-relaxed font-light px-2">
                  Our team rigorously reviews and works on your project, ensuring accuracy and quality.
                </p>
              </div>

              <div className="flex flex-col items-center group">
                <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-sm font-display mb-2">Delivering the Polished Paper</h4>
                <p className="text-xs text-gray-600 leading-relaxed font-light px-2">
                  Finally, we deliver a meticulously polished paper, ready for your use or publication.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION: WHY CHOOSE PUBRICA (IMAGE & COMPLIANCE FEATURES SPLIT)          */}
        {/* ========================================================================= */}
        <section className="bg-white py-7 font-sans text-gray-800 border-t border-gray-100" aria-label="Why Choose Pubrica Details">
          <Container className="max-w-7xl px-4">
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
                    <h3 className="text-base font-bold text-[#11231f] font-display mb-1.5">
                      Ethical Standards:
                    </h3>
                    <p className="text-xs text-gray-600 font-light leading-relaxed">
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
                    <h3 className="text-base font-bold text-[#11231f] font-display mb-1.5">
                      Efficient Process:
                    </h3>
                    <p className="text-xs text-gray-600 font-light leading-relaxed">
                      Our streamlined process saves you time and money, making publishing in journals or obtaining regulatory drug approvals easy and hassle-free. Choose Pubrica for a seamless, high-quality, and ethically sound research and publication experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Title, Intro & Feature Items */}
              <div className="lg:col-span-7 flex flex-col space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#11231f] font-display mb-3">
                    Why Choose Pubrica?
                  </h2>
                  <p className="text-xs md:text-sm text-gray-600 font-light leading-relaxed">
                    Pubrica stands out as a leader in scientific research support and communication, offering unparalleled expertise and quality. Here's why you should choose us:
                  </p>
                </div>

                {/* Right Side Feature 1: Expert Team */}
                <div className="flex items-start gap-4 pt-2">
                  <div className="p-2.5 bg-[#eaf4f2] text-[#11231f] rounded-xs shrink-0 mt-1">
                    <UserCheck className="h-6 w-6 stroke-[1.75]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#11231f] font-display mb-1.5">
                      Expert Team:
                    </h3>
                    <p className="text-xs text-gray-600 font-light leading-relaxed">
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
                    <h3 className="text-base font-bold text-[#11231f] font-display mb-1.5">
                      Comprehensive Compliance:
                    </h3>
                    <p className="text-xs text-gray-600 font-light leading-relaxed">
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
                    <h3 className="text-base font-bold text-[#11231f] font-display mb-1.5">
                      Comprehensive Support:
                    </h3>
                    <p className="text-xs text-gray-600 font-light leading-relaxed">
                      Our team includes PhD-level Subject-Matter Experts (SMEs) across life sciences, computer science, medicine, and technology. These PhD-level experts with specialized therapeutic knowledge are available at every stage of your project. Our Scientific Writing &amp; Publishing team is dedicated to aiding you in publishing in journals or obtaining regulatory drug approvals, making the process efficient and cost-effective.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </Container>
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
            <div className="space-y-3 max-w-5xl mt-6">
              {CONSULTING_SERVICES.map((item, idx) => {
                const isOpen = openAccordion === idx;
                return (
                  <div
                    key={item.id}
                    className={`border rounded-xs overflow-hidden transition-all bg-white ${isOpen ? "border-emerald-600/40 shadow-xs" : "border-gray-200/80"
                      }`}
                  >
                    {/* Header Button */}
                    <button
                      onClick={() => toggleAccordion(idx)}
                      className={`w-full text-left px-5 py-3.5 flex items-center justify-between text-xs md:text-sm font-bold transition-colors focus:outline-hidden ${isOpen ? "text-[#11231f]" : "text-gray-800 hover:text-emerald-800"
                        }`}
                      aria-expanded={isOpen}
                    >
                      <span className="pr-4 tracking-wide leading-snug">{item.title}</span>
                      <span className="shrink-0 text-emerald-700">
                        {isOpen ? <Minus className="h-4 w-4 stroke-[2.5]" /> : <Plus className="h-4 w-4 stroke-[2.5]" />}
                      </span>
                    </button>

                    {/* Opened Content Layout */}
                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 text-xs md:text-sm text-gray-700 leading-relaxed font-sans border-t border-gray-100 space-y-4">
                        {item.description && (
                          <p className="text-gray-600 font-normal leading-relaxed">
                            {item.description}
                          </p>
                        )}

                        {item.subHeading && (
                          <h4 className="font-bold text-gray-900 pt-1">
                            {item.subHeading}
                          </h4>
                        )}

                        {item.sections && (
                          <div className="space-y-3 pl-1">
                            {item.sections.map((section, secIdx) => (
                              <div key={secIdx} className="space-y-1.5">
                                <span className="font-bold text-gray-900 block">
                                  {section.title}
                                </span>

                                {section.description && (
                                  <p className="text-gray-600 pl-4 font-normal">
                                    {section.description}
                                  </p>
                                )}

                                {section.items && (
                                  <ul className="list-disc list-inside space-y-1 pl-4 text-gray-600">
                                    {section.items.map((subItem, itemIdx) => (
                                      <li key={itemIdx} className="leading-snug">
                                        <span className="-ml-1">{subItem}</span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            ))}
                          </div>
                        )}

                        {item.footerText && (
                          <p className="text-gray-700 pt-2 font-normal">
                            {item.footerText}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: INDUSTRIES SERVED BY PUBRICA (GRID CARD LAYOUT)                 */}
        {/* ========================================================================= */}
        <section className="bg-white py-7 font-sans border-t border-gray-100" aria-label="Industries Served">
          <Container className="max-w-7xl px-4">
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#11231f] font-display">
                Industries Served by Pubrica
              </h2>
              <p className="text-xs md:text-sm text-gray-600 mt-3 font-light leading-relaxed">
                Pubrica offers a wide range of services tailored to various industries, ensuring expert support and high-quality outcomes across different sectors:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {INDUSTRIES_SERVED.map((industry, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200/90 rounded-sm p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-start"
                >
                  <h3 className="text-sm font-bold text-[#11231f] font-display mb-3">
                    {industry.title}
                  </h3>
                  <ul className="space-y-2 list-disc list-inside text-xs text-gray-600 font-light leading-relaxed">
                    {industry.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="leading-snug">
                        <span className="-ml-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
        </section>

      </main>
    </>
  );
}