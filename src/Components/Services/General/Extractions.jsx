import { Link as LinkIcon } from "lucide-react";
import { ServiceHero, ServiceBooking } from "../ServicePageParts";
import { useRef } from "react";
import { motion as Motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ShieldAlert, Activity, Bone, Search, Heart, Scissors, Sparkles, Stethoscope } from "lucide-react";

const Extractions = () => {
  const reduceMotion = useReducedMotion();
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const reasonsForExtraction = [
    {
      title: "Severe Decay",
      desc: "Teeth that are extensively decayed and cannot be restored through treatments like fillings or crowns may need to be extracted to prevent the spread of infection.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Advanced Gum Disease",
      desc: "In cases of advanced gum disease (periodontitis), teeth may become loose due to the loss of supporting bone. Extracting these teeth can help prevent the disease from spreading further.",
      icon: <Bone className="w-6 h-6" />
    },
    {
      title: "Impacted Wisdom Teeth",
      desc: "Wisdom teeth, also known as third molars, often don't have enough space to fully emerge, leading to pain, infection, or shifting of neighboring teeth. In such cases, extraction is recommended.",
      icon: <ShieldAlert className="w-6 h-6" />
    },
    {
      title: "Orthodontic Reasons",
      desc: "Some orthodontic treatments may require the removal of certain teeth to achieve proper alignment.",
      icon: <LinkIcon className="w-6 h-6" />
    }
  ];

  const whatToExpect = [
    {
      title: "Assessment",
      desc: "We begin by evaluating your dental condition and taking X-rays to understand the tooth's position and root structure.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "Anesthesia",
      desc: "Local anesthesia is administered to numb the area around the tooth, ensuring your comfort during the procedure.",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Extraction",
      desc: "The tooth is gently loosened using specialized instruments. In some cases, a small incision might be necessary to access the tooth.",
      icon: <Scissors className="w-6 h-6" />
    },
    {
      title: "Stitches",
      desc: "If needed, stitches may be placed to aid in the healing process. These stitches are usually dissolvable and don't require removal.",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Aftercare",
      desc: "We provide you with post-operative instructions to ensure proper healing and minimize discomfort. Over-the-counter pain relievers and ice packs can help manage any mild pain or swelling.",
      icon: <Stethoscope className="w-6 h-6" />
    }
  ];

  return (
    <div className="clinic-general clinic-exam-page clinic-service-detail">
      <ServiceHero
        title={<>Tooth <span>Extractions</span></>}
        breadcrumb="Tooth Extractions"
        category="General Dentistry"
        categoryHref="/general-dentistry"
        description={<>At Highland Hills Dental Centre, we understand that tooth extractions can be a concern for many patients. Rest assured, our experienced dental team is dedicated to ensuring your comfort and providing you with the best possible care during this procedure.</>}
        image="/images/responsive/dental-care-1440.jpg"
        imageAlt="Dental professional providing treatment"
        icon={<Scissors className="w-8 h-8" />}
      />
      <div className="clinic-container clinic-service-content">
        {/* Section 1: Reasons */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">When is Tooth Extraction Necessary</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-2xl font-light text-lg transition-colors">
              Tooth extraction is the removal of a tooth from its socket in the jawbone. While our goal is always to preserve your natural teeth, there are situations where tooth extraction becomes necessary for the sake of your oral health.
            </p>
          </div>
          
          <div className="clinic-services-grid clinic-service-detail-grid">
            {reasonsForExtraction.map((item, idx) => (
              <div key={idx} className="clinic-service-card clinic-exam-benefit group relative overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/5 text-lightblue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-myblack dark:text-lightbg mb-3 relative z-10">{item.title}</h3>
                <p className="text-mydark dark:text-lightbg/60 leading-relaxed font-light relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </Motion.div>

        {/* Section 2: What to expect */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">The Extraction Process</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-2xl font-light text-lg transition-colors">
              Our dental professionals are skilled in performing tooth extractions with the utmost care. Here's what you can expect during the extraction procedure.
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
              {whatToExpect.map((item, idx) => (
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

        <ServiceBooking title={<>Maintaining Oral Health After Extraction</>}>
          <p>After a tooth extraction, it's important to follow our aftercare instructions to promote healing and prevent complications. Depending on the situation, we can discuss options for tooth replacement, such as dental implants, bridges, or dentures.</p>
          <p>If you're experiencing dental issues that might require a tooth extraction or have questions about the procedure, don't hesitate to reach out. Contact us today to schedule an appointment.</p>
        </ServiceBooking>

      </div>
    </div>
  );
};

export default Extractions;
