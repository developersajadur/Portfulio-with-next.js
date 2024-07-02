"use Client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import Image from "next/image";
import { Button } from "flowbite-react";

const AboutMe = () => {
  return  (
    <div className="mb-20 lg:px-10">
      <div className="flex w-full">
        <div className="flex-1 flex justify-center items-center">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper w-80 rounded-2xl"
          >
            <SwiperSlide className="w-80 h-96">
              <Image
                src="/sojib-2.jpg"
                className="w-80 h-96 rounded-2xl border-[#0788FF] border-4"
                height={600}
                width={600}
                alt="linkdin"
              />
            </SwiperSlide>
            <SwiperSlide className="w-80 h-96">
              <Image
                src="/sojib-3.jpg"
                className="w-80 h-96 rounded-2xl border-[#0788FF] border-4"
                height={600}
                width={600}
                alt="linkdin"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex-1 border-l-2 border-[#0788FF] pl-12">
          <h1 className="text-4xl font-medium text-white">
            Hi There! I'm Sajadur Rahman
          </h1>
          <h3 className="text-2xl font-medium text-[#0788FF] mt-3">
            Front End Web Developer
          </h3>
          <p className="text-[#8FA3B8] text-lg mt-3">
            A dedicated front-end web developer with 2 years of experience. I am
            committed to continually updating my skills with the latest
            technologies and writing clean, efficient code. I take pride in
            completing projects to the highest standard, always striving to
            improve with each new challenge.
          </p>
          <div className="text-[#8FA3B8] text-lg mt-3">
            <div className="grid grid-cols-[auto_auto_2fr] gap-x-4 gap-y-2">
              <span>Birthday</span>
              <span>:</span>
              <span>July 04, 2005</span>

              <span>Phone</span>
              <span>:</span>
              <span>+8801787448412</span>

              <span>Email</span>
              <span>:</span>
              <span>itzmesojib@gmail.com</span>

              <span>From</span>
              <span>:</span>
              <span>Chirirbandar, Dinajpur, Bangladesh</span>

              <span>Language</span>
              <span>:</span>
              <span>Bangla, English</span>
            </div>
            <Button className="bg-[#0788FF] hover:bg-[#0788FF] text-xl px-2 py-2 mt-5">Download CV</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;