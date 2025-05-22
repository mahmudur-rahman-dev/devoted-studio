import React from "react";
import MainHero from "@/src/components/MainHero";
import Projects from "@/src/components/Projects";
import Services from "@/src/components/Services";
import WhyChooseUs from "@/src/components/WhyChooseUs";
import ApproachTabs from "@/src/components/ApproachTabs";
import Stats from "@/src/components/Stats";
import Comparison from "@/src/components/Comparison";
import Testimonials from "@/src/components/Testimonials";
import PromoBanner from "@/src/components/PromoBanner";
import Contact from "@/src/components/Contact";
import Cta from "@/src/components/Cta";

// Add metadata for SEO
export const metadata = {
  title: 'Minimal Limited - Interior Design & Architecture Services',
  description: 'Professional interior design and architectural consultancy services in Bangladesh. Residential and commercial projects with quality materials and custom designs.',
  keywords: 'interior design, architecture, Bangladesh, residential, commercial, minimal design, home interior',
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