"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa6";

const HomeSearch = () => {
  const [searchInput, setSearchInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchInput) return;
    router.push(`/search/web?searchTerm=${searchInput}`);
    setSearchInput("");
  };

  const handleRandomSearch = async (e) => {
    setRandomSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  };
  return (
    <>
      <form
        className=" flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full sm:max-w-xl lg:max-w-2xl items-center"
        onSubmit={handleSubmit}
      >
        <CiSearch className="text-xl text-gray-200 mr-3" />
        <input
          type="text"
          placeholder="Search Google"
          className="flex-grow bg-stone-900 focus:outline-none "
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}

        />
        <FaMicrophone className="text-xl text-gray-200 ml-3" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4">
        <button className="bg-stone-800 rounded-md text-sm  hover:ring-gray-200 focus:outline-none active:ring-gray-300 transition-shadow h-10 w-36" onClick={handleSubmit}>
          Google Search
        </button>
        <button
          className="bg-stone-800 rounded-md text-sm  hover:ring-white focus:outline-none active:ring-white transition-shadow h-10 w-36 disabled:opacity-60"
          disabled={randomSearchLoading}
          onClick={(e)=>handleRandomSearch(e)}
        >
          {randomSearchLoading ? "Loading..." : "Random Search"}
        </button>
      </div>
    </>
  );
};

export default HomeSearch;
