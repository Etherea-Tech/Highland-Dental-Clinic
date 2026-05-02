import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight, X } from "lucide-react";

// --- Custom Dental Icons ---
const PerfectToothPath = "M15 3c-1.2 0-2.2.6-3 1.5C11.2 3.6 10.2 3 9 3 6.8 3 5 4.8 5 7c0 2.5 1 3.5 1 5s-1.5 3-1.5 5.5C4.5 19.4 6 21 8 21c1.5 0 2.5-1.5 3-3 .5-1.5 1.5-1.5 2 0 .5 1.5 1.5 3 3 3 2 0 3.5-1.6 3.5-3.5 0-2.5-1.5-4-1.5-5.5s1-2.5 1-5C19 4.8 17.2 3 15 3z";

const BaseTooth = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d={PerfectToothPath} />
  </svg>
);

const ToothacheIcon = ({ className }) => (
  <div className="relative">
    <BaseTooth className={className} />
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`absolute inset-0 text-red-500 scale-[0.4] translate-x-[2px] -translate-y-2`}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  </div>
);

const FillingIcon = ({ className }) => (
  <div className="relative">
    <BaseTooth className={className} />
    <svg viewBox="0 0 24 24" fill="currentColor" className={`absolute inset-0 text-lightblue scale-[0.3] translate-x-[4px] -translate-y-[4px]`}>
      <circle cx="12" cy="12" r="6" />
    </svg>
  </div>
);

const CrownIcon = ({ className }) => (
  <div className="relative">
    <BaseTooth className={className} />
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`absolute inset-0 text-yellow-400 scale-[0.55] -translate-y-[14px]`}>
      <path d="M4 14l3-7 5 4 5-4 3 7" />
    </svg>
  </div>
);

const SensitivityIcon = ({ className }) => (
  <div className="relative">
    <BaseTooth className={className} />
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`absolute inset-0 text-blue-400 scale-[0.45] translate-x-[14px] -translate-y-[4px]`}>
      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
    </svg>
  </div>
);

const SwellingIcon = ({ className }) => (
  <div className="relative">
    <BaseTooth className={className} />
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`absolute inset-0 text-red-400 scale-[1.3] opacity-40`}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" strokeDasharray="2 2" />
    </svg>
  </div>
);

const WisdomIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d={PerfectToothPath} className="origin-center rotate-12 translate-x-1" />
    <path d="M2 20s3-2 10-2 10 2 10 2" strokeWidth="2" className="text-red-400" />
  </svg>
);

const ChippedIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d={PerfectToothPath} />
    <path d="M13 3l1 5-4 3 4 2" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const UlcerIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 12c0-3 4-5 9-5s9 2 9 5-4 5-9 5-9-2-9-5z" />
    <path d="M3 12c0 1.5 4 3 9 3s9-1.5 9-3" strokeWidth="1" opacity="0.5" />
    <circle cx="8" cy="10" r="2" fill="currentColor" className="text-red-500" stroke="none" />
  </svg>
);

const JawIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 3v4c0 3 1.5 6 4 8l2 2 2-2c2.5-2 4-5 4-8V3" />
    <path d="M8 11s2 2 4 2 4-2 4-2" />
    <path d="M10 15l-1 4" strokeWidth="2" className="text-red-500" />
    <path d="M14 15l1 4" strokeWidth="2" className="text-red-500" />
  </svg>
);
// ----------------------------

