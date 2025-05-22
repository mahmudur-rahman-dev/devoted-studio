"use client";
import React, { useState } from "react";
import Link from "next/link";

// Step type for work process
interface Step {
  icon: string;
  title: string;
}

// Process type for detailed steps
interface Process {
  title: string;
  description: string;
  image: string;
  details: {
    subtitle?: string;
    points: string[];
  }[];
}

const HowWeWork = () => {
  // Steps in the work process
  const steps: Step[] = [
    {
      icon: "https://ext.same-assets.com/3221460866/131714642.svg",
      title: "Meet and Greet",
    },
    {
      icon: "https://ext.same-assets.com/3221460866/2992725781.svg",
      title: "Design Development",
    },
    {
      icon: "https://ext.same-assets.com/3221460866/1993310530.svg",
      title: "Place Order",
    },
    {
      icon: "https://ext.same-assets.com/3221460866/3263818012.svg",
      title: "Installation Process",
    },
    {
      icon: "https://ext.same-assets.com/3221460866/2879902577.svg",
      title: "Moving In",
    },
  ];

  // Detailed process data
  const processes: Process[] = [
    {
      title: "Meet and Greet",
      description: "It all begins with a form",
      image: "https://placehold.co/800x600?text=Meet+and+Greet",
      details: [
        {
          points: [
            "Tell us the story you want to build, and we will take care of the rest. The more we learn about you, the better.",
          ],
        },
        {
          subtitle: "Get Free Consultation",
          points: [
            "Our designers will sit down with you for a personalized one-to-one session. They will suggest layouts and estimations tailored to your project.",
          ],
        },
      ],
    },
    {
      title: "Design Development",
      description: "Pay the booking amount to seal the deal",
      image: "https://placehold.co/800x600?text=Design+Development",
      details: [
        {
          points: [
            "After paying 5% of the total estimated budget as a token amount, we will initiate the 3D design process for you.",
          ],
        },
        {
          subtitle: "Finalize your design",
          points: [
            "Based on your requirements and our ideas, we will develop design options for you to choose from. Simply decide which one you want.",
          ],
        },
        {
          subtitle: "Submitting the final Budget",
          points: [
            "We will prepare the full budget according to the design and materials you've specified.",
          ],
        },
      ],
    },
    {
      title: "Place The Order",
      description: "Start the Order with a 50% payment",
      image: "https://placehold.co/800x600?text=Place+Order",
      details: [
        {
          points: [
            "Within 7 days, you will receive working drawings for approval, and your project will be off to a great start.",
          ],
        },
        {
          subtitle: "Work Commences",
          points: [
            "Procurement Process and Site Preparation will begin the interior construction process after completing the necessary procurement and site preparation. (You can track your project's progress through the Gantt chart we provide.)",
          ],
        },
      ],
    },
    {
      title: "Installation Process",
      description: "Pay 95% at the execution milestone",
      image: "https://placehold.co/800x600?text=Installation",
      details: [
        {
          points: [
            "With our woodwork almost complete and coloring work in progress, your project is now midway.",
          ],
        },
        {
          subtitle: "Installation",
          points: [
            "To ensure perfection, we will conduct 154 quality checks during the installation process to match the design precisely.",
          ],
        },
      ],
    },
    {
      title: "Moving in",
      description: "Move in",
      image: "https://placehold.co/800x600?text=Moving+In",
      details: [
        {
          points: [
            "The work is done, and your dream interior has become a reality. Capture this moment with our complimentary professional photoshoot.",
          ],
        },
      ],
    },
  ];

  const [activeProcess, setActiveProcess] = useState<number>(0);

  return (
    <div className="bg-light">
      {/* Hero Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-6 text-3xl font-bold text-dark md:text-4xl">
              A Hassle-Free
              <br />
              Design to Installation Journey
            </h1>
            <Link
              href="/contact"
              className="mt-4 inline-block bg-gold px-8 py-3 font-medium text-dark transition-all hover:bg-opacity-90"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Steps Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-dark md:text-4xl">
              Your Desired Interior in 5 Simple Steps
            </h2>
            <p className="mx-auto max-w-2xl text-text">
              Thinking of building a new home or workplace?
              <br />
              Here's how you can get started.
            </p>
          </div>

          {/* Steps Icons */}
          <div className="mb-16 flex flex-wrap justify-center gap-6 md:gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`cursor-pointer text-center transition-all ${
                  activeProcess === index
                    ? "opacity-100"
                    : "opacity-50 hover:opacity-80"
                }`}
                onClick={() => setActiveProcess(index)}
              >
                <div className="mx-auto mb-4 h-20 w-20">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="text-sm font-medium text-dark">{step.title}</h3>
              </div>
            ))}
          </div>

          {/* Detailed Process Section */}
          <div className="mb-16">
            {processes.map((process, index) => (
              <div
                key={index}
                className={`${activeProcess === index ? "block" : "hidden"}`}
              >
                <div className="flex flex-col items-center gap-12 md:flex-row">
                  {/* Process Image */}
                  <div className="md:w-1/2">
                    <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                      <img
                        src={process.image}
                        alt={process.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Process Details */}
                  <div className="md:w-1/2">
                    <h3 className="mb-4 text-2xl font-bold text-dark">
                      {process.title}
                    </h3>
                    <div className="mb-6 flex items-center">
                      <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-gold">
                        <span className="font-bold text-dark">{index + 1}</span>
                      </div>
                      <p className="font-bold text-dark">
                        {process.description}
                      </p>
                    </div>

                    {process.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="mb-6">
                        {detail.subtitle && (
                          <h4 className="mb-2 font-bold text-dark">
                            {detail.subtitle}
                          </h4>
                        )}
                        {detail.points.map((point, pointIndex) => (
                          <p key={pointIndex} className="mb-2 text-text">
                            {point}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-dark">
            The Team
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-text">
            Get to know the people who will assist you throughout your journey.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Design Lead */}
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-dark">
                The Design Lead (DL)
              </h3>
              <p className="text-text">
                The Design Lead will intimately understand your requirements and
                lifestyle to ensure your home is a reflection of who you are.
              </p>
            </div>

            {/* Business Manager */}
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-dark"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-dark">
                Business Manager (BM)
              </h3>
              <p className="text-text">
                The Business Manager oversees the entire process to ensure a
                smooth sailing journey with us, minimizing any hiccups along the
                way.
              </p>
            </div>

            {/* Project Manager */}
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-dark"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-dark">
                Project Manager (PM)
              </h3>
              <p className="text-text">
                Your Project Manager is dedicated to ensuring on-site execution
                is seamless. They make it their mission to deliver your home on
                time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary bg-opacity-10 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center md:flex-row">
            {/* Image */}
            <div className="mb-8 md:mb-0 md:w-1/2">
              <div className="overflow-hidden rounded-lg bg-gray-100">
                <img
                  src="https://placehold.co/800x600?text=Interior+Design"
                  alt="Interior Design"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Form */}
            <div className="md:w-1/2 md:pl-12">
              <div className="rounded-lg bg-dark p-8">
                <h2 className="mb-6 text-2xl font-bold text-white">
                  Design For Every Budget
                </h2>
                <p className="mb-6 text-white">
                  Get one step closer towards your dream home. Let our experts
                  help you.
                </p>

                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full rounded border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-gold focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-gold focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full rounded border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-gold focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Property Name"
                    className="w-full rounded border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-gold focus:outline-none"
                  />

                  <button
                    type="submit"
                    className="w-full rounded bg-gold px-6 py-3 font-bold text-dark transition-colors hover:bg-opacity-90"
                  >
                    Get Free Quote
                  </button>

                  <p className="text-xs text-gray-400">
                    By Submitting this form, you agree to the privacy policy &
                    Terms and conditions
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;
