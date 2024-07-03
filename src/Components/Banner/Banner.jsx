"use client";
import { Button } from "flowbite-react";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className="lg:px-10 ">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-1 flex flex-col items-center md:items-start justify-center mb-8 md:mb-0">
        <h1 className="text-5xl font-bold uppercase text-white mt-4">
           {" hey! I'm"} <br /> <span className=""> sajadur rahman</span>
          </h1>
          <TypeAnimation
            sequence={[
              "Front end Web Developer", 
              2000, 
              "Specializing In React.js & Next.js",
              2000, 
            ]}
            wrapper="span"
            speed={10}
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "2em", fontWeight: "bold", display: "inline-block", color: "#0788FF", textTransform: "uppercase" }}
          />
          <div className="mt-8">
            <p className="text-[#8FA3B8] text-base font-medium">
            I am Sajadur Rahman, a dedicated front-end and WordPress web developer with 2 years of experience. I am committed to continually updating my skills with the latest technologies and writing clean, efficient code. I take pride in completing projects to the highest standard, always striving to improve with each new challenge.
            </p>
          </div>
          <div className="mt-8">
            <div className="flex gap-8 items-center">
            <div className="">
                <Button className="bg-[#0788FF] hover:bg-[#0788FF] text-xl px-2 py-2">GET IN TOUCH</Button>
            </div>
            <div className="flex items-center gap-2">
            <Image
            src="/facebook.png"
            className="w-10 h-10 rounded-full border-2"
            height={600}
            width={600}
            alt="facebook"
          />
            <Image
            src="/linkdin.png"
               className="w-10 h-10 rounded-full border-2"
            height={600}
            width={600}
            alt="linkdin"
          />
            <Image
            src="/github.png"
             className="w-10 h-10 rounded-full border-2"
            height={600}
            width={600}
            alt="github"
          />
            </div>
            </div>
          </div>
        </div>
        <div id="rotating-img" className="rotating flex-1 flex justify-center md:justify-end">
          <Image
            src="/sojib-1.png"
            className="w-full h-1/2"
            height={300}
            width={300}
            alt="Hero Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
