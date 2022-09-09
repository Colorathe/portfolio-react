import React from "react";

const Hero = () => {
  return (
    <div id="hero" className="flex items-center justify-center flex-col py-20">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 font-semibold dark:text-indigo-500">
          Welcome to my portfolio, This is Joaquin
        </h1>
        <p className="text-md md:text-xl mb-3 text-gray-600 dark:text-gray-300">
        My name is Joaquin Vulcano I'm Front End Developer based in Argentina 🇦🇷 . I describe myself as a passionate developer, autodidactic who loves coding and the web platform. In my free times you can find me at the gym 🏋️‍♂️, coding or playing videogames 🖥.
        </p>
        <a
          href="#projects"
          className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        >
          See Works
        </a>
      </div>
    </div>
  );
};

export default Hero;
