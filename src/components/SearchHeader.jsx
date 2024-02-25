import Link from "next/link";
import React from "react";
import SearchBox from "./SearchBox";
import { CgMenuGridO } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import SearchHeaderOptions from "./SearchHeaderOptions";

const SearchHeader = () => {
  return (
    <header className="sticky top-0 bg-stone-800 text-white">
      <div className="flex w-full p-6 items-center justify-between">
        <Link href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/330px-Google_2015_logo.svg.png"
            alt="Google logo"
            className=" h-5 sm:h-[40px] sm:-w-[120px]"
          />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex space-x-2">
          <IoSettingsOutline className="bg-transparent hover:bg-stone-700 p-2 text-4xl rounded-full cursor-pointer" />
          <CgMenuGridO className="bg-transparent hover:bg-stone-700 p-2 text-4xl rounded-full cursor-pointer" />
        </div>
        <button className="hidden sm:inline sm:bg-stone-700 sm:px-6 sm:py-2 sm:rounded-md hover:brightness-105 hover:shadow-md-gray transition-shadow sm:ml-2 ">
          Sign up
        </button>
      </div>
      <SearchHeaderOptions/>
    </header>
  );
};

export default SearchHeader;
