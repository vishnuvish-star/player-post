"use client";
import Image from "next/image";
import React from "react";
import { HiPencilSquare, HiArrowLeftOnRectangle } from "react-icons/hi2";

const Header = () => {
  return (
    <>
      <div className="flex justify-between p-5 border-b-2">
        <Image src="/assets/logo.jpg" width={80} height={50} alt="home logo" />
        <div className="flex justify-between items-center p-2 gap-4">
          <div className=" bg-cyan-400 rounded-md px-6 py-0 h-6 text-center  text-white">
            <span className="hidden sm:block">Home</span>
            <HiPencilSquare className="sm:hidden text-[20px]" />
          </div>
          <div className=" bg-cyan-400 rounded-md px-6 py-0 h-6 text-center  text-white">
            <span className="hidden sm:block">About</span>
            <HiPencilSquare className="sm:hidden text-[20px]" />
          </div>
          <div className=" bg-cyan-400 rounded-md px-6 py-0 h-6 text-center  text-white">
            <span className="hidden sm:block">Sign in</span>
            <HiPencilSquare className="sm:hidden text-[20px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
