import { ServiceHero, ServiceBooking } from "../ServicePageParts";
import { useRef } from "react";
import { motion as Motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Activity, AlertCircle, ShieldAlert, Heart, Droplet, Layers, ShieldCheck, Zap, Search, Target } from "lucide-react";

const RootCanals = () => {
  const reduceMotion = useReducedMotion();
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
    <div className="clinic-general clinic-exam-page clinic-service-detail">
      <ServiceHero
        title={<>Root Canals <span>(Endodontics)</span></>}
        breadcrumb="Root Canals (Endodontics)"
        category="General Dentistry"
        categoryHref="/general-dentistry"
        description={<>At Highland Hills Dental Centre, we understand that root canal treatment might sound intimidating, but rest assured, our skilled team is here to provide you with a comfortable and effective experience.</>}
        image="/images/responsive/dental-xray-1440.jpg"
        imageAlt="Dental X-ray and examination instruments"
        icon={<Activity className="w-8 h-8" />}
      />
      <div className="clinic-container clinic-service-content">
        {/* Understanding Root Canals */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-intro"
        >
          <h2 className="text-2xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Understanding Root Canal Treatment</h2>
          <p className="text-mydark dark:text-lightbg/70 font-light text-lg leading-relaxed transition-colors">
            A root canal, also known as endodontic therapy, is a dental procedure designed to save a severely damaged or infected tooth. This treatment becomes necessary when the pulp, the innermost part of a tooth containing nerves and blood vessels, becomes inflamed or infected due to deep decay, cracks, or trauma.
          </p>
        </Motion.div>

        {/* Section 1: Signs */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Signs You Might Need a Root Canal</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-2xl font-light text-lg transition-colors">
              If you experience any of the following symptoms, it's essential to consult our dental professionals for an evaluation.
            </p>
          </div>
          
          <div className="clinic-services-grid clinic-service-detail-grid">
            {warningSigns.map((item, idx) => (
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

        {/* Section 2: Process */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">The Root Canal Procedure</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-2xl font-light text-lg transition-colors">
              Our experienced team is well-versed in performing root canal procedures with precision and care. Here's an overview of what you can expect.
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
              {procedureSteps.map((item, idx) => (
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

        <ServiceBooking title={<>Exceptional Care for Lasting Smiles</>}>
          <p>Following a successful root canal, you can expect relief from the pain and discomfort you experienced before the treatment. Most patients can return to their normal activities shortly after the procedure.</p>
          <p>If you're experiencing dental pain or suspect you might need a root canal, don't delay seeking professional help. Contact us today to schedule an appointment.</p>
        </ServiceBooking>

      </div>
    </div>
  );
};

export default RootCanals;
