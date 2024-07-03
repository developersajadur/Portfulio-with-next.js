import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const Projects = () => {
    return (
        <div className='px-2 lg:px-10 mb-5 lg:mb-20'>
            <h1 className="text-2xl lg:text-4xl font-medium text-white text-start mb-10">RECENT PROJECT</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
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
                    // when window width is >= 640px
                    440: {
                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 2,
                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                <SwiperSlide className='swiper-slide h-96'>
                    <div className="image-wrapper h-96 ">
                        <Image 
                            src="/project-1.png" 
                            alt="Project 1" 
                            width={600}
                            height={400}
                            layout="responsive"
                            className="rounded-lg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide h-96'>
                    <div className="image-wrapper h-96 ">
                        <Image 
                            src="/project-2.png" 
                            alt="Project 2" 
                            width={600}
                            height={400}
                            layout="responsive"
                            className="rounded-lg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide h-96'>
                    <div className="image-wrapper h-96 ">
                        <Image 
                            src="/project-3.png" 
                            alt="Project 3" 
                            width={600}
                            height={400}
                            layout="responsive"
                            className="rounded-lg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide h-96'>
                    <div className="image-wrapper h-96">
                        <Image 
                            src="/project-4.png" 
                            alt="Project 4" 
                            width={600}
                            height={400}
                            layout="responsive"
                            className="rounded-lg"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Projects;
