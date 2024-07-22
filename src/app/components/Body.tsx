import React from "react";
import Image from "next/image";
import Btn from "./Btn";
import { images } from "./Hero";
import LinkBtn from "./LinkBtn";

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

      <div className="container-2">
        <div className="content">
          <h5 className="heading">
            Helping a local <br />
            <span>business reinvent itself</span>
          </h5>
          <p className="paragraph ">
            We reached here with our hard work and dedication
          </p>
        </div>

        <div className="flex ">
          <Image
            // className="image"
            src={"/IconSmallOne.png"}
            alt="Illustration"
            width={35}
            height={35}
          />

          <div className="ml-3">
            <h6 className="heading">2,245,341</h6>
            <p className="paragraph">Members</p>
          </div>
        </div>
        <div className="flex ">
          <Image
            // className="image"
            src={"/IconSmallTwo.png"}
            alt="Illustration"
            width={35}
            height={35}
          />

          <div className="ml-3">
            <h6 className="heading">46,328</h6>
            <p className="paragraph">Clubs</p>
          </div>
        </div>
        <div className="flex ">
          <Image
            // className="image"
            src={"/IconSmallThree.png"}
            alt="Illustration"
            width={35}
            height={35}
          />

          <div className="ml-3">
            <h6 className="heading">828,867</h6>
            <p className="paragraph">Event Bookings</p>
          </div>
        </div>
        <div className="flex ">
          <Image
            // className="image"
            src={"/IconSmallFour.png"}
            alt="Illustration"
            width={35}
            height={35}
          />

          <div className="ml-3">
            <h6 className="heading">1,926,436</h6>
            <p className="paragraph">Payments</p>
          </div>
        </div>
      </div>

      <div className="container-3">
        <Image
          className="image-2"
          src={"/unlock.png"}
          alt="Illustration"
          width={325}
          height={350}
        />
        <div className="grid-content">
          <h5 className="heading">
            How to design your site footer like we did
          </h5>
          <p className="paragraph paragraph-2">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <Btn label="Learn More" />
        </div>
      </div>

      <div className="container-4">
        <Image
          className="image-3"
          src={"/image_9.png"}
          alt="Illustration"
          width={250}
          height={250}
        />
        <div className="grid-content-2">
          <p className="paragraph paragraph-2 paragraph-2a">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <p className="paragraph-3">Tim Smith</p>
          <p className="paragraph-4">British Dragon Boat Racing Association</p>

          <div className="flex map ">
            {images.map(
              (image, index) =>
                index <= 5 && (
                  <Image
                    key={index}
                    src={image}
                    alt="company logo"
                    width={30}
                    height={30}
                    className="images-5"
                  />
                )
            )}
            <LinkBtn label="Meet all customers" />
          </div>
        </div>
      </div>

      <div className="container-5 bg-white py-4  flex flex-col">
        <h6 className="heading mb-3">Caring is the new marketing</h6>
        <p className="paragraph paragraph-2a paragraph-5 mx-auto">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>

        <div className="container5a ">
          <div className="">
            <Image
              className="image-3"
              src={"/image_18.png"}
              alt="Illustration"
              width={400}
              height={250}
            />
            <div className="card ">
              <p>Creating Streamlined Safeguarding Processes with OneRen</p>
              <LinkBtn label="Read more" />
            </div>
          </div>

          <div className="">
            <Image
              className="image-3"
              src={"/image_19.png"}
              alt="Illustration"
              width={400}
              height={250}
            />
            <div className="card ">
              <p>
                What are your safeguarding responsibilities and how can you
                manage them?
              </p>
              <LinkBtn label="Read more" />
            </div>
          </div>

          <div className="">
            <Image
              className="image-3"
              src={"/image_20.png"}
              alt="Illustration"
              width={400}
              height={250}
            />
            <div className="card ">
              <p>Revamping the Membership Model with Triathlon Australia</p>
              <LinkBtn label="Read more" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
