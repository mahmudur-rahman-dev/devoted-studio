import React from "react";
import MainHero from "../components/MainHero";
import Projects from "../components/Projects";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import ApproachTabs from "../components/ApproachTabs";
import Stats from "../components/Stats";
import Comparison from "../components/Comparison";
import Testimonials from "../components/Testimonials";
import PromoBanner from "../components/PromoBanner";
import Contact from "../components/Contact";
import Cta from "../components/Cta";

const Home = () => {
  return (
    <>
      <MainHero />
      <Projects />
      <Services />
      <WhyChooseUs />
      <PromoBanner />
      <div className="py-20" id="approach">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-dark">Our Approach</h2>
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
