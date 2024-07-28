import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "./NavBar";

interface LinkProps {
  label: string;
}

const LinkBtn: React.FC<LinkProps> = ({ label }) => {
  return (
    <div className="flex">
      <Link
        href={"/"}
        className={`btn_txt p-1 flex text-green-700 ${navLinks} `}
      >
        {label}
        {/* <Image
          className="linkbtn"
          src="/Right_2.png"
          alt="Arrow right"
          width={30}
          height={1}
        /> */}
      </Link>
    </div>
  );
};

export default LinkBtn;
