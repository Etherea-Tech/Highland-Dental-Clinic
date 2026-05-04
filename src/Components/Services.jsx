
import { motion } from "framer-motion";
import {  Sparkles, AlignJustify, ShieldPlus, Wind, Syringe, ArrowRight } from "lucide-react";
import { Link} from "react-router-dom";

const Services = () => {



 
  const services = [
    {
      id: 1,
      title: "General Dentistry",
      description: "Comprehensive cleanings, exams, and restorations to maintain optimal oral health and prevent future complications.",
      icon:   <svg 
  xmlns="http://www.w3.org/2000/svg" 
  version="1.1" 
  xmlnsXlink="http://www.w3.org/1999/xlink" 
  width="512" 
  height="512" 
  viewBox="0 0 512 512" 
  style={{ enableBackground: "new 0 0 512 512" }}
  className="w-9 h-9 text-lightblue group-hover:text-white transition-colors"
>
  <g>
    <path 
      d="M462.472 106.444c-13.654-9.027-30.019-14.283-47.612-14.283h0a86.432 86.432 0 0 0-43.173 11.554l-30.358 17.502M489.29 134.62a86.118 86.118 0 0 1 8.87 20.8 86.874 86.874 0 0 1 3.14 23.18c0 9.32-.76 18.6-2.27 27.74M241.06 375.63c-.04-6.47-.54-12.9-1.47-19.27M241.07 410.63v18.1c0 6.43 5.22 11.65 11.65 11.65a49.7 49.7 0 0 0 21.27-4.79 49.489 49.489 0 0 0 17.15-13.45c7.06-8.65 13.1-18.03 18.05-27.96 4.95-9.92 8.81-20.4 11.48-31.24l4.39-17.83c1.72-7 7.99-11.91 15.2-11.91 3.6 0 6.97 1.23 9.65 3.33s4.68 5.08 5.54 8.58l4.39 17.83a150.66 150.66 0 0 0 29.53 59.2 49.673 49.673 0 0 0 17.15 13.45 49.7 49.7 0 0 0 21.27 4.79c3.22 0 6.13-1.3 8.24-3.41 2.11-2.11 3.41-5.03 3.41-8.24V376.7c0-21.6 4.97-42.91 14.53-62.29l29.7-60.22c2.27-4.6 4.33-9.3 6.17-14.07M197.63 125.25a86.817 86.817 0 0 1 29.59-24.1c1.85-.92 3.73-1.77 5.65-2.55M267.36 92.18c14.57.28 28.83 4.24 41.47 11.53l68.75 39.64M110.984 110.159C90.58 120.176 82.46 128.296 72.443 148.7c-10.017-20.404-18.137-28.524-38.541-38.541 20.404-10.017 28.524-18.137 38.541-38.541 10.017 20.404 18.137 28.524 38.541 38.541z" 
      style={{ strokeWidth: 15, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10 }} 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="15" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeMiterlimit="10" 
      opacity="1"
    />
    <path 
      d="M504.5 124.042c-16.878 8.286-23.595 15.003-31.881 31.881-8.286-16.878-15.003-23.595-31.881-31.881 16.878-8.286 23.595-15.003 31.881-31.881 8.286 16.878 15.003 23.595 31.881 31.881zM424.926 304.905c-12.902 6.334-18.036 11.468-24.37 24.37-6.334-12.902-11.468-18.036-24.37-24.37 12.902-6.334 18.036-11.468 24.37-24.37 6.334 12.902 11.468 18.037 24.37 24.37zM90.627 325.758l19.431-16.814M102.866 379.51l-43.909 50.744c-11.132 12.865-30.845 13.576-42.875 1.546h0c-12.03-12.03-11.319-31.743 1.546-42.875l51.273-44.367M139.398 337.291l-16.502 19.071M105.069 379.086l-36.273-36.273a4.433 4.433 0 0 1 0-6.269l11.643-11.643a4.433 4.433 0 0 1 6.269 0l36.273 36.273a4.433 4.433 0 0 1 0 6.269l-11.643 11.643a4.431 4.431 0 0 1-6.269 0zM46.785 365.719l35.378 35.378M92.73 221c9.58-54.2 56.92-95.37 113.87-95.37 63.87 0 115.65 51.78 115.65 115.65 0 63.88-51.78 115.66-115.65 115.66-58.88 0-107.49-44.01-114.72-100.94" 
      style={{ strokeWidth: 15, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10 }} 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="15" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeMiterlimit="10" 
      opacity="1"
    />
    <circle 
      cx="206.6" 
      cy="241.283" 
      r="83.02" 
      style={{ strokeWidth: 15, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10 }} 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="15" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeMiterlimit="10" 
      opacity="1"
    />
    <path 
      d="M193.393 286.789a12.811 12.811 0 0 1-9.131-3.826l-25.798-26.224c-4.961-5.043-4.894-13.153.149-18.114 5.043-4.96 13.153-4.895 18.114.149l16.096 16.362 39.199-44.991c4.648-5.333 12.738-5.89 18.072-1.243 5.334 4.647 5.89 12.738 1.243 18.072l-48.287 55.421a12.81 12.81 0 0 1-9.657 4.394z" 
      style={{ strokeWidth: 15, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10 }} 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="15" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeMiterlimit="10" 
      opacity="1"
    />
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

   const handleCardClick = (link) => {
   
    navigate(link);
  };

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
            
              className="group hover:cursor-pointer bg-lightbg dark:bg-myblack/50 rounded-3xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 dark:border-white/10 hover:border-lightblue/50 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden backdrop-blur-sm"
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