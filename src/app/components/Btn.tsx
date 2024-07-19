"use client";
import React from "react";
import Image from "next/image";

interface BtnProps {
  label: string;
  icon?: string;
  iconAlt?: string;
  style?: string;
}
const Btn: React.FC<BtnProps> = ({
  label,
  icon = "",
  iconAlt = "",
  style = "",
}) => {
  return (
    <button
      className={`btn bg-green-500 rounded px-5 py-2 text-white border-none hover:bg-green-700 focus:bg-green-700 active:bg-green-700 ${style}`}
    >
      {`${label} `}
      {icon && (
        <Image
          className="my-auto m-1"
          src={icon}
          alt={iconAlt}
          width={12}
          height={1}
        />
      )}
    </button>
  );
};

export default Btn;
