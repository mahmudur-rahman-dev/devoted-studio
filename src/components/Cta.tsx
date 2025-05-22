import React from 'react';

export default function Cta() {
  return (
    <section className="py-24 bg-gold text-dark text-center">
      <div className="container max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="mb-10 text-lg max-w-xl mx-auto">
          Contact us today and let's bring your vision to life with Minimal
          Limited.
        </p>
        <a
          href="#contact"
          className="inline-block bg-dark text-gold font-semibold px-10 py-4 rounded hover:bg-dark/90 transition"
        >
          Book a Meeting
        </a>
      </div>
    </section>
  );
}
