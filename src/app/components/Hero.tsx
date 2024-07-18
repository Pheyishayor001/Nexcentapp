import React from "react";
import Btn from "./Btn";
import Image from "next/image";

const images = [
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
        <div className=" flex p-[2.2rem] px-[7.5rem]">
          <div>
            <h2 className=" text-5xl text-[#4d4d4d] font-semibold leading-normal">
              Lessons and insights <br />
              <span className="text-inner text-[#4caf4f]">from 8 years</span>
            </h2>
            <p className="text-[#717171] text-xs py-6 pb-8">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <Btn style="btn" label="Register" />
          </div>
          <Image
            className=" ml-auto"
            src={"/illustration.png"}
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

      <div className="py-4 pb-12 my-2 bg-white text-center">
        <h4 className="text-[#4d4d4d] text-2xl font-black ">Our Clients</h4>
        <p className="paragraph text-[#717171] text-xs py-6 pb-8">
          We have been working with some Fortune 500+ clients
        </p>

        <div className="image flex justify-center pb-2">
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
        <h4 className="clients-2 text-[#4d4d4d] text-2xl font-black pt-5">
          Manage your entire community <br /> in a single system
        </h4>
        <p className="paragraph text-[#717171] text-xs py-6 pb-8">
          Who is Nextcent suitable for?
        </p>

        <div className="membership grid grid-cols-3 gap-4 px-[5rem]">
          <div className="box mx-[5rem] p-[0.5rem]">
            <Image
              src={"/iconOne.png"}
              alt="company logo"
              width={50}
              height={50}
              className="images  gridImage mx-auto"
            />
            <h5>
              Membership <br /> Organisations
            </h5>
            <p className="paragraph text-[#717171] text-xs py-6 pb-8">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="box mx-[5rem] p-[0.5rem]">
            <Image
              src={"/iconTwo.png"}
              alt="company logo"
              width={50}
              height={50}
              className="images mx-[4.5rem] gridImage"
            />
            <h5>
              National <br /> Associations
            </h5>
            <p className="paragraph text-[#717171] text-xs py-6 pb-8">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="box mx-[5rem] p-[0.5rem]">
            <Image
              src={"/iconOne.png"}
              alt="company logo"
              width={50}
              height={50}
              className="images mx-[4.5rem] gridImage"
            />
            <h5>
              Membership <br /> Organisations
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
