import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const SignInButton = () => {
  const { data: session } = useSession();
  return session && session.user ? (
    <div>
      <button className="mt-2" onClick={() => signOut()}>
        Sign Out
      </button>
    </div>
  ) : (
    <button className="mt-2" onClick={() => signIn()}>
      Sign In
    </button>
  );
};
export default SignInButton;
