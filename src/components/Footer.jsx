import React from "react";
import CountryLookup from "./CountryLookup";

const Footer = () => {
  return (
    <footer className="absolute w-full bottom-0 text-sm text-gray-200 bg-stone-800">
      <div className="border-b px-8 py-3">
        <CountryLookup />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0">
        <ul className="flex items-center space-x-4">
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Advertisment</li>
          <li className="hover:underline cursor-pointer">Business</li>
          <li className="hover:underline cursor-pointer">How Search Works</li>
        </ul>
        <ul className="flex items-center space-x-4">
          <li className="hover:underline cursor-pointer">Privacy</li>
          <li className="hover:underline cursor-pointer">Terms</li>
          <li className="hover:underline cursor-pointer">Setting</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
