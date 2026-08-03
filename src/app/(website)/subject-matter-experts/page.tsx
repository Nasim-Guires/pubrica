import type { Metadata } from "next";
import { ArrowRightCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Subject Matter Experts Across All Disciplines | Pubrica",
  description:
    "Explore our subject matter experts in medical and scientific writing across life sciences, engineering, technology, and therapeutic disciplines.",
};

export default function SubjectMatterExpertsPage() {

  const columns = [
    [
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
    ],

    [
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
    ],

    [
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
    ],

    [
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


          <div className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-4 
            gap-8
          ">


            {columns.map((column,index)=>(

              <div 
                key={index}
                className="space-y-4"
              >

                {column.map((subject)=>(

                  <div
                    key={subject}
                    className="
                      flex 
                      items-center 
                      gap-2
                      text-sm
                      text-gray-700
                      hover:text-[#1a4a42]
                      transition
                    "
                  >

                    <ArrowRightCircle
                      size={16}
                      className="text-[#1a4a42] flex-shrink-0"
                    />


                    <span>
                      {subject}
                    </span>


                  </div>

                ))}


              </div>


            ))}


          </div>


        </section>


      </main>


    </div>
  );
}