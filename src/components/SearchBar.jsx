import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentSearchInUrl = searchParams.get("search") || "";

      if (searchTerm !== currentSearchInUrl) {
        const newParams = { ...Object.fromEntries(searchParams) };
        if (searchTerm) {
          newParams.search = searchTerm;
        } else {
          delete newParams.search;
        }
        if (
          searchParams.toString() !== new URLSearchParams(newParams).toString()
        ) {
          setSearchParams(newParams);
        }
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, searchParams.toString(), setSearchParams]);

  return (
    <div className="flex w-56 items-center">
      <input
        type="text"
        placeholder="Ara..."
        value={searchTerm}
        onChange={handleSearch}
        className="flex-grow w-4/6 h-8 px-2 py-1.5 italic text-md border border-amber-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-300"
      />
      <button
        onClick={() => {
          const currentSearchInUrl = searchParams.get("search") || "";
          if (searchTerm !== currentSearchInUrl) {
            const newParams = { ...Object.fromEntries(searchParams) };
            if (searchTerm) {
              newParams.search = searchTerm;
            } else {
              delete newParams.search;
            }
            if (
              searchParams.toString() !==
              new URLSearchParams(newParams).toString()
            ) {
              setSearchParams(newParams);
            }
          }
        }}
        className="w-1/6 h-8 cursor-pointer bg-amber-400 text-white rounded-r-md hover:bg-amber-500 transition duration-300"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}
