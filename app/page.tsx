import React from "react";
import MainHero from "@/components/sections/MainHero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/features/WhyChooseUs";
import ApproachTabs from "@/components/features/ApproachTabs";
import Stats from "@/components/sections/Stats";
import Comparison from "@/components/sections/Comparison";
import Testimonials from "@/components/sections/Testimonials";
import PromoBanner from "@/components/sections/PromoBanner";
import Contact from "@/components/sections/Contact";
import Cta from "@/components/sections/Cta";

// Add metadata for SEO
export const metadata = {
  title: 'Devoted Studio - Interior Design & Architecture Services',
  description: 'Professional interior design and architectural consultancy services in Bangladesh. Residential and commercial projects with quality materials and custom designs.',
  keywords: 'interior design, architecture, Bangladesh, residential, commercial, home interior',
}

const Home = () => {
  return (
    <>
      <MainHero />
      <Projects />
      <Services />
      <WhyChooseUs />
      <PromoBanner />
      <div className="py-20" id="approach">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-12 text-3xl font-bold text-dark md:text-4xl">
            Our Approach
          </h2>
          <ApproachTabs />
        </div>
      </div>
      <Stats />
      <Comparison />
      <Testimonials />
      <Cta />
      <Contact />
    </>
  );
};

export default Home; 