import { FooterCopyright } from 'flowbite-react';
import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='border-t-[1px] border-[#8FA3B8]'>
            <FooterCopyright
                href="https://www.linkedin.com/in/sajadurrahman/"
                by=" copyright all right reserved"
                year={currentYear}
                className='text-lg py-5 font-medium text-[#8FA3B8]'
            />
        </footer>
    );
};

export default Footer;
