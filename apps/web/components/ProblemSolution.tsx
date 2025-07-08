import React from "react";
import { BarChart3, Sparkles, Clock, TrendingUp } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    {
      pain: "Lost applications",
      solution: "Smart Tracker Dashboard",
      icon: BarChart3,
      color: "from-red-500 to-orange-500",
    },
    {
      pain: "Generic resumes",
      solution: "AI Resume Tailoring",
      icon: Sparkles,
      color: "from-purple-500 to-pink-500",
    },
    {
      pain: "Missed follow-ups",
      solution: "Automated Reminders",
      icon: Clock,
      color: "from-blue-500 to-cyan-500",
    },
    {
      pain: "Uncertain chances",
      solution: "Interview Probability Scores",
      icon: TrendingUp,
      color: "from-[#00C1D4] to-[#4CAF50]",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] dark:text-white mb-6">
            From Job Search Chaos to
            <span className="bg-gradient-to-r from-[#00C1D4] to-[#4CAF50] bg-clip-text text-transparent">
              {" "}
              Career Control
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stop wrestling with spreadsheets and missed opportunities.
            AuraHire&apos;s AI eliminates the guesswork.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((item, index) => (
            <div key={index} className="group relative">
              <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-2xl p-6 border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Problem */}
                <div className="mb-6 pb-6 border-b border-gray-200 dark:border-slate-600">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">😤</span>
                    </div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                      &quot;{item.pain}&quot;
                    </h3>
                  </div>
                </div>

                {/* Solution */}
                <div className="text-center">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-3`}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-[#0A2463] dark:text-white mb-2">
                    {item.solution}
                  </h3>
                  <div className="w-8 h-1 bg-gradient-to-r from-[#00C1D4] to-[#4CAF50] rounded-full mx-auto"></div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00C1D4]/5 to-[#4CAF50]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
