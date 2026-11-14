import { ServiceHero, ServiceBooking } from "../ServicePageParts";
import { useRef } from "react";
import { motion as Motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Calendar, Activity, Search, ShieldCheck, Stethoscope, AlertCircle, Zap, Shield, Heart } from "lucide-react";

const TMJTMD = () => {
  const reduceMotion = useReducedMotion();
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const understandingTMD = [
    {
      title: "Jaw Pain or Discomfort",
      desc: "Persistent pain or tenderness in the jaw area, which may feel stiff or locked.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Clicking or Popping Sounds",
      desc: "Audible clicking, popping, or grating sounds in the jaw when opening or closing your mouth.",
      icon: <AlertCircle className="w-6 h-6" />
    },
    {
      title: "Difficulty Opening Mouth",
      desc: "Challenges or limited mobility when trying to fully open or close the mouth.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Headaches or Migraines",
      desc: "Frequent, unexplained headaches or migraines, particularly upon waking up.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Ear Pain or Ringing",
      desc: "Ringing in the ears or earaches not caused by an infection, radiating from the jaw joint.",
      icon: <Stethoscope className="w-6 h-6" />
    }
  ];

  const treatmentProcess = [
    {
      title: "Diagnosis",
      desc: "We begin with a thorough evaluation, including a discussion of your symptoms and medical history. We may use imaging and diagnostic techniques to accurately assess the condition of your TMJ.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "Customized Treatment Plan",
      desc: "Based on our evaluation, we create a personalized treatment plan tailored to your specific needs. Our goal is to provide effective relief and long-term solutions.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Lifestyle Modifications",
      desc: "We offer recommendations to reduce stress and avoid habits like teeth grinding that exacerbate TMJ issues.",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Orthodontic & Physical Therapy",
      desc: "Addressing misalignment that contributes to TMJ/TMD symptoms, along with exercises and techniques to improve jaw mobility and reduce pain.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Nightguards & Pain Management",
      desc: "Customized nightguards to protect your teeth from grinding, plus strategies for managing pain including over-the-counter relievers, heat/cold therapy, and relaxation techniques.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Ongoing Monitoring",
      desc: "We schedule regular follow-up appointments to monitor your progress, make any necessary adjustments, and ensure your comfort.",
      icon: <Calendar className="w-6 h-6" />
    }
  ];

  return (
    <div className="clinic-general clinic-exam-page clinic-service-detail">
      <ServiceHero
        title={<>TMJ/TMD <span>Treatment</span></>}
        breadcrumb="TMJ/TMD Treatment"
        category="Airway Focused Dentistry"
        categoryHref="/services#airway"
        description={<>We understand the discomfort and challenges associated with TMJ (temporomandibular joint) disorders, often referred to as TMD. Our experienced team is dedicated to providing effective TMJ/TMD treatment to help alleviate pain and improve your quality of life.</>}
        image="/images/responsive/dental-care-1440.jpg"
        imageAlt="Dental professional providing treatment"
        icon={<Activity className="w-8 h-8" />}
      />
      <div className="clinic-container clinic-service-content">
        {/* Section 1: Symptoms */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Understanding TMJ/TMD</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-3xl font-light text-lg transition-colors mb-8">
              The temporomandibular joint (TMJ) is a complex joint that connects your jawbone to your skull. TMJ disorders, or TMD, can result from various factors, including stress, teeth grinding, misalignment, and jaw injuries. Common symptoms include:
            </p>
          </div>
          
          <div className="clinic-services-grid clinic-service-detail-grid">
            {understandingTMD.map((item, idx) => (
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
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Comprehensive TMJ/TMD Treatment</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-2xl font-light text-lg transition-colors">
              We prioritize non-invasive and conservative treatments to manage your TMJ/TMD. Here is how we approach your care:
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
              {treatmentProcess.map((item, idx) => (
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

        <ServiceBooking title={<>Experience Relief and Comfort</>}>
          <p>At Highland Hills Dental Centre, we understand the impact that TMJ/TMD can have on your daily life. Our experienced team is committed to providing you with effective treatment options that alleviate discomfort and promote your well-being.</p>
        </ServiceBooking>

      </div>
    </div>
  );
};

export default TMJTMD;
