import Image from "next/image";

interface AudienceCardProps {
  title: string;
  bgImage: string;
}

export default function AudienceCard({
  title,
  bgImage,
}: AudienceCardProps) {
  return (
    <div className="relative h-48 rounded-xl overflow-hidden group shadow-md">
      <Image
        src={bgImage}
        alt={title}
        fill
        className="object-cover transition duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw,
               (max-width: 1024px) 50vw,
               33vw"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent flex items-end p-6">
        <h3 className="text-white font-bold text-lg leading-snug">
          {title}
        </h3>
      </div>
    </div>
  );
}