"use client";
import React, { useState } from "react";
import Link from "next/link";

export const metadata = {
  title: 'Residential Interior Design - Minimal Limited',
  description: 'Transform your home with our residential interior design services. Quality materials, custom designs, and professional installation.',
  keywords: 'residential interior design, home interior, house design, minimal limited residential',
}

export default function ResidentialInteriorPage() {
  const [activeTab, setActiveTab] = useState(0);

  const steps = [
    {
      name: "Meet and Greet",
      progress: 10,
      description:
        "You'll meet our expert designers, and they will listen to your requirements. (No payment is required.)",
    },
    {
      name: "Design Development",
      progress: 30,
      description:
        "With a range of designs, our designers will seek your approval and develop the design from start to finish. (Pay 5% of the estimated quotation.)",
    },
    {
      name: "Place Your Order",
      progress: 60,
      description:
        "Once the order is placed, we will begin working on construction drawings. Upon your written approval, we will start procuring materials and preparing the site to commence work.",
    },
    {
      name: "Installation Process",
      progress: 90,
      description:
        "To ensure everything is on track, we'll provide you with a Gantt Chart. We'll also conduct 154 quality checks. (Pay 95% of the final quotation.)",
    },
    {
      name: "You Moving In",
      progress: 100,
      description:
        "Now that our installation is complete, you can move into your place.",
    },
  ];

  // Create style objects for dynamic values
  const progressBarStyle = { width: `${steps[activeTab].progress}%` };
  const progressDotStyle = { left: `${steps[activeTab].progress}%` };

  const projects = [
    {
      title: "5375sft Duplex | Rangpur",
      image: "https://ext.same-assets.com/3020618206/2164984555.webp",
    },
    {
      title: "3676sft Duplex | Bashundhara",
      image:
        "https://www.minimallimited.com/wp-content/uploads/Wahid-Cover.webp",
    },
    {
      title: "2115sqft Flat | Bashundhara",
      image:
        "https://www.minimallimited.com/wp-content/uploads/Monwar-Hossain-12.webp",
    },
  ];

  const galleryImages = [
    {
      src: "https://www.minimallimited.com/wp-content/uploads/2022/10/interior.jpg",
      alt: "Interior design",
    },
    {
      src: "https://www.minimallimited.com/wp-content/uploads/2022/10/dining-space-interior-scaled.jpg",
      alt: "Dining space",
    },
    {
      src: "https://www.minimallimited.com/wp-content/uploads/2022/11/12-scaled.jpg",
      alt: "Interior design",
    },
    {
      src: "https://www.minimallimited.com/wp-content/uploads/2022/10/living-space.webp",
      alt: "Living space",
    },
    {
      src: "https://www.minimallimited.com/wp-content/uploads/2022/11/Residential-Service-page-Banner-scaled.jpg",
      alt: "Residential service",
    },
    {
      src: "https://www.minimallimited.com/wp-content/uploads/2022/10/minimal-living-space.jpg",
      alt: "Minimal living space",
    },
  ];

  return (
    <div className="w-full bg-light">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-background md:h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-[url(https://ext.same-assets.com/3020618206/2052222645.webp)]"
        ></div>
        <div className="absolute inset-0 bg-dark/40"></div>
        <div className="container relative z-10 flex h-full flex-col justify-center">
          <h1 className="mb-2 text-4xl font-bold text-light md:text-5xl">
            Feel The Luxury of <br />
            Uncompromised Quality
          </h1>
          <p className="mb-6 text-xl text-light/90">Residential Interior</p>
          <Link
            href="#approach"
            className="group inline-flex w-fit items-center justify-center rounded-full bg-primary px-6 py-3 text-light transition-all duration-300 hover:bg-primary-light"
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
              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </section>

      {/* Rest of the component remains the same */}
      {/* Journey Section */}
      {/* Our Approach Section */}
      {/* Additional sections... */}
    </div>
  );
} 