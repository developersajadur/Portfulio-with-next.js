import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "../../app/globals.css";
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const Projects = () => {
    const [hoveredSlide, setHoveredSlide] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredSlide(index); // Set the index of the hovered slide
    };

    const handleMouseLeave = () => {
        setHoveredSlide(null); // Reset on mouse leave
    };

    return (
        <div id='project' className='px-4 lg:px-10 mt-5 lg:mt-10 mb-5 lg:mb-20'>
            <h1 className="text-2xl lg:text-4xl font-medium text-white text-start mb-10">RECENT PROJECT</h1>
            <Swiper
                effect={'coverflow'}
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
                    320: { // Extra small screens
                        slidesPerView: 1,
                    },
                    640: { // Small screens
                        slidesPerView: 1,
                    },
                    768: { // Medium screens
                        slidesPerView: 2,
                    },
                    1024: { // Large screens
                        slidesPerView: 3,
                    },
                }}
            >
                {['/project-1.png', '/project-2.png', '/project-3.png', '/project-4.png'].map((src, index) => (
                    <SwiperSlide
                        key={index}
                        className='swiper-slide h-72 md:h-96 relative'
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className='image-wrapper screen rounded-xl w-full md:w-[300px] h-[300px] lg:w-[350px] md:h-[350px] lg:h-[400px]'>
                            <Image 
                                src={src}
                                alt={`Project ${index + 1}`} 
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
