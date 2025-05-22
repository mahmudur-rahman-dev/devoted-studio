import React from 'react';

const About = () => {
  return (
    <div className="bg-light">
      {/* Inception Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-dark">The Inception</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-text text-lg mb-6 text-center">
              It's 2016, when six young minds with different educational backgrounds have come together to build a meaningful thing that inspires them, cherishes their dreams and creates solvency, by allowing creative gestures.
            </p>
            <p className="text-text text-lg mb-6 text-center">
              7 years after the inception of Minimal Limited, we have a greater vision to become the foremost lifestyle brand, introducing a great way of living.
            </p>
            <p className="text-text text-lg text-center">
              Minimal is uniquely identified with sensible design thinking and a connection to heritage and culture. Our goal is to make your space feel connected and alive, while maintaining balance and harmony, by having less but meaningful items.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-dark">The Timeline</h2>

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200"></div>

            {/* 2016 */}
            <div className="relative z-10 mb-16">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto relative z-10">
                  <span className="text-dark font-bold">2016</span>
                </div>
              </div>
              <div className="bg-light p-6 rounded-lg shadow-sm ml-8 md:ml-16">
                <h3 className="font-bold text-dark mb-2">Foundation Day of Minimalism</h3>
                <p className="text-text">We started providing custom-made furniture along with space design solutions.</p>
              </div>
            </div>

            {/* 2017 */}
            <div className="relative z-10 mb-16">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto relative z-10">
                  <span className="text-dark font-bold">2017</span>
                </div>
              </div>
              <div className="bg-light p-6 rounded-lg shadow-sm ml-8 md:ml-16">
                <p className="text-text mb-3">Run production in 2000 square feet own factory</p>
                <p className="text-text">Provide prefabricated interior solutions</p>
              </div>
            </div>

            {/* 2018 */}
            <div className="relative z-10 mb-16">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto relative z-10">
                  <span className="text-dark font-bold">2018</span>
                </div>
              </div>
              <div className="bg-light p-6 rounded-lg shadow-sm ml-8 md:ml-16">
                <p className="text-text mb-3">Minimal was relaunched, incorporating mechanical hardware and technology.</p>
                <p className="text-text">We achieved the status of a National finalist (Top 8) in the Ring Startup Competition.</p>
              </div>
            </div>

            {/* 2022 */}
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto relative z-10">
                  <span className="text-dark font-bold">2022</span>
                </div>
              </div>
              <div className="bg-light p-6 rounded-lg shadow-sm ml-8 md:ml-16">
                <p className="text-text mb-3">Launched a new office and customer experience center spanning 3000 square feet.</p>
                <p className="text-text mb-3">We introduced Home Automation Systems to enhance our offerings.</p>
                <p className="text-text">Our expertise expanded from Interior to Exterior Architecture Design & Consultancy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Buzz Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-dark">
            The Market is buzzing<br />about us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">Having 2 Lakh+ Followers</h3>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">Achieving 4.8 reviews out of 5</h3>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">1K+ Successful projects delivered</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-dark">Brand We Use</h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* We'll use placeholder divs for the brands, but you should replace with actual brand logos */}
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="h-16 bg-gray-100 rounded flex items-center justify-center">
                <div className="text-gray-400 font-medium">Brand Logo</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">The Team Behind Minimal</h2>
          <p className="text-white text-center max-w-2xl mx-auto mb-16">
            Our diverse team of architects, engineers, and business managers is here to make your home the best it can be.
          </p>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {/* This would be a grid of team member photos - using placeholders */}
            {Array.from({ length: 18 }).map((_, index) => (
              <div key={index} className="aspect-w-1 aspect-h-1 bg-gray-200"></div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-dark">Make Your Dreams Come True With Just One Click</h2>
          <a href="/contact" className="inline-block bg-gold text-dark font-medium px-8 py-3 hover:bg-opacity-90 transition-all">
            Book a Meeting
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
