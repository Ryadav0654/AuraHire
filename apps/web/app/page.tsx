"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import StickyHeader from "../components/StickyHeader";
import Hero from "../components/Hero";
import ProblemSolution from "../components/ProblemSolution";
import AIFeatures from "../components/AIFeatures";
import Testimonials from "../components/Testimonials";
import HowItWorks from "../components/HowItWorks";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function Page() {
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyHeader(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 transition-colors duration-300">
      <Header />
      <StickyHeader show={showStickyHeader} />
      <Hero />
      <ProblemSolution />
      <AIFeatures />
      <Testimonials />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </main>
  );
}
