import React from "react";
import { Play } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_6rem]"></div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 max-w-2xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Customer service software for customer-first teams
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              The best customer service software for customer-first teams.
              Industry-leading email and live chat support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-300 rounded-lg transition-colors duration-200 group">
                <Play className="mr-2 w-5 h-5 fill-current" />
                Demo
              </button>

              <button className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors duration-200 shadow-lg shadow-purple-600/30">
                Sign up
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:ml-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1000&q=80"
                alt="Minimal workspace with laptop"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Decorative blur effect behind image */}
            <div className="absolute -inset-8 bg-gradient-to-br from-purple-200/40 via-pink-200/40 to-blue-200/40 rounded-3xl blur-3xl -z-10 opacity-60"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
