import React, { useState } from "react";

export const SearchMovie = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="flex justify-center items-center min-h-[100px] pt-6 rounded-xl">
      <form onSubmit={handleSearch} className="w-full max-w-svh">
        <div className="flex items-center border-b-2 border-zinc-500 pb-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-gray-200 text-lg"
            type="text"
            placeholder="Search for a movie..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search for a movie"
          />
          <button
            type="submit"
            className="flex-shrink-0 border-1 border-zinc-300 hover:bg-zinc-200 text-white hover:text-black text-lg py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};