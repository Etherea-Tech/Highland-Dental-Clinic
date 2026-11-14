import { ServiceHero, ServiceBooking } from "../ServicePageParts";
import { useRef } from "react";
import { motion as Motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { HeartPulse, Activity, ShieldCheck, Zap, Syringe, Clock, Heart, Search } from "lucide-react";

const IntravenousSedation = () => {
  const reduceMotion = useReducedMotion();
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const sedationBenefits = [
    {
      title: "Relaxation",
      desc: "IV sedation helps you feel deeply relaxed and comfortable throughout the procedure, reducing anxiety and fear.",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Pain Relief",
      desc: "Sedative medications minimize pain sensations, ensuring a pain-free experience during surgery.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Amnesia Effect",
      desc: "Many patients have little to no memory of the procedure afterward, contributing to a positive experience.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Time Efficiency",
      desc: "IV sedation allows our oral and maxillofacial surgeons to work efficiently, often completing complex procedures in a shorter time.",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const recommendations = [
    {
      title: "Complex Procedures",
      desc: "For extensive oral and maxillofacial surgeries, IV sedation ensures your comfort and allows our surgeons to focus on the procedure.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Dental Anxiety",
      desc: "Patients with dental anxiety or phobia can benefit from IV sedation to ease their nerves and ensure a more pleasant experience.",
      icon: <HeartPulse className="w-6 h-6" />
    },
    {
      title: "Long Procedures",
      desc: "If the surgery is expected to take a longer time, IV sedation helps you remain comfortable throughout the procedure.",
      icon: <Clock className="w-6 h-6" />
    }
  ];

  const processSteps = [
    {
      title: "Consultation",
      desc: "During your initial consultation, we discuss your medical history, dental needs, and any concerns you may have about sedation.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "Preparation",
      desc: "On the day of the procedure, our experienced anesthesia provider explains the process, answers your questions, and prepares you for sedation.",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Sedation Administration",
      desc: "The sedation medication is administered by our anesthesia provider, who monitors your vital signs and comfort throughout the procedure.",
      icon: <Syringe className="w-6 h-6" />
    },
    {
      title: "Monitoring and Recovery",
      desc: "While you're under sedation, your vital signs are continuously monitored. After the procedure, you are carefully monitored as you recover.",
      icon: <Activity className="w-6 h-6" />
    }
  ];

  return (
    <div className="clinic-general clinic-exam-page clinic-service-detail">
      <ServiceHero
        title={<>Intravenous <span>Sedation</span></>}
        breadcrumb="Intravenous Sedation"
        category="Anesthesia"
        categoryHref="/services#anesthesia"
        description={<>We are dedicated to ensuring your comfort and relaxation during oral and maxillofacial surgery procedures. We offer intravenous (IV) sedation as an effective option to help you feel at ease and pain-free while undergoing complex treatments. Our skilled team of professionals is committed to providing a positive experience for every patient.</>}
        image="/images/responsive/dental-care-1440.jpg"
        imageAlt="Dental professional providing treatment"
        icon={<HeartPulse className="w-8 h-8" />}
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
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Understanding Intravenous Sedation</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-3xl font-light text-lg transition-colors mb-8">
              Intravenous (IV) sedation is a method of conscious sedation that involves administering sedative medications directly into your bloodstream via an IV line. This approach induces a state of deep relaxation and calmness while allowing you to remain conscious and responsive during the procedure.
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
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Benefits of Intravenous Sedation</h2>
          </div>
          
          <div className="clinic-services-grid clinic-service-detail-grid">
            {sedationBenefits.map((item, idx) => (
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
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">When is IV Sedation Recommended?</h2>
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
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">The IV Sedation Process</h2>
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

        <ServiceBooking title={<>Your Comfort and Well-Being First</>}>
          <p>We prioritize your comfort and safety above all else. Our experienced team of professionals is trained to deliver IV sedation in a controlled and monitored environment to ensure a smooth and relaxed experience.</p>
        </ServiceBooking>

      </div>
    </div>
  );
};

export default IntravenousSedation;
