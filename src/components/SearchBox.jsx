"use client";
import { RxCross2 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa6";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const SearchBox = () => {
  const searchParam = useSearchParams();
  const router = useRouter();
  const searchTerm = searchParam.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  };

  return (
      <form
        className="flex border border-stone-600 rounded-full px-4 py-2 ml-3 sm:px-6 sm:py-3 sm:ml-10 me-5 flex-grow max-w-3xl items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="w-full focus:outline-none bg-stone-800 text-white"
        />
        <RxCross2
          className="text-2xl text-gray-300 cursor-pointer sm:mr-2"
          onClick={() => setTerm("")}
        />
        <FaMicrophone className="hidden sm:inline-flex text-4xl text-gray-200 border-l-2 border-stone-600 mr-3 pl-4" />
        <CiSearch
          className="text-3xl hidden sm:inline-flex text-gray-200 cursor-pointer"
          onClick={handleSubmit}
        />
      </form>
  );
};

export default SearchBox;
