import Link from "next/link";

interface CommonUploadButtonProps {
    href?: string;
    children?: React.ReactNode;
    target?: string;
    rel?: string;
    className?: string;
}

const CommonUploadButton = ({
    href = "/order-now/",
    children = "Upload Your Manuscript",
    target,
    rel,
    className = "",
}: CommonUploadButtonProps) => {
    return (
        <Link
            href={href}
            target={target}
            rel={rel}
            className={`bg-red-600 hover:bg-white text-white hover:text-black px-5 py-2.5 rounded-md font-semibold transition-colors cursor-pointer inline-flex items-center justify-center select-none ${className}`}
        >
            {children}
        </Link>
    );
};

export default CommonUploadButton;