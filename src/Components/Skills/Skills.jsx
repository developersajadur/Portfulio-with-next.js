"use client"
import React from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from "keen-slider/react";
import Image from 'next/image';

const Skills = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        slides: {
            perView: 5,
            spacing: 5,
        },
        animation: { duration: 10000, easing: (t) => t },
    });

    return (
        <div ref={sliderRef} className="keen-slider bg-[#0C1324] py-4 lg:px-10 -mt-10 mb-20">
            <div className="keen-slider__slide number-slide1">
                <Image
                    src="/javascript.png"
                    className="w-24 h-24"
                    height={40}
                    width={40}
                    alt="Facebook"
                />
            </div>
            <div className="keen-slider__slide number-slide2">
                <Image
                    src="/react.png"
                    className="w-24 h-24"
                    height={40}
                    width={40}
                    alt="LinkedIn"
                />
            </div>
            <div className="keen-slider__slide number-slide3">
                <Image
                    src="/node.png"
                     className="w-24 h-24"
                    height={40}
                    width={40}
                    alt="GitHub"
                />
            </div>
            <div className="keen-slider__slide number-slide3">
                <Image
                    src="/mongodb.png"
                     className="w-24 h-24"
                    height={40}
                    width={40}
                    alt="GitHub"
                />
            </div>
            <div className="keen-slider__slide number-slide3">
                <Image
                    src="/firebase.png"
                    className="w-24 h-24"
                    height={40}
                    width={40}
                    alt="GitHub"
                />
            </div>

        </div>
    );
};

export default Skills;
