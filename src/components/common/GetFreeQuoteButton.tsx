import Link from "next/link";

const GetFreeQuoteButton = () => {
  return (
    <div className="flex justify-center py-6">
      <Link
        href="/order-now"
        className="bg-[#073632] text-white text-sm font-bold px-6 py-3 rounded hover:bg-[#052623] transition-colors"
      >
        Get Free Quote
      </Link>
    </div>
  );
};

export default GetFreeQuoteButton;