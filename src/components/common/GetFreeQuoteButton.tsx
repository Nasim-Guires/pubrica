import Link from "next/link";

const GetFreeQuoteButton = () => {
  return (
    <div className="flex justify-center py-3">
      <Link
        href="/order-now"
        className="bg-red-600 text-white text-sm font-bold px-6 py-3 rounded hover:bg-white hover:text-black transition-colors"
      >
        Get Free Quote
      </Link>
    </div>
  );
};

export default GetFreeQuoteButton;