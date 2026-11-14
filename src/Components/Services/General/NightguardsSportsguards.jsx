import { ServiceHero, ServiceBooking } from "../ServicePageParts";
import { motion as Motion, useReducedMotion } from "framer-motion";
import { Moon, ShieldAlert, Activity, ShieldCheck, Smile } from "lucide-react";

const NightguardsSportsguards = () => {
  const reduceMotion = useReducedMotion();
  const bruxism = [
    {
      title: "Protection",
      desc: "Nightguards protect your teeth from the excessive forces caused by grinding and clenching, reducing the risk of enamel wear, fractures, and jaw discomfort.",
      icon: <ShieldAlert className="w-6 h-6" />
    },
    {
      title: "Prevention",
      desc: "By preventing the wear and tear associated with bruxism, nightguards help you avoid the need for extensive dental work in the future.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Improved Sleep",
      desc: "Nightguards can alleviate muscle tension and pain associated with teeth grinding, promoting a more restful night's sleep.",
      icon: <Moon className="w-6 h-6" />
    }
  ];

  const sportsguards = [
    {
      title: "Protection",
      desc: "Sportsguards shield your teeth, lips, and gums from injuries that can occur during contact sports and other physical activities.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Prevention",
      desc: "Wearing a sportsguard can help prevent chipped, broken, or knocked-out teeth, as well as injuries to the soft tissues of the mouth.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Comfort",
      desc: "Our custom-fit sportsguards are designed for maximum comfort, allowing you to speak and breathe easily while enjoying your activities.",
      icon: <Smile className="w-6 h-6" />
    }
  ];

  return (
    <div className="clinic-general clinic-exam-page clinic-service-detail">
      <ServiceHero
        title={<>Nightguards & <span>Sportsguards</span></>}
        breadcrumb="Nightguards & Sportsguards"
        category="General Dentistry"
        categoryHref="/general-dentistry"
        description={<>At Highland Hills Dental Centre, we prioritize your oral health and safety in all aspects of your life, including sleep and physical activities. Our custom nightguards and sportsguards provide protection and comfort, ensuring both your teeth and smile stay healthy.</>}
        image="/images/responsive/dental-care-1440.jpg"
        imageAlt="Dental professional providing treatment"
        icon={<Moon className="w-8 h-8" />}
      />
      <div className="clinic-container clinic-service-content">
        {/* Section 1: Nightguards */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Nightguards Protecting Your Smile While You Sleep</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-2xl font-light text-lg transition-colors">
              Do you wake up with sore jaws or teeth? You might be experiencing the effects of bruxism, a condition characterized by teeth grinding and clenching during sleep. Nightguards are customized oral appliances that create a barrier between your upper and lower teeth, preventing them from coming into contact. Our nightguards offer:
            </p>
          </div>
          
          <div className="clinic-services-grid clinic-service-detail-grid">
            {bruxism.map((item, idx) => (
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

        {/* Section 2: Sportsguards */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-section"
        >
          <div className="clinic-service-section-heading">
            <h2 className="text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Sportsguards: Keeping Your Smile Safe During Physical Activities</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-2xl font-light text-lg transition-colors">
              Whether you're an avid athlete or enjoy occasional physical activities, protecting your smile is essential. Sportsguards, also known as mouthguards, provide a cushioning barrier that helps absorb the impact of blows to the face, reducing the risk of dental injuries. Our sportsguards offer:
            </p>
          </div>
          
          <div className="clinic-services-grid clinic-service-detail-grid">
            {sportsguards.map((item, idx) => (
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

        {/* Minimalist CTA Footer */}
        <Motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clinic-service-intro"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Custom-Made for Your Comfort and Protection</h2>
          <p className="text-mydark dark:text-lightbg/80 mb-6 max-w-2xl mx-auto font-light leading-relaxed transition-colors">
            At Highland Hills Dental Centre, we create nightguards and sportsguards that are tailored to your unique dental structure and needs. During your appointment, we take precise impressions of your teeth to ensure a snug fit that offers optimal comfort and protection.
          </p>
          <p className="text-mydark dark:text-lightbg/80 mb-8 max-w-2xl mx-auto font-light leading-relaxed transition-colors">
            Don't compromise your oral health during sleep or physical activities. Our custom nightguards and sportsguards are designed to provide you with peace of mind, knowing that your smile is well-protected.
          </p>
        </Motion.div>

        <ServiceBooking title={<>Invest in Your Smile's Safety</>}>
          <p>Whether you're looking to prevent teeth grinding or safeguard your smile during sports, our custom nightguards and sportsguards are valuable investments in your oral health and well-being. Contact us today to schedule an appointment and discuss how these protective oral appliances can benefit you.</p>
        </ServiceBooking>

      </div>
    </div>
  );
};

export default NightguardsSportsguards;
