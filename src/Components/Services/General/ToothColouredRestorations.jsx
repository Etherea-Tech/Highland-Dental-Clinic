import { ServiceHero, ServiceBooking } from "../ServicePageParts";
import { useRef } from "react";
import { motion as Motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Shield, Activity, Droplet, Layers, ShieldCheck, Smile, Search, Zap, Scan, CheckCircle } from "lucide-react";

const ToothColouredRestorations = () => {
  const reduceMotion = useReducedMotion();
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const benefits = [
    {
      title: "Aesthetic Appeal",
      desc: "Unlike traditional metal restorations, tooth-colored restorations are designed to match the shade and shape of your existing teeth, creating a seamless and natural appearance.",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Conservation of Structure",
      desc: "Tooth-colored restorations allow for more conservative treatment, preserving more of your natural tooth structure compared to traditional restorations.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Durability",
      desc: "The materials used in tooth-colored restorations are strong and durable, providing long-lasting results that can withstand everyday chewing and biting forces.",
      icon: <Activity className="w-6 h-6" />
    }
  ];

  const services = [
    {
      title: "Composite Fillings",
      desc: "We use composite resin to create fillings that repair teeth damaged by cavities or minor fractures. These fillings are discreet and effective, restoring both form and function.",
      icon: <Droplet className="w-6 h-6" />
    },
    {
      title: "Porcelain Crowns",
      desc: "Our porcelain crowns are crafted to match the color and shape of your natural teeth. They are used to cover and protect extensively damaged or weakened teeth.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Inlays and Onlays",
      desc: "These custom-made restorations are used for larger cavities or damaged tooth surfaces. Inlays fit within the tooth's cusps, while onlays extend over one or more cusps.",
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: "Veneers",
      desc: "Dental veneers are thin shells of porcelain that can transform the appearance of stained, chipped, or misaligned teeth, providing a beautiful and symmetrical smile.",
      icon: <Smile className="w-6 h-6" />
    }
  ];

  const procedureSteps = [
    {
      title: "Evaluation",
      desc: "We assess your dental condition and discuss the best restoration options for your specific needs and goals.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "Preparation",
      desc: "For some restorations, a minimal amount of tooth structure is removed to create adequate space for the restoration.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Impression",
      desc: "We take precise impressions of your teeth to create custom restorations that fit your mouth perfectly.",
      icon: <Scan className="w-6 h-6" />
    },
    {
      title: "Placement",
      desc: "The final restoration is carefully and securely bonded to your tooth using specialized dental adhesives.",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  return (
    <div className="clinic-general clinic-exam-page clinic-service-detail">
      <ServiceHero
        title={<>Tooth-Coloured <span>Restorations</span></>}
        breadcrumb="Tooth-Coloured Restorations"
        category="General Dentistry"
        categoryHref="/general-dentistry"
        description={<>At Highland Hills Dental Centre, we offer advanced tooth-colored restorations that blend seamlessly with your natural teeth, providing both aesthetic appeal and functional durability.</>}
        image="/images/responsive/dental-care-1440.jpg"
        imageAlt="Dental professional providing treatment"
        icon={<Sparkles className="w-8 h-8" />}
      />
      <div className="clinic-container clinic-service-content">
        {/* Section 1: The Beauty of Restorations */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">The Beauty of Tooth Coloured Restorations</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-2xl font-light text-lg transition-colors">
              Gone are the days of conspicuous metal fillings. With modern advancements, we restore your teeth using materials that mimic your natural smile.
            </p>
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

        {/* Section 2: Our Services */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Our Tooth-Coloured Restoration Services</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-2xl font-light text-lg transition-colors">
              We offer a wide range of restoration options to address various dental concerns discreetly and effectively.
            </p>
          </div>
          
          <div className="clinic-services-grid clinic-service-detail-grid">
            {services.map((item, idx) => (
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

        {/* Section 3: Process */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">The Restoration Process</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-2xl font-light text-lg transition-colors">
              Our skilled dental team follows a meticulous process to ensure optimal results with tooth-colored restorations.
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

        <ServiceBooking title={<>Achieve a Natural, Healthy Smile</>}>
          <p>Whether you need a simple filling or a more extensive restoration, our tooth-colored options ensure that your smile remains natural and beautiful. Schedule a consultation to explore how we can enhance your oral health.</p>
        </ServiceBooking>

      </div>
    </div>
  );
};

export default ToothColouredRestorations;
