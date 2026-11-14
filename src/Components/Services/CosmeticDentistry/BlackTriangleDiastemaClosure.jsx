import { ServiceHero, ServiceBooking } from "../ServicePageParts";
import { useRef } from "react";
import { motion as Motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Activity, Search, ShieldCheck, Stethoscope, AlertTriangle, Layers, Brush, LayoutGrid } from "lucide-react";

const BlackTriangleDiastemaClosure = () => {
  const reduceMotion = useReducedMotion();
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const understandingConditions = [
    {
      title: "Black Triangles",
      desc: "Black triangles refer to the spaces that sometimes appear between teeth, especially near the gumline. These gaps can occur due to gum recession, bone loss, or the natural shape of the teeth. Black triangles can affect the overall appearance of your smile.",
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      title: "Diastemas",
      desc: "Diastemas are gaps or spaces between two teeth, often seen between the front teeth. These gaps can be caused by various factors, including genetics, improper tooth size, or habits like thumb-sucking.",
      icon: <LayoutGrid className="w-6 h-6" />
    }
  ];

  const effectiveSolutions = [
    {
      title: "Dental Bonding",
      desc: "Dental bonding involves applying tooth-colored resin to fill in gaps and spaces, creating a seamless appearance. Bonding is a versatile and quick solution for small gaps and black triangles.",
      icon: <Brush className="w-6 h-6" />
    },
    {
      title: "Porcelain Veneers",
      desc: "Porcelain veneers are thin, customized shells that can be used to close gaps, reshape teeth, and enhance your smile's overall symmetry.",
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: "Orthodontic Treatment",
      desc: "For larger gaps or more complex cases, orthodontic treatment such as braces or clear aligners can gradually move teeth into proper alignment, closing diastemas and minimizing gaps.",
      icon: <Activity className="w-6 h-6" />
    }
  ];

  const processSteps = [
    {
      title: "Consultation",
      desc: "We discuss your concerns and goals, perform a thorough examination, and recommend the best treatment options for your unique case.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "Treatment Plan",
      desc: "We create a personalized treatment plan tailored to your needs, discussing the steps involved and expected outcomes.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Procedure",
      desc: "Depending on the chosen solution, we perform dental bonding, veneer placement, or initiate orthodontic treatment.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Follow-up",
      desc: "We schedule follow-up appointments to ensure your treatment is progressing as planned and that you're satisfied with the results.",
      icon: <Stethoscope className="w-6 h-6" />
    }
  ];

  return (
    <div className="clinic-general clinic-exam-page clinic-service-detail">
      <ServiceHero
        title={<>Black Triangle & <span>Diastema Closure</span></>}
        breadcrumb="Black Triangle & Diastema Closure"
        category="Cosmetic Dentistry"
        categoryHref="/services#cosmetic"
        description={<>We specialize in creating beautiful smiles by addressing concerns like black triangles and diastemas. Our experienced team offers effective solutions to enhance your smile's aesthetics and boost your confidence.</>}
        image="/images/responsive/dental-care-1440.jpg"
        imageAlt="Dental professional providing treatment"
        icon={<LayoutGrid className="w-8 h-8" />}
      />
      <div className="clinic-container clinic-service-content">
        {/* Section 1: Understanding Conditions */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Understanding Black Triangles and Diastemas</h2>
          </div>
          
          <div className="clinic-services-grid clinic-service-detail-grid">
            {understandingConditions.map((item, idx) => (
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

        {/* Section 2: Effective Solutions */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Effective Solutions for Aesthetic Enhancement</h2>
          </div>
          
          <div className="clinic-services-grid clinic-service-detail-grid">
            {effectiveSolutions.map((item, idx) => (
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
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">The Black Triangle and Diastema Closure Process</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-2xl font-light text-lg transition-colors">
              Here's an overview of the process to close black triangles and diastemas:
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

        <ServiceBooking title={<>Experience a Confident Smile</>}>
          <p>We understand the impact a confident smile can have on your self-esteem and overall well-being. Our team of experts is dedicated to providing you with exceptional results that enhance your smile while maintaining optimal oral health.</p>
        </ServiceBooking>

      </div>
    </div>
  );
};

export default BlackTriangleDiastemaClosure;
