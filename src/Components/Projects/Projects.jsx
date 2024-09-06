"use client"; 
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import Image from "next/image";

// Fetch projects data from JSON
const fetchProjects = async () => {
  const response = await axios.get("/Projects/projects.json");
  return response.data;
};

const Projects = () => {
  // Fetch projects using useQuery
  const { data: projects, error, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div id="project" className="px-4 lg:px-10 mt-5 lg:mt-10 mb-5 lg:mb-20">
      <h1 className="text-2xl lg:text-4xl font-medium text-white text-start mb-10">RECENT PROJECT</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1} // Default to 1 slide per view on small screens
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide
            key={project.id}
            className="swiper-slide h-72 md:h-96 relative"
          >
            <div className="image-wrapper screen rounded-xl w-full md:w-[300px]  lg:w-[350px] h-[300px] md:h-[350px] lg:h-[400px]">
              <Image
                src={project.image}
                alt={project.name}
                width={600}
                height={400}
                layout="responsive"
                className="rounded-xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
