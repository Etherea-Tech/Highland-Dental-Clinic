import { ServiceHero, ServiceBooking } from "../ServicePageParts";
import { useRef } from "react";
import { motion as Motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Activity, Search, Heart, Scissors, Sparkles, Smile, Anchor } from "lucide-react";

const DentalImplantPlacement = () => {
  const reduceMotion = useReducedMotion();
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const understandingImplants = [
    {
      title: "Permanent Solution",
      desc: "Implants fuse with the jawbone over time, providing a long-lasting and stable foundation for replacement teeth.",
      icon: <Anchor className="w-6 h-6" />
    },
    {
      title: "Natural Appearance",
      desc: "Implant-supported restorations look and feel like natural teeth, enhancing your smile's aesthetics.",
      icon: <Smile className="w-6 h-6" />
    },
    {
      title: "Improved Functionality",
      desc: "Dental implants restore your ability to bite, chew, and speak confidently, without the worry of slipping or discomfort.",
      icon: <Activity className="w-6 h-6" />
    }
  ];

  const processSteps = [
    {
      title: "Initial Consultation",
      desc: "We evaluate your oral health, discuss your treatment goals, and take X-rays or 3D scans to assess bone density and suitability for implants.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "Surgical Placement",
      desc: "During the procedure, the implant post is surgically placed into the jawbone. Local anesthesia is used to ensure your comfort.",
      icon: <Scissors className="w-6 h-6" />
    },
    {
      title: "Osseointegration",
      desc: "Over the next few months, the implant fuses with the surrounding bone through a process called osseointegration, ensuring stability.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Abutment Placement",
      desc: "Once osseointegration is complete, an abutment is attached to the implant. This serves as the connection point for the prosthetic tooth.",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Prosthetic Attachment",
      desc: "The final step involves attaching a custom-made crown, bridge, or denture to the abutment, creating a natural-looking and functional restoration.",
      icon: <Sparkles className="w-6 h-6" />
    }
  ];

  return (
    <div className="clinic-general clinic-exam-page clinic-service-detail">
      <ServiceHero
        title={<>Dental Implant <span>Placement</span></>}
        breadcrumb="Dental Implant Placement"
        category="Oral and Maxillofacial Surgery"
        categoryHref="/services#surgery"
        description={<>Welcome to Highland Hills Dental Centre, where we offer state-of-the-art dental implant placement services to restore your smile's functionality, aesthetics, and confidence. Our experienced team is dedicated to providing you with expert care throughout the dental implant journey.</>}
        image="/images/responsive/dental-xray-1440.jpg"
        imageAlt="Dental X-ray and examination instruments"
        icon={<Anchor className="w-8 h-8" />}
      />
      <div className="clinic-container clinic-service-content">
        {/* Section 1: Understanding / Benefits */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Understanding Dental Implant Placement</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-3xl font-light text-lg transition-colors">
              Dental implants are a cutting-edge solution for replacing missing teeth. The placement process involves the surgical insertion of titanium implant posts into the jawbone, which serve as strong and stable foundations for prosthetic teeth. Dental implants offer:
            </p>
          </div>
          
          <div className="clinic-services-grid clinic-service-detail-grid">
            {understandingImplants.map((item, idx) => (
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

        {/* Section 2: The Process */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">The Dental Implant Placement Process</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-2xl font-light text-lg transition-colors">
              At Highland Hills Dental Centre, we follow a precise process to ensure successful dental implant placement:
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

        <ServiceBooking title={<>Achieve a Beautiful, Functional Smile</>}>
          <p>Our experienced team at Highland Hills Dental Centre is committed to guiding you through every step of the dental implant process. From the initial consultation to the final restoration, we prioritize your comfort, well-being, and satisfaction.</p>
          <p>Whether you're missing a single tooth, multiple teeth, or all teeth, dental implant placement offers a versatile solution. If you're interested in dental implants or have questions about the procedure, we encourage you to schedule a consultation. Our experts will assess your dental health, discuss your options, and create a personalized treatment plan that meets your needs.</p>
        </ServiceBooking>

      </div>
    </div>
  );
};

export default DentalImplantPlacement;
