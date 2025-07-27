"use client";
import React from "react";
import { Plus, Wand2, BarChart3, Trophy } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
const HowItWorks = () => {
  const { isSignedIn } = useAuth();
  const steps = [
    {
      number: 1,
      title: "Add Job",
      description: "One-click job saving with our Chrome extension",
      icon: Plus,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: 2,
      title: "Optimize Resume",
      description: "AI analyzes and tailors your resume for each role",
      icon: Wand2,
      color: "from-purple-500 to-pink-500",
    },
    {
      number: 3,
      title: "Track Progress",
      description: "Monitor applications with intelligent insights",
      icon: BarChart3,
      color: "from-[#00C1D4] to-[#0A2463]",
    },
    {
      number: 4,
      title: "Get Hired",
      description: "Land interviews with predictive success scores",
      icon: Trophy,
      color: "from-[#4CAF50] to-yellow-500",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-[#00C1D4]/30 to-[#4CAF50]/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-[#0A2463]/30 to-[#00C1D4]/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] dark:text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Four simple steps to transform your job search with AI-powered
            intelligence
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#00C1D4] to-[#4CAF50] transform -translate-y-1/2 hidden lg:block"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Card */}
                <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-white font-bold text-sm">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#0A2463] dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-white dark:bg-slate-800 rounded-full border border-gray-200 dark:border-slate-600 flex items-center justify-center shadow-md">
                      <div className="w-3 h-3 border-r-2 border-b-2 border-[#00C1D4] transform rotate-[-45deg]"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to experience the future of job searching?
          </p>
          <Link
            href={isSignedIn ? "/dashboard" : "/sign-in"}
            className="inline-flex items-center px-8 py-4 bg-[#00C1D4] text-white rounded-xl hover:bg-[#00A5B8] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Start Your Free Trial
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
