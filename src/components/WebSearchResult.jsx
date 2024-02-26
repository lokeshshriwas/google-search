import Link from "next/link";
import Parser from "html-react-parser"
import Pagination from "@/components/Pagination";

const WebSearchResult = ({ results }) => {
  return (
    <div className="w0full mx-auto px-3 pb-24 sm:pl=[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-400 text-sm mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime}) seconds
      </p>
      {results.items?.map((result)=> (
        <div className="mb-8 max-w-xl" key={result.link}>
            <div className="group flex flex-col">
                <Link href={result.link} target="_blank">
                    {result.formattedUrl}
                </Link>
                <Link href={result.link} target="_blank" className="group-hover:underline decoration-blue-600 text-xl truncate font-medium text-blue-500">
                    {result.title}
                </Link>
            </div>
            <p className="text-gray-400">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
      <Pagination/>
    </div>
  );
};

export default WebSearchResult;
