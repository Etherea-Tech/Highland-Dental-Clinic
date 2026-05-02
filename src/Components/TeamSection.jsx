import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    id: 1,
    name: "Dr. Paridhi Bassi",
    role: "Lead Dentist, BDS DMD",
    specialty: "General & Airway Focused Dentistry",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300",
    bio: "Dr. Bassi received her DMD from Temple University. She is passionate about creating beautiful smiles and developing expertise in Airway Focused Dentistry.",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    role: "Orthodontist",
    specialty: "Invisalign & Traditional Braces",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300",
    bio: "Dr. Chen is passionate about advanced orthodontic treatments and helping patients achieve perfect alignment.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Registered Dental Hygienist",
    specialty: "Preventative Care",
    image: "https://images.unsplash.com/photo-1594824436998-dd40e4f69188?auto=format&fit=crop&q=80&w=300&h=300",
    bio: "Emily is known for her extremely gentle cleanings and educating patients on optimal home care routines.",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Clinic Coordinator",
    specialty: "Patient Experience",
    image: "https://images.unsplash.com/photo-1537368910025-7028dd906d3f?auto=format&fit=crop&q=80&w=300&h=300",
    bio: "David ensures every patient visit is smooth, comfortable, and seamlessly organized from check-in to check-out.",
  },
];

const TeamSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-white dark:bg-myblack transition-colors duration-300 font-poppins relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-lightblue/5 dark:bg-lightblue/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-1 bg-lightblue rounded-full"></div>
              <span className="text-sm font-bold tracking-widest uppercase text-lightblue">Meet The Experts</span>
              <div className="w-8 h-1 bg-lightblue rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-myblack dark:text-lightbg mb-6 transition-colors">
              Our Dedicated <span className="text-transparent bg-clip-text bg-gradient-to-r from-lightblue to-blue-400">Team</span>
            </h2>
            <p className="text-mydark dark:text-lightbg/80 text-lg leading-relaxed transition-colors">
              Our highly skilled professionals are committed to providing you with the most comfortable, advanced, and personalized dental care possible.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              variants={itemVariants}
              key={member.id}
              className="group bg-lightbg dark:bg-white/5 rounded-3xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 dark:border-white/10 hover:shadow-2xl dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden bg-gray-100 dark:bg-myblack">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                {/* Hover overlay with social/contact icons */}
                <div className="absolute inset-0 bg-myblack/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-lightblue text-myblack flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-lg">
                    <Mail className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-lightblue text-myblack flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-lg">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-xs font-bold text-lightblue uppercase tracking-wider mb-2">
                  {member.specialty}
                </span>
                <h3 className="text-xl font-bold text-myblack dark:text-lightbg mb-1 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-mydark dark:text-lightbg/60 mb-4 transition-colors">
                  {member.role}
                </p>
                <p className="text-mydark dark:text-lightbg/70 text-sm leading-relaxed mt-auto font-light transition-colors">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View Full Team Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-16"
        >
          <Link to="/team" className="font-poppins font-semibold text-lightbg bg-myblack dark:bg-lightblue dark:text-myblack px-10 py-4 rounded-full hover:bg-mydark dark:hover:bg-blue-300 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-105">
            Meet The Full Team
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
