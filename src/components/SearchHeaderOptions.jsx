"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { FaRegImage } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";

const SearchHeaderOptions = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const pathName = usePathname();

  const selectTab = (tab) => {
    router.push(
      `/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`
    );
  };

  return (
    <div className="flex space-x-2 select-none border-b w-full justify-start pl-10 lg:justify-start lg:pl-52 text-gray-300 text-sm">
      <div
        onClick={() => selectTab("All")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-400 cursor-pointer pb-3 px-2 ${
          pathName === "/search/web" && "!text-blue-400 !border-blue-400"
        }`}
      >
        <IoMdSearch className="" />
        <p>All</p>
      </div>
      <div
        onClick={() => selectTab("Images")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-400 cursor-pointer pb-3 px-2 ${
          pathName === "/search/image" && "!text-blue-400 !border-blue-400"
        }`}
      >
        <FaRegImage className="" />
        <p>Images</p>
      </div>
    </div>
  );
};

export default SearchHeaderOptions;
