import React from "react";
import { ArrowRight, Users, TrendingUp, Clock } from "lucide-react";

const FinalCTA = () => {
  const stats = [
    {
      icon: Users,
      value: "50,000+",
      label: "Active Users",
    },
    {
      icon: TrendingUp,
      value: "3x",
      label: "More Interviews",
    },
    {
      icon: Clock,
      value: "60%",
      label: "Time Saved",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2463] via-[#00C1D4] to-[#4CAF50] opacity-90"></div>
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="finalPattern"
              x="0"
              y="0"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="5" cy="5" r="1" fill="white" opacity="0.3" />
              <line
                x1="5"
                y1="5"
                x2="15"
                y2="5"
                stroke="white"
                strokeWidth="0.2"
                opacity="0.2"
              />
              <line
                x1="5"
                y1="5"
                x2="5"
                y2="15"
                stroke="white"
                strokeWidth="0.2"
                opacity="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#finalPattern)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Content */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform
            <br />
            Your Job Search?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Join 50,000+ users who receive 3x more interview invites with
            AI-powered career intelligence
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/signup"
              className="group px-10 py-5 bg-white text-[#0A2463] rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 flex items-center space-x-3"
            >
              <span>Launch Your Free Account</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-white/70 text-sm">
            <p>
              ✓ No credit card required • ✓ 14-day free trial • ✓ Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
