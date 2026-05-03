import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const LocateUs = () => {
  return (
    <section className="py-24 bg-lightbg dark:bg-myblack transition-colors duration-300 font-poppins relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-1 bg-lightblue rounded-full"></div>
              <span className="text-sm font-bold tracking-widest uppercase text-lightblue">Visit Our Clinic</span>
              <div className="w-8 h-1 bg-lightblue rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-myblack dark:text-lightbg mb-6 transition-colors">
              Locate <span className="text-transparent bg-clip-text bg-gradient-to-r from-lightblue to-blue-400">Us</span>
            </h2>
            <p className="text-mydark dark:text-lightbg/80 text-lg">
              We are conveniently located in Kitchener. Drop by or get directions to our premium dental facility.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_40px_rgb(0,0,0,0.5)] border border-gray-100 dark:border-white/10 group h-[500px]"
        >
          {/* Overlay gradient for premium look */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.1)] z-10"></div>
          
          <iframe 
            src="https://maps.google.com/maps?q=875%20Highland%20Rd%20West,%20Kitchener,%20ON&t=&z=14&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Highland Dental Clinic Location"
            className="w-full h-full object-cover filter contrast-[1.05] grayscale-[10%]"
          ></iframe>

          {/* Floating Address Card */}
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20 bg-white/95 dark:bg-myblack/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 max-w-sm transition-colors transform group-hover:-translate-y-2 duration-500">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-lightblue/10 dark:bg-lightblue/20 rounded-xl">
                <MapPin className="w-6 h-6 text-lightblue" />
              </div>
              <div>
                <h3 className="font-bold text-myblack dark:text-lightbg text-lg mb-1">Highland Dental Centre</h3>
                <p className="text-sm text-mydark dark:text-lightbg/70 leading-relaxed mb-4">
                  875 Highland Rd. West. #43.<br/>Kitchener, ON. N2N 2Y2
                </p>
                <a 
                  href="https://maps.google.com/maps?q=875%20Highland%20Rd%20West,%20Kitchener,%20ON"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-lightblue hover:text-myblack dark:hover:text-white transition-colors"
                >
                  <Navigation className="w-4 h-4" /> Get Directions
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default LocateUs;
