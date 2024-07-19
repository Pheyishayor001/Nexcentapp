import React from "react";
import Image from "next/image";
import Btn from "./Btn";

const Body = () => {
  return (
    <>
      <div className="containers bg-white flex">
        <Image
          className="image"
          src={"/Frame_35.png"}
          alt="Illustration"
          width={350}
          height={375}
        />
        <div className="unseen">
          <h4 className="text-[#4d4d4d] text-2xl font-black pt-5">
            The unseen of spending three <br /> years at Pixelgrade
          </h4>
          <p className="paragraph text-[#717171] text-xs py-6 pb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <Btn label="Learn More" />
        </div>
      </div>
    </>
  );
};

export default Body;
