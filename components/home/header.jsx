"use client";
import Image from "next/image";
import React from "react";
import { HiPencilSquare, HiArrowLeftOnRectangle } from "react-icons/hi2";
import { useSession } from "next-auth/react";
import SignInButton from "../signIn-button/signIn";

const Header = () => {
  const { data: session } = useSession();
  console.log("Session", session);

  return (
    <>
      <div className="flex justify-between p-5 border-b-2">
        <Image src="/assets/logo.jpg" width={80} height={50} alt="home logo" />
        <div className="flex justify-between items-center p-2 gap-4">
          <button className=" bg-cyan-400 rounded-md px-6 py-0 h-10 text-white">
            <span className="hidden sm:block">Create</span>
            <HiPencilSquare className="sm:hidden text-[20px]" />
          </button>
          <div className="border-2 border-gray-300 px-4 py-0 h-10 rounded-xl ">
            <span className="hidden sm:block text-center">
              {" "}
              <SignInButton />
            </span>
            <HiArrowLeftOnRectangle className="sm:hidden text-2xl  mt-2 " />
          </div>
          {session && session.user ? (
            <Image
              src={session.user.image}
              width={40}
              height={10}
              alt="profile logo"
              className="rounded-full cursor-pointer"
            />
          ) : (
            <Image
              src="/assets/profile.jpg"
              width={40}
              height={10}
              alt="profile logo"
              className="rounded-full cursor-pointer"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
