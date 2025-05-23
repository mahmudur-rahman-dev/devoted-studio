import React from "react";
import { Link } from "react-router-dom";

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
            to="#offerings"
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

      {/* Clients Section */}
      <section className="bg-light py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-semibold text-dark">
            Our Valuable Clients
          </h2>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            <div className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm">
              <img
                src="https://www.minimallimited.com/wp-content/uploads/tk-group.webp"
                alt="TK Group"
                className="h-10 object-contain"
              />
            </div>
            <div className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm">
              <img
                src="https://www.minimallimited.com/wp-content/uploads/milvik.webp"
                alt="Milvik"
                className="h-10 object-contain"
              />
            </div>
            <div className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm">
              <img
                src="https://www.minimallimited.com/wp-content/uploads/aman-group.webp"
                alt="Aman Group"
                className="h-10 object-contain"
              />
            </div>
            <div className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm">
              <img
                src="https://www.minimallimited.com/wp-content/uploads/bongo.webp"
                alt="Bongo"
                className="h-10 object-contain"
              />
            </div>
            <div className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm">
              <img
                src="https://www.minimallimited.com/wp-content/uploads/france-embassy.webp"
                alt="France Embassy"
                className="h-10 object-contain"
              />
            </div>
            <div className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm">
              <img
                src="https://www.minimallimited.com/wp-content/uploads/du.webp"
                alt="Dhaka University"
                className="h-10 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="bg-background py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-semibold text-dark md:text-4xl">
            Explore Our Journey from <br />
            Ideation to Execution
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-text">
            Let's take a look at what goes on behind the scenes. Discover how we
            transform excellent designs into the most durable and aesthetically
            pleasing commercial interiors that you have ever seen.
          </p>
          <div className="flex justify-center">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://www.minimallimited.com/wp-content/uploads/2022/10/minimal-interior-design.png"
                alt="Interior design process"
                className="max-w-full md:max-w-4xl"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-dark/30">
                <div className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-primary transition hover:bg-primary-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 text-white"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark to-transparent p-6">
                <h3 className="text-2xl font-bold text-white">
                  Right choice can increase your efficiency
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section id="offerings" className="bg-light py-16">
        <div className="container">
          <h2 className="mb-4 text-center text-3xl font-semibold text-dark">
            Our Offerings
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-text">
            From a small workplace to a multinational corporation, we are always
            up for a challenge.
          </p>

          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-8 text-center shadow-md">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://ext.same-assets.com/3368869612/1036932944.svg"
                  alt="Design and Build"
                  className="h-16"
                />
              </div>
              <h3 className="mb-4 text-xl font-semibold">Design And Build</h3>
              <p className="text-text">
                Get complete services as well as a transformational design
                strategy. Our professional team handles everything so you don't
                have to.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 text-center shadow-md">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://ext.same-assets.com/3368869612/3686894089.svg"
                  alt="Source and Procure"
                  className="h-16"
                />
              </div>
              <h3 className="mb-4 text-xl font-semibold">Source And Procure</h3>
              <p className="text-text">
                We use a deliberate approach to locate the best products from
                the best sources nationwide, guaranteeing a custom fit for your
                interior requirements.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 text-center shadow-md">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://ext.same-assets.com/3368869612/1698210696.svg"
                  alt="General Contracting"
                  className="h-16"
                />
              </div>
              <h3 className="mb-4 text-xl font-semibold">
                General Contracting
              </h3>
              <p className="text-text">
                Have a design already in place? Leave it to our professionals to
                successfully replicate and construct it while complying with the
                design specifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-background py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-semibold text-dark">
            Why Choose us?
          </h2>

          <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://ext.same-assets.com/3368869612/184184154.svg"
                  alt="Quality Materials"
                  className="h-14"
                />
              </div>
              <h3 className="text-lg font-semibold">
                Ensures Quality Materials
              </h3>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://ext.same-assets.com/3368869612/1586271408.svg"
                  alt="Transparent"
                  className="h-14"
                />
              </div>
              <h3 className="text-lg font-semibold">100% Transparent</h3>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://ext.same-assets.com/3368869612/2988859405.svg"
                  alt="Tailored Designs"
                  className="h-14"
                />
              </div>
              <h3 className="text-lg font-semibold">Tailored Designs</h3>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://ext.same-assets.com/3368869612/3421177095.svg"
                  alt="Budget Flexibility"
                  className="h-14"
                />
              </div>
              <h3 className="text-lg font-semibold">Budget Flexibility</h3>
            </div>
          </div>

          <div className="flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-light transition hover:bg-primary-light"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-light py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-semibold text-dark">
            Serving Every Industry
          </h2>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
            <div className="flex flex-col items-center">
              <div className="mb-4 rounded-full bg-white p-4 shadow-md">
                <img
                  src="https://ext.same-assets.com/3368869612/1988508070.svg"
                  alt="Workspaces"
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-center text-sm font-semibold">Workspaces</h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-4 rounded-full bg-white p-4 shadow-md">
                <img
                  src="https://ext.same-assets.com/3368869612/3595059426.svg"
                  alt="Industrial Sites"
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-center text-sm font-semibold">
                Industrial Sites
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-4 rounded-full bg-white p-4 shadow-md">
                <img
                  src="https://ext.same-assets.com/3368869612/2667482389.svg"
                  alt="Institutions"
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-center text-sm font-semibold">
                Institutions
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-4 rounded-full bg-white p-4 shadow-md">
                <img
                  src="https://ext.same-assets.com/3368869612/2692796392.svg"
                  alt="Hospitality"
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-center text-sm font-semibold">Hospitality</h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-4 rounded-full bg-white p-4 shadow-md">
                <img
                  src="https://ext.same-assets.com/3368869612/987514870.svg"
                  alt="Retail"
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-center text-sm font-semibold">Retail</h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-4 rounded-full bg-white p-4 shadow-md">
                <img
                  src="https://ext.same-assets.com/3368869612/569024115.svg"
                  alt="Recreational"
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-center text-sm font-semibold">
                Recreational
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="bg-background py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-semibold text-dark">
            How it Works
          </h2>

          <div className="relative">
            <div className="absolute bottom-0 left-1/2 top-0 hidden w-0.5 -translate-x-1/2 bg-primary/30 md:block"></div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
              {/* Step 1 */}
              <div className="relative md:text-right">
                <div className="absolute -right-8 top-6 hidden h-0.5 w-16 bg-primary/30 md:block"></div>
                <div className="absolute -right-12 top-4 z-10 hidden h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-white md:flex">
                  1
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  Identifying Possibilities
                </h3>
                <p className="text-text">
                  We do our research to find similar solutions that you are
                  looking for so we can craft our own.
                </p>
              </div>

              <div className="md:hidden"></div>

              {/* Step 2 */}
              <div className="md:hidden"></div>

              <div className="relative">
                <div className="absolute -left-8 top-6 hidden h-0.5 w-16 bg-primary/30 md:block"></div>
                <div className="absolute -left-12 top-4 z-10 hidden h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-white md:flex">
                  2
                </div>
                <h3 className="mb-3 text-xl font-semibold">Ideation Process</h3>
                <p className="text-text">
                  With a handful of existing solutions, we dig our way through
                  to deliver unique ideas.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative md:text-right">
                <div className="absolute -right-8 top-6 hidden h-0.5 w-16 bg-primary/30 md:block"></div>
                <div className="absolute -right-12 top-4 z-10 hidden h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-white md:flex">
                  3
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  Estimating Budget
                </h3>
                <p className="text-text">
                  To bring our ideas to life, we estimate a reasonable cost that
                  will help us execute.
                </p>
              </div>

              <div className="md:hidden"></div>

              {/* Step 4 */}
              <div className="md:hidden"></div>

              <div className="relative">
                <div className="absolute -left-8 top-6 hidden h-0.5 w-16 bg-primary/30 md:block"></div>
                <div className="absolute -left-12 top-4 z-10 hidden h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-white md:flex">
                  4
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  Finalizing Designs
                </h3>
                <p className="text-text">
                  With multiple variations of designs, we will leave it up to
                  you to choose one that meets your taste.
                </p>
              </div>

              {/* Step 5 */}
              <div className="relative md:text-right">
                <div className="absolute -right-8 top-6 hidden h-0.5 w-16 bg-primary/30 md:block"></div>
                <div className="absolute -right-12 top-4 z-10 hidden h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-white md:flex">
                  5
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  Sourcing Materials
                </h3>
                <p className="text-text">
                  Now that we have the final design, we will source all the
                  materials we need to begin our work.
                </p>
              </div>

              <div className="md:hidden"></div>

              {/* Step 6 */}
              <div className="md:hidden"></div>

              <div className="relative">
                <div className="absolute -left-8 top-6 hidden h-0.5 w-16 bg-primary/30 md:block"></div>
                <div className="absolute -left-12 top-4 z-10 hidden h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-white md:flex">
                  6
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  Project Management
                </h3>
                <p className="text-text">
                  We have dedicated teams to look after different segments of
                  the project. They will ensure timely delivery.
                </p>
              </div>

              {/* Step 7 */}
              <div className="relative md:text-right">
                <div className="absolute -right-8 top-6 hidden h-0.5 w-16 bg-primary/30 md:block"></div>
                <div className="absolute -right-12 top-4 z-10 hidden h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-white md:flex">
                  7
                </div>
                <h3 className="mb-3 text-xl font-semibold">
                  Delivering Results
                </h3>
                <p className="text-text">
                  Now that everything is done, we will hand over the final
                  results to you so you can start moving in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-light py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-semibold text-dark">
            Our Commercial Portfolio
          </h2>

          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://www.minimallimited.com/wp-content/uploads/Milvik-Cover.webp"
                alt="Milvik BD"
                className="h-64 w-full object-cover"
              />
              <div className="bg-white p-4">
                <h3 className="font-semibold text-dark">Milvik BD</h3>
                <p className="text-sm text-text">Mohakhali C/A</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://www.minimallimited.com/wp-content/uploads/WW-01-scaled.webp"
                alt="W&W Company Ltd"
                className="h-64 w-full object-cover"
              />
              <div className="bg-white p-4">
                <h3 className="font-semibold text-dark">W&W Company Ltd.</h3>
                <p className="text-sm text-text">Gulshan</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://www.minimallimited.com/wp-content/uploads/TK-Cover-1.webp"
                alt="TK Group"
                className="h-64 w-full object-cover"
              />
              <div className="bg-white p-4">
                <h3 className="font-semibold text-dark">TK Group</h3>
                <p className="text-sm text-text">Kawran Bazar</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-light transition hover:bg-primary-light"
            >
              See More
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark py-16 text-white">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-semibold">
                Want us to Execute Your Next Commercial Project?
              </h2>
              <p className="mb-6 text-sm">Call us at: 01775 760 496</p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-light transition hover:bg-primary-light"
              >
                Contact us
              </Link>
            </div>
            <div className="flex justify-center">
              <img
                src="https://www.minimallimited.com/wp-content/uploads/Team-desktop-2.webp"
                alt="Our team"
                className="max-w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-light py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-semibold text-dark">
            See What Our Clients Have to Say About Our Work
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <p className="mb-6 text-xl italic text-text">
                I was impressed with their 3D design and even more so, with the
                final outcome.
              </p>
              <div className="font-semibold">
                <h3 className="text-lg text-primary">
                  Global Consolidators Ltd.
                </h3>
                <p className="text-text">3200sft, Gulshan 1</p>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg">
              <p className="mb-6 text-xl italic text-text">
                We chose Minimal because of their Professionalism, Time
                commitment & Design sense.
              </p>
              <div className="font-semibold">
                <h3 className="text-lg text-primary">Milvik Bangladesh</h3>
                <p className="text-text">4000sft, Mohakhali C/A</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
