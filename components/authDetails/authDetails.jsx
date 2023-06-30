"use client";
import React from "react";
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import SignIn from "../signIn/signIn";
import SignUp from "../signUp/signUp";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState("");
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signOut successfully");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div>{authUser ? <SignIn /> : <SignUp />}</div>
    </>
  );
};

export default AuthDetails;
