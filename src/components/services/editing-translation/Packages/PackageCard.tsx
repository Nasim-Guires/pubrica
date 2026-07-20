interface Package {
  name: string;
  badge: string;
  tagline: string;
  badgeTextColor: string;
  cardBg: string;
  idealFor: string;
  includes: string[];
  addons: string[];
  turnaround: string;
}

interface PackageCardProps {
  pkg: Package;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  return (
    <div
      className={`${pkg.cardBg} rounded-md p-5 shadow-[0_4px_12px_rgba(0,0,0,0.12)] border border-black/5 flex flex-col justify-between transition hover:shadow-[0_6px_16px_rgba(0,0,0,0.16)]`}
    >
      <div>
        {/* Header */}
        <div className="bg-white rounded-sm p-4 mb-6 flex items-center gap-4 border border-slate-100 shadow-sm">
          <div
            className={`w-14 h-14 rounded-full bg-[#EBF3F5] ${pkg.badgeTextColor} font-serif font-semibold text-3xl flex items-center justify-center border-2 border-dashed border-slate-300 shadow-inner`}
          >
            {pkg.badge}
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-800">
              {pkg.name}
            </h3>

            <p className="text-xs text-slate-500 font-medium tracking-wide">
              {pkg.tagline}
            </p>
          </div>
        </div>

        {/* Ideal For */}
        <div className="space-y-6 px-1">
          <div className="text-[13px] text-slate-900 leading-relaxed">
            <span className="font-bold inline-flex items-center gap-2 mr-1">
              <span>&#10144;</span>
              Ideal For:
            </span>

            {pkg.idealFor}
          </div>

          {/* Includes */}
          <div>
            <span className="text-[13px] font-bold inline-flex items-center gap-2 mb-3">
              <span>&#10144;</span>
              Includes:
            </span>

            <ul className="space-y-3 pl-8 text-[12.5px]">
              {pkg.includes.map((item) => (
                <li key={item} className="relative">
                  <span className="absolute -left-5 text-red-600 text-lg">
                    •
                  </span>

                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Addons */}
          <div>
            <span className="text-[13px] font-bold inline-flex items-center gap-2 mb-3">
              <span>&#10144;</span>
              Add-ons:
            </span>

            <ul className="space-y-2 pl-8 text-[12.5px]">
              {pkg.addons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 pt-4 border-t border-black/10 text-[13px]">
        <span className="font-bold inline-flex items-center gap-2">
          <span>&#10144;</span>
          Turnaround Time:
        </span>{" "}
        <span className="font-medium">{pkg.turnaround}</span>
      </div>
    </div>
  );
}