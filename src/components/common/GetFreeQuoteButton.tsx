import Link from "next/link";

const GetFreeQuoteButton = () => {
    return (
        <div className="flex justify-center py-6">
            <Link
                href="/contact-us" // Change to your actual quote/contact page
                className="inline-block rounded-full bg-[#BA0000] px-10 py-3 text-white font-semibold shadow-lg transition hover:bg-[#980000]"
            >
                Get a Free Quote
            </Link>
        </div>
    );
};

export default GetFreeQuoteButton;