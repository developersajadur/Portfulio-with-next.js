"use client"
import AboutMe from '@/Components/AboutMe/AboutMe';
import Banner from '@/Components/Banner/Banner';
import Contact from '@/Components/Contact/Contact';
import HomePageResume from '@/Components/HomePageResume/HomePageResume';
import Projects from '@/Components/Projects/Projects';
import Skills from '@/Components/Skills/Skills';
import React from 'react';
const Page = () => {
  return (
    <div>
      <Banner />
      <Skills />
      <AboutMe />
      <HomePageResume />
      <Projects />
      <Contact />
    </div>
  );
};

export default Page;
