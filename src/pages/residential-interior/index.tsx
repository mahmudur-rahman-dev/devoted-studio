import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ResidentialInteriorPage() {
  const [activeTab, setActiveTab] = useState(0);

  const steps = [
    {
      name: "Meet and Greet",
      progress: 10,
      description: "You'll meet our expert designers, and they will listen to your requirements. (No payment is required.)"
    },
    {
      name: "Design Development",
      progress: 30,
      description: "With a range of designs, our designers will seek your approval and develop the design from start to finish. (Pay 5% of the estimated quotation.)"
    },
    {
      name: "Place Your Order",
      progress: 60,
      description: "Once the order is placed, we will begin working on construction drawings. Upon your written approval, we will start procuring materials and preparing the site to commence work."
    },
    {
      name: "Installation Process",
      progress: 90,
      description: "To ensure everything is on track, we'll provide you with a Gantt Chart. We'll also conduct 154 quality checks. (Pay 95% of the final quotation.)"
    },
    {
      name: "You Moving In",
      progress: 100,
      description: "Now that our installation is complete, you can move into your place."
    }
  ];

  const projects = [
    {
      title: "5375sft Duplex | Rangpur",
      image: "https://ext.same-assets.com/3020618206/2164984555.webp"
    },
    {
      title: "3676sft Duplex | Bashundhara",
      image: "https://www.minimallimited.com/wp-content/uploads/Wahid-Cover.webp"
    },
    {
      title: "2115sqft Flat | Bashundhara",
      image: "https://www.minimallimited.com/wp-content/uploads/Monwar-Hossain-12.webp"
    }
  ];

  const galleryImages = [
    {
      src: "https://www.minimallimited.com/wp-content/uploads/2022/10/interior.jpg",
      alt: "Interior design"
    },
    {
      src: "https://www.minimallimited.com/wp-content/uploads/2022/10/dining-space-interior-scaled.jpg",
      alt: "Dining space"
    },
    {
      src: "https://www.minimallimited.com/wp-content/uploads/2022/11/12-scaled.jpg",
      alt: "Interior design"
    },
    {
      src: "https://www.minimallimited.com/wp-content/uploads/2022/10/living-space.webp",
      alt: "Living space"
    },
    {
      src: "https://www.minimallimited.com/wp-content/uploads/2022/11/Residential-Service-page-Banner-scaled.jpg",
      alt: "Residential service"
    },
    {
      src: "https://www.minimallimited.com/wp-content/uploads/2022/10/minimal-living-space.jpg",
      alt: "Minimal living space"
    },
  ];

  return (
    <div className="w-full bg-light">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] bg-background">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://ext.same-assets.com/3020618206/2052222645.webp)` }}></div>
        <div className="absolute inset-0 bg-dark/40"></div>
        <div className="container relative z-10 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-light mb-2">
            Feel The Luxury of <br />
            Uncompromised Quality
          </h1>
          <p className="text-xl text-light/90 mb-6">Residential Interior</p>
          <Link to="#approach" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-light rounded-full w-fit hover:bg-primary-light transition-all duration-300 group">
            Explore
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 md:py-24 bg-light">
        <div className="container">
          <h2 className="text-3xl md:text-4xl text-dark text-center font-semibold mb-8">
            Experience the Journey from <br />
            Ideation to Execution
          </h2>
          <p className="text-center text-text max-w-3xl mx-auto mb-12">
            Take a sneak peek behind the scenes and witness our meticulous work process. From generating innovative ideas to delivering top-notch interiors, we have been dedicated to fulfilling our clients' desired visions.
          </p>
          <div className="flex justify-center">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img src="https://ext.same-assets.com/3020618206/1519032701.webp" alt="Interior design process" className="rounded-lg shadow-lg max-w-full md:max-w-4xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="text-lg md:text-xl font-semibold">Our comprehensive design approach focuses on both aesthetics and functionality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl text-dark text-center font-semibold mb-2">Our Approach</h2>
          <p className="text-center text-text mb-12">It's easier than your thinking.</p>

          <div className="bg-white rounded-lg shadow-md p-6 mb-12">
            <div className="flex flex-wrap mb-6 border-b">
              {steps.map((step, index) => (
                <button
                  key={index}
                  className={`px-4 py-3 text-base font-medium transition-colors ${
                    activeTab === index
                      ? "text-primary border-b-2 border-primary -mb-[2px]"
                      : "text-text hover:text-primary"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {step.name}
                </button>
              ))}
            </div>

            <div className="mb-8">
              <div className="relative mb-6">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-500"
                    style={{ width: `${steps[activeTab].progress}%` }}
                  ></div>
                </div>
                <div
                  className="absolute -top-1 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 transition-all duration-500"
                  style={{ left: `${steps[activeTab].progress}%` }}
                ></div>
                <div className="flex justify-between mt-1">
                  <div className="text-sm font-medium text-text">0%</div>
                  <div className="text-sm font-medium text-primary">{steps[activeTab].progress}%</div>
                </div>
              </div>

              <div className="p-6 bg-light rounded-lg">
                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                    {activeTab === 0 && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
                        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
                        <line x1="6" x2="6" y1="2" y2="4"></line>
                        <line x1="10" x2="10" y1="2" y2="4"></line>
                        <line x1="14" x2="14" y1="2" y2="4"></line>
                      </svg>
                    )}
                    {activeTab === 1 && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M2 12.5c1.5-2.5 4-5 6.5-5 .5 0 1 .5 1 1v10.5c0 .5-.5 1-1 1-2.5 0-5-2.5-6.5-5C1.5 14 1 13 1 12s.5-2 1-2.5Z"></path>
                        <path d="M8.5 19.5c2 .5 4 .5 6 0"></path>
                        <path d="M14.5 5.5c-2-.5-4-.5-6 0"></path>
                        <path d="M22 12.5c-1.5-2.5-4-5-6.5-5-.5 0-1 .5-1 1v10.5c0 .5.5 1 1 1 2.5 0 5-2.5 6.5-5 .5-1 1-2 1-3s-.5-2-1-2.5Z"></path>
                      </svg>
                    )}
                    {activeTab === 2 && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                        <line x1="8" x2="16" y1="21" y2="21"></line>
                        <line x1="12" x2="12" y1="17" y2="21"></line>
                      </svg>
                    )}
                    {activeTab === 3 && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z"></path>
                        <path d="M6 9.01V9"></path>
                        <path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"></path>
                      </svg>
                    )}
                    {activeTab === 4 && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{steps[activeTab].name}</h3>
                    <p className="text-text">{steps[activeTab].description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 md:py-24 bg-light">
        <div className="container">
          <h2 className="text-3xl text-dark text-center font-semibold mb-6">Our Packages</h2>
          <p className="text-center text-text max-w-3xl mx-auto mb-10">
            Explore our enticing packages designed to suit your needs and preferences.
          </p>
          <div className="flex justify-center">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img src="https://www.minimallimited.com/wp-content/uploads/Minimal-Pricing-2024-Feb-1.webp" alt="Interior solution packages" className="max-w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl text-dark text-center font-semibold mb-6">Some of Our Projects</h2>
          <p className="text-center text-text max-w-3xl mx-auto mb-10">
            Witness the exceptional transformations we have accomplished in our past projects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <div key={index} className="group rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <span className="inline-flex items-center justify-center px-3 py-1 bg-primary text-white text-xs rounded-full mb-2">View Project</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-dark group-hover:text-primary transition-colors">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/portfolio" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-light rounded-full hover:bg-primary-light transition-all duration-300 group">
              See More
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-light">
        <div className="container">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {galleryImages.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img src={image.src} alt={image.alt} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
                <div className="rounded-lg overflow-hidden col-span-2 shadow-md">
                  <div className="bg-primary h-48 flex items-center justify-center p-6 text-center">
                    <div>
                      <h3 className="text-2xl text-light font-bold mb-1">1,000+ Happy Customers</h3>
                      <p className="text-light/90">And Counting</p>
                      <div className="flex justify-center mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-light w-6 h-6">
                          <path d="M19 5h-7L8 1H5a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
                          <path d="M12 12v6"></path>
                          <path d="M15 15h-6"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-col justify-center">
              <h2 className="text-3xl text-dark font-semibold mb-6">Let Us Bring Your Home Into Life</h2>
              <p className="text-text mb-6">
                Transform your living space into a reflection of your personality and lifestyle with our expert residential interior design services.
              </p>
              <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-light rounded-full w-fit hover:bg-primary-light transition-all duration-300 group">
                Get a Quote
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
