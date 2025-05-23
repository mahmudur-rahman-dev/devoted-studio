import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function MainHero() {
  return (
    <section className="relative flex min-h-[600px] items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://oceandrive.com/get/files/image/galleries/modern-kitchen-ideas-design-hero.jpg"
          alt="Modern interior design"
          fill
          priority={true}
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="container relative z-10 flex flex-col items-center py-24 text-center">
        <h1 className="text-5xl font-normal tracking-wider text-white md:text-6xl">
          Life is a Celebration
        </h1>
        <p className="mb-10 mt-4 text-xl font-light text-white md:text-2xl">
          The start is just a click away.
        </p>
        <Link
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
        </Link>
      </div>
    </section>
  );
}
