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

const CV = "https://drive.google.com/file/d/1izgk17BQveMLL_VfeIvyTymEC6IdO4vy/view?usp=sharing"

const AboutMe = () => {
  const handleDownload = () => {
    window.open(CV, '_blank');
  }
  return  (
    <div id="about" className="mb-10 lg:mb-20 px-2 lg:px-10">
      <div className="flex flex-col lg:flex-row w-full gap-10 lg:gap-0">
        <div className="flex-1 flex justify-center items-center">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper w-64 lg:w-80 rounded-2xl"
          >
            <SwiperSlide className="w-full lg:w-80 h-96">
              <Image
                src="/Images/sojib-4.jpg"
                draggable="false"
                className="w-full lg:w-80 h-96 rounded-2xl border-[#0788FF] border-4"
                height={600}
                width={600}
                alt="sojib"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full lg:w-80 h-96">
              <Image
                src="/Images/sojib-2.jpg"
                draggable="false"
                className="w-full lg:w-80 h-96 rounded-2xl border-[#0788FF] border-4"
                height={600}
                width={600}
                alt="sojib"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full lg:w-80 h-96">
              <Image
                src="/Images/sojib-3.jpg"
                className="w-full lg:w-80 h-96 rounded-2xl border-[#0788FF] border-4"
                height={600}
                width={600}
                alt="sojib"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex-1 lg:border-l-2 lg:border-[#0788FF] lg:pl-12">
          <h1 className="text-4xl font-medium text-white">
          {" Hi There! I'm Sajadur Rahman"}
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
              <span>Bangla, English, Hindi</span>
            </div>
            <button
            onClick={handleDownload}
                  type="submit"
                  className="bg-[#0788FF] text-sm mt-5 text-white py-3 px-5 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  DOWNLOAD CV
                </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
