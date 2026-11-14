import { ServiceHero, ServiceBooking } from "../ServicePageParts";
import { useRef } from "react";
import { motion as Motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Calendar, Activity, Search, ShieldCheck, Heart, Smile, Wind, Settings, Zap } from "lucide-react";

const Myobrace = () => {
  const reduceMotion = useReducedMotion();
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const myobraceBenefits = [
    {
      title: "Early Intervention",
      desc: "Myobrace is ideal for children as young as 3 to 15 years old, addressing issues during the crucial growth and development phase.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Natural Alignment",
      desc: "Myobrace encourages the development of the jaws and facial structures, promoting a natural and harmonious alignment of teeth.",
      icon: <Smile className="w-6 h-6" />
    },
    {
      title: "Breathing and Tongue Posture",
      desc: "Myobrace helps correct improper breathing habits and encourages proper tongue posture, contributing to overall oral health.",
      icon: <Wind className="w-6 h-6" />
    },
    {
      title: "Non-Invasive",
      desc: "Myobrace eliminates the need for traditional braces and extractions, providing a gentle and natural solution.",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  const processSteps = [
    {
      title: "Consultation",
      desc: "During your consultation, we assess your orthodontic needs, discuss Myobrace treatment, and determine if it's the right fit for you or your child.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "Customized Treatment",
      desc: "Based on your assessment, we create a personalized Myobrace treatment plan that addresses your specific concerns.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Myobrace Appliances",
      desc: "Myobrace involves using a series of removable appliances that help guide the teeth and jaw into proper alignment over time.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Oral Habits",
      desc: "Myobrace focuses on improving oral habits, breathing patterns, and tongue posture to promote natural development.",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Regular Checkups",
      desc: "We schedule regular checkups to monitor progress and make any necessary adjustments to your treatment plan.",
      icon: <Calendar className="w-6 h-6" />
    }
  ];

  return (
    <div className="clinic-general clinic-exam-page clinic-service-detail">
      <ServiceHero
        title={<><span>Myobrace</span></>}
        breadcrumb="Myobrace"
        category="Airway Focused Dentistry"
        categoryHref="/services#airway"
        description={<>Welcome to Highland Hills Dental Centre, your destination for holistic dental care. We are proud to offer Myobrace, an innovative and natural approach to orthodontics that focuses on addressing the root causes of orthodontic issues. Our dedicated team is committed to helping you achieve a healthier smile and overall well-being.</>}
        image="/images/responsive/dental-care-1440.jpg"
        imageAlt="Dental professional providing treatment"
        icon={<Smile className="w-8 h-8" />}
      />
      <div className="clinic-container clinic-service-content">
        {/* Section 1: Benefits */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Understanding Myobrace</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-3xl font-light text-lg transition-colors mb-8">
              Myobrace is a comprehensive orthodontic system designed to correct orthodontic problems in a holistic and non-invasive manner. This treatment approach recognizes the importance of oral habits, breathing, and tongue posture in promoting optimal facial and dental development.
            </p>
          </div>
          
          <div className="clinic-services-grid clinic-service-detail-grid">
            {myobraceBenefits.map((item, idx) => (
              <div key={idx} className="clinic-service-card clinic-exam-benefit group">
                <div className="clinic-service-icon">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-myblack dark:text-lightbg mb-3">{item.title}</h3>
                <p className="text-mydark dark:text-lightbg/60 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </Motion.div>

        {/* Section 2: The Process (Timeline) */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">The Myobrace Process</h2>
          </div>
          
          <div ref={timelineRef} className="clinic-cleaning-timeline relative max-w-5xl mx-auto mt-16 pb-10">
            {/* Center Line Track */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-1 bg-lightblue/10 dark:bg-white/5 -translate-x-1/2 rounded-full z-0"></div>
            {/* Center Line Fill (Animated) */}
            <Motion.div
              style={{ height: reduceMotion ? "100%" : lineHeight }}
              className="hidden md:block absolute left-1/2 top-4 w-1 bg-gradient-to-b from-lightblue via-lightblue/80 to-transparent -translate-x-1/2 rounded-full z-0 origin-top"
            ></Motion.div>

            <div className="space-y-12 md:space-y-24 relative z-10">
              {processSteps.map((item, idx) => (
                <Motion.div
                  key={idx} 
                  initial={reduceMotion ? false : { opacity: 0, y: 50 }}
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
                </Motion.div>
              ))}
            </div>
          </div>
        </Motion.div>

        <ServiceBooking title={<>Experience the Myobrace Difference</>}>
          <p>At Highland Hills Dental Centre, we believe in providing holistic solutions that support your overall well-being. Myobrace not only helps improve your smile but also addresses underlying issues for a healthier and more functional oral system.</p>
        </ServiceBooking>

      </div>
    </div>
  );
};

export default Myobrace;
