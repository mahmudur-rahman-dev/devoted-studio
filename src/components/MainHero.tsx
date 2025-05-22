import React from "react";

export default function MainHero() {
  return (
    <section
      className="relative flex min-h-[600px] items-center justify-center bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(https://oceandrive.com/get/files/image/galleries/modern-kitchen-ideas-design-hero.jpg)] bg-center bg-cover bg-no-repeat"
    >
      <div className="container z-10 flex flex-col items-center py-24 text-center">
        <h1 className="text-5xl font-normal tracking-wider text-white md:text-6xl">
          Life is a Celebration
        </h1>
        <p className="mb-10 mt-4 text-xl font-light text-white md:text-2xl">
          The start is just a click away.
        </p>
        <a
          className="flex items-center rounded-md bg-gold px-8 py-3 font-medium text-dark transition-colors hover:bg-secondary"
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
