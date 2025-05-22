import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Category, projectsData } from '../lib/projectData';

interface ProjectItem {
  id: number;
  title: string;
  category: Category;
  imageUrl: string;
}

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('residential');

  // Transform project data for display
  const projects: ProjectItem[] = projectsData.map(project => ({
    id: project.id,
    title: project.title,
    category: project.category,
    imageUrl: project.images[0]?.src || 'https://placehold.co/600x400?text=Project+Image'
  }));

  const filteredProjects = projects.filter(project => project.category === activeCategory);

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
  };

  return (
    <div className="py-20 bg-light">
      <div className="container mx-auto px-4">
        {/* Portfolio Categories */}
        <div className="flex flex-wrap justify-center mb-12 gap-4 md:gap-10">
          <button
            className={`text-base md:text-lg font-medium pb-2 border-b-2 transition-all ${activeCategory === 'residential' ? 'border-primary text-primary' : 'border-transparent text-dark hover:text-primary'}`}
            onClick={() => handleCategoryChange('residential')}
          >
            Residential Projects
          </button>
          <button
            className={`text-base md:text-lg font-medium pb-2 border-b-2 transition-all ${activeCategory === 'commercial' ? 'border-primary text-primary' : 'border-transparent text-dark hover:text-primary'}`}
            onClick={() => handleCategoryChange('commercial')}
          >
            Commercial Projects
          </button>
          <button
            className={`text-base md:text-lg font-medium pb-2 border-b-2 transition-all ${activeCategory === 'architectural' ? 'border-primary text-primary' : 'border-transparent text-dark hover:text-primary'}`}
            onClick={() => handleCategoryChange('architectural')}
          >
            Architectural Consultancy
          </button>
          <button
            className={`text-base md:text-lg font-medium pb-2 border-b-2 transition-all ${activeCategory === 'construction' ? 'border-primary text-primary' : 'border-transparent text-dark hover:text-primary'}`}
            onClick={() => handleCategoryChange('construction')}
          >
            Under Construction
          </button>
        </div>

        {/* Horizontal line below categories */}
        <div className="w-full border-t border-gray-200 mb-12"></div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group transition-all duration-300">
              <Link to={`/project/${project.id}`} className="block relative overflow-hidden">
                <div className="aspect-w-3 aspect-h-2 bg-gray-100 relative">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3 text-center">
                  <h3 className="text-sm md:text-base text-dark font-medium">{project.title}</h3>
                  <p className="text-xs text-primary mt-1">See Details...</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Show All Button */}
        <div className="flex justify-center mt-12">
          <Link to="/portfolio" className="px-8 py-3 bg-gold text-dark font-medium hover:bg-opacity-90 transition-all">
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
