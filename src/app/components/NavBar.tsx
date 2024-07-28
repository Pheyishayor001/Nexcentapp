"use client";
import React, { useState } from "react";
import Image from "next/image";
import Btn, { MenuBtn } from "./Btn";
import Link from "next/link";

export const navLinks = "p-3 cursor-pointer hover:text-green-700";

const NavBar = () => {
  const [imgSrc, setImgSrc] = useState("/menuIcon.png");
  const [active, setActive] = useState("inactive");
  const onClick = () => {
    setImgSrc((prevImg) =>
      prevImg === "/menuIcon.png" ? "/closeIcon.png" : "/menuIcon.png"
    );

    setActive((prevClass) =>
      prevClass === "inactive" ? "active" : "inactive"
    );
  };
  return (
    <nav className="nav-container">
      <div className="mobileNav">
        <Image
          className="my-auto"
          src="/Nav_Logo.png"
          alt="Company Logo"
          width={150}
          height={7}
        />
        <MenuBtn event={onClick} src={`${imgSrc}`} />
      </div>
      <div className={` ${active} nav flex p-4 px-12`}>
        <Image
          className="navImg h-6 w-[154.49px] my-auto "
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

        <div className="nav--btn">
          <Link href={"/"} className={`text-green-700 ${navLinks}`}>
            Login
          </Link>
          <Btn style="p-2" label="Sign up" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
