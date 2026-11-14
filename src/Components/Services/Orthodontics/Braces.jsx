import { ServiceHero, ServiceBooking } from "../ServicePageParts";
import { useRef } from "react";
import { motion as Motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Activity, Search, ShieldCheck, Stethoscope, Smile, AlignHorizontalSpaceAround, Settings, Shield, Star, Crown } from "lucide-react";

const Braces = () => {
  const reduceMotion = useReducedMotion();
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const understandingBraces = [
    {
      title: "Crooked Teeth",
      desc: "Braces can gradually shift crooked teeth into proper alignment, ensuring a seamless and confident smile.",
      icon: <Smile className="w-6 h-6" />
    },
    {
      title: "Spacing and Gaps",
      desc: "Braces can close gaps between teeth, creating a more even, harmonious, and aesthetically pleasing smile.",
      icon: <AlignHorizontalSpaceAround className="w-6 h-6" />
    },
    {
      title: "Overcrowding",
      desc: "Braces can create space by gradually moving teeth into their ideal positions, resolving tight or overlapped teeth.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Bite Alignment",
      desc: "Braces can safely and effectively correct overbites, underbites, crossbites, and other complex bite-related issues.",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  const bracesOptions = [
    {
      title: "Traditional Metal Braces",
      desc: "Highly durable and effective for correcting all types of orthodontic issues. Modern metal braces are smaller, flatter, and more comfortable than ever before.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Ceramic Braces",
      desc: "Made of clear or tooth-colored materials, ceramic braces blend in with your natural teeth for a far more discreet appearance while providing excellent results.",
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "Clear Aligners",
      desc: "A nearly invisible, removable option for mild to moderate adjustments, offering the ultimate convenience for adults and teens.",
      icon: <Crown className="w-6 h-6" />
    }
  ];

  const processSteps = [
    {
      title: "Initial Consultation",
      desc: "We perform a comprehensive evaluation, including X-rays and digital impressions, to create a customized orthodontic treatment plan tailored to your needs.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "Placing the Braces",
      desc: "During a comfortable appointment, the brackets are carefully bonded to your teeth, and the archwires are secured to begin the gentle alignment process.",
      icon: <Stethoscope className="w-6 h-6" />
    },
    {
      title: "Regular Adjustments",
      desc: "You will visit us periodically so we can monitor your progress, adjust the wires, and ensure your teeth are moving precisely as planned.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Retention Phase",
      desc: "Once your braces are removed, we provide custom retainers to maintain your new, beautiful smile and prevent teeth from shifting back.",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  return (
    <div className="clinic-general clinic-exam-page clinic-service-detail">
      <ServiceHero
        title={<>Orthodontic <span>Braces</span></>}
        breadcrumb="Orthodontic Braces"
        category="Orthodontics"
        categoryHref="/services#orthodontics"
        description={<>We are dedicated to helping you achieve a straighter, healthier smile through our comprehensive orthodontic services. Our experienced team offers a variety of braces options to address your unique needs and provide you with a smile you can be proud of.</>}
        image="/images/responsive/dental-care-1440.jpg"
        imageAlt="Dental professional providing treatment"
        icon={<Smile className="w-8 h-8" />}
      />
      <div className="clinic-container clinic-service-content">
        {/* Section 1: Understanding Braces */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Understanding Braces</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-3xl font-light text-lg transition-colors mb-8">
              Braces are orthodontic appliances used to correct misaligned teeth and bite issues. They work by gently applying continuous pressure to move teeth into their desired positions over time. Braces are a versatile and effective solution for a wide range of orthodontic concerns:
            </p>
          </div>
          
          <div className="clinic-services-grid clinic-service-detail-grid">
            {understandingBraces.map((item, idx) => (
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

        {/* Section 2: Options for Every Smile */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Options for Every Smile</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-3xl font-light text-lg transition-colors mb-8">
              We offer multiple state-of-the-art orthodontic solutions tailored to fit your lifestyle, cosmetic preferences, and treatment needs.
            </p>
          </div>
          
          <div className="clinic-services-grid clinic-service-detail-grid">
            {bracesOptions.map((item, idx) => (
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
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">The Orthodontic Journey</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-2xl font-light text-lg transition-colors">
              Our experienced team will guide you through every step of your orthodontic journey, ensuring optimal comfort and breathtaking results.
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

        <ServiceBooking title={<>Expert Guidance for a Flawless Smile</>}>
          <p>Our experienced team will guide you through the entire orthodontic process, ensuring your safety, comfort, and optimal results. We take into consideration your dental health and personal goals to recommend the best path to your perfect smile.</p>
        </ServiceBooking>

      </div>
    </div>
  );
};

export default Braces;
