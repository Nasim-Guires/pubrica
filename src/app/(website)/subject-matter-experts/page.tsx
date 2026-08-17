import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Subject Matter Experts Across All Disciplines | Pubrica",
  description:
    "Explore our subject matter experts in medical and scientific writing across life sciences, engineering, technology, and therapeutic disciplines.",
};

// Define structure for subject items
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
      { title: "Medicinal and Pharmaceutical Chemistry", slug: "medicinal-and-pharmaceutical-chemistry" },
      { title: "Material science", slug: "material-science" },
      { title: "Medicinal chemistry", slug: "medicinal-chemistry" },
      { title: "Molecular engineering", slug: "molecular-engineering" },
      { title: "Medical Imaging Techniques", slug: "medical-imaging-techniques" },
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
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <header className="w-full bg-[#1e2e2b] text-white py-14 px-4 text-center">
        <div className="max-w-4xl mx-auto border border-gray-500/60 py-10 px-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
            Subject Matter Experts
          </h1>

          <p className="text-sm md:text-base text-gray-300 mt-3">
            Across all disciplines
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <section className="max-w-5xl mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
            All types of medical and scientific writing
          </h2>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            An array of writing services that cover medical and non-medical
            subjects. Regulatory writing, Clinical Report Forms (CRF),
            biostatistics, manuscripts, business writing, physician reports,
            thesis, medical writing and more. We assist medical doctors,
            students, hospitals, pharma and device manufacturers in their quest
            for a credible writing partner.
          </p>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed mt-4">
            Certified writers are available across life science, computer
            science, medicine and technology. Our subject matter experts with
            niche therapeutic expertise provide scientific support for every
            stage of research and publication.
          </p>
        </section>

        {/* Subject Areas */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Subject Areas
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-3">
                {column.map((subject) => (
                  <Link
                    key={subject.title}
                    href={
                      subject.title === "Bioengineering"
                        ? "/subject-matter-experts/biomedical-engineering"
                        : `/subject-matter-experts/${subject.slug}`
                    }
                    className="group flex items-center gap-2 text-sm text-gray-700 hover:text-[#1a4a42] transition-colors duration-150 py-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="w-4 h-4 text-[#1a4a42] flex-shrink-0 group-hover:translate-x-0.5 transition-transform"
                      aria-hidden="true"
                    >
                      <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z" />
                    </svg>
                    <span className="group-hover:underline underline-offset-2">
                      {subject.title}
                    </span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}