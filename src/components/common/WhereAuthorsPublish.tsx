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
    <div className="max-w-6xl w-full mx-auto space-y-6 font-['Poppins',sans-serif]">
      {/* Section Header */}
      <div className="space-y-3">
        {/* Main Heading & Line (Centered) */}
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e2e2b]">
            {title}
          </h2>
          <div className="w-12 h-0.5 bg-[#12433e] mt-2" />
        </div>

        {/* Subheading / Description (Aligned to Start/Left) */}
        <p className="text-sm md:text-base text-gray-600 max-w-4xl text-left">
          {description}
        </p>
      </div>

      {/* Publication Card */}
      <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm flex flex-col md:flex-row items-stretch gap-8 w-full">
        {/* Publication Image (Book Cover Aspect Ratio) */}
        <div className="relative w-full md:w-56 h-72 flex-shrink-0 rounded overflow-hidden bg-gray-50">
          <Image
            src={publication.imageSrc}
            alt={publication.imageAlt}
            fill
            className="object-contain"
          />
        </div>

        {/* Publication Details (Stacked List with Inline Bolding) */}
        <div className="flex flex-col justify-between space-y-4 text-base text-gray-800 py-1">
          <p>
            <strong className="font-bold text-black">Paper Title:</strong>{" "}
            {publication.paperTitle}
          </p>

          <p>
            <strong className="font-bold text-black">Author:</strong>{" "}
            {publication.author}
          </p>

          <p>
            <strong className="font-bold text-black">Journal Name:</strong>{" "}
            {publication.journalName}
          </p>

          <p>
            <strong className="font-bold text-black">Publisher:</strong>{" "}
            {publication.publisher}
          </p>

          <p>
            <strong className="font-bold text-black">Impact factor:</strong>{" "}
            {publication.impactFactor}
          </p>
        </div>
      </div>
    </div>
  );
}