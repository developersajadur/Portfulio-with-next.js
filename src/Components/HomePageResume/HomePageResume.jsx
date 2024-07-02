import React from "react";
import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { PiHandbagFill } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa";

const HomePageResume = () => {
  return (
    <div className="lg:px-10">
      <div className="flex">
        <div className="flex-1">
          <h1 className="text-4xl text-white font-medium flex gap-3 items-center mb-4">
            <PiHandbagFill /> Experience
          </h1>
          <Timeline>
            <TimelineItem>
              <TimelinePoint />
              <TimelineContent>
                <TimelineTitle className="text-3xl text-[#0788FF] font-medium">
                  Web Developer
                </TimelineTitle>
                <TimelineTime className="text-xl text-[#8FA3B8] font-medium mt-4">
                  July 2022 - Present
                </TimelineTime>
                <div className="text-white font-medium text-3xl mt-4">
                  IT Vanilla, Dinajpur
                </div>
                <TimelineBody className="text-[#8FA3B8] mt-4">
                  Specializing in WordPress, he has over 2 years of expertise in
                  creating dynamic, responsive websites and applications. With a
                  strong focus on front-end development using React.js and
                  Next.js, Sajadur is dedicated to transforming ideas into
                  digital realities through clean, efficient code and modern web
                  technologies.
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>

        {/* -------------------------------------------------------------------- */}
        <div className="flex-1">
          <h1 className="text-4xl text-white font-medium flex gap-3 items-center mb-4">
          <FaGraduationCap /> Education
          </h1>
          <Timeline>
            <TimelineItem>
              <TimelinePoint />
              <TimelineContent>
                <TimelineTitle className="text-3xl text-[#0788FF] font-medium">
                 S.S.C 
                </TimelineTitle>
                <TimelineTime className="text-xl text-[#8FA3B8] font-medium mt-4">
                  January 2020 - December 2022
                </TimelineTime>
                <div className="text-white font-medium text-3xl mt-4">
                 Daffodil Residential Model School, Chirirbandar, Dinajpur
                </div>
                <TimelineBody className="text-[#8FA3B8] mt-4">
                S.S.C graduate from Daffodil Residential Model School, Chirirbandar, Dinajpur, completing studies from January 2020 to December 2022.
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelinePoint />
              <TimelineContent>
                <TimelineTitle className="text-3xl text-[#0788FF] font-medium">
                Diploma In Mechanical Engineering
                </TimelineTitle>
                <TimelineTime className="text-xl text-[#8FA3B8] font-medium mt-4">
                Expected Graduation: 2027
                </TimelineTime>
                <div className="text-white font-medium text-3xl mt-4">
                Dinajpur Polytechnic Institute
                </div>
                <TimelineBody className="text-[#8FA3B8] mt-4">
                S.S.C graduate from Daffodil Residential Model School, Chirirbandar, Dinajpur, completing studies from January 2020 to December 2022.
                </TimelineBody>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default HomePageResume;
