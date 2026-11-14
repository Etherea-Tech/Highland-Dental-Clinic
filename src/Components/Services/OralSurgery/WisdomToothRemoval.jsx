import { ServiceHero, ServiceBooking } from "../ServicePageParts";
import { useRef } from "react";
import { motion as Motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ShieldAlert, Activity, Search, Heart, Scissors, Sparkles, Stethoscope, AlertTriangle, AlertCircle, ShieldCheck } from "lucide-react";

const WisdomToothRemoval = () => {
  const reduceMotion = useReducedMotion();
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const understandingIssues = [
    {
      title: "Impaction",
      desc: "Wisdom teeth may become impacted if there isn't enough space for them to emerge fully. Impacted wisdom teeth can lead to pain, infection, and damage to adjacent teeth.",
      icon: <ShieldAlert className="w-6 h-6" />
    },
    {
      title: "Misalignment",
      desc: "Wisdom teeth can grow in at odd angles, potentially pushing against neighboring teeth and causing crowding or shifting.",
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      title: "Infection or Gum Disease",
      desc: "Wisdom teeth are harder to clean properly, which can lead to gum disease or infections.",
      icon: <Activity className="w-6 h-6" />
    }
  ];

  const necessaryReasons = [
    {
      title: "Pain or Discomfort",
      desc: "Wisdom teeth causing pain, discomfort, or pressure may need to be extracted.",
      icon: <AlertCircle className="w-6 h-6" />
    },
    {
      title: "Infection or Cysts",
      desc: "Infections or cysts around wisdom teeth can lead to more serious dental and overall health issues.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Potential Damage",
      desc: "If wisdom teeth are at risk of damaging other teeth, nerves, or jawbone, removal might be recommended.",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  const processSteps = [
    {
      title: "Evaluation",
      desc: "We assess your dental health and take X-rays to determine the position and condition of your wisdom teeth.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "Anesthesia",
      desc: "Local or general anesthesia is administered to ensure your comfort during the procedure.",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Extraction",
      desc: "The wisdom tooth is carefully removed from its socket, sometimes requiring minor surgical techniques.",
      icon: <Scissors className="w-6 h-6" />
    },
    {
      title: "Stitches",
      desc: "In some cases, stitches might be needed to aid in healing. These are usually dissolvable and don't require removal.",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Aftercare",
      desc: "We provide you with post-operative instructions to ensure proper healing. Pain, swelling, and bleeding are common initially but can be managed with prescribed medications and home care.",
      icon: <Stethoscope className="w-6 h-6" />
    }
  ];

  return (
    <div className="clinic-general clinic-exam-page clinic-service-detail">
      <ServiceHero
        title={<>Wisdom Tooth <span>Removal</span></>}
        breadcrumb="Wisdom Tooth Removal"
        category="Oral and Maxillofacial Surgery"
        categoryHref="/services#surgery"
        description={<>At Highland Hills Dental Centre, we understand that wisdom tooth removal can be a concern for many patients. Our experienced dental team is here to provide you with expert care and a comfortable experience during this procedure.</>}
        image="/images/responsive/dental-xray-1440.jpg"
        imageAlt="Dental X-ray and examination instruments"
        icon={<Scissors className="w-8 h-8" />}
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
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Understanding Wisdom Tooth Extraction</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-2xl font-light text-lg transition-colors">
              Wisdom teeth, also known as third molars, are the last set of molars located at the back of your mouth. While they can be valuable assets when healthy and properly positioned, often they require removal due to various issues.
            </p>
          </div>
          
          <div className="clinic-services-grid clinic-service-detail-grid">
            {understandingIssues.map((item, idx) => (
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

        {/* Section 2: When Necessary */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">When Wisdom Tooth Removal is Necessary</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-2xl font-light text-lg transition-colors">
              Your dentist will assess the position and condition of your wisdom teeth through examinations and X-rays. Wisdom tooth removal is recommended if:
            </p>
          </div>
          
          <div className="clinic-services-grid clinic-service-detail-grid">
            {necessaryReasons.map((item, idx) => (
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

        {/* Section 3: The Process */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">The Wisdom Tooth Removal Process</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-2xl font-light text-lg transition-colors">
              Our dental professionals are skilled in performing wisdom tooth extractions with the utmost care. Here's what you can expect during the procedure.
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

        <ServiceBooking title={<>Expert Care for Comfortable Wisdom Tooth Removal</>}>
          <p>At Highland Hills Dental Centre, we're dedicated to making your wisdom tooth removal as comfortable and stress-free as possible. Our skilled team will guide you through each step of the process and provide you with the information you need to have a smooth recovery.</p>
        </ServiceBooking>

      </div>
    </div>
  );
};

export default WisdomToothRemoval;
