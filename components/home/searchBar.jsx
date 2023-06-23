"use client";

import React from "react";

const SearchBar = () => {
  return (
    <>
      <div className=" m-10">
        <h2 className="text-2xl w-1/2 mx-auto text-blue-400 mb-5">
          Find & Explore games and activity..
        </h2>
        <h2 className="font-bold w-1/2 mx-auto">Best entertainment here..</h2>
      </div>

      <form className="flex justify-center mt-10 ">
        <input
          type="text"
          placeholder="Search Posts..."
          className="input w-full max-w-xs p-2 border-gray-300 rounded-lg outline-none"
          onChange={(text) => console.log(text.target.value)}
        />
        <button className="btn w-[6rem] bg-cyan-400 text-white ml-2">
          Find
        </button>
      </form>
    </>
  );
};

export default SearchBar;
