import { ServiceHero, ServiceBooking } from "../ServicePageParts";
import { useRef } from "react";
import { motion as Motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { EyeOff, Smile, Move, Clock, Search, Laptop, Settings, Activity, CalendarCheck, Sparkles } from "lucide-react";

const Invisalign = () => {
  const reduceMotion = useReducedMotion();
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const invisalignAdvantages = [
    {
      title: "Discreet Appearance",
      desc: "Invisalign aligners are virtually invisible, allowing you to undergo orthodontic treatment without drawing attention to your smile.",
      icon: <EyeOff className="w-6 h-6" />
    },
    {
      title: "Comfortable Fit",
      desc: "The aligners are custom-made to fit snugly over your teeth, providing a comfortable orthodontic experience.",
      icon: <Smile className="w-6 h-6" />
    },
    {
      title: "Removable Convenience",
      desc: "You can easily remove Invisalign aligners for eating, drinking, brushing, and flossing, ensuring optimal oral hygiene throughout treatment.",
      icon: <Move className="w-6 h-6" />
    },
    {
      title: "Predictable Results",
      desc: "Invisalign uses advanced technology to plan your treatment, allowing you to visualize your future smile before you even begin.",
      icon: <Clock className="w-6 h-6" />
    }
  ];

  const processSteps = [
    {
      title: "Consultation",
      desc: "During your consultation, we assess your orthodontic needs, discuss your smile goals, and determine if Invisalign is the right option for you.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "Digital Impressions",
      desc: "We take digital impressions or scans of your teeth, eliminating the need for uncomfortable traditional molds.",
      icon: <Laptop className="w-6 h-6" />
    },
    {
      title: "Treatment Plan",
      desc: "Using advanced software, we create a customized treatment plan that outlines the movement of your teeth throughout the process.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Aligner Progression",
      desc: "You'll receive a series of aligners, each designed to gently shift your teeth into their desired positions. You'll switch to a new set of aligners approximately every one to two weeks.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Regular Checkups",
      desc: "We schedule regular checkups to monitor your progress and ensure that your treatment is on track.",
      icon: <CalendarCheck className="w-6 h-6" />
    }
  ];

  return (
    <div className="clinic-general clinic-exam-page clinic-service-detail">
      <ServiceHero
        title={<>Invisalign <span>Clear Aligners</span></>}
        breadcrumb="Invisalign Clear Aligners"
        category="Orthodontics"
        categoryHref="/services#orthodontics"
        description={<>Welcome to Highland Hills Dental Centre, your trusted destination for achieving a beautifully aligned smile with Invisalign clear aligners. Our experienced team is dedicated to providing you with a comfortable, discreet, and effective orthodontic solution that transforms your smile.</>}
        image="/images/responsive/dental-care-1440.jpg"
        imageAlt="Dental professional providing treatment"
        icon={<Sparkles className="w-8 h-8" />}
      />
      <div className="clinic-container clinic-service-content">
        {/* Section 1: Advantages */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Discover the Power of Invisalign</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-3xl font-light text-lg transition-colors mb-8">
              Invisalign is a revolutionary orthodontic treatment that uses a series of clear, removable aligners to straighten teeth without the need for traditional braces. Invisalign offers numerous advantages:
            </p>
          </div>
          
          <div className="clinic-services-grid clinic-service-detail-grid">
            {invisalignAdvantages.map((item, idx) => (
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
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">The Invisalign Process</h2>
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

        <ServiceBooking title={<>Experience the Invisalign Difference</>}>
          <p>At Highland Hills Dental Centre, we understand that a confident smile can positively impact your self-esteem and overall well-being. With Invisalign, you can achieve a straighter smile without the inconvenience of traditional braces.</p>
        </ServiceBooking>

      </div>
    </div>
  );
};

export default Invisalign;
