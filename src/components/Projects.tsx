import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: "Waterfront Villa",
      category: "Residential",
      image: "https://ext.same-assets.com/2815741424/3859730472.jpg"
    },
    {
      title: "Modern Office",
      category: "Commercial",
      image: "https://ext.same-assets.com/2815741424/3952740814.jpg"
    },
    {
      title: "Urban Apartment",
      category: "Residential",
      image: "https://ext.same-assets.com/2815741424/3725497503.jpg"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-light">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-dark">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="text-gold text-sm">{project.category}</span>
                    <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white">
                <span className="text-primary-light text-sm">{project.category}</span>
                <h3 className="font-semibold text-lg text-dark">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="inline-block px-8 py-3 bg-primary text-white font-medium rounded hover:bg-primary-light transition">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
