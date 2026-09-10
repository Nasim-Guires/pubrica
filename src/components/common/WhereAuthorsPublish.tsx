import Image from "next/image";

export type AuthorPublicationData = {
  imageSrc: string;
  imageAlt: string;
  paperTitle: string;
  author: string;
  publisher: string;
  journalName: string;
  impactFactor: string;
};

interface WhereAuthorsPublishProps {
  title: string;
  description: string;
  publication: AuthorPublicationData;
}

export default function WhereAuthorsPublish({
  title,
  description,
  publication,
}: WhereAuthorsPublishProps) {
  return (
    <div className="max-w-4xl mx-auto space-y-6 font-['Poppins',sans-serif]">
      {/* Section Header (Aligned to Left edge of box) */}
      <div className="space-y-2 text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1e2e2b]">
          {title}
        </h2>

        <div className="w-10 h-0.5 bg-[#12433e]" />

        <p className="text-sm md:text-base text-gray-600 max-w-2xl pt-1">
          {description}
        </p>
      </div>

      {/* Publication Card (Increased width to max-w-4xl) */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-md text-left grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
        {/* Publication Image */}
        <div className="sm:col-span-4 relative h-64 w-full rounded-lg overflow-hidden bg-gray-50 border border-gray-100">
          <Image
            src={publication.imageSrc}
            alt={publication.imageAlt}
            fill
            className="object-cover"
          />
        </div>

        {/* Publication Details */}
        <div className="sm:col-span-8 space-y-4 text-sm text-gray-700">
          {/* Paper Title */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">
              Paper Title
            </p>

            <p className="text-base font-semibold text-[#1e2e2b] leading-snug">
              {publication.paperTitle}
            </p>
          </div>

          {/* Author + Publisher */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">
                Author
              </p>

              <p className="text-gray-800">
                {publication.author}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">
                Publisher
              </p>

              <p className="text-gray-800">
                {publication.publisher}
              </p>
            </div>
          </div>

          {/* Journal + Impact Factor */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">
                Journal Name
              </p>

              <p className="text-gray-800">
                {publication.journalName}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">
                Impact factor
              </p>

              <p className="text-gray-800">
                {publication.impactFactor}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}