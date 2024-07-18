import React from "react";
import Btn from "./Btn";
import Image from "next/image";
import Link from "next/link";

// write out the function to be carried out onClick here and pass it as a prop to the Btn component

const Footer = () => {
  return (
    <footer className="flex flex-col p-8">
      <div className="footer--div mx-auto text-center">
        <h4 className="footer--div--txt text-4xl font-bold">
          Pellentesque suscipit <br /> fringilla libero eu.
        </h4>
        <Btn
          style="footer--btn flex m-4 mx-auto"
          icon="/Right.png"
          iconAlt="Arrow right"
          label="Get a Demo"
        />
      </div>

      <div className="footer items-center text-[#f5f7fa] bg-[#263238] p-6 px-20  flex">
        <div className="footer_copy p-4 px-16">
          <Image
            className="p-4 px-0"
            src="/Footer_Logo.png"
            alt="Company Logo"
            width={150}
            height={1}
          />
          <p className="p-4 px-0 text-[9px]">
            Copyright © 2020 Nexcent ltd. <br /> All rights reserved
          </p>
          <div className="socials flex p-4 px-0">
            <Image
              src="/ig_icon.png"
              alt="Instagram Icon"
              width={33}
              height={32}
            />
            <Image
              src="/twitter.png"
              alt="Social Icon"
              width={33}
              height={32}
            />
            <Image
              src="/twitter.png"
              alt="Twitter Icon"
              width={33}
              height={32}
            />
            <Image
              src="/youtube_icon.png"
              alt="Youtube Icon"
              width={33}
              height={32}
            />
          </div>
        </div>
        <div className="socials_2 flex ml-auto p-4 px-16 text-[9px]">
          <div className="socials_2--company flex flex-col leading-[24px]">
            <h4 className="text-xl">Company</h4>
            <Link href={"/"}>About us</Link>
            <Link href={"/"}>Blog</Link>
            <Link href={"/"}>Contact us</Link>
            <Link href={"/"}>Pricing</Link>
            <Link href={"/"}>Testimonials</Link>
          </div>
          <div className="socials_2--support flex flex-col leading-[24px]">
            <h4 className="text-xl">Support</h4>
            <Link className="link" href={"/"}>
              Help center
            </Link>
            <Link className="link" href={"/"}>
              Terms of Service
            </Link>
            <Link className="link" href={"/"}>
              Legal
            </Link>
            <Link className="link" href={"/"}>
              Privacy policy
            </Link>
            <Link className="link" href={"/"}>
              Status
            </Link>
          </div>
          <div className="form__div">
            <h4 className="text-xl pb-2">Stay up to date</h4>

            <form
              action=""
              className="form--container flex rounded-md bg-[#3d494f]"
            >
              <input
                className="form flex-grow mt-2 rounded-[5px] p-1 px-[0.3rem] bg-inherit border-none"
                type="text"
                name="email"
                placeholder="Your email address"
              />
              <button
                type="submit"
                className="form-btn flex items-center justify-center p-2"
              >
                <Image
                  src="/send.png"
                  alt="send button"
                  width={15}
                  height={1}
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
