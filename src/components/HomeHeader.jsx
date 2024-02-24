import Link from "next/link";
import { CgMenuGridO } from "react-icons/cg";

const HomeHeader = () => {
  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="text-white bg-stone-900 flex space-x-4 items-center">
        <Link
          href={"https://mail.google.com"}
          target="_blank"
          className="hover:underline"
        >
          Gmail
        </Link>
        <Link
          href={"https://image.google.com"}
          target="_blank"
          className="hover:underline"
        >
          Images
        </Link>
        <CgMenuGridO className="bg-transparent hover:bg-stone-800 rounded-full text-4xl p-2" />
        <button className="bg-stone-700 px-6 py-2 rounded-md hover:brightness-105 hover:shadow-md-gray transition-shadow  ">
          Sign up
        </button>
      </div>
    </header>
  );
};

export default HomeHeader;
