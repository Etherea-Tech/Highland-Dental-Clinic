import { ServiceHero, ServiceBooking } from "../ServicePageParts";
import { useRef } from "react";
import { motion as Motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Activity, HeartPulse, ShieldCheck, Heart, Pill, Clock, Smile } from "lucide-react";

const OralSedation = () => {
  const reduceMotion = useReducedMotion();
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const sedationBenefits = [
    {
      title: "Reduced Anxiety",
      desc: "Oral sedation effectively reduces dental anxiety and helps you feel more comfortable throughout your visit.",
      icon: <Smile className="w-6 h-6" />
    },
    {
      title: "Ease of Administration",
      desc: "Taking medication by mouth is convenient and simple, eliminating the need for injections or needles.",
      icon: <Pill className="w-6 h-6" />
    },
    {
      title: "Amnesia Effect",
      desc: "Many patients have little to no memory of the procedure, contributing to a positive and less stressful experience.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Non-Invasive",
      desc: "Oral sedation is non-invasive and suitable for patients of various ages.",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  const usages = [
    {
      title: "Dental Anxiety",
      desc: "If you experience dental anxiety, oral sedation can help you relax and undergo treatment more comfortably.",
      icon: <HeartPulse className="w-6 h-6" />
    },
    {
      title: "Complex Procedures",
      desc: "For longer or more involved dental procedures, oral sedation ensures your relaxation throughout the process.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Sensitive Gag Reflex",
      desc: "Patients with a sensitive gag reflex may benefit from oral sedation to minimize discomfort during treatments.",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  return (
    <div className="clinic-general clinic-exam-page clinic-service-detail">
      <ServiceHero
        title={<>Oral <span>Sedation</span></>}
        breadcrumb="Oral Sedation"
        category="Anesthesia"
        categoryHref="/services#anesthesia"
        description={<>We understand that dental anxiety or nervousness can hinder your oral health care. That's why we offer oral sedation as a safe and effective option to help you feel calm and comfortable during your dental visits. Our experienced team is dedicated to providing a positive and stress-free experience for every patient.</>}
        image="/images/responsive/dental-care-1440.jpg"
        imageAlt="Dental professional providing treatment"
        icon={<Pill className="w-8 h-8" />}
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
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Understanding Oral Sedation</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-3xl font-light text-lg transition-colors mb-8">
              Oral sedation involves taking prescribed medications by mouth before your dental appointment. These medications induce a state of relaxation and calmness, helping you feel at ease while still remaining conscious and responsive.
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
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Benefits of Oral Sedation</h2>
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

        {/* Section 3: Recommendations (Timeline / Process) */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">When is Oral Sedation Used?</h2>
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
              {usages.map((item, idx) => (
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
          <p>we understand the importance of a comfortable dental experience. Our skilled team is dedicated to providing a calming environment and using oral sedation to ensure your relaxation and peace of mind.</p>
        </ServiceBooking>

      </div>
    </div>
  );
};

export default OralSedation;
