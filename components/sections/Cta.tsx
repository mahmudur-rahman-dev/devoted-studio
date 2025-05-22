import React from "react";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="bg-gold py-24 text-center text-dark">
      <div className="container mx-auto max-w-3xl">
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">
          Ready to Start Your Project?
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg">
          Contact us today and let's bring your vision to life with Minimal
          Limited.
        </p>
        <Link
          href="#contact"
          className="inline-block rounded bg-dark px-10 py-4 font-semibold text-gold transition hover:bg-dark/90"
        >
          Book a Meeting
        </Link>
      </div>
    </section>
  );
}
