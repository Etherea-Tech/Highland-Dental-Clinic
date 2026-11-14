import { ServiceHero, ServiceBooking } from "../ServicePageParts";
import { useRef } from "react";
import { motion as Motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Activity, ShieldCheck, Coffee, AlertCircle, Clock, Battery, Sparkles, Zap, Home } from "lucide-react";

const ToothWhitening = () => {
  const reduceMotion = useReducedMotion();
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const discolorationCauses = [
    {
      title: "Staining Foods and Beverages",
      desc: "Coffee, tea, red wine, and certain foods can contribute to tooth staining over time.",
      icon: <Coffee className="w-6 h-6" />
    },
    {
      title: "Tobacco Use",
      desc: "Smoking and tobacco use can lead to stubborn yellowing and staining of teeth.",
      icon: <AlertCircle className="w-6 h-6" />
    },
    {
      title: "Aging",
      desc: "As we age, the enamel on our teeth naturally wears down, revealing the yellowish dentin beneath.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Poor Oral Hygiene",
      desc: "Inadequate oral hygiene can result in the buildup of plaque and stains on teeth.",
      icon: <Battery className="w-6 h-6" />
    }
  ];

  const whiteningBenefits = [
    {
      title: "Enhanced Aesthetics",
      desc: "Whiter teeth can improve your smile's overall appearance and boost your self-confidence.",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Non-Invasive",
      desc: "Tooth whitening is a non-invasive treatment that can dramatically transform your smile without the need for extensive dental work.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Quick and Effective",
      desc: "Our professional tooth whitening treatments offer noticeable results in a relatively short period of time.",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const whiteningOptions = [
    {
      title: "In-Office Whitening",
      desc: "Our in-office whitening treatment involves the application of a professional-strength whitening gel to your teeth. With the help of advanced technology, the gel is activated to break down stains and reveal a whiter smile in just one appointment.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Take-Home Whitening",
      desc: "For your convenience, we also provide customized take-home whitening kits. These kits include trays that are molded to fit your teeth perfectly, along with a professional-grade whitening gel. You can achieve gradual whitening in the comfort of your own home.",
      icon: <Home className="w-6 h-6" />
    }
  ];

  return (
    <div className="clinic-general clinic-exam-page clinic-service-detail">
      <ServiceHero
        title={<>Tooth <span>Whitening</span></>}
        breadcrumb="Tooth Whitening"
        category="Cosmetic Dentistry"
        categoryHref="/services#cosmetic"
        description={<>We believe in the power of a bright, radiant smile. Our tooth whitening services are designed to help you achieve a whiter and more confident smile, enhancing your overall appearance and self-esteem.</>}
        image="/images/responsive/dental-care-1440.jpg"
        imageAlt="Dental professional providing treatment"
        icon={<Sparkles className="w-8 h-8" />}
      />
      <div className="clinic-container clinic-service-content">
        {/* Section 1: Understanding Discoloration */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Understanding Tooth Discoloration</h2>
          </div>
          
          <div className="clinic-services-grid clinic-service-detail-grid">
            {discolorationCauses.map((item, idx) => (
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
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">The Benefits of Tooth Whitening</h2>
          </div>
          
          <div className="clinic-services-grid clinic-service-detail-grid">
            {whiteningBenefits.map((item, idx) => (
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

        {/* Section 3: Professional Options (Timeline) */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Professional Tooth Whitening at Highland Hills Dental Centre</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-2xl font-light text-lg transition-colors">
              At Highland Hills Dental Centre, we offer professional tooth whitening options to suit your preferences and needs:
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
              {whiteningOptions.map((item, idx) => (
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

        <ServiceBooking title={<>Expert Guidance for Optimal Results</>}>
          <p>Our experienced team will guide you through the tooth whitening process, ensuring your safety and optimal results. We take into consideration your dental health and personal goals to recommend the best tooth whitening option for you.</p>
        </ServiceBooking>

      </div>
    </div>
  );
};

export default ToothWhitening;
