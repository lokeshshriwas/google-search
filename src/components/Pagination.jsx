"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const Pagination = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const startIndex = +searchParams.get("start") || 1;
  return (
      <div className="flex px-10 pb-4 justify-center space-x-10 sm:space-x-30">
        {startIndex >= 10 && (
          <Link
            href={`${pathName}?searchTerm=${searchTerm}&start=${
              startIndex - 10
            }`}
          >
            <button className="flex items-center justify-between  px-4 py-2 rounded-lg bg-stone-700 text-white hover:bg-stone-600 transition-colors ">
              <MdKeyboardArrowLeft className="text-3xl" />
              <p>Previous</p>
            </button>
          </Link>
        )}
        {startIndex <= 90 && (
          <Link
            href={`${pathName}?searchTerm=${searchTerm}&start=${
              startIndex + 10
            }`}
          >
            <button className="flex items-center justify-between px-4 py-2 rounded-lg bg-stone-700 text-white hover:bg-stone-600 transition-colors ">
              <p>Next</p>
              <MdKeyboardArrowRight className="text-3xl" />
            </button>
          </Link>
        )}
      </div>
  );
};

export default Pagination;
