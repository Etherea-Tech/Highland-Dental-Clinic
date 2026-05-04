import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {  AlertCircle, Sparkles, Activity, Scissors, Layers, Moon, ArrowRight } from "lucide-react";

const GeneralServices = () => {
  const services = [
    {
      id: "exam",
      title: "Dental Exam and Cleaning",
      description: "Comprehensive checkups and professional cleanings to maintain optimal oral health and prevent decay.",
      icon:  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="32"
    height="32"
    viewBox="0 0 64 64"
  >
    <g fill="#4c9cb5" data-name="Outline">
      <path
        d="M18.172 10.057a11.7 11.7 0 0 0-7.287 2.631 1 1 0 1 0 1.252 1.558 9.7 9.7 0 0 1 6.035-2.189 1 1 0 0 0 0-2"
        data-original="#000000"
      ></path>
      <path
        d="M60.806 29.362a17.4 17.4 0 0 0-1.187-15.146l.971-.531a2.709 2.709 0 0 0 0-4.755l-1.221-.668a5.83 5.83 0 0 1-2.323-2.324l-.668-1.22a2.711 2.711 0 0 0-4.756 0l-.668 1.221a6 6 0 0 1-.574.843c-6.293-1.99-12.908.176-18.38 6.03C24.71 5 16.714 4.958 11.21 7.742c-4.694.353-7.755 1.9-8.842 4.5a6.82 6.82 0 0 0 .426 5.61 17.4 17.4 0 0 0 .4 11.51 35 35 0 0 0 3.7 6.728c1.73 2.654 3.364 5.162 4.036 8.158a21.3 21.3 0 0 1 .377 3.9 21 21 0 0 0 .522 4.654c1.341 5.106 4.339 7.982 8.3 7.891 6.237-.142 7.782-6.206 9.023-11.073.74-2.9 1.407-5.948 2.85-5.948s2.11 3.047 2.85 5.948c1.241 4.867 2.786 10.925 9.022 11.073 3.943.045 6.961-2.782 8.3-7.891a21 21 0 0 0 .522-4.654 21.3 21.3 0 0 1 .377-3.9 15 15 0 0 1 .875-2.638c4.057-.482 6.741-1.979 7.748-4.372.841-1.994.406-4.439-1.223-7.093.107-.263.233-.515.333-.783M52.708 6.9l.668-1.22a.712.712 0 0 1 1.248 0l.668 1.22a7.8 7.8 0 0 0 3.117 3.119l1.222.668a.711.711 0 0 1 0 1.247l-1.222.668a7.8 7.8 0 0 0-3.117 3.117l-.668 1.222a.712.712 0 0 1-1.248 0l-.668-1.22a7.8 7.8 0 0 0-3.117-3.121l-1.222-.669a.71.71 0 0 1 0-1.246l1.221-.668A7.8 7.8 0 0 0 52.708 6.9m-48.5 6.117a4.97 4.97 0 0 1 3.114-2.49 17.5 17.5 0 0 0-3.342 4.469 3.8 3.8 0 0 1 .232-1.982zm46.905 30.8a23 23 0 0 0-.425 4.264 19.3 19.3 0 0 1-.458 4.22c-.635 2.431-2.342 6.472-6.314 6.4-4.721-.111-5.947-4.919-7.132-9.567-.965-3.732-1.842-7.578-4.9-7.46-2.872.11-3.738 3.8-4.672 7.46-1.186 4.648-2.411 9.448-7.132 9.567-3.991.1-5.679-3.966-6.314-6.4a19.3 19.3 0 0 1-.458-4.22 23 23 0 0 0-.425-4.264c-.75-3.348-2.56-6.126-4.311-8.813a33 33 0 0 1-3.507-6.341 15.6 15.6 0 0 1-.822-8.343c3.929 5.5 12.569 11.546 22.949 15.917 9.007 3.732 17.4 5.738 24.534 5.552a16 16 0 0 0-.609 2.02zm1.494-4.079c-6.4.46-15.549-1.514-24.643-5.344-11.053-4.654-20-11.16-23.013-16.688a15.2 15.2 0 0 1 6.331-7.722c4.971-2.962 12.794-3.218 19.88 4.9C32.274 17.1 33.5 20.077 39 20.135a1 1 0 0 0 0-2c-3.9 0-4.91-1.828-5.8-3.656 4.592-5.056 10.04-7.226 15.28-6.133l-1.067.583a2.71 2.71 0 0 0 0 4.756l1.221.668a5.82 5.82 0 0 1 2.323 2.324l.668 1.219a2.71 2.71 0 0 0 4.756 0l.668-1.221a5.9 5.9 0 0 1 .93-1.254 15.42 15.42 0 0 1 .959 13.235A33 33 0 0 1 55.428 35a47 47 0 0 0-2.817 4.73zm7.237-3.27c-.606 1.44-2.316 2.46-4.815 2.962.631-1.116 1.34-2.213 2.071-3.334.787-1.209 1.579-2.45 2.294-3.747a5.13 5.13 0 0 1 .454 4.111z"
        data-original="#000000"
      ></path>
      <path
        d="m50.224 21.669-.684-.369a2.82 2.82 0 0 1-1.125-1.127l-.374-.683a1.96 1.96 0 0 0-1.719-1.019 1.96 1.96 0 0 0-1.722 1.013l-.374.684A2.82 2.82 0 0 1 43.1 21.3l-.683.373a1.958 1.958 0 0 0 0 3.436l.684.375a2.8 2.8 0 0 1 1.126 1.126l.374.683a1.96 1.96 0 0 0 1.718 1.02 1.96 1.96 0 0 0 1.719-1.019l.374-.685a2.83 2.83 0 0 1 1.125-1.125l.684-.374a1.958 1.958 0 0 0 0-3.436zm-1.643 2.056a4.8 4.8 0 0 0-1.921 1.92l-.3.683-.374-.682a4.8 4.8 0 0 0-1.921-1.921l-.684-.3.683-.374a4.8 4.8 0 0 0 1.922-1.921l.3-.684.374.683a4.83 4.83 0 0 0 1.921 1.921l.684.3z"
        data-original="#000000"
      ></path>
      <circle cx="9" cy="16.307" r="1" data-original="#000000"></circle>
    </g>
  </svg>,
      href: "/services/dental-exam-and-cleaning"
    },
    {
      id: "emergency",
      title: "Emergency Dental Care",
      description: "Immediate, priority treatment for severe toothaches, lost fillings, and other urgent dental crises.",
      icon: <AlertCircle className="w-8 h-8" />,
      href: "/emergency"
    },
    {
      id: "restorations",
      title: "Tooth Coloured Restorations",
      description: "Aesthetic, metal-free fillings that blend seamlessly with your natural teeth to repair cavities.",
      icon: <Sparkles className="w-8 h-8" />,
      href: "/services/tooth-coloured-restorations"
    },
    {
      id: "root-canals",
      title: "Root Canals",
      description: "Expert endodontic therapy to save severely infected or damaged teeth and relieve pain.",
      icon: <Activity className="w-8 h-8" />,
      href: "/services/root-canals"
    },
    {
      id: "extractions",
      title: "Extractions",
      description: "Gentle and safe removal of severely decayed, damaged, or problematic teeth.",
      icon: <Scissors className="w-8 h-8" />,
      href: "/services/extractions"
    },
    {
      id: "crowns",
      title: "Crown and Bridge Procedures",
      description: "Custom-crafted prosthetics to restore the strength, function, and appearance of damaged or missing teeth.",
      icon: <Layers className="w-8 h-8" />,
      href: "/services/crown-and-bridge-procedures"
    },
    {
      id: "guards",
      title: "Nightguards and Sportsguards",
      description: "Custom-fitted appliances to protect your teeth from grinding, clenching, and athletic injuries.",
      icon: <Moon className="w-8 h-8" />,
      href: "/services/nightguards-and-sportsguards"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-lightbg dark:bg-myblack min-h-screen pt-32 pb-24 font-poppins transition-colors duration-300 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-lightblue/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/3"></div>
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Area */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-1 bg-lightblue rounded-full"></div>
              <span className="text-sm font-bold tracking-widest uppercase text-lightblue">Comprehensive Care</span>
              <div className="w-8 h-1 bg-lightblue rounded-full"></div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-myblack dark:text-lightbg mb-6 leading-tight transition-colors">
              General <span className="text-transparent bg-clip-text bg-gradient-to-r from-lightblue to-blue-400">Dentistry</span>
            </h1>
            <p className="text-lg text-mydark dark:text-lightbg/70 leading-relaxed font-light transition-colors">
              From routine cleanings to complex restorative procedures, our comprehensive general dentistry services form the foundation of a lifetime of healthy, beautiful smiles.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              variants={itemVariants}
              key={service.id}
              className="bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 rounded-3xl p-8 hover:border-lightblue/30 dark:hover:border-white/20 hover:shadow-xl dark:hover:shadow-none dark:hover:bg-white/[0.04] transition-all duration-300 relative group flex flex-col h-full"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-lightblue/0 to-lightblue/0 group-hover:from-lightblue/5 group-hover:to-transparent transition-all duration-500 rounded-3xl pointer-events-none"></div>

              <div className="flex items-center gap-5 mb-6 relative z-10">
                <div className="p-4 rounded-2xl bg-lightblue/10 text-lightblue group-hover:bg-lightblue group-hover:text-white dark:group-hover:text-myblack transition-colors shadow-sm">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-myblack dark:text-lightbg mb-3 transition-colors relative z-10">
                {service.title}
              </h3>
              
              <p className="text-mydark dark:text-lightbg/60 font-light leading-relaxed mb-8 flex-1 relative z-10 transition-colors">
                {service.description}
              </p>

              <Link 
                to={service.href}
                className="relative z-10 mt-auto inline-flex items-center gap-2 text-sm font-bold text-lightblue group-hover:text-myblack dark:group-hover:text-white transition-colors group/btn"
              >
                Learn More
                <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Booking CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center">
            <h3 className="text-2xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">
              Ready for your next checkup?
            </h3>
            <p className="text-mydark dark:text-lightbg/70 mb-8 max-w-lg font-light transition-colors">
              Preventative care is the best way to maintain your oral health. Book your appointment today.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-myblack dark:bg-lightblue text-white dark:text-myblack px-12 py-4 rounded-full font-bold hover:bg-mydark dark:hover:bg-white transition-all shadow-md hover:-translate-y-1"
            >
              Book an Appointment
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GeneralServices;
