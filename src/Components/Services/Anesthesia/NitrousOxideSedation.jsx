import { ServiceHero, ServiceBooking } from "../ServicePageParts";
import { useRef } from "react";
import { motion as Motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Wind, ShieldCheck, Smile, Clock, Heart, Activity, Zap } from "lucide-react";

const NitrousOxideSedation = () => {
  const reduceMotion = useReducedMotion();
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const benefits = [
    {
      title: "Relaxation",
      desc: "Nitrous oxide promotes a deep sense of relaxation and reduces anxiety, making dental procedures more comfortable.",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Fast-Acting",
      desc: "The effects of nitrous oxide take effect quickly, allowing you to relax within minutes of administration.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Safety",
      desc: "Nitrous oxide is considered safe and has a rapid onset and recovery time. It is also well-suited for both children and adults.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Controlled Sedation",
      desc: "The level of sedation can be adjusted by your dental professional to ensure your comfort throughout the procedure.",
      icon: <Activity className="w-6 h-6" />
    }
  ];

  const recommendations = [
    {
      title: "Dental Anxiety",
      desc: "If you experience dental anxiety or nervousness, nitrous oxide can help you relax and undergo treatment more comfortably.",
      icon: <Smile className="w-6 h-6" />
    },
    {
      title: "Minor Procedures",
      desc: "Nitrous oxide is often used for routine dental procedures, such as cleanings, fillings, and minor treatments.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Gag Reflex",
      desc: "Patients with a sensitive gag reflex can benefit from nitrous oxide sedation to minimize discomfort during procedures.",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  const processSteps = [
    {
      title: "Consultation",
      desc: "On the day of your procedure, a mask delivering nitrous oxide is placed over your nose. You inhale the gas, and within minutes, you'll feel relaxed and comfortable.",
      icon: <Wind className="w-6 h-6" />
    },
    {
      title: "Procedure",
      desc: "While under nitrous oxide sedation, you remain conscious and responsive. Your dental professional performs the procedure while ensuring your comfort.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Recovery",
      desc: "Once the procedure is complete, the nitrous oxide is discontinued, and the effects wear off quickly. You can safely resume your normal activities.",
      icon: <Clock className="w-6 h-6" />
    }
  ];

  return (
    <div className="clinic-general clinic-exam-page clinic-service-detail">
      <ServiceHero
        title={<>Nitrous Oxide <span>Sedation</span></>}
        breadcrumb="Nitrous Oxide Sedation"
        category="Anesthesia"
        categoryHref="/services#anesthesia"
        description={<>We prioritize your comfort and relaxation during dental procedures. We offer nitrous oxide sedation, also known as "laughing gas," as a safe and effective option to help you feel at ease while receiving dental care. Our experienced team is dedicated to providing a positive and stress-free experience for every patient.</>}
        image="/images/responsive/dental-care-1440.jpg"
        imageAlt="Dental professional providing treatment"
        icon={<Wind className="w-8 h-8" />}
      />
      <div className="clinic-container clinic-service-content">
        {/* Section 1: Understanding */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Understanding Nitrous Oxide Sedation</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-3xl font-light text-lg transition-colors mb-8">
              Nitrous oxide, commonly referred to as "laughing gas," is a colorless and odorless gas that is administered through a mask placed over your nose. It induces a relaxed and calm state while allowing you to remain conscious and responsive during your dental procedure.
            </p>
          </div>
        </Motion.div>

        {/* Section 2: Benefits */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Benefits of Nitrous Oxide Sedation</h2>
          </div>
          
          <div className="clinic-services-grid clinic-service-detail-grid">
            {benefits.map((item, idx) => (
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

        {/* Section 3: Recommendations */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">When is Nitrous Oxide Sedation Recommended?</h2>
          </div>
          
          <div className="clinic-services-grid clinic-service-detail-grid">
            {recommendations.map((item, idx) => (
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

        {/* Section 4: The Process (Timeline) */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">The Nitrous Oxide Sedation Process</h2>
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

        <ServiceBooking title={<>Your Comfort is Our Priority</>}>
          <p>we understand the importance of a relaxed dental experience. Our skilled team is dedicated to providing a calming atmosphere and using nitrous oxide sedation to ensure your comfort and well-being.</p>
        </ServiceBooking>

      </div>
    </div>
  );
};

export default NitrousOxideSedation;
