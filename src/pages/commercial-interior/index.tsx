import React from 'react';
import { Link } from 'react-router-dom';

export default function CommercialInteriorPage() {
  return (
    <div className="w-full bg-light">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-background">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://www.minimallimited.com/wp-content/uploads/minimal-interior-design.png)` }}></div>
        <div className="absolute inset-0 bg-dark/50"></div>
        <div className="container relative z-10 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-light mb-2">
            Hassle-free Move Into <br />
            Your New Workplace
          </h1>
          <p className="text-xl text-light/90 mb-6">Commercial Interior</p>
          <Link to="#offerings" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-light rounded-full w-fit hover:bg-primary-light transition">
            Explore
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-1">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-light">
        <div className="container">
          <h2 className="text-3xl text-dark text-center font-semibold mb-12">Our Valuable Clients</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <img src="https://www.minimallimited.com/wp-content/uploads/tk-group.webp" alt="TK Group" className="h-10 object-contain" />
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <img src="https://www.minimallimited.com/wp-content/uploads/milvik.webp" alt="Milvik" className="h-10 object-contain" />
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <img src="https://www.minimallimited.com/wp-content/uploads/aman-group.webp" alt="Aman Group" className="h-10 object-contain" />
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <img src="https://www.minimallimited.com/wp-content/uploads/bongo.webp" alt="Bongo" className="h-10 object-contain" />
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <img src="https://www.minimallimited.com/wp-content/uploads/france-embassy.webp" alt="France Embassy" className="h-10 object-contain" />
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <img src="https://www.minimallimited.com/wp-content/uploads/du.webp" alt="Dhaka University" className="h-10 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl text-dark text-center font-semibold mb-8">
            Explore Our Journey from <br />
            Ideation to Execution
          </h2>
          <p className="text-center text-text max-w-3xl mx-auto mb-10">
            Let's take a look at what goes on behind the scenes. Discover how we transform excellent designs into the most durable and aesthetically pleasing commercial interiors that you have ever seen.
          </p>
          <div className="flex justify-center">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img src="https://www.minimallimited.com/wp-content/uploads/2022/10/minimal-interior-design.png" alt="Interior design process" className="max-w-full md:max-w-4xl" />
              <div className="absolute inset-0 bg-dark/30 flex items-center justify-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-light transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white ml-1">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark to-transparent">
                <h3 className="text-2xl font-bold text-white">Right choice can increase your efficiency</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section id="offerings" className="py-16 bg-light">
        <div className="container">
          <h2 className="text-3xl text-dark text-center font-semibold mb-4">Our Offerings</h2>
          <p className="text-center text-text max-w-3xl mx-auto mb-12">
            From a small workplace to a multinational corporation, we are always up for a challenge.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="mb-6 flex justify-center">
                <img src="https://ext.same-assets.com/3368869612/1036932944.svg" alt="Design and Build" className="h-16" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Design And Build</h3>
              <p className="text-text">
                Get complete services as well as a transformational design strategy. Our professional team handles everything so you don't have to.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="mb-6 flex justify-center">
                <img src="https://ext.same-assets.com/3368869612/3686894089.svg" alt="Source and Procure" className="h-16" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Source And Procure</h3>
              <p className="text-text">
                We use a deliberate approach to locate the best products from the best sources nationwide, guaranteeing a custom fit for your interior requirements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="mb-6 flex justify-center">
                <img src="https://ext.same-assets.com/3368869612/1698210696.svg" alt="General Contracting" className="h-16" />
              </div>
              <h3 className="text-xl font-semibold mb-4">General Contracting</h3>
              <p className="text-text">
                Have a design already in place? Leave it to our professionals to successfully replicate and construct it while complying with the design specifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl text-dark text-center font-semibold mb-12">Why Choose us?</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mb-6 flex justify-center">
                <img src="https://ext.same-assets.com/3368869612/184184154.svg" alt="Quality Materials" className="h-14" />
              </div>
              <h3 className="text-lg font-semibold">Ensures Quality Materials</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mb-6 flex justify-center">
                <img src="https://ext.same-assets.com/3368869612/1586271408.svg" alt="Transparent" className="h-14" />
              </div>
              <h3 className="text-lg font-semibold">100% Transparent</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mb-6 flex justify-center">
                <img src="https://ext.same-assets.com/3368869612/2988859405.svg" alt="Tailored Designs" className="h-14" />
              </div>
              <h3 className="text-lg font-semibold">Tailored Designs</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mb-6 flex justify-center">
                <img src="https://ext.same-assets.com/3368869612/3421177095.svg" alt="Budget Flexibility" className="h-14" />
              </div>
              <h3 className="text-lg font-semibold">Budget Flexibility</h3>
            </div>
          </div>

          <div className="flex justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-light rounded-full hover:bg-primary-light transition">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-light">
        <div className="container">
          <h2 className="text-3xl text-dark text-center font-semibold mb-12">Serving Every Industry</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
            <div className="flex flex-col items-center">
              <div className="mb-4 p-4 bg-white rounded-full shadow-md">
                <img src="https://ext.same-assets.com/3368869612/1988508070.svg" alt="Workspaces" className="h-8 w-8" />
              </div>
              <h3 className="text-sm font-semibold text-center">Workspaces</h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-4 p-4 bg-white rounded-full shadow-md">
                <img src="https://ext.same-assets.com/3368869612/3595059426.svg" alt="Industrial Sites" className="h-8 w-8" />
              </div>
              <h3 className="text-sm font-semibold text-center">Industrial Sites</h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-4 p-4 bg-white rounded-full shadow-md">
                <img src="https://ext.same-assets.com/3368869612/2667482389.svg" alt="Institutions" className="h-8 w-8" />
              </div>
              <h3 className="text-sm font-semibold text-center">Institutions</h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-4 p-4 bg-white rounded-full shadow-md">
                <img src="https://ext.same-assets.com/3368869612/2692796392.svg" alt="Hospitality" className="h-8 w-8" />
              </div>
              <h3 className="text-sm font-semibold text-center">Hospitality</h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-4 p-4 bg-white rounded-full shadow-md">
                <img src="https://ext.same-assets.com/3368869612/987514870.svg" alt="Retail" className="h-8 w-8" />
              </div>
              <h3 className="text-sm font-semibold text-center">Retail</h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-4 p-4 bg-white rounded-full shadow-md">
                <img src="https://ext.same-assets.com/3368869612/569024115.svg" alt="Recreational" className="h-8 w-8" />
              </div>
              <h3 className="text-sm font-semibold text-center">Recreational</h3>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl text-dark text-center font-semibold mb-12">How it Works</h2>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -translate-x-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {/* Step 1 */}
              <div className="md:text-right relative">
                <div className="hidden md:block absolute top-6 -right-8 w-16 h-0.5 bg-primary/30"></div>
                <div className="hidden md:flex absolute top-4 -right-12 w-8 h-8 bg-primary rounded-full items-center justify-center text-white font-bold z-10">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Identifying Possibilities</h3>
                <p className="text-text">We do our research to find similar solutions that you are looking for so we can craft our own.</p>
              </div>

              <div className="md:hidden"></div>

              {/* Step 2 */}
              <div className="md:hidden"></div>

              <div className="relative">
                <div className="hidden md:block absolute top-6 -left-8 w-16 h-0.5 bg-primary/30"></div>
                <div className="hidden md:flex absolute top-4 -left-12 w-8 h-8 bg-primary rounded-full items-center justify-center text-white font-bold z-10">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Ideation Process</h3>
                <p className="text-text">With a handful of existing solutions, we dig our way through to deliver unique ideas.</p>
              </div>

              {/* Step 3 */}
              <div className="md:text-right relative">
                <div className="hidden md:block absolute top-6 -right-8 w-16 h-0.5 bg-primary/30"></div>
                <div className="hidden md:flex absolute top-4 -right-12 w-8 h-8 bg-primary rounded-full items-center justify-center text-white font-bold z-10">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Estimating Budget</h3>
                <p className="text-text">To bring our ideas to life, we estimate a reasonable cost that will help us execute.</p>
              </div>

              <div className="md:hidden"></div>

              {/* Step 4 */}
              <div className="md:hidden"></div>

              <div className="relative">
                <div className="hidden md:block absolute top-6 -left-8 w-16 h-0.5 bg-primary/30"></div>
                <div className="hidden md:flex absolute top-4 -left-12 w-8 h-8 bg-primary rounded-full items-center justify-center text-white font-bold z-10">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-3">Finalizing Designs</h3>
                <p className="text-text">With multiple variations of designs, we will leave it up to you to choose one that meets your taste.</p>
              </div>

              {/* Step 5 */}
              <div className="md:text-right relative">
                <div className="hidden md:block absolute top-6 -right-8 w-16 h-0.5 bg-primary/30"></div>
                <div className="hidden md:flex absolute top-4 -right-12 w-8 h-8 bg-primary rounded-full items-center justify-center text-white font-bold z-10">
                  5
                </div>
                <h3 className="text-xl font-semibold mb-3">Sourcing Materials</h3>
                <p className="text-text">Now that we have the final design, we will source all the materials we need to begin our work.</p>
              </div>

              <div className="md:hidden"></div>

              {/* Step 6 */}
              <div className="md:hidden"></div>

              <div className="relative">
                <div className="hidden md:block absolute top-6 -left-8 w-16 h-0.5 bg-primary/30"></div>
                <div className="hidden md:flex absolute top-4 -left-12 w-8 h-8 bg-primary rounded-full items-center justify-center text-white font-bold z-10">
                  6
                </div>
                <h3 className="text-xl font-semibold mb-3">Project Management</h3>
                <p className="text-text">We have dedicated teams to look after different segments of the project. They will ensure timely delivery.</p>
              </div>

              {/* Step 7 */}
              <div className="md:text-right relative">
                <div className="hidden md:block absolute top-6 -right-8 w-16 h-0.5 bg-primary/30"></div>
                <div className="hidden md:flex absolute top-4 -right-12 w-8 h-8 bg-primary rounded-full items-center justify-center text-white font-bold z-10">
                  7
                </div>
                <h3 className="text-xl font-semibold mb-3">Delivering Results</h3>
                <p className="text-text">Now that everything is done, we will hand over the final results to you so you can start moving in.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-light">
        <div className="container">
          <h2 className="text-3xl text-dark text-center font-semibold mb-12">Our Commercial Portfolio</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="https://www.minimallimited.com/wp-content/uploads/Milvik-Cover.webp" alt="Milvik BD" className="w-full h-64 object-cover" />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-dark">Milvik BD</h3>
                <p className="text-text text-sm">Mohakhali C/A</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="https://www.minimallimited.com/wp-content/uploads/WW-01-scaled.webp" alt="W&W Company Ltd" className="w-full h-64 object-cover" />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-dark">W&W Company Ltd.</h3>
                <p className="text-text text-sm">Gulshan</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="https://www.minimallimited.com/wp-content/uploads/TK-Cover-1.webp" alt="TK Group" className="w-full h-64 object-cover" />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-dark">TK Group</h3>
                <p className="text-text text-sm">Kawran Bazar</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/portfolio" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-light rounded-full hover:bg-primary-light transition">
              See More
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Want us to Execute Your Next Commercial Project?</h2>
              <p className="text-sm mb-6">Call us at: 01775 760 496</p>
              <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-light rounded-full hover:bg-primary-light transition">
                Contact us
              </Link>
            </div>
            <div className="flex justify-center">
              <img src="https://www.minimallimited.com/wp-content/uploads/Team-desktop-2.webp" alt="Our team" className="rounded-lg shadow-lg max-w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-light">
        <div className="container">
          <h2 className="text-3xl text-dark text-center font-semibold mb-12">See What Our Clients Have to Say About Our Work</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-xl italic text-text mb-6">
                I was impressed with their 3D design and even more so, with the final outcome.
              </p>
              <div className="font-semibold">
                <h3 className="text-primary text-lg">Global Consolidators Ltd.</h3>
                <p className="text-text">3200sft, Gulshan 1</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-xl italic text-text mb-6">
                We chose Minimal because of their Professionalism, Time commitment & Design sense.
              </p>
              <div className="font-semibold">
                <h3 className="text-primary text-lg">Milvik Bangladesh</h3>
                <p className="text-text">4000sft, Mohakhali C/A</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
