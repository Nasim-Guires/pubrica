import Image from "next/image";

interface PartnerLogoProps {
  name: string;
  logo: string;
}

export default function PartnerLogo({
  name,
  logo,
}: PartnerLogoProps) {
  return (
    <div className="relative h-12 w-full grayscale contrast-125 hover:grayscale-0 transition-all duration-200">
      <Image
        src={logo}
        alt={name}
        fill
        sizes="(max-width:768px) 33vw, 120px"
        className="object-contain"
      />
    </div>
  );
}