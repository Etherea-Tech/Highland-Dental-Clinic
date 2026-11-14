import { ServiceHero, ServiceBooking } from "../ServicePageParts";
import { useRef } from "react";
import { motion as Motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Calendar, Wind, Moon, Activity, Search, ShieldCheck, Heart, Settings } from "lucide-react";

const OralApplianceTherapy = () => {
  const reduceMotion = useReducedMotion();
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const understandingConditions = [
    {
      title: "Snoring",
      desc: "Snoring is the sound produced when the flow of air through the mouth and nose is partially blocked during sleep. It can lead to disrupted sleep for both the snorer and their partner.",
      icon: <Wind className="w-6 h-6" />
    },
    {
      title: "Sleep Apnea",
      desc: "Sleep apnea is a more serious condition where breathing repeatedly stops and starts during sleep. This can lead to decreased oxygen levels and result in fatigue, morning headaches, and other health problems.",
      icon: <Moon className="w-6 h-6" />
    }
  ];

  const therapyBenefits = [
    {
      title: "Improved Sleep Quality",
      desc: "By keeping the airway open, oral appliances can help you experience uninterrupted sleep and wake up feeling refreshed.",
      icon: <Moon className="w-6 h-6" />
    },
    {
      title: "Enhanced Comfort",
      desc: "Oral appliances are custom-designed to fit your mouth comfortably, allowing for natural jaw movement during sleep.",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Portable and Convenient",
      desc: "Oral appliances are easy to travel with and do not require any external equipment or machinery.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Non-Invasive",
      desc: "Unlike traditional CPAP machines, oral appliances do not involve masks or hoses.",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  const processSteps = [
    {
      title: "Consultation",
      desc: "During your consultation, we discuss your sleep-related concerns, perform an evaluation, and determine if oral appliance therapy is suitable for you.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "Custom Appliance",
      desc: "If oral appliance therapy is recommended, we create a custom appliance that is designed to fit your mouth comfortably and effectively.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Adjustments",
      desc: "We make any necessary adjustments to ensure the appliance fits properly and functions optimally.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Regular Follow-ups",
      desc: "We schedule regular follow-up appointments to monitor your progress, make adjustments as needed, and ensure your comfort.",
      icon: <Calendar className="w-6 h-6" />
    }
  ];

  return (
    <div className="clinic-general clinic-exam-page clinic-service-detail">
      <ServiceHero
        title={<>Oral Appliance <span>Therapy</span></>}
        breadcrumb="Oral Appliance Therapy"
        category="Airway Focused Dentistry"
        categoryHref="/services#airway"
        description={<>At Highland Hills Dental Centre, we offer effective solutions for snoring and sleep apnea through oral appliance therapy. Our experienced team is dedicated to helping you achieve better sleep and improved overall health by addressing these common sleep-related issues.</>}
        image="/images/responsive/dental-care-1440.jpg"
        imageAlt="Dental professional providing treatment"
        icon={<Wind className="w-8 h-8" />}
      />
      <div className="clinic-container clinic-service-content">
        {/* Section 1: Conditions */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Understanding Snoring & Sleep Apnea</h2>
          </div>
          
          <div className="clinic-services-grid clinic-service-detail-grid">
            {understandingConditions.map((item, idx) => (
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

        {/* Section 2: Benefits */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Benefits of Oral Appliance Therapy</h2>
          </div>
          
          <div className="clinic-services-grid clinic-service-detail-grid">
            {therapyBenefits.map((item, idx) => (
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
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">The Oral Appliance Therapy Process</h2>
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

        <ServiceBooking title={<>Experience Restful Sleep</>}>
          <p>At Highland Hills Dental Centre, we understand the importance of quality sleep for your overall health and well-being. Our experienced team is committed to providing you with effective oral appliance therapy solutions that alleviate snoring and sleep apnea symptoms.</p>
        </ServiceBooking>

      </div>
    </div>
  );
};

export default OralApplianceTherapy;
