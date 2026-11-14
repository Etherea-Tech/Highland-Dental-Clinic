import { ServiceHero, ServiceBooking } from "../ServicePageParts";
import { useRef } from "react";
import { motion as Motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Activity, Search, ShieldCheck, Stethoscope, AlertTriangle, FileSearch, Dna, Bone } from "lucide-react";

const ManagementOfOralPathology = () => {
  const reduceMotion = useReducedMotion();
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const commonConditions = [
    {
      title: "Oral Lesions",
      desc: "These can include sores, ulcers, white or red patches, and other abnormal tissue changes.",
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      title: "Oral Cancer",
      desc: "Early detection and management are crucial in improving outcomes for oral cancer cases.",
      icon: <Dna className="w-6 h-6" />
    },
    {
      title: "Gum Disease",
      desc: "Gingivitis and periodontitis are common gum diseases that we diagnose and manage.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Temporomandibular Joint (TMJ) Disorders",
      desc: "TMJ disorders can cause pain and dysfunction in the jaw joint, and we offer treatments to alleviate discomfort.",
      icon: <Bone className="w-6 h-6" />
    }
  ];

  const approachSteps = [
    {
      title: "Thorough Evaluation",
      desc: "We begin with a comprehensive examination of your oral health, taking into account your medical history, symptoms, and any concerns you might have.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "Diagnostic Tools",
      desc: "We utilize advanced diagnostic tools such as biopsies, imaging, and laboratory tests to accurately identify and understand the nature of your oral pathology condition.",
      icon: <FileSearch className="w-6 h-6" />
    },
    {
      title: "Accurate Diagnosis",
      desc: "Our experienced team works diligently to provide an accurate diagnosis, ensuring that the underlying cause of your condition is identified.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Personalized Treatment",
      desc: "Once diagnosed, we develop a personalized treatment plan tailored to your specific needs, addressing the pathology condition effectively.",
      icon: <Stethoscope className="w-6 h-6" />
    }
  ];

  return (
    <div className="clinic-general clinic-exam-page clinic-service-detail">
      <ServiceHero
        title={<>Management of <span>Oral Pathology</span></>}
        breadcrumb="Management of Oral Pathology"
        category="Oral and Maxillofacial Surgery"
        categoryHref="/services#surgery"
        description={<>We are dedicated to your comprehensive oral health, which includes the management of oral pathology conditions. Our experienced team is skilled in diagnosing and treating various oral health issues, ensuring your well-being and peace of mind.</>}
        image="/images/responsive/dental-xray-1440.jpg"
        imageAlt="Dental X-ray and examination instruments"
        icon={<FileSearch className="w-8 h-8" />}
      />
      <div className="clinic-container clinic-service-content">
        {/* Section 1: Understanding & Common Conditions */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Understanding Oral Pathology</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-3xl font-light text-lg transition-colors mb-8">
              Oral pathology refers to the study and management of diseases, disorders, and abnormalities that affect the oral and maxillofacial region. These conditions can range from minor irritations to more serious diseases, requiring proper diagnosis and treatment for optimal outcomes.
            </p>
            <h3 className="text-2xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Common Oral Pathology Conditions We Manage</h3>
          </div>
          
          <div className="clinic-services-grid clinic-service-detail-grid">
            {commonConditions.map((item, idx) => (
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

        {/* Section 2: Our Approach (Timeline) */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Our Approach to Oral Pathology Management</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-2xl font-light text-lg transition-colors">
              At Highland Hills Dental Centre, our approach to managing oral pathology conditions is rooted in expertise, precision, and patient-centered care:
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
              {approachSteps.map((item, idx) => (
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

        <ServiceBooking title={<>Expert Care for Your Peace of Mind</>}>
          <p>Our experienced team at Highland Hills Dental Centre understands the importance of proper diagnosis and treatment when it comes to oral pathology. We are dedicated to providing expert care, addressing your concerns, and guiding you through every step of the management process.</p>
        </ServiceBooking>

      </div>
    </div>
  );
};

export default ManagementOfOralPathology;
