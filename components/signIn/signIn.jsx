"use client";

import React from "react";

import { useRouter } from "next/navigation";

const SignIn = () => {
  const route = useRouter();
  return (
    <>
      <div className=" bg-slate-200     p-8  w-[20rem] rounded-md mx-auto my-0 mt-10">
        <h2 className=" mx-10  text-center text-xl">Sign In</h2>
        <form className="bg-slate-100  p-2 pb-8  w-[16rem] rounded-md drop-shadow-xl">
          <label className="flex items-center m-2">Enter Your Email</label>
          <input
            type="text"
            placeholder="Email.."
            className="flex items-center p-2 outline-none "
          />

          <label className="flex items-center m-2 ">Enter Your Password</label>
          <input
            type="password"
            placeholder="Password"
            className="flex items-center p-2 outline-none "
          />
          <button
            className="btn ml-16 mt-4 drop-shadow-lg bg-slate-100"
            type="submit"
          >
            Submit
          </button>
        </form>
        <p className="text-sm mt-4 ">
          Don't have acoount?Click
          <button
            onClick={() => {
              route.push("/signup");
            }}
          >
            Signup
          </button>
        </p>
      </div>
    </>
  );
};

export default SignIn;
