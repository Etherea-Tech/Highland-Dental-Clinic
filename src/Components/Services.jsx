import React from "react";
import { motion } from "framer-motion";
import {  Sparkles, AlignJustify, ShieldPlus, Wind, Syringe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "General Dentistry",
      description: "Comprehensive cleanings, exams, and restorations to maintain optimal oral health and prevent future complications.",
      icon: <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlSpace="preserve"
  width="42"
  height="42"
  viewBox="0 0 64 64"
  className="w-7 h-7 text-lightblue group-hover:text-white transition-colors"
>
  <g fill="currentColor" data-name="Outline">
    <path
      d="M18.172 10.057a11.7 11.7 0 0 0-7.287 2.631 1 1 0 1 0 1.252 1.558 9.7 9.7 0 0 1 6.035-2.189 1 1 0 0 0 0-2"
      data-original="#000000"
    ></path>
    <path
      d="M60.806 29.362a17.4 17.4 0 0 0-1.187-15.146l.971-.531a2.709 2.709 0 0 0 0-4.755l-1.221-.668a5.83 5.83 0 0 1-2.323-2.324l-.668-1.22a2.711 2.711 0 0 0-4.756 0l-.668 1.221a6 6 0 0 1-.574.843c-6.293-1.99-12.908.176-18.38 6.03C24.71 5 16.714 4.958 11.21 7.742c-4.694.353-7.755 1.9-8.842 4.5a6.82 6.82 0 0 0 .426 5.61 17.4 17.4 0 0 0 .4 11.51 35 35 0 0 0 3.7 6.728c1.73 2.654 3.364 5.162 4.036 8.158a21.3 21.3 0 0 1 .377 3.9 21 21 0 0 0 .522 4.654c1.341 5.106 4.339 7.982 8.3 7.891 6.237-.142 7.782-6.206 9.023-11.073.74-2.9 1.407-5.948 2.85-5.948s2.11 3.047 2.85 5.948c1.241 4.867 2.786 10.925 9.022 11.073c3.943.045 6.961-2.782 8.3-7.891a21 21 0 0 0 .522-4.654 21.3 21.3 0 0 1 .377-3.9 15 15 0 0 1 .875-2.638c4.057-.482 6.741-1.979 7.748-4.372c.841-1.994.406-4.439-1.223-7.093c.107-.263.233-.515.333-.783M52.708 6.9l.668-1.22a.712.712 0 0 1 1.248 0l.668 1.22a7.8 7.8 0 0 0 3.117 3.119l1.222.668a.711.711 0 0 1 0 1.247l-1.222.668a7.8 7.8 0 0 0-3.117 3.117l-.668 1.222a.712.712 0 0 1-1.248 0l-.668-1.22a7.8 7.8 0 0 0-3.117-3.121l-1.222-.669a.71.71 0 0 1 0-1.246l1.221-.668A7.8 7.8 0 0 0 52.708 6.9m-48.5 6.117a4.97 4.97 0 0 1 3.114-2.49 17.5 17.5 0 0 0-3.342 4.469 3.8 3.8 0 0 1 .232-1.982zm46.905 30.8a23 23 0 0 0-.425 4.264 19.3 19.3 0 0 1-.458 4.22c-.635 2.431-2.342 6.472-6.314 6.4-4.721-.111-5.947-4.919-7.132-9.567c-.965-3.732-1.842-7.578-4.9-7.46-2.872.11-3.738 3.8-4.672 7.46-1.186 4.648-2.411 9.448-7.132 9.567-3.991.1-5.679-3.966-6.314-6.4a19.3 19.3 0 0 1-.458-4.22 23 23 0 0 0-.425-4.264c-.75-3.348-2.56-6.126-4.311-8.813a33 33 0 0 1-3.507-6.341 15.6 15.6 0 0 1-.822-8.343c3.929 5.5 12.569 11.546 22.949 15.917 9.007 3.732 17.4 5.738 24.534 5.552a16 16 0 0 0-.609 2.02zm1.494-4.079c-6.4.46-15.549-1.514-24.643-5.344-11.053-4.654-20-11.16-23.013-16.688a15.2 15.2 0 0 1 6.331-7.722c4.971-2.962 12.794-3.218 19.88 4.9C32.274 17.1 33.5 20.077 39 20.135a1 1 0 0 0 0-2c-3.9 0-4.91-1.828-5.8-3.656 4.592-5.056 10.04-7.226 15.28-6.133l-1.067.583a2.71 2.71 0 0 0 0 4.756l1.221.668a5.82 5.82 0 0 1 2.323 2.324l.668 1.219a2.71 2.71 0 0 0 4.756 0l.668-1.221a5.9 5.9 0 0 1 .93-1.254 15.42 15.42 0 0 1 .959 13.235A33 33 0 0 1 55.428 35a47 47 0 0 0-2.817 4.73zm7.237-3.27c-.606 1.44-2.316 2.46-4.815 2.962.631-1.116 1.34-2.213 2.071-3.334.787-1.209 1.579-2.45 2.294-3.747a5.13 5.13 0 0 1 .454 4.111z"
      data-original="#000000"
    ></path>
    <path
      d="m50.224 21.669-.684-.369a2.82 2.82 0 0 1-1.125-1.127l-.374-.683a1.96 1.96 0 0 0-1.719-1.019 1.96 1.96 0 0 0-1.722 1.013l-.374.684A2.82 2.82 0 0 1 43.1 21.3l-.683.373a1.958 1.958 0 0 0 0 3.436l.684.375a2.8 2.8 0 0 1 1.126 1.126l.374.683a1.96 1.96 0 0 0 1.718 1.02 1.96 1.96 0 0 0 1.719-1.019l.374-.685a2.83 2.83 0 0 1 1.125-1.125l.684-.374a1.958 1.958 0 0 0 0-3.436zm-1.643 2.056a4.8 4.8 0 0 0-1.921 1.92l-.3.683-.374-.682a4.8 4.8 0 0 0-1.921-1.921l-.684-.3.683-.374a4.8 4.8 0 0 0 1.922-1.921l.3-.684.374.683a4.83 4.83 0 0 0 1.921 1.921l.684.3z"
      data-original="#000000"
    ></path>
    <circle cx="9" cy="16.307" r="1" data-original="#000000"></circle>
  </g>
</svg>,
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
