import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Phone, Activity, AlertCircle, ShieldAlert, Heart, Droplet, Layers, ShieldCheck, Zap, Search, Target } from "lucide-react";

const RootCanals = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const warningSigns = [
    {
      title: "Severe Tooth Pain",
      desc: "Intense, persistent pain, especially when biting or applying pressure, can be indicative of an infected pulp.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Sensitivity",
      desc: "Sensitivity to hot or cold temperatures that lingers after the source of the temperature change is removed might be a sign of pulp inflammation.",
      icon: <AlertCircle className="w-6 h-6" />
    },
    {
      title: "Swollen Gums",
      desc: "Swelling and tenderness around a specific tooth might suggest an infection at the tooth's root.",
      icon: <ShieldAlert className="w-6 h-6" />
    },
    {
      title: "Darkening or Discoloration",
      desc: "Discoloration of a tooth might indicate internal damage or infection.",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const procedureSteps = [
    {
      title: "Assessment",
      desc: "We begin with a thorough examination and potentially take X-rays to assess the extent of the damage.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "Local Anesthesia",
      desc: "To ensure your comfort, the area around the affected tooth is numbed with a local anesthetic.",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Accessing the Pulp",
      desc: "An access opening is created in the tooth to reach the infected pulp.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Cleaning and Shaping",
      desc: "The infected pulp is carefully removed, and the inner chamber of the tooth is cleaned, disinfected, and shaped.",
      icon: <Droplet className="w-6 h-6" />
    },
    {
      title: "Filling and Sealing",
      desc: "Once the chamber is clean and shaped, it's filled with a biocompatible material called gutta-percha, and the access opening is sealed.",
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: "Restoration",
      desc: "In most cases, a tooth that undergoes a root canal will require a crown or other restoration to protect and strengthen it, as the tooth structure may have been weakened.",
      icon: <ShieldCheck className="w-6 h-6" />
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
              <Activity className="w-8 h-8" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-myblack dark:text-lightbg mb-6 leading-tight transition-colors"
            >
              Root Canals <span className="text-transparent bg-clip-text bg-gradient-to-r from-lightblue to-blue-400">(Endodontics)</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-mydark dark:text-lightbg/70 font-light leading-relaxed transition-colors"
            >
              At Highland Hills Dental Centre, we understand that root canal treatment might sound intimidating, but rest assured, our skilled team is here to provide you with a comfortable and effective experience.
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
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1200&auto=format&fit=crop" 
                alt="Root Canals" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-lightblue/20 to-transparent mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-lightblue/20 dark:bg-lightblue/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-400/20 dark:bg-blue-400/10 rounded-full blur-2xl pointer-events-none"></div>
          </motion.div>
        </div>

        {/* Understanding Root Canals */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center max-w-4xl mx-auto bg-white/50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 p-8 md:p-12 rounded-3xl"
        >
          <h2 className="text-2xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Understanding Root Canal Treatment</h2>
          <p className="text-mydark dark:text-lightbg/70 font-light text-lg leading-relaxed transition-colors">
            A root canal, also known as endodontic therapy, is a dental procedure designed to save a severely damaged or infected tooth. This treatment becomes necessary when the pulp, the innermost part of a tooth containing nerves and blood vessels, becomes inflamed or infected due to deep decay, cracks, or trauma.
          </p>
        </motion.div>

        {/* Section 1: Signs */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Signs You Might Need a Root Canal</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-2xl font-light text-lg transition-colors">
              If you experience any of the following symptoms, it's essential to consult our dental professionals for an evaluation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {warningSigns.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 p-8 rounded-3xl hover:shadow-xl dark:hover:bg-white/[0.05] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/5 text-lightblue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-myblack dark:text-lightbg mb-3">{item.title}</h3>
                <p className="text-mydark dark:text-lightbg/60 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section 2: Process */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">The Root Canal Procedure</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-2xl font-light text-lg transition-colors">
              Our experienced team is well-versed in performing root canal procedures with precision and care. Here's an overview of what you can expect.
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
          <h2 className="text-2xl md:text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Exceptional Care for Lasting Smiles</h2>
          <p className="text-mydark dark:text-lightbg/80 mb-4 max-w-2xl mx-auto font-light leading-relaxed transition-colors">
            Following a successful root canal, you can expect relief from the pain and discomfort you experienced before the treatment. Most patients can return to their normal activities shortly after the procedure.
          </p>
          <p className="text-mydark dark:text-lightbg/80 mb-8 max-w-2xl mx-auto font-light leading-relaxed transition-colors">
            If you're experiencing dental pain or suspect you might need a root canal, don't delay seeking professional help. Contact us today to schedule an appointment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/contact"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-lightblue text-myblack px-8 py-4 rounded-full font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(76,156,181,0.3)] hover:-translate-y-1"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
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

export default RootCanals;
