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
        <div className="flex justify-center sm:justify-start">
            <Link
                href={href}
                target={target}
                rel={rel}
                className={`bg-red-600 text-white text-sm font-bold px-6 py-2 rounded hover:bg-white hover:text-black transition-colors${className}`}
            >
                {children}
            </Link>
        </div>
    );
};

export default CommonUploadButton;