const EmergencyDental = () => {
  const [selectedCondition, setSelectedCondition] = useState(null);

  const emergencyConditions = [
    {
      id: "01",
      title: "Toothache",
      icon: <ToothacheIcon className="w-8 h-8" />,
      summary: "A toothache often indicates an underlying dental issue such as a cavity or infection. Immediate action is required to prevent further damage.",
      content: "A toothache can be an incredibly discomforting and sometimes even excruciating experience. It often indicates an underlying dental issue, such as a cavity, an infection, gum disease, or a damaged tooth. The pain can range from a dull ache to sharp and throbbing sensations, making it difficult to eat, drink, or concentrate on daily tasks. When faced with a toothache, it's important to take immediate action. Start by gently rinsing your mouth with warm water to remove any debris and use dental floss to check for any trapped particles. Over-the-counter pain relievers and topical anesthetics can provide temporary relief, but these are not long-term solutions. It's essential to schedule an appointment with a dentist as soon as possible. They can diagnose the root cause of the toothache and provide appropriate treatment, whether it involves a simple filling, a root canal, or other dental procedures to alleviate the pain and restore your oral health. Ignoring a toothache can lead to more significant and costly dental issues, so seeking professional care is the best course of action for your comfort and long-term well-being."
    },
    {
      id: "02",
      title: "Lost Restorations",
      icon: <FillingIcon className="w-8 h-8" />,
      summary: "A lost filling leaves the tooth vulnerable to extreme sensitivity and pain. Avoid chewing on it and seek prompt replacement.",
      content: "A lost filling is a dental emergency that can cause significant discomfort and requires prompt attention. Fillings are used to repair cavities and strengthen damaged teeth. When a filling falls out, it leaves the affected tooth vulnerable to sensitivity, pain, and potential further damage. If you've lost a filling, you may experience discomfort when chewing or consuming hot or cold foods and beverages. It's important to act quickly to address this issue. Rinse your mouth with warm water to remove debris, and avoid using the damaged tooth as much as possible. While over-the-counter dental repair kits are available, it's still essential to see a dentist as soon as possible. They can evaluate the tooth, determine the cause of the lost filling, and recommend the best course of action, which may include replacing the filling or considering other dental solutions to restore the tooth's functionality and protect it from further damage. Ignoring a lost filling can lead to more extensive dental problems, so seeking immediate dental care is crucial for maintaining your oral health and preventing complications."
    },
    {
      id: "03",
      title: "Loose Crowns",
      icon: <CrownIcon className="w-8 h-8" />,
      summary: "If a crown becomes loose or falls out, the underlying tooth is exposed. Preserve the crown and contact us immediately.",
      content: "A lost or loose dental crown is a situation that requires urgent dental attention. Crowns are used to cover and protect damaged or weakened teeth. When a crown becomes dislodged or feels loose, it can expose the underlying tooth to potential damage and sensitivity. In the case of a lost crown, it's essential to preserve the crown if possible and schedule an immediate appointment with your dentist. If the crown is still in your possession, avoid using adhesive substances to reattach it, as this can complicate the restoration process. Your dentist will assess the situation, determine the cause of the issue, and provide the necessary treatment, which may involve re-cementing the crown or possibly creating a new one. Timely professional care is crucial to prevent further damage and maintain your oral health."
    },
    {
      id: "04",
      title: "Tooth Sensitivity",
      icon: <SensitivityIcon className="w-8 h-8" />,
      summary: "Sharp pain from hot or cold foods can indicate exposed dentin or receding gums. Professional diagnosis is necessary.",
      content: "Tooth sensitivity, characterized by sharp, often temporary pain when exposed to hot, cold, sweet, or acidic stimuli, can be uncomfortable and disruptive. It's usually caused by exposed dentin, a softer tissue beneath the tooth enamel, which can occur due to receding gums, enamel erosion, or dental issues. To alleviate sensitivity, consider using desensitizing toothpaste and maintaining gentle brushing techniques. However, persistent sensitivity should prompt a visit to your dentist, as it could indicate an underlying problem. Your dentist can identify the cause and recommend appropriate treatments to reduce discomfort and protect your dental health."
    },
    {
      id: "05",
      title: "Pain & Swelling",
      icon: <SwellingIcon className="w-8 h-8" />,
      summary: "Swelling usually signals a serious infection or abscess. This requires urgent antibiotics and dental intervention.",
      content: "Pain and swelling in the oral cavity can signal various dental or medical issues. Dental conditions like tooth infections, abscesses, or gum infections can lead to localized pain and swelling. Additionally, injuries, allergic reactions, or underlying health concerns can also cause oral discomfort and swelling. It's essential to consult a healthcare or dental professional when experiencing pain and swelling, as these symptoms often indicate an underlying problem that requires proper diagnosis and treatment. Ignoring such symptoms can lead to more severe issues, making early intervention crucial for your well-being and oral health."
    },
    {
      id: "06",
      title: "Wisdom Teeth",
      icon: <WisdomIcon className="w-8 h-8" />,
      summary: "Impacted wisdom teeth can cause severe jaw pain and push against other teeth. Evaluation for extraction may be needed.",
      content: "The eruption of wisdom teeth, or third molars, can often be a painful and uncomfortable experience. These late-blooming molars at the back of the mouth can become impacted, meaning they don't have enough space to grow properly. This can result in pain, swelling, and tenderness, especially when the wisdom teeth partially emerge or push against adjacent teeth. Painful wisdom teeth can also lead to jaw discomfort and difficulty in chewing or opening the mouth fully. If you're experiencing these symptoms, it's advisable to consult a dentist for an evaluation. They can determine if wisdom tooth extraction is necessary to relieve the pain and prevent potential dental complications. Early assessment and intervention can help you manage the discomfort associated with wisdom teeth eruption effectively."
    },
    {
      id: "07",
      title: "Chipped Teeth",
      icon: <ChippedIcon className="w-8 h-8" />,
      summary: "Accidents or grinding can chip enamel. Prompt bonding or veneers can restore the tooth before decay sets in.",
      content: "Chipped or broken teeth are common dental issues that can result from various factors, including accidents, teeth grinding, or weakened enamel. These incidents can lead to sensitivity, pain, and aesthetic concerns. If you have a chipped or broken tooth, it's essential to seek dental care promptly. Your dentist can evaluate the extent of the damage and recommend appropriate treatment, which may involve dental bonding, veneers, or dental crowns to restore both the tooth's functionality and appearance. Ignoring a chipped or broken tooth can lead to more severe complications, so addressing it early is vital for maintaining your oral health and smile."
    },
    {
      id: "08",
      title: "Mouth Ulcers",
      icon: <UlcerIcon className="w-8 h-8" />,
      summary: "Persistent sores that do not heal within two weeks need professional examination to rule out complex issues.",
      content: "Mouth sores and ulcers, often caused by various factors such as injury, stress, or underlying health conditions, can be painful and disruptive. These small, painful lesions can appear on the lips, gums, tongue, or inside the cheeks. While most mouth sores heal on their own within a week or two, persistent or painful ulcers should be examined by a dentist or healthcare provider. They can identify the cause and provide appropriate treatments or recommend over-the-counter remedies to alleviate discomfort. Maintaining good oral hygiene and minimizing irritants, like spicy or acidic foods, can also help prevent and manage these bothersome sores."
    },
    {
      id: "09",
      title: "Jaw Pain",
      icon: <JawIcon className="w-8 h-8" />,
      summary: "TMJ disorders or grinding can cause debilitating jaw pain. Custom night guards and therapy can provide relief.",
      content: "Jaw pain can be a discomforting and sometimes debilitating condition, often associated with various causes such as temporomandibular joint (TMJ) disorders, teeth grinding, or stress. It can result in difficulty chewing, speaking, and even headaches. If you're experiencing persistent or severe jaw pain, it's advisable to consult a dentist or a healthcare professional. They can assess the source of the pain and recommend suitable treatments, which may include lifestyle adjustments, physical therapy, or dental appliances like night guards. Ignoring jaw pain can lead to worsening symptoms, making early intervention vital for your comfort and overall well-being."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-lightbg dark:bg-myblack min-h-screen pt-32 pb-24 font-poppins relative overflow-hidden transition-colors duration-300">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lightblue/10 dark:bg-lightblue/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-red-400/10 dark:bg-red-400/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Area */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-1 bg-red-400 rounded-full"></div>
              <span className="text-sm font-bold tracking-widest uppercase text-red-500 dark:text-red-400">Urgent Care</span>
              <div className="w-8 h-1 bg-red-400 rounded-full"></div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-myblack dark:text-lightbg mb-6 leading-tight transition-colors">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">Emergency</span> Dental Services
            </h1>
            <p className="text-lg text-mydark dark:text-lightbg/70 leading-relaxed font-light transition-colors">
              We provide swift, gentle relief for dental emergencies. Don't suffer in silence—our expert team is equipped to restore your comfort immediately.
            </p>
          </motion.div>
        </div>

        {/* Elegant Red/Blue CTA Banner (Eye-Soothing Soft Red) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-white/5 rounded-3xl p-8 md:p-10 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-100 dark:border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] dark:shadow-none backdrop-blur-md relative overflow-hidden transition-colors"
        >
          {/* Subtle animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-lightblue/5 via-transparent to-red-400/5 dark:from-lightblue/5 dark:to-red-400/5 pointer-events-none"></div>

          <div className="flex items-center gap-6 relative z-10">
            <div className="bg-red-50 dark:bg-red-500/10 p-4 rounded-2xl flex-shrink-0 border border-red-100 dark:border-red-500/20 transition-colors">
              <Phone className="w-8 h-8 text-red-500 dark:text-red-400 animate-pulse" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-myblack dark:text-lightbg mb-2 transition-colors">In Pain Right Now?</h3>
              <p className="text-mydark dark:text-lightbg/70 font-light text-lg transition-colors">Call our clinic immediately during operating hours for priority emergency assistance.</p>
            </div>
          </div>
          <a 
            href="tel:+1234567890" 
            className="relative z-10 w-full md:w-auto text-center bg-red-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-400 transition-colors shadow-[0_0_20px_rgba(248,113,113,0.3)] hover:-translate-y-1 transform duration-300 whitespace-nowrap flex items-center justify-center gap-2 group"
          >
            Call (555) 123-4567
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Minimalist Grid of Conditions (Progressive Disclosure) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {emergencyConditions.map((condition) => (
            <motion.div
              variants={itemVariants}
              key={condition.id}
              className="bg-white dark:bg-white/[0.03] rounded-3xl p-8 border border-gray-100 dark:border-white/5 hover:border-lightblue/30 dark:hover:border-white/20 hover:shadow-xl dark:hover:shadow-none dark:hover:bg-white/[0.06] transition-all duration-300 relative group flex flex-col"
            >
              {/* Large faded number in background */}
              <div className="absolute top-4 right-6 text-6xl font-bold text-gray-50 dark:text-white/[0.03] group-hover:text-gray-100 dark:group-hover:text-white/[0.06] transition-colors pointer-events-none">
                {condition.id}
              </div>

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 rounded-xl bg-lightblue/10 text-lightblue group-hover:bg-lightblue group-hover:text-white dark:group-hover:text-myblack transition-colors">
                  {condition.icon}
                </div>
                <h3 className="text-xl font-bold text-myblack dark:text-lightbg transition-colors">
                  {condition.title}
                </h3>
              </div>
              
              <p className="text-mydark dark:text-lightbg/60 font-light leading-relaxed mb-8 flex-1 relative z-10 transition-colors">
                {condition.summary}
              </p>

              <button 
                onClick={() => setSelectedCondition(condition)}
                className="relative z-10 mt-auto inline-flex items-center gap-2 text-sm font-semibold text-lightblue hover:text-red-500 dark:hover:text-red-400 transition-colors group/btn"
              >
                Read Details
                <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Booking CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center">
            <p className="text-mydark dark:text-lightbg/70 mb-6 text-lg font-light transition-colors">
              Unsure if your situation is an emergency? It is always best to be safe.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-myblack dark:bg-lightblue text-white dark:text-myblack px-10 py-4 rounded-full font-bold hover:bg-mydark dark:hover:bg-white transition-all hover:-translate-y-1 shadow-md dark:shadow-[0_0_20px_rgba(76,156,181,0.3)] dark:hover:shadow-[0_0_30px_rgba(76,156,181,0.5)]"
            >
              Contact Us Online
            </a>
          </div>
        </motion.div>
      </div>

      {/* Modal for Full Text (Progressive Disclosure) */}
      <AnimatePresence>
        {selectedCondition && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-myblack/60 dark:bg-myblack/80 backdrop-blur-md"
              onClick={() => setSelectedCondition(null)}
            ></div>

            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white dark:bg-[#0a0f25] border border-gray-100 dark:border-white/10 rounded-3xl p-8 md:p-10 max-w-2xl w-full relative z-10 shadow-2xl overflow-y-auto max-h-[85vh] scrollbar-hide transition-colors"
            >
              <button 
                onClick={() => setSelectedCondition(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 dark:bg-white/5 text-mydark dark:text-lightbg/50 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-myblack dark:hover:text-lightbg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-lightblue/10 dark:bg-lightblue/20 text-lightblue">
                  {selectedCondition.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-myblack dark:text-lightbg transition-colors">
                  {selectedCondition.title}
                </h3>
              </div>

              <div className="w-full h-px bg-gray-100 dark:bg-white/10 mb-8 transition-colors"></div>

              <p className="text-mydark dark:text-lightbg/80 leading-loose font-light text-[15px] md:text-base transition-colors">
                {selectedCondition.content}
              </p>

              <div className="mt-10 pt-6 border-t border-gray-100 dark:border-white/10 flex justify-end transition-colors">
                <a 
                  href="tel:+1234567890" 
                  className="bg-red-500 text-white px-8 py-3 rounded-full font-bold hover:bg-red-400 transition-colors shadow-lg"
                >
                  Call Clinic
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EmergencyDental;
