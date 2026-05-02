import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Star } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2000&auto=format&fit=crop",
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center bg-myblack overflow-hidden font-poppins">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt="Premium Dental Clinic"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.5, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        {/* Elegant Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-myblack via-myblack/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-myblack/50 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 mt-16 md:mt-0">
        <div className="max-w-2xl text-lightbg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-yellow-400 drop-shadow-sm">
              Trusted by 10,000+ Patients
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Excellence in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lightblue to-blue-200">
              Dental Care
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-lightbg/80 mb-10 leading-relaxed max-w-xl font-light"
          >
            Experience world-class dentistry in a luxurious, relaxing environment. 
            We combine advanced technology with exceptional comfort to give you the smile you deserve.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <button className="group relative px-8 py-4 bg-lightblue text-lightbg font-semibold rounded-full overflow-hidden shadow-[0_0_20px_rgba(76,156,181,0.3)] transition-all hover:scale-105">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Book Your Consultation
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-opacity-80 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </button>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-medium rounded-full transition-all border border-white/10 hover:border-white/30">
              Explore Our Clinic
            </button>
          </motion.div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-6 md:left-auto md:right-12 z-10 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentImageIndex 
                ? "w-10 bg-lightblue" 
                : "w-4 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
