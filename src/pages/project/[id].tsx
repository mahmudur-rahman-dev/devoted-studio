import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectById, getRelatedProjects } from '../../lib/projectData';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id || '0', 10);
  const project = getProjectById(projectId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-2xl font-medium mb-8">Project not found</h1>
        <Link to="/portfolio" className="text-primary hover:underline">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  const relatedProjects = project.otherProjects ||
    getRelatedProjects(project.category, projectId).map(p => ({
      id: p.id,
      title: p.title,
      imageUrl: p.images[0]?.src || ''
    }));

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
    <div className="py-20 bg-light">
      <div className="container mx-auto px-4">
        {/* Project Title */}
        <h1 className="text-2xl md:text-3xl font-medium text-dark mb-6">
          {project.title}
        </h1>

        {/* Project Description (if available) */}
        {project.description && (
          <p className="text-base text-dark max-w-3xl mb-10">{project.description}</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          {/* Project Details - Left Column */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-0">
              {project.size && (
                <div className="mb-6">
                  <h2 className="text-lg font-medium text-dark mb-1">Size</h2>
                  <p className="text-base text-dark">{project.size}</p>
                </div>
              )}

              {project.location && (
                <div className="mb-6">
                  <h2 className="text-lg font-medium text-dark mb-1">Location</h2>
                  <p className="text-base text-dark">{project.location}</p>
                </div>
              )}

              {project.scope && (
                <div className="mb-6">
                  <h2 className="text-lg font-medium text-dark mb-1">Scope</h2>
                  <p className="text-base text-dark">{project.scope}</p>
                </div>
              )}

              {project.completionDate && (
                <div className="mb-6">
                  <h2 className="text-lg font-medium text-dark mb-1">Completion date</h2>
                  <p className="text-base text-dark">{project.completionDate}</p>
                </div>
              )}
            </div>
          </div>

          {/* Project Image Gallery - Right Column */}
          <div className="md:col-span-9 relative">
            <div className="relative aspect-w-16 aspect-h-9 bg-gray-100 mb-4">
              <img
                src={project.images[currentImageIndex]?.src || ''}
                alt={project.images[currentImageIndex]?.alt || project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Navigation arrows */}
            {project.images.length > 1 && (
              <div className="flex justify-center space-x-4 mt-6">
                <button
                  onClick={prevImage}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:bg-primary hover:text-white transition-colors"
                  aria-label="Previous image"
                >
                  &larr;
                </button>
                <button
                  onClick={nextImage}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:bg-primary hover:text-white transition-colors"
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
            <h2 className="text-2xl font-medium text-dark mb-10">Other Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((otherProject) => (
                <div key={otherProject.id} className="group transition-all duration-300">
                  <Link to={`/project/${otherProject.id}`} className="block relative overflow-hidden">
                    <div className="aspect-w-3 aspect-h-2 bg-gray-100 relative">
                      <img
                        src={otherProject.imageUrl}
                        alt={otherProject.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-3">
                      <h3 className="text-base text-dark font-medium">{otherProject.title}</h3>
                      <p className="text-sm text-primary mt-1">See Details...</p>
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
};

export default ProjectDetail;
