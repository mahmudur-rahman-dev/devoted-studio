import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Waterfront Villa",
      category: "Residential",
      image: "https://ext.same-assets.com/2815741424/3859730472.jpg",
    },
    {
      title: "Modern Office",
      category: "Commercial",
      image: "https://ext.same-assets.com/2815741424/3952740814.jpg",
    },
    {
      title: "Urban Apartment",
      category: "Residential",
      image: "https://ext.same-assets.com/2815741424/3725497503.jpg",
    },
  ];

  return (
    <section id="portfolio" className="bg-light py-20">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold text-dark md:text-4xl">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  loading={idx === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-dark/70 to-transparent p-6 opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <div>
                    <span className="text-sm text-gold">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4">
                <span className="text-sm text-primary-light">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold text-dark">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#contact"
            className="inline-block rounded bg-primary px-8 py-3 font-medium text-white transition hover:bg-primary-light"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
