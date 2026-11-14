import { ServiceHero, ServiceBooking } from "../ServicePageParts";
import { useRef } from "react";
import { motion as Motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Activity, HeartPulse, ShieldCheck, Syringe, Clock, CheckCircle } from "lucide-react";

const GeneralAnesthesia = () => {
  const reduceMotion = useReducedMotion();
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const recommendations = [
    {
      title: "Complex Procedures",
      desc: "For extensive oral and maxillofacial surgeries, such as wisdom teeth extraction, jaw surgery, or implant placement, general anesthesia can provide optimal conditions for the surgeon to work.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Anxiety or Fear",
      desc: "General anesthesia is an excellent option for patients with dental anxiety or fear, ensuring a stress-free experience.",
      icon: <HeartPulse className="w-6 h-6" />
    },
    {
      title: "Medical Conditions",
      desc: "Patients with certain medical conditions may benefit from general anesthesia to ensure their safety and comfort during surgery.",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  const processSteps = [
    {
      title: "Consultation",
      desc: "During your initial consultation, we discuss your oral health needs, medical history, and any concerns you may have about anesthesia.",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Evaluation",
      desc: "We conduct a thorough evaluation to determine if general anesthesia is the appropriate option for your specific case.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Preparation",
      desc: "On the day of your surgery, our anesthesia provider will explain the process, answer your questions, and prepare you for the procedure.",
      icon: <Syringe className="w-6 h-6" />
    }
  ];

  return (
    <div className="clinic-general clinic-exam-page clinic-service-detail">
      <ServiceHero
        title={<>General <span>Anesthesia</span></>}
        breadcrumb="General Anesthesia"
        category="Anesthesia"
        categoryHref="/services#anesthesia"
        description={<>We prioritize your comfort and safety during oral and maxillofacial surgery procedures. We offer the option of general anesthesia to ensure a pain-free and stress-free experience for complex or lengthy treatments. Our skilled team is dedicated to providing you with the highest level of care and expertise.</>}
        image="/images/responsive/dental-care-1440.jpg"
        imageAlt="Dental professional providing treatment"
        icon={<Syringe className="w-8 h-8" />}
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
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Understanding General Anesthesia</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-3xl font-light text-lg transition-colors mb-8">
              General anesthesia is a state of controlled unconsciousness that is induced by qualified anesthesia providers. This approach ensures that you are completely asleep and pain-free during your procedure, allowing our oral and maxillofacial surgeons to perform complex surgeries with precision and efficiency.
            </p>
          </div>
        </Motion.div>

        {/* Section 2: Recommendations */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">When is General Anesthesia Recommended?</h2>
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

        {/* Section 3: The Process (Timeline) */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">The General Anesthesia Process</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-3xl font-light text-lg transition-colors mb-8">
              Our experienced team ensures that you are well-prepared and informed before undergoing general anesthesia:
            </p>
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

        <ServiceBooking title={<>Your Comfort and Safety First</>}>
          <p>Your comfort and safety are our top priorities. We adhere to the highest standards of anesthesia care, ensuring that you have a smooth and worry-free surgical experience.</p>
        </ServiceBooking>

      </div>
    </div>
  );
};

export default GeneralAnesthesia;
