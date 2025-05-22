import React from 'react';

const promoBanner = {
  background:
    "url(https://ext.same-assets.com/2815741424/2103456789.webp) center/cover no-repeat",
  title: "Special Offer: 20% Off Your First Project",
  subtitle: "Limited time only. Let's make your dream space a reality.",
  ctaText: "Get Started",
  ctaLink: "#contact",
};

export default function PromoBanner() {
  return (
    <section
      className="py-20 flex items-center justify-center text-center text-white"
      style={{
        background: promoBanner.background,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-dark bg-opacity-50 p-10 rounded-lg max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow">
          {promoBanner.title}
        </h2>
        <p className="text-lg md:text-xl mb-6 drop-shadow">
          {promoBanner.subtitle}
        </p>
        <a
          href={promoBanner.ctaLink}
          className="inline-block bg-gold text-dark font-semibold px-8 py-3 rounded hover:bg-secondary transition"
        >
          {promoBanner.ctaText}
        </a>
      </div>
    </section>
  );
}
