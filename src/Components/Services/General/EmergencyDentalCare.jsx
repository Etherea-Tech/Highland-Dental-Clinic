import { useRef } from "react";
import { motion as Motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, AlertCircle, Stethoscope, CircleCheck } from "lucide-react";

import { clinic } from "../../../clinicDetails";
import severeToothacheIcon from "../../../assets/icons/severe-toothache.svg";
import knockedOutToothIcon from "../../../assets/icons/knocked-out-tooth.svg";
import brokenToothIcon from "../../../assets/icons/broken-tooth.svg";
import lostFillingIcon from "../../../assets/icons/lost-filling.svg";
import stayCalmIcon from "../../../assets/icons/stay-calm.svg";
import retrieveToothIcon from "../../../assets/icons/retrieve-tooth.svg";
import painManagementIcon from "../../../assets/icons/pain-management.svg";

const EmergencyDentalCare = () => {
  const timelineRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const recognizingEmergencies = [
    {
      title: "Severe Toothache",
      desc: "Persistent and intense tooth pain can indicate an underlying issue such as an infection or dental decay that needs immediate treatment.",
      icon: <img src={severeToothacheIcon} alt="" width="32" height="32" />
    },
    {
      title: "Knocked-Out Tooth",
      desc: "If a tooth has been knocked out due to injury, time is of the essence. Retrieving the tooth and seeking professional care quickly can increase the chances of successful reattachment.",
      icon: <img src={knockedOutToothIcon} alt="" width="32" height="32" />
    },
    {
      title: "Broken or Fractured Tooth",
      desc: "A broken or fractured tooth can cause pain and expose the sensitive inner layers of the tooth, requiring immediate treatment to prevent further damage.",
      icon: <img src={brokenToothIcon} alt="" width="32" height="32" />
    },
    {
      title: "Lost Filling or Crown",
      desc: "If a filling or crown becomes dislodged, it's important to have it addressed promptly to protect the affected tooth.",
      icon: <img src={lostFillingIcon} alt="" width="32" height="32" />
    }
  ];

  const stepsToTake = [
    {
      title: "Stay Calm",
      desc: "Remain calm and assess the situation. If there's bleeding, try to control it with gentle pressure using clean gauze.",
      icon: <img src={stayCalmIcon} alt="" width="32" height="32" />
    },
    {
      title: "Retrieve the Tooth",
      desc: "If a tooth is knocked out, handle it by the crown (top) and avoid touching the roots. Gently rinse it with water if dirty, but do not scrub. Try to place it back in its socket or keep it in milk or saliva.",
      icon: <img src={retrieveToothIcon} alt="" width="32" height="32" />
    },
    {
      title: "Pain Management",
      desc: "Over the counter pain relievers can help manage pain while you wait for professional care.",
      icon: <img src={painManagementIcon} alt="" width="32" height="32" />
    }
  ];

  const emergencyServices = [
    "Treatment of severe toothaches and infections",
    "Dental trauma and injuries",
    "Tooth reattachment and restoration",
    "Temporary fillings and crowns",
    "Extractions when preservation isn't possible",
  ];

  return (
    <div className="clinic-general clinic-exam-page clinic-emergency-page">
      <section className="clinic-hero clinic-general-hero" aria-labelledby="emergency-care-title">
        <div className="clinic-container">
          <nav className="clinic-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span aria-hidden="true">/</span><Link to="/general-dentistry">General Dentistry</Link><span aria-hidden="true">/</span><span aria-current="page">Emergency Dental Care</span>
          </nav>
          <div className="clinic-hero-grid">
            <div className="clinic-hero-copy">
              <p className="clinic-emergency-label"><AlertCircle size={16} aria-hidden="true" />Dental emergency</p>
              <h1 id="emergency-care-title">Emergency <span>Dental Care</span></h1>
              <p className="clinic-hero-description">At Highland Hills Dental Centre, we understand that dental emergencies can happen at any time. Our dedicated team is here to provide you with prompt and compassionate emergency dental care when you need it most.</p>
              <div className="clinic-emergency-hero-actions">
                <a href={clinic.phoneHref} className="clinic-button clinic-button-large"><Phone size={18} aria-hidden="true" />Call {clinic.phone}</a>
                <Link to="/#contact" className="clinic-general-phone">Request an Appointment <ArrowRight size={18} aria-hidden="true" /></Link>
              </div>
              <p className="clinic-emergency-hours">Contact our clinic during opening hours to discuss urgent care and appointment availability.</p>
            </div>
            <div className="clinic-general-photo">
              <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop" alt="Dental care and examination" width="1200" height="900" fetchPriority="high" />
            </div>
          </div>
        </div>
      </section>

      <section className="clinic-section clinic-section-tint" aria-labelledby="recognizing-emergencies-title">
        <div className="clinic-container">
          <div className="clinic-section-heading">
            <p className="clinic-eyebrow">Know when to seek care</p>
            <h2 id="recognizing-emergencies-title">Recognizing <span>Dental Emergencies</span></h2>
            <p>Dental emergencies can vary in nature and severity. It's important to be able to recognize when you or a loved one is experiencing an issue that requires immediate attention.</p>
          </div>
          <div className="clinic-services-grid">
            {recognizingEmergencies.map((item) => (
              <article className="clinic-service-card clinic-exam-benefit" key={item.title}>
                <span className="clinic-service-icon clinic-emergency-care-icon" aria-hidden="true">{item.icon}</span>
                <h3>{item.title}</h3><p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="clinic-section" aria-labelledby="emergency-steps-title">
        <div className="clinic-container">
          <div className="clinic-section-heading">
            <p className="clinic-eyebrow">Before your visit</p>
            <h2 id="emergency-steps-title">Steps to Take in a <span>Dental Emergency</span></h2>
          </div>
          <div className="clinic-cleaning-timeline">
          <div ref={timelineRef} className="relative max-w-5xl mx-auto mt-16 pb-10">
            {/* Center Line Track */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-1 bg-lightblue/10 dark:bg-white/5 -translate-x-1/2 rounded-full z-0"></div>
            {/* Center Line Fill (Animated) */}
            <Motion.div
              style={{ height: reduceMotion ? "100%" : lineHeight }}
              className="hidden md:block absolute left-1/2 top-4 w-1 bg-gradient-to-b from-lightblue via-lightblue/80 to-transparent -translate-x-1/2 rounded-full z-0 origin-top"
            ></Motion.div>

            <div className="space-y-12 md:space-y-24 relative z-10">
              {stepsToTake.map((item, idx) => (
                <Motion.div
                  key={idx} 
                  initial={reduceMotion ? false : { opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: reduceMotion ? 0 : 0.6 }}
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
          </div>
        </div>
      </section>

      <section className="clinic-section clinic-exam-booking" aria-labelledby="emergency-services-title">
        <div className="clinic-container">
          <div className="clinic-emergency-services">
            <div>
              <p className="clinic-eyebrow"><Stethoscope size={16} aria-hidden="true" />Comprehensive care</p>
              <h2 id="emergency-services-title">Our Emergency <span>Dental Care Services</span></h2>
              <p>When a dental emergency strikes, you can count on Highland Hills Dental Centre to provide swift and effective care. Our experienced team is equipped to handle a wide range of critical situations.</p>
            </div>
            <Motion.ul
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.25 } } }}
            >
              {emergencyServices.map((service) => (
                <Motion.li
                  key={service}
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                  transition={{ duration: reduceMotion ? 0 : 0.5, ease: "easeOut" }}
                >
                  <CircleCheck size={22} aria-hidden="true" />
                  <span>{service}</span>
                </Motion.li>
              ))}
            </Motion.ul>
          </div>
        </div>
      </section>

      <section className="clinic-section clinic-exam-booking" aria-labelledby="emergency-contact-title">
        <div className="clinic-container">
          <div className="clinic-general-booking">
            <div>
              <p className="clinic-eyebrow">Speak with our team</p>
              <h2 id="emergency-contact-title">Contact Us <span>Immediately</span></h2>
              <p>If you're experiencing a dental emergency, don't hesitate to reach out. We prioritize emergency cases and will do our best to accommodate you as soon as possible.</p>
            </div>
            <div className="clinic-general-booking-actions">
              <Link to="/#contact" className="clinic-button clinic-button-large">Request an Appointment <ArrowRight size={18} aria-hidden="true" /></Link>
              <a href={clinic.phoneHref} className="clinic-general-phone"><Phone size={17} aria-hidden="true" />Call {clinic.phone}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmergencyDentalCare;
