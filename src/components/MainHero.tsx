import React from 'react';

export default function MainHero() {
  return (
    <section
      className="relative min-h-[600px] flex items-center justify-center"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(https://oceandrive.com/get/files/image/galleries/modern-kitchen-ideas-design-hero.jpg) center/cover no-repeat",
      }}
    >
      <div className="container z-10 py-24 flex flex-col items-center text-center">
        <h1 className="text-white text-5xl md:text-6xl font-normal tracking-wider">
          Life is a Celebration
        </h1>
        <p className="text-white text-xl md:text-2xl font-light mt-4 mb-10">
          The start is just a click away.
        </p>
        <a
          className="bg-gold hover:bg-secondary text-dark px-8 py-3 rounded-md font-medium transition-colors flex items-center"
          href="#contact"
        >
          Book A Meeting
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
