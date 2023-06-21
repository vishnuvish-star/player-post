import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between">
        <Image src="/assets/logo.jpg" width={80} height={50} alt="home logo" />
        <div>
          <button className=" bg-cyan-400 rounded-md">Create</button>
          <button>Sign In</button>
        </div>
        <Image
          src="/assets/profile.jpg"
          width={40}
          height={20}
          alt="profile logo"
          className="rounded-full"
        />
      </div>
    </>
  );
};

export default Header;
