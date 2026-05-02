import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Phone, Moon, ShieldAlert, Activity, ShieldCheck, Zap, Smile, Mic } from "lucide-react";

const NightguardsSportsguards = () => {
  const bruxism = [
    {
      title: "Protection",
      desc: "Nightguards protect your teeth from the excessive forces caused by grinding and clenching, reducing the risk of enamel wear, fractures, and jaw discomfort.",
      icon: <ShieldAlert className="w-6 h-6" />
    },
    {
      title: "Prevention",
      desc: "By preventing the wear and tear associated with bruxism, nightguards help you avoid the need for extensive dental work in the future.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Improved Sleep",
      desc: "Nightguards can alleviate muscle tension and pain associated with teeth grinding, promoting a more restful night's sleep.",
      icon: <Moon className="w-6 h-6" />
    }
  ];

  const sportsguards = [
    {
      title: "Protection",
      desc: "Sportsguards shield your teeth, lips, and gums from injuries that can occur during contact sports and other physical activities.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Prevention",
      desc: "Wearing a sportsguard can help prevent chipped, broken, or knocked-out teeth, as well as injuries to the soft tissues of the mouth.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Comfort",
      desc: "Our custom-fit sportsguards are designed for maximum comfort, allowing you to speak and breathe easily while enjoying your activities.",
      icon: <Smile className="w-6 h-6" />
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
              <Moon className="w-8 h-8" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-myblack dark:text-lightbg mb-6 leading-tight transition-colors"
            >
              Nightguards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-lightblue to-blue-400">Sportsguards</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-mydark dark:text-lightbg/70 font-light leading-relaxed transition-colors"
            >
              At Highland Hills Dental Centre, we prioritize your oral health and safety in all aspects of your life, including sleep and physical activities. Our custom nightguards and sportsguards provide protection and comfort, ensuring both your teeth and smile stay healthy.
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
                src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1200&auto=format&fit=crop" 
                alt="Nightguards and Sportsguards" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-lightblue/20 to-transparent mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-lightblue/20 dark:bg-lightblue/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-400/20 dark:bg-blue-400/10 rounded-full blur-2xl pointer-events-none"></div>
          </motion.div>
        </div>

        {/* Section 1: Nightguards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Nightguards Protecting Your Smile While You Sleep</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-2xl font-light text-lg transition-colors">
              Do you wake up with sore jaws or teeth? You might be experiencing the effects of bruxism, a condition characterized by teeth grinding and clenching during sleep. Nightguards are customized oral appliances that create a barrier between your upper and lower teeth, preventing them from coming into contact. Our nightguards offer:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bruxism.map((item, idx) => (
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

        {/* Section 2: Sportsguards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Sportsguards: Keeping Your Smile Safe During Physical Activities</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-2xl font-light text-lg transition-colors">
              Whether you're an avid athlete or enjoy occasional physical activities, protecting your smile is essential. Sportsguards, also known as mouthguards, provide a cushioning barrier that helps absorb the impact of blows to the face, reducing the risk of dental injuries. Our sportsguards offer:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sportsguards.map((item, idx) => (
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

        {/* Minimalist CTA Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-lightblue/10 dark:bg-lightblue/5 rounded-3xl p-10 md:p-14 text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Custom-Made for Your Comfort and Protection</h2>
          <p className="text-mydark dark:text-lightbg/80 mb-6 max-w-2xl mx-auto font-light leading-relaxed transition-colors">
            At Highland Hills Dental Centre, we create nightguards and sportsguards that are tailored to your unique dental structure and needs. During your appointment, we take precise impressions of your teeth to ensure a snug fit that offers optimal comfort and protection.
          </p>
          <p className="text-mydark dark:text-lightbg/80 mb-8 max-w-2xl mx-auto font-light leading-relaxed transition-colors">
            Don't compromise your oral health during sleep or physical activities. Our custom nightguards and sportsguards are designed to provide you with peace of mind, knowing that your smile is well-protected.
          </p>
        </motion.div>

        {/* Invest CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Invest in Your Smile's Safety</h2>
          <p className="text-mydark dark:text-lightbg/80 mb-8 mx-auto font-light leading-relaxed transition-colors">
            Whether you're looking to prevent teeth grinding or safeguard your smile during sports, our custom nightguards and sportsguards are valuable investments in your oral health and well-being. Contact us today to schedule an appointment and discuss how these protective oral appliances can benefit you.
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

export default NightguardsSportsguards;
