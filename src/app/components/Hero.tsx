import React from "react";
import Btn from "./Btn";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div>
          <h2 className="text">
            Lessons and insights <br />
            <span className="text-inner">from 8 years</span>
          </h2>
          <p>
            Where to grow your business as a photographer: site or social media?
          </p>
          <Btn label="Register" />
        </div>
        <Image
          className="image"
          src={"/illustration.png"}
          alt="Illustration"
          width={325}
          height={375}
        />
      </div>
    </>
  );
};

export default Hero;
