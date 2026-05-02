import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Stethoscope, AlertCircle, Sparkles, Activity, Scissors, Layers, Moon, ArrowRight } from "lucide-react";

const GeneralServices = () => {
  const services = [
    {
      id: "exam",
      title: "Dental Exam and Cleaning",
      description: "Comprehensive checkups and professional cleanings to maintain optimal oral health and prevent decay.",
      icon: <Stethoscope className="w-8 h-8" />,
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
