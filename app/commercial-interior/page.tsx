import React from "react";
import Link from "next/link";

export const metadata = {
  title: 'Commercial Interior Design - Minimal Limited',
  description: 'Professional commercial interior design services for offices, retail spaces, and institutions. Design and build solutions.',
  keywords: 'commercial interior design, office interior, workplace design, commercial space design',
}

export default function CommercialInteriorPage() {
  return (
    <div className="w-full bg-light">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-background">
        <div
          className="absolute inset-0 bg-cover bg-center bg-[url(https://www.minimallimited.com/wp-content/uploads/minimal-interior-design.png)]"
        ></div>
        <div className="absolute inset-0 bg-dark/50"></div>
        <div className="container relative z-10 flex h-full flex-col justify-center">
          <h1 className="mb-2 text-4xl font-bold text-light md:text-5xl">
            Hassle-free Move Into <br />
            Your New Workplace
          </h1>
          <p className="mb-6 text-xl text-light/90">Commercial Interior</p>
          <Link
            href="#offerings"
            className="inline-flex w-fit items-center justify-center rounded-full bg-primary px-6 py-3 text-light transition hover:bg-primary-light"
          >
            Explore
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1 h-4 w-4"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </section>

      {/* Rest of the component remains the same */}
      {/* Clients Section */}
      {/* Journey Section */}
      {/* Offerings Section */}
      {/* Additional sections... */}
    </div>
  );
} 