import React from "react";
import Link from "next/link";
import { ArrowRightCircle } from "lucide-react";
import Container from "@/components/common/Container";
import Breadcrumb from "@/components/seo/Breadcrumb";

const SUBJECTS = [
  // Column 1
  "Algorithms",
  "Animal Science",
  "Agriculture",
  "Augmented Reality",
  "Agrotechnology",
  "Biotechnology",
  "Biomonitoring",
  "Big Data & Hadoop",
  "Biomolecular engineering",
  "Biomedical Engineering",
  "Biomaterials",
  "Biophysics",
  "Biomedical Imaging",
  "Biochemistry",
  "Bioengineering",
  "Biopolymers",
  "Biocatalysts",
  "Biocomputing",
  "Bioinformatics",

  // Column 2
  "Biostatistical programming",
  "Cloud Computing",
  "Cosmeceuticals",
  "Ceramic engineering",
  "Cancer Research",
  "Chemical engineering",
  "Cardiology",
  "Cell Biology",
  "Computer science",
  "Dermatology",
  "Diabetology",
  "Cardiovascular Biology",
  "Data Mining",
  "Drug delivery system",
  "Dentistry",
  "E-Learning",
  "Environmental Science",
  "Enzymes",

  // Column 3
  "Food Processing",
  "Food Science",
  "Forensics",
  "Gynecology",
  "Glycobiology",
  "Genomics",
  "Internet of Things (IoT)",
  "Life Sciences",
  "Machine Learning",
  "Medical Animation",
  "Medicinal and Pharmaceutical Chemistry",
  "Material science",
  "Medicinal chemistry",
  "Molecular engineering",
  "Medical Imaging Techniques",
  "Neuroscience",
  "Nanobiotechnology",

  // Column 4
  "Nuclear Chemistry",
  "Nanotechnology",
  "Nuclear Engineering",
  "Nutraceuticals",
  "Neurology",
  "Optics and electronics",
  "Psychology",
  "Public Health",
  "Psychiatry",
  "Peptides",
  "Production engineering",
  "Protein engineering",
  "Pharmaceuticals",
  "Robotics",
  "Radiology",
  "Surgery",
  "Sensor Technology",
  "Tissue Engineering",
];

export default function ResourcesPage() {
  return (
    <>
      {/* Structural Semantic Breadcrumb Navigation */}
      <header aria-label="Breadcrumb" className="bg-white py-2">
        <Breadcrumb items={[{ label: "Subjects", href: "/subjects" }]} />
      </header>

      <main className="bg-white min-h-screen">
        {/* Dark Hero Gradient Banner Frame */}
        <section
          className="bg-gradient-to-r from-[#11231f] via-[#162e29] to-[#11231f] py-14 px-4"
          aria-labelledby="page-title"
        >
          <div className="max-w-5xl mx-auto border border-gray-500/30 p-8 text-center">
            <h1
              id="page-title"
              className="text-white text-2xl md:text-3xl font-bold tracking-wide mb-2 font-display"
            >
              Subject Matter Experts
            </h1>
            <p className="text-gray-300 text-sm md:text-base tracking-medium font-sans">
              Across all disciplines
            </p>
          </div>
        </section>

        {/* Content & Comprehensive 4-Column Subject Matrix */}
        <section
          className="py-16"
          aria-label="Scientific and Medical Disciplines"
        >
          <Container className="max-w-7xl px-4 md:px-8">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">
                All types of medical and scientific writing
              </h2>
              <p className="text-sm md:text-base text-gray-600 font-sans leading-relaxed max-w-6xl">
                An array of writing services that cover medical and non-medical
                subjects. Regulatory writing, Clinical Report Forms (CRF),
                biostatistics, manuscripts, business writing, physician reports,
                thesis, medical writing and more. We assist medical doctors,
                students, hospitals, pharma and device manufacturers in their
                quest for a credible writing partner. Certified writers
                available across life science, computer science, medicine and
                technology; pundits with niche repertoire are with you at every
                stage of the process. Scientific Writing & Publishing team is
                your aide—publishing in a journal or getting a regulatory drug
                approval is now easy. Save time and money; circumvent
                encumbrances while we pen your reports.
              </p>
            </div>

            {/* Structured 4-Column Flex/Grid Layout mimicking image architecture */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-3.5 gap-x-6 font-sans text-sm text-gray-800">
              {SUBJECTS.map((subject) => (
                <div
                  key={subject}
                  className="flex items-center gap-2.5 group py-0.5"
                >
                  <ArrowRightCircle className="h-4 w-4 text-emerald-700 shrink-0 transform transition-transform group-hover:translate-x-0.5" />
                  <span className="hover:text-emerald-800 transition-colors font-medium leading-tight cursor-pointer">
                    {subject}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
