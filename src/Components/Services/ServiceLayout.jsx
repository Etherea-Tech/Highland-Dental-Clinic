import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Phone } from "lucide-react";

const ServiceLayout = ({ title, subtitle, icon, children }) => {
  return (
    <div className="bg-lightbg dark:bg-myblack min-h-screen pt-32 pb-24 font-poppins transition-colors duration-300">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lightblue/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-400/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb / Back Link */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10"
        >
          <Link 
            to="/general-dentistry" 
            className="inline-flex items-center gap-2 text-mydark dark:text-lightbg/60 hover:text-lightblue dark:hover:text-lightblue font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to General Dentistry
          </Link>
        </motion.div>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="p-5 bg-lightblue/10 dark:bg-white/5 rounded-3xl border border-lightblue/20 dark:border-white/10 text-lightblue"
          >
            {icon}
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-myblack dark:text-lightbg mb-3 transition-colors">
              {title}
            </h1>
            <p className="text-xl text-mydark dark:text-lightbg/70 font-light transition-colors">
              {subtitle}
            </p>
          </motion.div>
        </div>

        {/* Main Content Area */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none mb-16 transition-colors"
        >
          <div className="max-w-none space-y-6
            [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-myblack dark:[&>h3]:text-lightbg [&>h3]:mb-4 [&>h3]:mt-10 [&>h3]:transition-colors
            [&>p]:text-lg [&>p]:text-mydark dark:[&>p]:text-lightbg/80 [&>p]:leading-relaxed [&>p]:transition-colors
            [&>ul]:space-y-4 [&>ul]:mt-4 [&>ul]:mb-8 [&>ul]:pl-0
            [&>ol]:space-y-4 [&>ol]:mt-4 [&>ol]:mb-8 [&>ol]:pl-5 [&>ol]:list-decimal [&>ol]:text-lg [&>ol]:text-mydark dark:[&>ol]:text-lightbg/80
            [&>ul>li]:relative [&>ul>li]:pl-8 [&>ul>li]:text-lg [&>ul>li]:text-mydark dark:[&>ul>li]:text-lightbg/80 [&>ul>li]:transition-colors
            [&>ul>li::before]:content-[''] [&>ul>li::before]:absolute [&>ul>li::before]:left-0 [&>ul>li::before]:top-[10px] [&>ul>li::before]:w-2 [&>ul>li::before]:h-2 [&>ul>li::before]:bg-lightblue [&>ul>li::before]:rounded-full
            [&_strong]:font-bold [&_strong]:text-myblack dark:[&_strong]:text-lightbg [&_strong]:transition-colors
          ">
            {children}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-lightblue/10 to-transparent border border-lightblue/20 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left transition-colors"
        >
          <div>
            <h3 className="text-2xl font-bold text-myblack dark:text-lightbg mb-2 transition-colors">Ready to schedule your visit?</h3>
            <p className="text-mydark dark:text-lightbg/70 transition-colors">Contact us today to book an appointment or learn more about this service.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <a 
              href="/contact"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-lightblue text-myblack px-8 py-3.5 rounded-full font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(76,156,181,0.3)] hover:-translate-y-1"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </a>
            <a 
              href="tel:+1234567890"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 border border-gray-300 dark:border-white/20 bg-white dark:bg-transparent text-myblack dark:text-lightbg px-8 py-3.5 rounded-full font-bold hover:bg-gray-50 dark:hover:bg-white/10 transition-all hover:-translate-y-1"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ServiceLayout;
