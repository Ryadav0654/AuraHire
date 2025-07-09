import Header from "../components/Header";
import Hero from "../components/Hero";
import ProblemSolution from "../components/ProblemSolution";
import AIFeatures from "../components/AIFeatures";
import Testimonials from "../components/Testimonials";
import HowItWorks from "../components/HowItWorks";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function Page() {


  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 transition-colors duration-300">
      <Header />
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
