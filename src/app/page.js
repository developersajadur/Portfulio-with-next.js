"use client"
import AboutMe from '@/Components/AboutMe/AboutMe';
import Banner from '@/Components/Banner/Banner';
import Contact from '@/Components/Contact/Contact';
import HomePageResume from '@/Components/HomePageResume/HomePageResume';
import Projects from '@/Components/Projects/Projects';
import Skills from '@/Components/Skills/Skills';
import { Button } from 'flowbite-react';
import React from 'react';

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <Skills></Skills>
      <AboutMe></AboutMe>
      <HomePageResume></HomePageResume>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default page;