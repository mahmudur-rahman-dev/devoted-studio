"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Category, projectsData } from "@/lib/projectData";

interface ProjectItem {
  id: number;
  title: string;
  category: Category;
  imageUrl: string;
}

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("residential");

  // Transform project data for display
  const projects: ProjectItem[] = projectsData.map((project) => ({
    id: project.id,
    title: project.title,
    category: project.category,
    imageUrl:
      project.images[0]?.src ||
      "https://placehold.co/600x400?text=Project+Image",
  }));

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
  };

  return (
    <div className="bg-light py-20">
      <div className="container mx-auto px-4">
        {/* Portfolio Categories */}
        <div className="mb-12 flex flex-wrap justify-center gap-4 md:gap-10">
          <button
            className={`border-b-2 pb-2 text-base font-medium transition-all md:text-lg ${activeCategory === "residential" ? "border-primary text-primary" : "border-transparent text-dark hover:text-primary"}`}
            onClick={() => handleCategoryChange("residential")}
          >
            Residential Projects
          </button>
          <button
            className={`border-b-2 pb-2 text-base font-medium transition-all md:text-lg ${activeCategory === "commercial" ? "border-primary text-primary" : "border-transparent text-dark hover:text-primary"}`}
            onClick={() => handleCategoryChange("commercial")}
          >
            Commercial Projects
          </button>
          <button
            className={`border-b-2 pb-2 text-base font-medium transition-all md:text-lg ${activeCategory === "architectural" ? "border-primary text-primary" : "border-transparent text-dark hover:text-primary"}`}
            onClick={() => handleCategoryChange("architectural")}
          >
            Architectural Consultancy
          </button>
          <button
            className={`border-b-2 pb-2 text-base font-medium transition-all md:text-lg ${activeCategory === "construction" ? "border-primary text-primary" : "border-transparent text-dark hover:text-primary"}`}
            onClick={() => handleCategoryChange("construction")}
          >
            Under Construction
          </button>
        </div>

        {/* Horizontal line below categories */}
        <div className="mb-12 w-full border-t border-gray-200"></div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group transition-all duration-300">
              <Link
                href={`/project/${project.id}`}
                className="relative block overflow-hidden"
              >
                <div className="aspect-h-2 aspect-w-3 relative bg-gray-100">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3 text-center">
                  <h3 className="text-sm font-medium text-dark md:text-base">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs text-primary">See Details...</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Show All Button */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/portfolio"
            className="bg-gold px-8 py-3 font-medium text-dark transition-all hover:bg-opacity-90"
          >
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
