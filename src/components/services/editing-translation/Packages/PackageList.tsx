import { packagesList } from "@/lib/services/editing-and-translation";
import PackageCard from "./PackageCard";

export default function PackageList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
      {packagesList.map((pkg) => (
        <PackageCard
          key={pkg.name}
          pkg={pkg}
        />
      ))}
    </div>
  );
}