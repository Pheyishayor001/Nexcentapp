import React from "react";
import Btn from "./Btn";
import Image from "next/image";

export const images = [
  "/LogoOne.png",
  "/LogoTwo.png",
  "/LogoThree.png",
  "/LogoFour.png",
  "/LogoFive.png",
  "/LogoSix.png",
  "/LogoSeven.png",
];

const Hero = () => {
  return (
    <>
      <div className=" flex flex-col">
        <div className="hero flex p-[2.2rem] px-[7.5rem]">
          <div className="hero-comp">
            <h2 className="h2 text-5xl text-[#4d4d4d] font-semibold leading-normal">
              Lessons and insights <br />
              <span className="text-inner text-[#4caf4f]">from 8 years</span>
            </h2>
            <p className="paragraph text-[#717171] text-xs py-6 pb-8">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <Btn style="btn" label="Register" />
          </div>
          <Image
            className="hero_img m-auto"
            src={"/Frame_35.png"}
            alt="Illustration"
            width={325}
            height={375}
          />
        </div>

        <div className="flex justify-center">
          <div className="dot  bg-[#4caf4f] "></div>
          <div className="dot bg-[#a2f1a5]"></div>
          <div className="dot bg-[#a2f1a5]"></div>
        </div>
      </div>

      <div className="py-4 pb-12 mt-2 bg-white text-center">
        <h4 className="text-[#4d4d4d] text-2xl font-black ">Our Clients</h4>
        <p className="paragraph manage text-[#717171] text-xs py-6 pb-8">
          We have been working with some Fortune 500+ clients
        </p>

        <div className="image images-6 flex justify-center pb-2">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="company logo"
              width={30}
              height={30}
              className="images mx-[4.5rem]"
            />
          ))}
        </div>
        <h4 className="text-[#4d4d4d] text-2xl font-black pt-5">
          Manage your entire community <br /> in a single system
        </h4>
        <p
          className="paragraph manage
 text-[#717171] text-xs py-6 pb-8"
        >
          Who is Nextcent suitable for?
        </p>

        <div className="membership grid grid-cols-3 gap-4 px-[5rem]">
          <div className="box mx-[1rem] p-[0.5rem]">
            <Image
              src={"/LogoOne.png"}
              alt="company logo"
              width={50}
              height={50}
              className="mx-auto"
            />
            <h5 className="h5 text-[#4d4d4d] text-2xl font-black ">
              Membership <br /> Organisations
            </h5>
            <p className="paragraph text-[#717171] text-xs py-6 pb-8">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="box mx-[1rem] p-[0.5rem]">
            <Image
              src={"/LogoTwo.png"}
              alt="company logo"
              width={50}
              height={50}
              className="mx-auto"
            />
            <h5 className="h5 text-[#4d4d4d] text-2xl font-black ">
              National <br /> Associations
            </h5>
            <p className="paragraph text-[#717171] text-xs py-6 pb-8">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="box box-3 mx-[1rem] p-[0.5rem]">
            <Image
              src={"/LogoThree.png"}
              alt="company logo"
              width={50}
              height={50}
              className="mx-auto"
            />
            <h5 className=" h5 text-[#4d4d4d] text-2xl font-black ">
              Clubs and <br /> Groups
            </h5>
            <p className="paragraph text-[#717171] text-xs py-6 pb-8">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
