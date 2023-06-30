"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

const SignUp = () => {
  const route = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // onsubmit function
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className=" bg-slate-200     p-8  w-[20rem] rounded-md mx-auto my-0 mt-10">
        <h2 className=" mx-10  text-center text-xl">Create Account</h2>
        <form
          onSubmit={signUp}
          className="bg-slate-100  p-2 pb-8  w-[16rem] rounded-md drop-shadow-xl"
        >
          {/* <label className="flex items-center m-2">Enter Your Name</label>
          <input
            type="text"
            placeholder="Email.."
            className="flex items-center p-2 outline-none "
          /> */}

          <label className="flex items-center m-2 ">Create Email</label>
          <input
            type="email"
            placeholder="Email"
            className="flex items-center p-2 outline-none "
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {/* <label className="flex items-center m-2">New Password</label>
          <input
            type="text"
            placeholder="Email.."
            className="flex items-center p-2 outline-none "
          /> */}
          <label className="flex items-center m-2">Create Password</label>
          <input
            type="password"
            placeholder="Password"
            className="flex items-center p-2 outline-none "
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            className="btn ml-16 mt-4 drop-shadow-lg bg-slate-100"
            type="submit"
          >
            Submit
          </button>
        </form>
        <p className="text-sm mt-4 ">
          Already have acoount?
          <button
            type="button"
            onClick={() => {
              route.push("/signin");
            }}
            className="underline underline-offset-1"
          >
            Sign In
          </button>
        </p>
      </div>
    </>
  );
};

export default SignUp;
