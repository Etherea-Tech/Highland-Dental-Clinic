import { ServiceHero, ServiceBooking } from "../ServicePageParts";
import { useRef } from "react";
import { motion as Motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Smile, Brush, Scissors, Droplet, Star, Search, Palette } from "lucide-react";

const VeneersBonding = () => {
  const reduceMotion = useReducedMotion();
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const veneersReasons = [
    {
      title: "Stained or Discolored Teeth",
      desc: "Veneers can cover severe stains that are unresponsive to teeth whitening treatments.",
      icon: <Droplet className="w-6 h-6" />
    },
    {
      title: "Chipped or Worn Teeth",
      desc: "Veneers can restore the appearance of teeth with minor chips, cracks, or wear.",
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "Uneven or Misaligned Teeth",
      desc: "Veneers can create the appearance of a straighter smile by improving the shape and alignment of teeth.",
      icon: <Brush className="w-6 h-6" />
    },
    {
      title: "Gaps and Spacing",
      desc: "Veneers can close gaps and spaces between teeth, enhancing overall smile symmetry.",
      icon: <Smile className="w-6 h-6" />
    }
  ];

  const bondingReasons = [
    {
      title: "Minor Chips and Cracks",
      desc: "Bonding can restore teeth with small chips, cracks, or enamel wear.",
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "Discoloration",
      desc: "Stains that don't respond to whitening can be concealed with bonding.",
      icon: <Droplet className="w-6 h-6" />
    },
    {
      title: "Spacing and Gaps",
      desc: "Bonding can close minor gaps and spaces between teeth.",
      icon: <Smile className="w-6 h-6" />
    },
    {
      title: "Tooth Reshaping",
      desc: "Irregularly shaped teeth can be contoured to create a more harmonious smile.",
      icon: <Brush className="w-6 h-6" />
    }
  ];

  const processSteps = [
    {
      title: "Consultation",
      desc: "We discuss your cosmetic goals, assess your oral health, and recommend the best approach for your needs.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "Preparation",
      desc: "For veneers, a small amount of enamel is usually removed from the tooth to accommodate the veneer. Bonding typically requires minimal preparation.",
      icon: <Scissors className="w-6 h-6" />
    },
    {
      title: "Color and Design",
      desc: "We match the color and design of the veneer or bonding material to your natural teeth.",
      icon: <Palette className="w-6 h-6" />
    },
    {
      title: "Application",
      desc: "The veneer or bonding material is carefully applied and shaped to achieve the desired look.",
      icon: <Sparkles className="w-6 h-6" />
    }
  ];

  return (
    <div className="clinic-general clinic-exam-page clinic-service-detail">
      <ServiceHero
        title={<>Veneers and <span>Bonding</span></>}
        breadcrumb="Veneers and Bonding"
        category="Cosmetic Dentistry"
        categoryHref="/services#cosmetic"
        description={<>At Highland Hills Dental Centre, we offer transformative cosmetic solutions with veneers and bonding to enhance the appearance of your smile. Our experienced team is dedicated to creating natural-looking, beautiful results that boost your confidence and leave you with a radiant smile.</>}
        image="/images/responsive/dental-care-1440.jpg"
        imageAlt="Dental professional providing treatment"
        icon={<Sparkles className="w-8 h-8" />}
      />
      <div className="clinic-container clinic-service-content">
        {/* Section 1: Veneers */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Veneers: A Perfect Smile Makeover</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-3xl font-light text-lg transition-colors mb-8">
              Dental veneers are thin, custom-made shells that are bonded to the front surface of your teeth. They are a popular option to correct a variety of dental imperfections:
            </p>
          </div>
          
          <div className="clinic-services-grid clinic-service-detail-grid">
            {veneersReasons.map((item, idx) => (
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

        {/* Section 2: Dental Bonding */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Dental Bonding: Quick and Effective Corrections</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-3xl font-light text-lg transition-colors mb-8">
              Dental bonding is a versatile and cost-effective cosmetic solution that involves applying a tooth-colored resin to the teeth and sculpting it to achieve the desired shape and appearance. Dental bonding is an excellent option for:
            </p>
          </div>
          
          <div className="clinic-services-grid clinic-service-detail-grid">
            {bondingReasons.map((item, idx) => (
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
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">The Veneer and Bonding Process</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-2xl font-light text-lg transition-colors">
              Both veneers and bonding involve the following steps to ensure a flawless, custom outcome:
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

        <ServiceBooking title={<>A Stunning Smile Awaits You</>}>
          <p>At Highland Hills Dental Centre, we understand the power of a beautiful smile. Our team of experts is committed to providing you with exceptional results that enhance your self-esteem and overall well-being.</p>
        </ServiceBooking>

      </div>
    </div>
  );
};

export default VeneersBonding;
