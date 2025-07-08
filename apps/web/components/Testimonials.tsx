import React from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "AuraHire predicted my Google interview chance at 78% - I got the offer in 3 weeks!",
      name: "Sarah T.",
      role: "Product Manager",
      company: "Google",
      rating: 5,
    },
    {
      quote:
        "The resume tailoring helped me land 5x more callbacks. Worth every penny.",
      name: "Diego R.",
      role: "Data Scientist",
      company: "Meta",
      rating: 5,
    },
    {
      quote:
        "Finally, a job search tool that actually understands the market. Game changer!",
      name: "Priya K.",
      role: "Software Engineer",
      company: "Apple",
      rating: 5,
    },
  ];

  const logos = [
    { name: "TechCrunch", color: "text-green-600" },
    { name: "Forbes", color: "text-blue-600" },
    { name: "LinkedIn", color: "text-blue-500" },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] dark:text-white mb-6">
            Join 50,000+ Success Stories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            See how AuraHire transforms careers with predictive AI intelligence
          </p>

          {/* Media Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
            <span className="text-gray-500 dark:text-gray-400 font-medium">
              As featured in:
            </span>
            {logos.map((logo, index) => (
              <div key={index} className={`font-bold text-lg ${logo.color}`}>
                {logo.name}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-[#00C1D4] opacity-60" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-[#4CAF50] fill-current"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00C1D4] to-[#0A2463] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#0A2463] dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Success Badge */}
                <div className="absolute top-4 right-4">
                  <div className="w-6 h-6 bg-[#4CAF50] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
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

export default Testimonials;
