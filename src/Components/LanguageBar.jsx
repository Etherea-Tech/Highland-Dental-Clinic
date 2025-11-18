import React from "react";

const LanguageBar = () => {
  const languages = [
    "We Speak English",
    "हम हिंदी बोलते हैं",
    "ਅਸੀਂ ਪੰਜਾਬੀ ਬਲਦੇ ਹਾਂ",
    "ہم اردو بولتے ہیں",
    "mówimy po polsku",
    "ما فارسی صحبت می کنیم",
    "Vorbim românește",
    "نحن نتكلم العربية",
  ];

  return (
    <div className="bg-[#0a0035] text-white py-2 overflow-hidden border-b border-gray-600 relative">
      {/* Scrolling Container */}
      <div className="flex whitespace-nowrap animate-scroll">
        {/* Double the array for seamless looping */}
        {[...languages, ...languages].map((language, index) => (
          <div
            key={index}
            className="inline-flex items-center mx-6 text-sm font-medium"
          >
            <span>{language}</span>
            {/* Separator dot - only show between items, not at the end */}
            <span className="mx-6 text-gray-400">•</span>
          </div>
        ))}
      </div>

      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0035] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0035] to-transparent z-10"></div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
          display: flex;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LanguageBar;
