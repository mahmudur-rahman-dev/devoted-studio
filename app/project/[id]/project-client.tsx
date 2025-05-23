"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ProjectDetails } from "@/lib/projectData";

interface ProjectClientProps {
  project: ProjectDetails;
  relatedProjects: {
    id: number;
    title: string;
    imageUrl: string;
  }[];
}

export default function ProjectClient({ project, relatedProjects }: ProjectClientProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-light py-20">
      <div className="container mx-auto px-4">
        {/* Project Title */}
        <h1 className="mb-6 text-2xl font-medium text-dark md:text-3xl">
          {project.title}
        </h1>

        {/* Project Description (if available) */}
        {project.description && (
          <p className="mb-10 max-w-3xl text-base text-dark">
            {project.description}
          </p>
        )}

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Project Details - Left Column */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 md:gap-0">
              {project.size && (
                <div className="mb-6">
                  <h2 className="mb-1 text-lg font-medium text-dark">Size</h2>
                  <p className="text-base text-dark">{project.size}</p>
                </div>
              )}

              {project.location && (
                <div className="mb-6">
                  <h2 className="mb-1 text-lg font-medium text-dark">
                    Location
                  </h2>
                  <p className="text-base text-dark">{project.location}</p>
                </div>
              )}

              {project.scope && (
                <div className="mb-6">
                  <h2 className="mb-1 text-lg font-medium text-dark">Scope</h2>
                  <p className="text-base text-dark">{project.scope}</p>
                </div>
              )}

              {project.completionDate && (
                <div className="mb-6">
                  <h2 className="mb-1 text-lg font-medium text-dark">
                    Completion date
                  </h2>
                  <p className="text-base text-dark">
                    {project.completionDate}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Project Image Gallery - Right Column */}
          <div className="relative md:col-span-9">
            <div className="aspect-h-9 aspect-w-16 relative mb-4 bg-gray-100">
              <Image
                src={project.images[currentImageIndex]?.src || ""}
                alt={project.images[currentImageIndex]?.alt || project.title}
                fill
                className="object-cover"
                priority={currentImageIndex === 0}
                sizes="(max-width: 768px) 100vw, 75vw"
              />
            </div>

            {/* Navigation arrows */}
            {project.images.length > 1 && (
              <div className="mt-6 flex justify-center space-x-4">
                <button
                  onClick={prevImage}
                  className="flex h-10 w-10 items-center justify-center border border-gray-300 transition-colors hover:bg-primary hover:text-white"
                  aria-label="Previous image"
                >
                  &larr;
                </button>
                <button
                  onClick={nextImage}
                  className="flex h-10 w-10 items-center justify-center border border-gray-300 transition-colors hover:bg-primary hover:text-white"
                  aria-label="Next image"
                >
                  &rarr;
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Other Projects Section */}
        {relatedProjects && relatedProjects.length > 0 && (
          <div className="mt-20 border-t border-gray-200 pt-10">
            <h2 className="mb-10 text-2xl font-medium text-dark">
              Other Projects
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {relatedProjects.map((otherProject) => (
                <div
                  key={otherProject.id}
                  className="group transition-all duration-300"
                >
                  <Link
                    href={`/project/${otherProject.id}`}
                    className="relative block overflow-hidden"
                  >
                    <div className="aspect-h-2 aspect-w-3 relative bg-gray-100">
                      <Image
                        src={otherProject.imageUrl}
                        alt={otherProject.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="mt-3">
                      <h3 className="text-base font-medium text-dark">
                        {otherProject.title}
                      </h3>
                      <p className="mt-1 text-sm text-primary">
                        See Details...
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 