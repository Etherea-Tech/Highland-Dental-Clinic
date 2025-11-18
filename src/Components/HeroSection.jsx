import React from "react";
import { Calendar, Star, Award, Users } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function HeroSection() {
  return (
    <div className="min-h-4/5 mb-8 bg-lightbg font-poppins">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Patient Testimonial Card */}
            <div className="flex items-center gap-4 animate-fade-in">
              <div className="flex items-center gap-4  rounded-full px-4 py-2 shadow-lg border border-mydark">
                <FcGoogle className="text-2xl" />

                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400 drop-shadow-lg"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight">
                Your One Stop Shop
                <br />
                <span className="text-slate-700">
                  for all your dental needs
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-lg leading-relaxed max-w-md">
              Every dental care experience, that you feel comfortable with our
              dentist professionals and than you look awesome.
            </p>

            {/* CTA Button */}
            <button className="bg-mydark text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
              BOOK NOW
            </button>
          </div>

          {/* Right Column - Image & Credentials */}
          <div className="relative">
            {/* Main Dentist Image */}
            <div className="relative z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-200 rounded-full blur-3xl opacity-40"></div>
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&h=700&fit=crop"
                alt="Professional dentist"
                className="relative z-10 w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />
            </div>

            {/* Floating Credentials Card */}
            <div className="absolute top-8 right-0 bg-white rounded-2xl shadow-xl p-6 max-w-xs z-20 animate-float">
              <h3 className="text-sm font-semibold text-slate-700 mb-3">
                Authorized licenses
                <br />
                from reputed dental
                <br />
                college
              </h3>
              <div className="flex gap-3 flex-wrap items-center">
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  <span className="text-xs">ADA</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  <span className="text-xs">ISO</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  <span className="text-xs">Certified</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span className="text-xs">Member</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-3">2021-2025</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-delay {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 3s ease-in-out infinite 1s;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
