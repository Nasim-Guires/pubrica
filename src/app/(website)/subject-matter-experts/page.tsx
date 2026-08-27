import HeroBanner from "@/components/common/HeroBanner";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Subject Matter Experts Across All Disciplines | Pubrica",
  description:
    "Explore our subject matter experts in medical and scientific writing across life sciences, engineering, technology, and therapeutic disciplines.",
};

interface SubjectItem {
  title: string;
  slug: string;
}

export default function SubjectMatterExpertsPage() {
  const columns: SubjectItem[][] = [
    [
      { title: "Algorithms", slug: "algorithm" },
      { title: "Animal Science", slug: "animal-science" },
      { title: "Agriculture", slug: "agriculture" },
      { title: "Augmented Reality", slug: "augmented-reality" },
      { title: "Agrotechnology", slug: "agrotechnology" },
      { title: "Biotechnology", slug: "biotechnology" },
      { title: "Biomonitoring", slug: "biomonitoring" },
      { title: "Big Data & Hadoop", slug: "big-data-hadoop" },
      { title: "Biomolecular engineering", slug: "biomolecular-engineering" },
      { title: "Biomedical Engineering", slug: "biomedical-engineering" },
      { title: "Biomaterials", slug: "material-science" },
      { title: "Biophysics", slug: "biophysics" },
      { title: "Biomedical Imaging", slug: "biomedical-imaging" },
      { title: "Biochemistry", slug: "biochemistry" },
      { title: "Bioengineering", slug: "" },
      { title: "Biopolymers", slug: "biopolymers" },
      { title: "Biocatalysts", slug: "biocatalysts" },
      { title: "Biocomputing", slug: "biocomputing" },
      { title: "Bioinformatics", slug: "bioinformatics" },
    ],

    [
      { title: "Biostatistical programming", slug: "internet-of-things" },
      { title: "Cloud Computing", slug: "cloud-computing" },
      { title: "Cosmeceuticals", slug: "cosmeceuticals" },
      { title: "Ceramic engineering", slug: "ceramic-engineering" },
      { title: "Cancer Research", slug: "cancer-research" },
      { title: "Chemical engineering", slug: "chemical-engineering" },
      { title: "Cardiology", slug: "cardiology" },
      { title: "Cell Biology", slug: "cell-biology" },
      { title: "Computer science", slug: "computer-science" },
      { title: "Dermatology", slug: "dermatology" },
      { title: "Diabetology", slug: "diabetology" },
      { title: "Cardiovascular Biology", slug: "cardiovascular-biology" },
      { title: "Data Mining", slug: "data-mining" },
      { title: "Drug delivery system", slug: "drug-delivery-system" },
      { title: "Dentistry", slug: "dentistry" },
      { title: "E-Learning", slug: "e-learning" },
      { title: "Environmental Science", slug: "environmental-science" },
      { title: "Enzymes", slug: "enzymes" },
    ],

    [
      { title: "Food Processing", slug: "food-processing" },
      { title: "Food Science", slug: "food-science" },
      { title: "Forensics", slug: "forensics" },
      { title: "Gynecology", slug: "gynecology" },
      { title: "Glycobiology", slug: "glycobiology" },
      { title: "Genomics", slug: "genomics" },
      { title: "Internet of Things (IoT)", slug: "internet-of-things" },
      { title: "Life Sciences", slug: "life-sciences" },
      { title: "Machine Learning", slug: "machine-learning" },
      { title: "Medical Animation", slug: "medical-animation" },
      {
        title: "Medicinal and Pharmaceutical Chemistry",
        slug: "medicinal-and-pharmaceutical-chemistry",
      },
      { title: "Material science", slug: "material-science" },
      { title: "Medicinal chemistry", slug: "medicinal-chemistry" },
      { title: "Molecular engineering", slug: "molecular-engineering" },
      {
        title: "Medical Imaging Techniques",
        slug: "medical-imaging-techniques",
      },
      { title: "Neuroscience", slug: "neuroscience" },
      { title: "Nanobiotechnology", slug: "nanobiotechnology" },
    ],

    [
      { title: "Nuclear Chemistry", slug: "nuclear-chemistry" },
      { title: "Nanotechnology", slug: "nanotechnology" },
      { title: "Nuclear Engineering", slug: "nuclear-engineering" },
      { title: "Nutraceuticals", slug: "nutraceuticals" },
      { title: "Neurology", slug: "neurology" },
      { title: "Optics and electronics", slug: "optics-and-electronics" },
      { title: "Psychology", slug: "psychology" },
      { title: "Public Health", slug: "public-health" },
      { title: "Psychiatry", slug: "psychiatry" },
      { title: "Peptides", slug: "peptides" },
      { title: "Production engineering", slug: "production-engineering" },
      { title: "Protein engineering", slug: "protein-engineering" },
      { title: "Pharmaceuticals", slug: "pharmaceuticals" },
      { title: "Robotics", slug: "robotics" },
      { title: "Radiology", slug: "radiology" },
      { title: "Surgery", slug: "surgery" },
      { title: "Sensor Technology", slug: "sensor-technology" },
      { title: "Tissue Engineering", slug: "tissue-engineering" },
    ],
  ];

  return (
    <div className="min-h-screen bg-white text-[#10243e] font-[Poppins]">
      <HeroBanner
        title="Subject Matter Experts"
        description="Across all disciplines"
        headingAs="h1"
      />
      <main className="mx-auto max-w-[1280px] px-6 py-12 md:px-8 lg:px-10 lg:py-14">
        {/* Introduction */}
        <section className="mb-12">
          <h1 className="mb-5 text-[26px] font-semibold leading-tight tracking-[-0.3px] text-[#10243e] md:text-[30px] lg:text-[32px]">
            All types of medical and scientific writing
          </h1>

          <p className="max-w-[1180px] text-[16px] font-normal leading-[1.8] text-[#10243e]">
            An array of writing services that cover medical and non-medical
            subjects. Regulatory writing, Clinical Report Forms (CRF),
            biostatistics, manuscripts, business writing, physician reports,
            thesis, medical writing and more. We assist medical doctors,
            students, hospitals, pharma and device manufacturers in their quest
            for a credible writing partner. Certified writers available across
            life science, computer science, medicine and technology; pundits
            with niche therapeutic repertoire are with you at every stage of the
            process. Scientific Writing & Publishing team is your
            aide—publishing in a journal or getting a regulatory drug approval
            is now easy. Save time and money; circumvent encumbrances while we
            pen your reports.
          </p>
        </section>

        {/* Subject Areas */}
        <section>
          <div className="grid grid-cols-1 gap-x-12 gap-y-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-16">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-col">
                {column.map((subject) => {
                  const href =
                    subject.title === "Bioengineering"
                      ? "/subject-matter-experts/biomedical-engineering"
                      : `/subject-matter-experts/${subject.slug}`;

                  return (
                    <Link
                      key={subject.title}
                      href={href}
                      className="group flex min-h-[36px] items-center gap-3 py-[4px] text-[16px] font-normal leading-[1.45] text-[#10243e] no-underline transition-colors duration-150 hover:text-[#174b45] hover:no-underline"
                    >
                      {/* Circular Arrow Icon */}
                      <span className="flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-[#174b45]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="white"
                          className="h-[11px] w-[11px]"
                          aria-hidden="true"
                        >
                          <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z" />
                        </svg>
                      </span>

                      <span>{subject.title}</span>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}