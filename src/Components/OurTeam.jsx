import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Award, BookOpen, Users, GraduationCap } from "lucide-react";

const OurTeam = () => {
  const doctors = [
    {
      name: "Dr. Paridhi Bassi, BDS DMD",
      role: "Lead Dentist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600&h=600",
      bio: "Dr. Paridhi Bassi received her Doctor of Dental Medicine (DMD) degree from Temple University, Philadelphia (2016) and has a Bachelor of Dental Surgery (BDS) degree from India. Dr. Bassi practiced General Dentistry for 5 years in India and migrated to Canada in 2012. After pursuing further education in the United States, Dr. Bassi has been practicing General Dentistry in North America since 2016. She is passionate about dentistry and believes in creating beautiful and healthy smiles. Besides General Dentistry, she is developing her expertise in Airway Focused Dentistry for kids and adults. Dr. Bassi is a family woman who loves spending time with her two sons and their activities and enjoys cooking and music.",
      education: [
        "Airway and Health Solutions Mini-Residency - Pediatrics (2023)",
        "Mini-Residency Sleep Related Breathing Disorders and Craniofacial Pain (2021)",
        "Doctor of Dental Medicine, Maurice H. Kornberg School of Dentistry, Temple University, Philadelphia (2016)",
        "Bachelor of Dental Surgery, BFUHS, India (2007)"
      ],
      memberships: [
        "Royal College of Dental Surgeons of Ontario",
        "Ontario Dental Association - Waterloo Wellington Dental Society",
        "Canadian Dental Association",
        "American Academy of Craniofacial Pain"
      ]
    }
  ];

  const staff = [
    {
      name: "Vesna",
      role: "Registered Dental Hygienist",
      image: "https://images.unsplash.com/photo-1594824436998-dd40e4f69188?auto=format&fit=crop&q=80&w=400&h=400",
    },
    {
      name: "Kimberley",
      role: "Registered Dental Hygienist",
      image: "https://images.unsplash.com/photo-1580281658223-9b93f18ea0fa?auto=format&fit=crop&q=80&w=400&h=400",
    },
    {
      name: "Sara",
      role: "Registered Dental Hygienist",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400&h=400",
    },
    {
      name: "Kate Pantea",
      role: "Office Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
    }
  ];

  return (
    <div className="bg-lightbg dark:bg-myblack min-h-screen pt-32 pb-24 font-poppins transition-colors duration-300 relative overflow-hidden">
      
      {/* Minimal Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lightblue/5 dark:bg-lightblue/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[150px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Back Link */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-mydark dark:text-lightbg/60 hover:text-lightblue dark:hover:text-lightblue font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-lightblue/10 text-lightblue mb-6"
          >
            <Users className="w-8 h-8" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-myblack dark:text-lightbg mb-6 leading-tight transition-colors"
          >
            Meet Our Team
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-mydark dark:text-lightbg/70 font-light leading-relaxed transition-colors"
          >
            Our highly skilled professionals are committed to providing you with the most comfortable, advanced, and personalized dental care possible.
          </motion.p>
        </div>

        {/* Doctors Section */}
        <div className="mb-24 space-y-12">
          {doctors.map((doc, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col lg:flex-row"
            >
              {/* Image Side */}
              <div className="lg:w-2/5 h-[400px] lg:h-auto relative overflow-hidden bg-gray-100 dark:bg-myblack">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden flex flex-col justify-end p-8">
                  <h2 className="text-3xl font-bold text-white mb-2">{doc.name}</h2>
                  <p className="text-lightblue font-medium text-lg">{doc.role}</p>
                </div>
              </div>
              
              {/* Content Side */}
              <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                <div className="hidden lg:block mb-8">
                  <h2 className="text-4xl font-bold text-myblack dark:text-lightbg mb-2 transition-colors">{doc.name}</h2>
                  <p className="text-lightblue font-semibold text-xl">{doc.role}</p>
                </div>
                
                <p className="text-mydark dark:text-lightbg/70 font-light leading-relaxed text-lg mb-8 transition-colors">
                  {doc.bio}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Education */}
                  <div>
                    <h3 className="flex items-center gap-2 text-xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">
                      <GraduationCap className="w-6 h-6 text-lightblue" />
                      Education & Certifications
                    </h3>
                    <ul className="space-y-3">
                      {doc.education.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-lightblue mt-2.5 shrink-0"></div>
                          <span className="text-mydark dark:text-lightbg/70 font-light leading-relaxed text-sm transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Memberships */}
                  <div>
                    <h3 className="flex items-center gap-2 text-xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">
                      <Award className="w-6 h-6 text-lightblue" />
                      Member Of
                    </h3>
                    <ul className="space-y-3">
                      {doc.memberships.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-lightblue mt-2.5 shrink-0"></div>
                          <span className="text-mydark dark:text-lightbg/70 font-light leading-relaxed text-sm transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Staff Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-myblack dark:text-lightbg mb-4 transition-colors">Our Staff & Hygienists</h2>
            <p className="text-mydark dark:text-lightbg/70 max-w-2xl mx-auto font-light text-lg transition-colors">
              The friendly faces dedicated to making your visit as smooth and comfortable as possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {staff.map((member, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 rounded-3xl overflow-hidden hover:shadow-xl dark:hover:bg-white/[0.05] transition-all duration-300 group"
              >
                <div className="h-64 overflow-hidden bg-gray-100 dark:bg-myblack relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-myblack dark:text-lightbg mb-1 transition-colors">{member.name}</h3>
                  <p className="text-lightblue font-medium text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default OurTeam;
