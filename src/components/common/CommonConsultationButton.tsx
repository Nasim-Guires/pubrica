import Link from "next/link";

interface CommonConsultationButtonProps {
  href?: string;
  children?: React.ReactNode;
}

const CommonConsultationButton = ({
  href = "/contact-us/",
  children = "Request Free Consultation",
}: CommonConsultationButtonProps) => {
  return (
    <Link
      href={href}
      className="bg-red-600 hover:bg-white text-white hover:text-black px-5 py-2.5 rounded-md font-semibold transition-colors cursor-pointer inline-flex items-center justify-center select-none"
    >
      {children}
    </Link>
  );
};

export default CommonConsultationButton;