import PackageList from "./PackageList";

export default function PackagesSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto font-sans">
      {/* Header */}
      <div className="text-left mb-12">
        <h2 className="text-2xl font-bold text-[#0A4D5C] mb-4">
          Editing and Translation Services – Our Packages
        </h2>

        <p className="text-slate-700 max-w-6xl text-[13.5px] leading-relaxed">
          At Pubrica, we understand that every manuscript, report, or document
          has unique requirements. That's why we offer flexible and tailored
          editing and translation packages designed to meet the needs of
          researchers, publishers, businesses, and healthcare professionals.
        </p>
      </div>

      <PackageList />
    </section>
  );
}
