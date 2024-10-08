"use client";
import { Button } from "flowbite-react";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className="px-2 md:px-5 lg:px-10 ">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-1 flex flex-col items-center md:items-start justify-start lg:justify-center mb-8 md:mb-0">
          <h1 className="text-3xl lg:text-5xl font-bold uppercase text-white mt-4">
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
            className="font-bold text-[#0788FF] uppercase inline-block text-xl md:text-2xl lg:text-3xl"
          />
          <div className="mt-8">
            <p className="text-[#8FA3B8] text-base font-medium">
              I am Sajadur Rahman, a dedicated front-end and WordPress web
              developer with 2 years of experience. I am committed to
              continually updating my skills with the latest technologies and
              writing clean, efficient code. I take pride in completing projects
              to the highest standard, always striving to improve with each new
              challenge.
            </p>
          </div>
          <div className="mt-8">
            <div className="flex gap-8 items-center">
              <div className="">
                <button
                  type="submit"
                  className="bg-[#0788FF] text-sm text-white py-3 px-5 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  GET IN TOUCH
                </button>
              </div>
              <div className="flex items-center gap-2">
                <a href="https://www.facebook.com/developersajadur" target="_blank">
                <Image
                  src="/Images/facebook.png"
                  className="w-10 h-10 rounded-full border-2"
                  height={600}
                  width={600}
                  alt="facebook"
                />
                </a>
             <a href="https://www.linkedin.com/in/sajadurrahman/" target="_blank">
             <Image
                  src="/Images/linkdin.png"
                  className="w-10 h-10 rounded-full border-2"
                  height={600}
                  width={600}
                  alt="linkdin"
                />
             </a>
               <a href="https://github.com/developersajadur" target="_blank">
               <Image
                  src="/Images/github.png"
                  className="w-10 h-10 rounded-full border-2"
                  height={600}
                  width={600}
                  alt="github"
                />
               </a>
              </div>
            </div>
          </div>
        </div>
        <div
          id="rotating-img"
          className="rotating flex-1 flex justify-center md:justify-end"
        >
          <Image
            src="/Images/sojib-1.png"
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
