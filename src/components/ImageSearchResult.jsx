import Link from "next/link";
import React from "react";
import Pagination from "@/components/Pagination";

const ImageSearchResult = ({ results }) => {
  return (
    <div className="pb-40">
      <div className=" box-border w-full columns-2 sm:columns-3 md:columns-4 lg:columns-5 pt-4">
        {results.items.map((result) => (
          <div key={result.link}>
            <div className="group w-[100%] h-auto break-inside-avoid py-3">
              <Link href={result.image.contextLink} className="w-[100%]">
                <img
                  src={result.link}
                  alt={result.title}
                  className="max-h-[70%] object-contain rounded-2xl"
                />
              </Link>
              <div className="h-[30%]">
                <Link href={result.image.contextLink}>
                  <h2 className="group-hover:underline truncate text-sm sm:text-xl">
                    {result.title}
                  </h2>
                </Link>
                <Link href={result.image.contextLink}>
                  <p className="group-hover:underline truncate text-xs sm:text-sm text-gray-400">
                    {result.displayLink}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
          <Pagination />
        </div>
    </div>
  );
};

export default ImageSearchResult;
