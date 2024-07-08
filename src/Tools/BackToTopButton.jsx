"use client"
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setBackToTopButton(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <button
                onClick={scrollUp}
                className={`fixed bottom-6 right-6 h-12 w-12 bg-[#0788FF] text-xl font-semibold flex justify-center items-center text-white py-2 px-4 rounded-full cursor-pointer ${backToTopButton ? 'block' : 'hidden'}`}
            >
                <FaArrowUp className="" />
            </button>
        </div>
    );
};

export default BackToTopButton;

