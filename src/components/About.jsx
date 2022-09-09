import React from "react";
import SectionTitle from "./SectionTitle";
import Spinning from "./Spinning";
import { fotoperfil } from "../assets";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20">
      <div className="w-full md:w-6/12">
        <SectionTitle>About Me</SectionTitle>
        <p className="text-md text-gray-600 dark:text-gray-300 ">
          I am currently learning ReactJS and NodeJS. I also have a job as a full time Front-End developer. I am a very proactive, passionate, self-taught and charismatic person. I really enjoy working in a team and meeting new people all the time.
        </p>
        <a
          href="mailto:joaquinvulcano@gmail.com"
          className="block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500"
        >
          joaquinevulcano@gmail.com
        </a>
      </div>

      <Spinning text="Frontend Developer Web Developer">
        <div className="w-full">
          <img
            src={fotoperfil}
            alt="Joaquin Vulcano"
            className="w-full h-full mx-auto"
          />
        </div>
      </Spinning>
    </div>
  );
};

export default About;
