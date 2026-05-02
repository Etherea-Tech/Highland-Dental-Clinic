import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, AlertCircle, Activity, Heart, Hand, Plus, ShieldAlert, Zap, Stethoscope, Check } from "lucide-react";

const EmergencyDentalCare = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const recognizingEmergencies = [
    {
      title: "Severe Toothache",
      desc: "Persistent and intense tooth pain can indicate an underlying issue such as an infection or dental decay that needs immediate treatment.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Knocked-Out Tooth",
      desc: "If a tooth has been knocked out due to injury, time is of the essence. Retrieving the tooth and seeking professional care quickly can increase the chances of successful reattachment.",
      icon: <AlertCircle className="w-6 h-6" />
    },
    {
      title: "Broken or Fractured Tooth",
      desc: "A broken or fractured tooth can cause pain and expose the sensitive inner layers of the tooth, requiring immediate treatment to prevent further damage.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Lost Filling or Crown",
      desc: "If a filling or crown becomes dislodged, it's important to have it addressed promptly to protect the affected tooth.",
      icon: <ShieldAlert className="w-6 h-6" />
    }
  ];

  const stepsToTake = [
    {
      title: "Stay Calm",
      desc: "Remain calm and assess the situation. If there's bleeding, try to control it with gentle pressure using clean gauze.",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Retrieve the Tooth",
      desc: "If a tooth is knocked out, handle it by the crown (top) and avoid touching the roots. Gently rinse it with water if dirty, but do not scrub. Try to place it back in its socket or keep it in milk or saliva.",
      icon: <Hand className="w-6 h-6" />
    },
    {
      title: "Pain Management",
      desc: "Over-the-counter pain relievers can help manage pain while you wait for professional care.",
      icon: <Plus className="w-6 h-6" />
    }
  ];

  return (
    <div className="bg-lightbg dark:bg-myblack min-h-screen pt-32 pb-24 font-poppins transition-colors duration-300 relative overflow-hidden">
      
      {/* Minimal Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/5 dark:bg-red-500/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Back Link */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link 
            to="/general-dentistry" 
            className="inline-flex items-center gap-2 text-mydark dark:text-lightbg/60 hover:text-red-500 dark:hover:text-red-400 font-medium transition-colors"
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
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-500/10 text-red-500 mb-6"
            >
              <AlertCircle className="w-8 h-8" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-myblack dark:text-lightbg mb-6 leading-tight transition-colors"
            >
              Emergency <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">Dental Care</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-mydark dark:text-lightbg/70 font-light leading-relaxed transition-colors"
            >
              At Highland Hills Dental Centre, we understand that dental emergencies can happen at any time. Our dedicated team is here to provide you with prompt and compassionate emergency dental care when you need it most.
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
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop" 
                alt="Emergency Dental Care" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-500/20 dark:bg-red-500/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-400/20 dark:bg-red-400/10 rounded-full blur-2xl pointer-events-none"></div>
          </motion.div>
        </div>

        {/* Section 1: Recognizing Emergencies */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Recognizing Dental Emergencies</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-2xl font-light text-lg transition-colors">
              Dental emergencies can vary in nature and severity. It's important to be able to recognize when you or a loved one is experiencing an issue that requires immediate attention.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recognizingEmergencies.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 p-8 rounded-3xl hover:shadow-xl dark:hover:bg-white/[0.05] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-500/10 text-red-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-myblack dark:text-lightbg mb-3">{item.title}</h3>
                <p className="text-mydark dark:text-lightbg/60 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section 2: Steps to Take */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Steps to Take in a Dental Emergency</h2>
          </div>
          
          <div ref={timelineRef} className="relative max-w-5xl mx-auto mt-16 pb-10">
            {/* Center Line Track */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-1 bg-red-500/10 dark:bg-white/5 -translate-x-1/2 rounded-full z-0"></div>
            {/* Center Line Fill (Animated) */}
            <motion.div 
              style={{ height: lineHeight }}
              className="hidden md:block absolute left-1/2 top-4 w-1 bg-gradient-to-b from-red-500 via-red-500/80 to-transparent -translate-x-1/2 rounded-full z-0 origin-top"
            ></motion.div>

            <div className="space-y-12 md:space-y-24 relative z-10">
              {stepsToTake.map((item, idx) => (
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
                      <div className="absolute -top-4 right-4 text-[100px] font-black text-gray-50 dark:text-white/[0.02] group-hover:text-red-500/[0.05] dark:group-hover:text-red-500/[0.05] transition-colors pointer-events-none z-0">
                        0{idx + 1}
                      </div>
                      
                      <div className="w-14 h-14 rounded-2xl bg-red-500/10 text-red-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform relative z-10">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-myblack dark:text-lightbg mb-3 relative z-10">{item.title}</h3>
                      <p className="text-mydark dark:text-lightbg/70 leading-relaxed font-light relative z-10 text-lg">{item.desc}</p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-lightbg dark:bg-myblack border-4 border-red-500/30 dark:border-red-500/20 items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.2)] z-20 group-hover:border-red-500 transition-colors">
                     <div className="w-4 h-4 bg-red-500 rounded-full group-hover:scale-125 transition-transform"></div>
                  </div>

                  {/* Empty side for layout balance */}
                  <div className="hidden md:block w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Section 3: Our Services List (Dark Theme Premium) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 relative rounded-[3rem] overflow-hidden bg-[#0a0a0a]"
        >
          {/* Background Glows */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3 z-0"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-900/30 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3 z-0"></div>

          <div className="relative z-10 p-10 md:p-16 lg:p-20 flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-semibold mb-6 text-sm">
                <Stethoscope className="w-4 h-4" /> Comprehensive Care
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Our Emergency <br className="hidden lg:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Dental Care Services</span>
              </h2>
              <p className="text-white/60 font-light text-lg mb-0 leading-relaxed max-w-xl mx-auto lg:mx-0">
                When a dental emergency strikes, you can count on Highland Hills Dental Centre to provide swift and effective care. Our experienced team is equipped to handle a wide range of critical situations.
              </p>
            </div>
            
            {/* Right: Premium Glass List */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
               {[
                  "Treatment of severe toothaches and infections",
                  "Dental trauma and injuries",
                  "Tooth reattachment and restoration",
                  "Temporary fillings and crowns",
                  "Extractions when preservation isn't possible"
                ].map((service, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] transition-all duration-300 group cursor-default"
                  >
                    <div className="w-12 h-12 flex-shrink-0 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 group-hover:bg-red-500 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-inner border border-red-500/30">
                      <Check className="w-6 h-6" />
                    </div>
                    <span className="font-medium text-lg text-white/90 group-hover:text-white transition-colors">{service}</span>
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
          className="bg-red-500/10 dark:bg-red-500/5 rounded-3xl p-6 md:p-8 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-xl md:text-2xl font-bold text-myblack dark:text-lightbg mb-3 transition-colors">Contact Us Immediately</h2>
          <p className="text-mydark dark:text-lightbg/80 mb-6 max-w-xl mx-auto text-sm md:text-base font-light leading-relaxed transition-colors">
            If you're experiencing a dental emergency, don't hesitate to reach out. We prioritize emergency cases and will do our best to accommodate you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:+15551234567"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-red-500 text-white px-8 py-3 rounded-full font-bold text-sm md:text-base hover:bg-red-400 transition-all shadow-[0_0_15px_rgba(239,68,68,0.3)] hover:-translate-y-1"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              Call (555) 123-4567
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default EmergencyDentalCare;
