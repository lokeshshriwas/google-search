import ImageSearchResult from "@/components/ImageSearchResult";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";

const page = async ({ searchParams }) => {
  const startIndex = searchParams.start || "1";
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_SEARCH_API_KEY}&cx=${process.env.NEXT_PUBLIC_GOOGLE_CX}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
  );

  if (!response.ok) throw new Error("Something went wrong");

  const data = await response.json();
  const results = data.items;

  if (!results) {
    return (
      <Suspense fallback={<Loading />}>
        <div className="flex w-full flex-col justify-center items-center pt-10 bg-stone-800">
          <h1 className="text-3xl mb-4">
            No results found for {searchParams.searchTerm}
          </h1>
          <p className="text-lg">
            Try searching the web or images something else &nbsp;
            <Link href="/" className="text-blue-400 underline">
              Home
            </Link>
          </p>
        </div>
      </Suspense>
    );
  }

  return (
    <div className="bg-stone-800 w-full text-white border-t border-stone-700 pb-24">
      <Suspense fallback={<Loading />}>
        {results && <ImageSearchResult results={data} />}
      </Suspense>
    </div>
  );
};

export default page;
