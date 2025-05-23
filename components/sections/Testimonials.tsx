import React from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Minimal Limited transformed our office space beyond expectations. Highly recommend!",
    name: "Sarah J.",
    role: "Marketing Manager",
    avatar: "https://ext.same-assets.com/2815741424/avatar1.jpg",
  },
  {
    quote:
      "Professional, timely, and creative. Our new home feels perfect thanks to them.",
    name: "Michael B.",
    role: "Homeowner",
    avatar: "https://ext.same-assets.com/2815741424/avatar2.jpg",
  },
  {
    quote:
      "Their architectural consultancy helped us realize our dream project seamlessly.",
    name: "Emily R.",
    role: "Architect",
    avatar: "https://ext.same-assets.com/2815741424/avatar3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-light py-20">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="mb-12 text-3xl font-bold text-dark md:text-4xl">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {testimonials.map(({ quote, name, role, avatar }, index) => (
            <div
              key={name}
              className="flex flex-col items-center rounded-xl bg-white p-10 shadow"
            >
              <p className="mb-6 italic text-text-light">"{quote}"</p>
              <div className="relative mb-4 h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src={avatar}
                  alt={`${name} avatar`}
                  fill
                  className="object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
              <div className="font-semibold text-dark">{name}</div>
              <div className="text-sm text-text-light">{role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
