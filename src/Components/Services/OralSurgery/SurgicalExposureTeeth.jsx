import { Link as LinkIcon } from "lucide-react";
import { ServiceHero, ServiceBooking } from "../ServicePageParts";
import { useRef } from "react";
import { motion as Motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Search, ShieldCheck, AlertTriangle, Smile, Scissors, Heart } from "lucide-react";

const SurgicalExposureTeeth = () => {
  const reduceMotion = useReducedMotion();
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const necessaryReasons = [
    {
      title: "Impacted Canines",
      desc: "Canine teeth, also known as cuspids, are critical for proper bite alignment and function. Impacted canines can lead to crowding, misalignment, or bite issues.",
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      title: "Aesthetic Concerns",
      desc: "Exposing impacted front teeth can improve both the appearance and function of your smile.",
      icon: <Smile className="w-6 h-6" />
    },
    {
      title: "Orthodontic Alignment",
      desc: "Properly positioned teeth are essential for achieving an optimal orthodontic outcome with braces or aligners.",
      icon: <LinkIcon className="w-6 h-6" />
    }
  ];

  const processSteps = [
    {
      title: "Initial Evaluation",
      desc: "We assess your orthodontic needs and take X-rays to determine the position and condition of impacted teeth.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "Surgical Procedure",
      desc: "During the procedure, the impacted tooth is exposed by creating a small incision in the gum tissue and, if necessary, removing a small amount of bone covering the tooth.",
      icon: <Scissors className="w-6 h-6" />
    },
    {
      title: "Bracket Placement",
      desc: "An orthodontic bracket is attached to the exposed tooth, allowing your orthodontist to guide the tooth's movement using braces.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Collaboration with Orthodontist",
      desc: "Throughout your orthodontic treatment, we work closely with your orthodontist to ensure the tooth is guided into its optimal position.",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  return (
    <div className="clinic-general clinic-exam-page clinic-service-detail">
      <ServiceHero
        title={<>Surgical Exposure of <span>Teeth</span></>}
        breadcrumb="Surgical Exposure of Teeth"
        category="Oral and Maxillofacial Surgery"
        categoryHref="/services#surgery"
        description={<>At Highland Hills Dental Centre, we offer specialized surgical procedures to expose impacted teeth as part of orthodontic treatment. Our skilled team is dedicated to ensuring a successful and well-coordinated approach to achieving your desired smile.</>}
        image="/images/responsive/dental-care-1440.jpg"
        imageAlt="Dental professional providing treatment"
        icon={<LinkIcon className="w-8 h-8" />}
      />
      <div className="clinic-container clinic-service-content">
        {/* Section 1: Understanding & Why Necessary */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Understanding Surgical Exposure for Orthodontic Treatment</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-3xl font-light text-lg transition-colors mb-8">
              In some cases, teeth fail to erupt properly due to being impacted within the jawbone. This can prevent proper alignment and function of the teeth. Surgical exposure involves uncovering and positioning these impacted teeth, allowing orthodontists to guide them into their proper places using braces.
            </p>
            <h3 className="text-2xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Why Surgical Exposure is Necessary</h3>
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

        {/* Section 2: The Process (Timeline) */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">The Surgical Exposure Process</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-2xl font-light text-lg transition-colors">
              Our surgical exposure procedures are performed with precision and care, ensuring a coordinated approach with your orthodontist:
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

        <ServiceBooking title={<>Expert Care for a Coordinated Approach</>}>
          <p>At Highland Hills Dental Centre, we understand the importance of a coordinated effort between oral surgeons and orthodontists when performing surgical exposure procedures. Our experienced team ensures that the surgical exposure process seamlessly aligns with your orthodontic treatment plan.</p>
        </ServiceBooking>

      </div>
    </div>
  );
};

export default SurgicalExposureTeeth;
