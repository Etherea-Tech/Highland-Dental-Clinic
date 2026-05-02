import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaQuoteLeft } from "react-icons/fa";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "The team at Highland Dental is incredibly professional. They made my root canal completely painless. Highly recommend their services!",
      name: "Sarah Jenkins",
      rating: 5,
    },
    {
      id: 2,
      text: "I've always had anxiety about the dentist, but their calming environment and expert staff completely changed my perspective. Best clinic in town.",
      name: "Michael Chen",
      rating: 5,
    },
    {
      id: 3,
      text: "Got my Invisalign here and the results are stunning. They explained every step of the process and the pricing was entirely transparent.",
      name: "Emily Rodriguez",
      rating: 5,
    },
    {
      id: 4,
      text: "I had a dental emergency on a Sunday and they saw me within an hour. I couldn't be more grateful for their prompt and compassionate care.",
      name: "David Thompson",
      rating: 5,
    },
    {
      id: 5,
      text: "State-of-the-art equipment and a very clean facility. The dentists are thorough and take the time to answer all of my questions.",
      name: "Jessica Walsh",
      rating: 5,
    },
    {
      id: 6,
      text: "My kids actually look forward to their dental checkups now! The pediatric team is phenomenal, so patient, and really makes them smile.",
      name: "Robert Patel",
      rating: 5,
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-lightbg dark:bg-[#070025] transition-colors duration-300 relative overflow-hidden font-poppins">
      {/* Decorative Background Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lightblue/10 dark:bg-lightblue/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-mydark/5 dark:bg-mydark/20 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-1 bg-lightblue rounded-full"></div>
              <span className="text-sm font-bold tracking-widest uppercase text-lightblue">Testimonials</span>
            </div>
            <h2 className="text-myblack dark:text-lightbg text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-colors">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-lightblue to-blue-400">Thousands</span>
            </h2>
            <p className="text-mydark dark:text-lightbg/80 text-lg leading-relaxed transition-colors">
              At <span className="font-semibold text-myblack dark:text-lightbg">Highland Dental</span>, we specialize in providing high quality dental services. Don't just take our word for it—read what our patients have to say.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 bg-white dark:bg-white/5 px-6 py-4 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 transition-colors">
              <div className="flex flex-col">
                <span className="text-sm text-mydark dark:text-lightbg/90 font-medium">Excellent</span>
                <div className="flex gap-1 text-yellow-400 my-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-xs text-mydark/60 dark:text-lightbg/50">Based on 300+ reviews</span>
              </div>
              <div className="w-px h-10 bg-gray-200 dark:bg-white/20"></div>
              <FcGoogle className="w-8 h-8" />
            </div>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              variants={itemVariants}
              key={testimonial.id}
              className="bg-white dark:bg-white/5 rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50 dark:border-white/10 hover:shadow-xl dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 relative group backdrop-blur-sm"
            >
              <div className="absolute top-8 right-8 text-lightblue/10 dark:text-lightblue/20 group-hover:text-lightblue/20 dark:group-hover:text-lightblue/30 transition-colors">
                <FaQuoteLeft className="w-12 h-12" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-mydark dark:text-lightbg/80 mb-8 leading-relaxed relative z-10 font-light transition-colors">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-lightblue/10 flex items-center justify-center text-lightblue font-bold text-lg border border-lightblue/20">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-myblack dark:text-lightbg transition-colors">{testimonial.name}</h4>
                  <span className="text-xs text-mydark dark:text-lightbg/60 flex items-center gap-1 transition-colors">
                    <FcGoogle className="w-3 h-3" /> Google Review
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-16"
        >
          <button className="font-poppins font-semibold text-lightbg bg-myblack dark:bg-lightblue dark:text-myblack px-10 py-4 rounded-full hover:bg-mydark dark:hover:bg-blue-300 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-105">
            Read More Reviews
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
