import React from "react";
import { Sparkles, TrendingUp, Clock } from "lucide-react";

const AIFeatures = () => {
  const features = [
    {
      title: "Resume MatchEngine™",
      description:
        "Real-time NLP analysis that shows exactly how to tweak your resume for each role",
      icon: Sparkles,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Interview Forecast™",
      description:
        "Machine learning that calculates your interview odds based on application patterns",
      icon: TrendingUp,
      gradient: "from-[#00C1D4] to-[#4CAF50]",
    },
    {
      title: "Follow-Up Autopilot",
      description: "Intelligent reminders for critical actions and deadlines with AI",
      icon: Clock,
      gradient: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section id="features" className="py-24 relative">
      {/* Neural Network Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="neural"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="10" cy="10" r="1" fill="currentColor" />
              <line
                x1="10"
                y1="10"
                x2="30"
                y2="10"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.5"
              />
              <line
                x1="10"
                y1="10"
                x2="10"
                y2="30"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] dark:text-white mb-6">
            Your AI Career Agent
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Powered by advanced machine learning algorithms that understand the
            job market better than any human recruiter
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 z-100`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#0A2463] dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Glow Effect */}
                <div
                  className={`relative  inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none">
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} p-0.5`}
                  >
                    <div className="w-full h-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-2xl" />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
