import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import TrustSignals from "@/components/TrustSignals";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingChatbot from "@/components/FloatingChatbot";
import { Toaster } from "@/components/ui/toaster";

const Home = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <CaseStudies />
      <TrustSignals />
      <Contact />
      <Footer />
      <FloatingChatbot />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
