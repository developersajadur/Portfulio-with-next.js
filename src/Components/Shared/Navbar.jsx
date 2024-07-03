import React from 'react';
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

const Header = () => {
    const navLinks = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "About",
            link: "/about"
        },
        {
            title: "Contact",
            link: "/contact"
        },
    ];

    return (
        <Navbar className='bg-[#0B1221] text-[#748195] py-5 z-20 px-2 lg:px-10'>
            <NavbarBrand as={Link} href="/">
                <span className="self-center whitespace-nowrap text-xl font-semibold">Sajadur Rahman</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                {navLinks.map((item) => (
                    <NavbarBrand as={Link} key={item.link} href={item.link}>
                        {item.title}
                    </NavbarBrand>
                ))}
            </NavbarCollapse>
        </Navbar>
    );
};

export default Header;
