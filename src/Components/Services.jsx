import React from "react";
import { motion } from "framer-motion";
import { Stethoscope, Sparkles, AlignJustify, ShieldPlus, Wind, Syringe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "General Dentistry",
      description: "Comprehensive cleanings, exams, and restorations to maintain optimal oral health and prevent future complications.",
      icon: <Stethoscope className="w-7 h-7 text-lightblue group-hover:text-white transition-colors" />,
      link: "/general-dentistry"
    },
    {
      id: 2,
      title: "Cosmetic Dentistry",
      description: "Enhance your confidence with premium veneers, bonding, and professional laser tooth whitening treatments.",
      icon: <Sparkles className="w-7 h-7 text-lightblue group-hover:text-white transition-colors" />,
      link: "/services#cosmetic"
    },
    {
      id: 3,
      title: "Orthodontics",
      description: "Achieve a perfectly aligned smile with our customized traditional braces, clear Invisalign aligners, or Myobrace.",
      icon: <AlignJustify className="w-7 h-7 text-lightblue group-hover:text-white transition-colors" />,
      link: "/services#orthodontics"
    },
    {
      id: 4,
      title: "Oral Surgery",
      description: "Expert wisdom tooth removal, complex extractions, bone grafting, and precise dental implant placements.",
      icon: <ShieldPlus className="w-7 h-7 text-lightblue group-hover:text-white transition-colors" />,
      link: "/services#surgery"
    },
    {
      id: 5,
      title: "Airway Dentistry",
      description: "Specialized TMJ treatments and advanced oral appliance therapies for snoring and sleep apnea relief.",
      icon: <Wind className="w-7 h-7 text-lightblue group-hover:text-white transition-colors" />,
      link: "/services#airway"
    },
    {
      id: 6,
      title: "Sedation Options",
      description: "Experience pain-free, anxiety-free dentistry with our full range of safe, professional anesthesia services.",
      icon: <Syringe className="w-7 h-7 text-lightblue group-hover:text-white transition-colors" />,
      link: "/services#anesthesia"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-white dark:bg-myblack transition-colors duration-300 font-poppins relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-lightblue/5 dark:from-lightblue/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="mb-16 md:mb-20 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-1 bg-lightblue rounded-full"></div>
              <span className="text-sm font-bold tracking-widest uppercase text-lightblue">Clinic Expertise</span>
              <div className="w-8 h-1 bg-lightblue rounded-full"></div>
            </div>
            <h2 className="text-myblack dark:text-lightbg text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-colors">
              Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-lightblue to-blue-400">Services</span>
            </h2>
            <p className="font-poppins max-w-2xl mt-6 text-mydark dark:text-lightbg/80 text-lg leading-relaxed transition-colors">
              At <span className="font-semibold text-myblack dark:text-lightbg">Highland Dental Clinics</span>, we are equipped with the latest dental technology to provide optimum care for your comfort and peace of mind.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10"
        >
          {services.map((service) => (
            <motion.div
              variants={itemVariants}
              key={service.id}
              className="group bg-lightbg dark:bg-myblack/50 rounded-3xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 dark:border-white/10 hover:border-lightblue/50 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden backdrop-blur-sm"
            >
              {/* Background Accent on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-lightblue/0 to-lightblue/0 group-hover:from-lightblue/5 group-hover:to-transparent transition-all duration-500"></div>

              {/* Service Icon */}
              <div className="bg-white dark:bg-white/5 w-16 h-16 rounded-2xl flex justify-center items-center shadow-sm border border-gray-100 dark:border-white/10 mb-8 group-hover:bg-lightblue group-hover:border-lightblue transition-colors duration-300 relative z-10">
                {service.icon}
              </div>

              {/* Service Content */}
              <div className="relative z-10">
                <h4 className="font-bold text-2xl text-myblack dark:text-lightbg mb-4 group-hover:text-lightblue dark:group-hover:text-lightblue transition-colors">
                  {service.title}
                </h4>
                <p className="text-mydark dark:text-lightbg/70 leading-relaxed mb-8 font-light transition-colors">
                  {service.description}
                </p>
                
                <Link 
                  to={service.link}
                  className="inline-flex items-center gap-2 font-semibold text-sm text-myblack dark:text-lightbg group-hover:text-lightblue dark:group-hover:text-lightblue transition-colors"
                >
                  Explore Service
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center mt-20 text-center bg-myblack rounded-[2rem] p-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lightblue/20 via-transparent to-transparent pointer-events-none"></div>
          <h3 className="text-2xl md:text-3xl font-bold text-lightbg mb-6 relative z-10">
            Need a service not listed here?
          </h3>
          <p className="text-lightbg/80 mb-8 max-w-xl relative z-10">
            We offer a comprehensive range of dental treatments. Contact us to discuss your specific needs with our specialists.
          </p>
          <Link 
            to="/contact" 
            className="font-poppins font-semibold text-myblack bg-yellow-400 px-10 py-4 rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 relative z-10"
          >
            Contact Our Clinic
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
