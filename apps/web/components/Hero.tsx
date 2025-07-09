import React from "react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
const Hero = () => {
  return (
    <section className="relative pt-16 pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#00C1D4]/20 to-[#0A2463]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-[#4CAF50]/20 to-[#00C1D4]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-gray-200 dark:border-slate-700 mb-8">
            <span className="text-sm font-medium text-[#0A2463] dark:text-white">
              ✨ Job Search Intelligence - Powered by AI
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-[#0A2463] dark:text-white mb-6 leading-tight">
            Stop Tracking Applications.
            <br />
            <span className="bg-gradient-to-r from-[#00C1D4] to-[#4CAF50] bg-clip-text text-transparent">
              Start Landing Interviews.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            AuraHire transforms your job hunt with predictive AI that organizes
            applications, optimizes resumes, and forecasts interview success
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
            variant={"default"}
            className="group px-8 py-4 bg-[#00C1D4] text-white rounded-xl hover:bg-[#00A5B8] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
            >
             Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
            variant="ghost"
              className="group px-8 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md text-[#0A2463] dark:text-white rounded-xl hover:bg-white/90 dark:hover:bg-slate-700/90 transition-all duration-300 font-semibold text-lg border border-gray-200 dark:border-slate-600 flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>See How It Works</span>
            </Button>
          </div>

          {/* Visual Placeholder */}
          <div className="relative">
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-200 dark:border-slate-700 shadow-2xl">
              <div className="bg-gradient-to-br from-[#00C1D4] to-[#0A2463] rounded-xl p-12 text-white">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="h-3 bg-white/30 rounded"></div>
                  <div className="h-3 bg-white/50 rounded"></div>
                  <div className="h-3 bg-white/30 rounded"></div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <p className="text-lg opacity-90">
                    AI-Powered Interview Intelligence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
