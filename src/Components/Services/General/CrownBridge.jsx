import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Phone, ShieldCheck, Zap, Activity, Layers, HeartPulse, Link as LinkIcon, Search, Scan, Hammer, CheckCircle, Smile } from "lucide-react";

const CrownBridge = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const crowns = [
    {
      title: "Restore Function",
      desc: "Crowns are ideal for teeth with large cavities, fractures, or extensive decay. They restore the tooth's strength and integrity.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Enhance Appearance",
      desc: "Crowns can improve the appearance of misshapen, discolored, or severely stained teeth.",
      icon: <Smile className="w-6 h-6" />
    },
    {
      title: "Support After Root Canal",
      desc: "A tooth that has undergone a root canal might require a crown to protect and strengthen it.",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  const bridges = [
    {
      title: "Restore Function",
      desc: "Bridges help restore your ability to chew, speak, and maintain proper alignment of surrounding teeth.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Preserve Facial Structure",
      desc: "Missing teeth can lead to facial sagging over time. Bridges help maintain your natural facial contours.",
      icon: <HeartPulse className="w-6 h-6" />
    },
    {
      title: "Enhance Aesthetics",
      desc: "Bridges fill in gaps caused by missing teeth, improving your smile's appearance and boosting your confidence.",
      icon: <Layers className="w-6 h-6" />
    }
  ];

  const procedureSteps = [
    {
      title: "Consultation",
      desc: "We assess your dental health and discuss your treatment goals to determine if crowns or bridges are suitable for you.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "Preparation",
      desc: "For crown placement, the tooth is shaped to accommodate the crown. For bridges, adjacent teeth are prepared to support the bridge.",
      icon: <Hammer className="w-6 h-6" />
    },
    {
      title: "Impressions",
      desc: "Precise impressions are taken to create custom restorations that fit comfortably and look natural.",
      icon: <Scan className="w-6 h-6" />
    },
    {
      title: "Temporary Restorations",
      desc: "Temporary crowns or bridges may be placed while your final restorations are crafted at a dental laboratory.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Placement",
      desc: "Once your final restorations are ready, they are permanently bonded in place, providing you with a functional and aesthetic solution.",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  return (
    <div className="bg-lightbg dark:bg-myblack min-h-screen pt-32 pb-24 font-poppins transition-colors duration-300 relative overflow-hidden">
      
      {/* Minimal Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lightblue/5 dark:bg-lightblue/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Back Link */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link 
            to="/general-dentistry" 
            className="inline-flex items-center gap-2 text-mydark dark:text-lightbg/60 hover:text-lightblue dark:hover:text-lightblue font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
        </motion.div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20">
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-lightblue/10 text-lightblue mb-6"
            >
              <Layers className="w-8 h-8" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-myblack dark:text-lightbg mb-6 leading-tight transition-colors"
            >
              Crown & Bridge <span className="text-transparent bg-clip-text bg-gradient-to-r from-lightblue to-blue-400">Procedures</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-mydark dark:text-lightbg/70 font-light leading-relaxed transition-colors"
            >
              We offer comprehensive crown and bridge procedures to restore the function, beauty, and health of your smile. Our skilled team is committed to providing you with personalized care and top-quality restorations.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] group border border-gray-100 dark:border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?q=80&w=1200&auto=format&fit=crop" 
                alt="Crown and Bridge Restorations" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-lightblue/20 to-transparent mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-lightblue/20 dark:bg-lightblue/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-400/20 dark:bg-blue-400/10 rounded-full blur-2xl pointer-events-none"></div>
          </motion.div>
        </div>

        {/* Understanding Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center max-w-4xl mx-auto bg-white/50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 p-8 md:p-12 rounded-3xl"
        >
          <h2 className="text-2xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Understanding Crown and Bridge Restorations</h2>
          <p className="text-mydark dark:text-lightbg/70 font-light text-lg leading-relaxed transition-colors">
            Crown and bridge procedures are valuable solutions to address various dental concerns, from damaged or missing teeth to restoring your ability to chew, speak, and smile confidently. These restorations are custom-made to seamlessly blend with your natural teeth and provide lasting results.
          </p>
        </motion.div>

        {/* Section 1: Crowns */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Dental Crowns: Restoring Individual Teeth</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-2xl font-light text-lg transition-colors">
              A dental crown, also known as a cap, is a protective covering that encases a damaged or weakened tooth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {crowns.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 p-8 rounded-3xl hover:shadow-xl dark:hover:bg-white/[0.05] transition-all duration-300 group relative overflow-hidden">
                {/* Step number watermark */}
                <div className="absolute -top-4 right-4 text-[100px] font-black text-gray-50 dark:text-white/[0.02] group-hover:text-lightblue/[0.05] dark:group-hover:text-lightblue/[0.05] transition-colors pointer-events-none z-0">
                  0{idx + 1}
                </div>
                <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/5 text-lightblue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-myblack dark:text-lightbg mb-3 relative z-10">{item.title}</h3>
                <p className="text-mydark dark:text-lightbg/60 leading-relaxed font-light relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section 2: Bridges */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Dental Bridge: Replacing Missing Teeth</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-2xl font-light text-lg transition-colors">
              A dental bridge is a restoration that spans the gap left by one or more missing teeth. It consists of one or more artificial teeth (pontics) supported by adjacent natural teeth or dental implants.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bridges.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 p-8 rounded-3xl hover:shadow-xl dark:hover:bg-white/[0.05] transition-all duration-300 group relative overflow-hidden">
                {/* Step number watermark */}
                <div className="absolute -top-4 right-4 text-[100px] font-black text-gray-50 dark:text-white/[0.02] group-hover:text-lightblue/[0.05] dark:group-hover:text-lightblue/[0.05] transition-colors pointer-events-none z-0">
                  0{idx + 1}
                </div>
                <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/5 text-lightblue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-myblack dark:text-lightbg mb-3 relative z-10">{item.title}</h3>
                <p className="text-mydark dark:text-lightbg/60 leading-relaxed font-light relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section 3: Procedure Timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">The Crown and Bridge Procedure</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-2xl font-light text-lg transition-colors">
              Our experienced team will guide you through every step of the process, ensuring your comfort and satisfaction.
            </p>
          </div>
          
          <div ref={timelineRef} className="relative max-w-5xl mx-auto mt-16 pb-10">
            {/* Center Line Track */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-1 bg-lightblue/10 dark:bg-white/5 -translate-x-1/2 rounded-full z-0"></div>
            {/* Center Line Fill (Animated) */}
            <motion.div 
              style={{ height: lineHeight }}
              className="hidden md:block absolute left-1/2 top-4 w-1 bg-gradient-to-b from-lightblue via-lightblue/80 to-transparent -translate-x-1/2 rounded-full z-0 origin-top"
            ></motion.div>

            <div className="space-y-12 md:space-y-24 relative z-10">
              {procedureSteps.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'} group`}
                >
                  {/* Content Card Side */}
                  <div className={`w-full md:w-1/2 flex ${idx % 2 === 0 ? 'md:pr-16 justify-end' : 'md:pl-16 justify-start'}`}>
                    <div className="bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 p-8 rounded-3xl hover:shadow-xl dark:hover:bg-white/[0.05] transition-all duration-300 relative overflow-hidden w-full max-w-lg">
                      {/* Step number watermark */}
                      <div className="absolute -top-4 right-4 text-[100px] font-black text-gray-50 dark:text-white/[0.02] group-hover:text-lightblue/[0.05] dark:group-hover:text-lightblue/[0.05] transition-colors pointer-events-none z-0">
                        0{idx + 1}
                      </div>
                      
                      <div className="w-14 h-14 rounded-2xl bg-lightblue/10 text-lightblue flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform relative z-10">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-myblack dark:text-lightbg mb-3 relative z-10">{item.title}</h3>
                      <p className="text-mydark dark:text-lightbg/70 leading-relaxed font-light relative z-10 text-lg">{item.desc}</p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-lightbg dark:bg-myblack border-4 border-lightblue/30 dark:border-lightblue/20 items-center justify-center shadow-[0_0_20px_rgba(76,156,181,0.2)] z-20 group-hover:border-lightblue transition-colors">
                     <div className="w-4 h-4 bg-lightblue rounded-full group-hover:scale-125 transition-transform"></div>
                  </div>

                  {/* Empty side for layout balance */}
                  <div className="hidden md:block w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Minimalist CTA Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-lightblue/10 dark:bg-lightblue/5 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Experience Lasting Results</h2>
          <p className="text-mydark dark:text-lightbg/80 mb-4 max-w-2xl mx-auto font-light leading-relaxed transition-colors">
            At Highland Hills Dental Centre, we are dedicated to helping you achieve a healthy and beautiful smile through crown and bridge procedures. 
          </p>
          <p className="text-mydark dark:text-lightbg/80 mb-8 max-w-2xl mx-auto font-light leading-relaxed transition-colors">
            Whether you need to restore a single damaged tooth or replace missing teeth, our crown and bridge solutions can enhance both your oral health and your confidence. Contact us today to schedule a consultation and explore how crown and bridge procedures can transform your smile.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/contact"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-lightblue text-myblack px-8 py-4 rounded-full font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(76,156,181,0.3)] hover:-translate-y-1"
            >
              <Calendar className="w-5 h-5" />
              Book Consultation
            </a>
            <a 
              href="tel:+1234567890"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 border border-lightblue/30 dark:border-white/20 bg-transparent text-myblack dark:text-lightbg px-8 py-4 rounded-full font-bold hover:bg-lightblue/20 dark:hover:bg-white/10 transition-all hover:-translate-y-1"
            >
              <Phone className="w-5 h-5" />
              Call Clinic
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default CrownBridge;
