import React from "react";

const promoBanner = {
  backgroundUrl: "https://ext.same-assets.com/2815741424/2103456789.webp",
  title: "Special Offer: 20% Off Your First Project",
  subtitle: "Limited time only. Let's make your dream space a reality.",
  ctaText: "Get Started",
  ctaLink: "#contact",
};

export default function PromoBanner() {
  return (
    <section
      className="flex items-center justify-center py-20 text-center text-white bg-[url(https://ext.same-assets.com/2815741424/2103456789.webp)] bg-cover bg-center"
    >
      <div className="max-w-3xl rounded-lg bg-dark bg-opacity-50 p-10">
        <h2 className="mb-4 text-3xl font-bold drop-shadow md:text-4xl">
          {promoBanner.title}
        </h2>
        <p className="mb-6 text-lg drop-shadow md:text-xl">
          {promoBanner.subtitle}
        </p>
        <a
          href={promoBanner.ctaLink}
          className="inline-block rounded bg-gold px-8 py-3 font-semibold text-dark transition hover:bg-secondary"
        >
          {promoBanner.ctaText}
        </a>
      </div>
    </section>
  );
}
