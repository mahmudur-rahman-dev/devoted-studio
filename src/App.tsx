import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages";
import PortfolioPage from "./pages/portfolio";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import HowWeWorkPage from "./pages/how-we-work";
import ProjectDetail from "./pages/project/[id]";
import ResidentialInteriorPage from "./pages/residential-interior";
import CommercialInteriorPage from "./pages/commercial-interior";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-background min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/how-we-work" element={<HowWeWorkPage />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/residential-interior" element={<ResidentialInteriorPage />} />
            <Route path="/commercial-interior" element={<CommercialInteriorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
