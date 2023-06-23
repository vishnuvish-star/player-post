import React from "react";

const SearchBar = () => {
  return (
    <>
      <form className="flex justify-center mt-10 ">
        <input
          type="text"
          placeholder="Search Posts..."
          className="input input-ghost w-full max-w-xs p-2 border-[2px] border-gray-300 rounded-lg"
        />
        <button className="btn btn-primary"></button>
      </form>
    </>
  );
};

export default SearchBar;
