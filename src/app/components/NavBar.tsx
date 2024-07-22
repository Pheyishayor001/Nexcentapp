import React from "react";
import Image from "next/image";
import Btn from "./Btn";
import Link from "next/link";

export const navLinks = "p-3 cursor-pointer hover:text-green-700";

const NavBar = () => {
  return (
    <nav className="nav flex p-4 px-12">
      <Image
        className="navImg h-6 w-[154.49px] my-auto"
        src="/Nav_Logo.png"
        alt="Company Logo"
        width={100}
        height={1}
      />

      <div className="nav--links m-auto">
        <Link href={"/"} className={navLinks}>
          Home
        </Link>
        <Link href={"/"} className={navLinks}>
          Service
        </Link>
        <Link href={"/"} className={navLinks}>
          Feature
        </Link>
        <Link href={"/"} className={navLinks}>
          Product
        </Link>
        <Link href={"/"} className={navLinks}>
          Testimonial
        </Link>
        <Link href={"/"} className={navLinks}>
          FAQ
        </Link>
      </div>

      <div className="nav--btn ml-auto">
        <Link href={"/"} className={`text-green-700 ${navLinks}`}>
          Login
        </Link>
        <Btn style="p-2" label="Sign up" />
      </div>
    </nav>
  );
};

export default NavBar;
