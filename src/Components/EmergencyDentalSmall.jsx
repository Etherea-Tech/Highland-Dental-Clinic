import React from "react";
import { Clock, Phone, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EmergencyDentalSmall = () => {
  const successStories = [
    {
      number: "15min",
      description: "Avg wait time",
    },
    {
      number: "98%",
      description: "Treated same day",
    },
    {
      number: "24/7",
      description: "Hotline available",
    },
    {
      number: "5k+",
      description: "Cases handled",
    },
  ];

  return (
    <section className="py-20 bg-lightbg dark:bg-[#070025] transition-colors duration-300 font-poppins relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-myblack rounded-[2rem] overflow-hidden shadow-2xl relative border border-white/5"
        >
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-lightblue rounded-full mix-blend-screen filter blur-[100px] opacity-10 transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-600 rounded-full mix-blend-screen filter blur-[80px] opacity-10 transform -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row items-stretch">
            {/* Left Content */}
            <div className="p-10 lg:p-14 lg:w-[60%] text-lightbg relative z-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2.5 bg-red-500/10 border border-red-500/20 rounded-xl relative">
                    <div className="absolute inset-0 bg-red-500 rounded-xl animate-ping opacity-20"></div>
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-sm font-bold tracking-[0.15em] uppercase text-red-400">
                    Dental Emergency
                  </h3>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-[1.15]">
                  Don't Wait in Pain. <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-lightblue to-blue-200">
                    Get Immediate Help.
                  </span>
                </h2>
                
                <p className="text-lightbg/70 text-lg mb-12 max-w-xl font-light leading-relaxed">
                  Dental emergencies can't wait. Our specialized team is standing by to provide immediate care, fast pain relief, and expert treatment when you need it most.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8 border-t border-white/10 pt-8 mt-auto">
                {successStories.map((stat, idx) => (
                  <div key={idx} className="flex flex-col gap-1.5">
                    <div className="text-3xl font-bold text-lightblue">{stat.number}</div>
                    <div className="text-xs text-lightbg/50 uppercase tracking-wider font-semibold">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content / CTA */}
            <div className="p-10 lg:p-14 lg:w-[40%] bg-gradient-to-b from-mydark/30 to-mydark/10 backdrop-blur-sm border-l border-white/5 relative z-10 flex flex-col justify-center">
              <h4 className="text-2xl font-semibold text-lightbg mb-8 text-center lg:text-left">
                We are ready to help you right now.
              </h4>
              
              <div className="flex flex-col gap-5">
                <a 
                  href="tel:+1234567890" 
                  className="group relative w-full bg-red-600 text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all hover:bg-red-500 shadow-[0_0_20px_rgba(220,38,38,0.25)] hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] flex items-center justify-center gap-3 overflow-hidden hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  <Phone className="w-6 h-6 relative z-10 group-hover:animate-bounce" />
                  <span className="relative z-10">Call Emergency Line</span>
                </a>
                
                <Link 
                  to="/contact" 
                  className="w-full bg-transparent border-2 border-lightblue/50 text-lightblue hover:bg-lightblue hover:text-myblack px-8 py-5 rounded-2xl font-bold text-[17px] transition-all text-center flex items-center justify-center gap-2 hover:-translate-y-1"
                >
                  <Clock className="w-5 h-5" />
                  Book Urgent Appointment
                </Link>
                
                <p className="text-center text-sm text-lightbg/50 mt-2 font-medium">
                  Priority scheduling available 24/7
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmergencyDentalSmall;
