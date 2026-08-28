import type { Metadata } from "next";
import { Plus, Star, PlusCircle } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Therapeutic Expertise | Niche Areas - Pubrica",
  description:
    "Explore Pubrica’s clinical research in therapeutics, niche therapeutic services, top focus areas, and medical publishing support.",
};


export default function TherapeuticExpertisePage() {

  const sidebarItems = [
    { name: "MEET THE EXPERTS", active: false },
    { name: "SUBJECT AREA", active: false },
    { name: "THERAPEUTIC EXPERTISE", active: true },
    { name: "GLOBAL PARTNERS AND MEMBERSHIP", active: false },
    { name: "CONTACT US", active: false },
    { name: "CAREERS", active: false },
  ];


  const focusAreas = [
    "Cardiovascular",
    "Psychiatry",
    "Pediatric",
    "Rheumatology",
    "Gastroenterology",
    "Nutritional & metabolic diseases",
    "Gynecology and obstetrics",
  ];


  return (

    <div className="min-h-screen bg-white text-gray-800">


      {/* Hero Banner */}
      <header className="w-full bg-[#1e2e2b] text-white py-6 px-4 text-center">

        <div className="max-w-3xl mx-auto border border-gray-500/60 py-8 px-4">

          <h1 className="text-2xl md:text-4xl font-bold tracking-wide">
            Therapeutic Expertise
          </h1>


          <p className="text-xs md:text-sm text-gray-300 mt-2">
            Niche areas
          </p>


        </div>

      </header>



      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row gap-8">



        {/* Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">


          <div className="flex items-center gap-2 text-[#1a4a42] font-semibold text-lg mb-4">

            <Star className="w-5 h-5 fill-[#1a4a42]" />

            <h2>
              About Us
            </h2>

          </div>



          <nav className="space-y-1 border-t border-gray-200 pt-4">


            {sidebarItems.map((item) => (

              <button
                key={item.name}
                type="button"
                className="w-full flex items-center gap-3 py-2 text-left group"
              >


                <span
                  className={`p-0.5 border flex items-center justify-center ${item.active
                    ? "bg-gray-600 border-gray-600 text-white"
                    : "border-gray-400 text-gray-600 group-hover:bg-gray-100"
                    }`}
                >

                  <Plus
                    className="w-3 h-3"
                    strokeWidth={3}
                  />

                </span>



                <span
                  className={`text-xs font-semibold tracking-wider ${item.active
                    ? "text-gray-900 font-bold"
                    : "text-gray-600"
                    }`}
                >

                  {item.name}

                </span>


              </button>

            ))}


          </nav>


        </aside>




        {/* Content */}
        <main className="flex-1 space-y-10">



          {/* Introduction */}
          <section className="space-y-4">


            <h2 className="text-2xl font-bold text-gray-900">
              Clinical research in therapeutics
            </h2>



            <h3 className="text-sm font-bold text-gray-800">
              Outsource or salvage a faltering trial
            </h3>



            <p className="text-sm text-gray-700 leading-relaxed">

              We offer comprehensive therapeutic expertise across a wide
              variety of indications. Pubrica Scientific Writing & Publication
              adapts clinical trial services for specific requirements. We
              provide complete program development and delivery services for
              any phase of the trial that you either want to outsource or
              salvage a faltering trial.

            </p>



            <p className="text-sm text-gray-700 leading-relaxed">

              Our experts support pharmaceutical, biotechnology, and medical
              device companies with clinical research solutions, scientific
              communication, regulatory documentation, and publication
              support.

            </p>


          </section>




          {/* Infographic Placeholder */}
          <section className="flex justify-center">

            <div className="w-full max-w-2xl h-96 relative bg-gray-100 border-2 border-gray-400 rounded-lg overflow-hidden">
              <Image
                src="/images/academy/cns-shart-01-1021x1024.jpg"
                alt="Niche Therapeutic Services Diagram"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 672px"
              />
            </div>

          </section>





          {/* Service Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4">


            {
              [
                "Scientific & Medical Communication",
                "Upgradation of Services",
                "Research Services"
              ].map((item) => (


                <div
                  key={item}
                  className="
                  bg-[#1b4e43]
                  text-white
                  rounded
                  py-3
                  px-4
                  text-center
                  text-sm
                  font-semibold
                  "
                >

                  {item}

                </div>


              ))
            }


          </section>





          {/* Focus Areas */}
          <section className="border-t pt-6 space-y-4">


            <h3 className="font-bold text-gray-900">

              Top areas of therapeutic focus include but not limited to:

            </h3>



            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">


              {
                focusAreas.map((area) => (

                  <li
                    key={area}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >

                    <PlusCircle
                      className="w-4 h-4 text-[#1b4e43]"
                    />

                    {area}

                  </li>


                ))
              }


            </ul>


          </section>





          {/* Research Wheel Placeholder */}
          <section className="border-t pt-6">


            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Top Areas of Research
            </h3>


            <div className="h-80 relative bg-gray-100 border-2 border-gray-400 rounded-lg overflow-hidden">
              <Image
                src="/images/academy/circle-1-1024x441.png"
                alt="Research Wheel Chart"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>


          </section>



        </main>


      </div>


    </div>

  );
}