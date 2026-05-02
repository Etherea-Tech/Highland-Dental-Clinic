import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "general",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add success toast/handling here later
  };

  return (
    <section className="py-24 bg-lightbg dark:bg-[#06001f] transition-colors duration-300 font-poppins relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lightblue/5 dark:bg-lightblue/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-1 bg-lightblue rounded-full"></div>
              <span className="text-sm font-bold tracking-widest uppercase text-lightblue">Get In Touch</span>
              <div className="w-8 h-1 bg-lightblue rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-myblack dark:text-lightbg mb-6 transition-colors">
              Let's Keep You <span className="text-transparent bg-clip-text bg-gradient-to-r from-lightblue to-blue-400">Smiling</span>
            </h2>
            <p className="text-mydark dark:text-lightbg/80 text-lg">
              Whether you need to book an appointment, have a dental emergency, or just want to ask a question, our dedicated team is here to help you.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-0 bg-white dark:bg-white/5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] border border-gray-100 dark:border-white/10 overflow-hidden backdrop-blur-sm transition-all">
          
          {/* Left Side - Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-myblack text-lightbg p-10 lg:p-12 relative overflow-hidden flex flex-col justify-between"
          >
            {/* Background elements */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-lightblue rounded-full mix-blend-screen filter blur-[80px] opacity-20 pointer-events-none translate-x-1/3 translate-y-1/3"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-2">Contact Info</h3>
              <p className="text-lightbg/70 mb-12 font-light">
                Reach out to us directly or drop by the clinic. We're always happy to welcome new patients.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-lightblue/20 group-hover:border-lightblue/30 transition-colors">
                    <Phone className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-sm text-lightbg/60 uppercase tracking-wider font-semibold mb-1">Call Us Directly</h4>
                    <p className="text-lg font-medium">(555) 123-4567</p>
                    <p className="text-sm text-lightbg/50 mt-1">Available 24/7 for Emergencies</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-lightblue/20 group-hover:border-lightblue/30 transition-colors">
                    <Mail className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-sm text-lightbg/60 uppercase tracking-wider font-semibold mb-1">Email Us</h4>
                    <p className="text-lg font-medium">hello@highlanddental.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-lightblue/20 group-hover:border-lightblue/30 transition-colors">
                    <MapPin className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-sm text-lightbg/60 uppercase tracking-wider font-semibold mb-1">Visit Clinic</h4>
                    <p className="text-lg font-medium leading-relaxed">
                      123 Highland Blvd, Suite 100<br />
                      Toronto, ON M1X 2Y3
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-16 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-lightblue" />
                <h4 className="font-semibold text-lg">Clinic Hours</h4>
              </div>
              <ul className="space-y-2 text-sm text-lightbg/70">
                <li className="flex justify-between"><span>Monday - Friday</span> <span>8:00 AM - 7:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday</span> <span>9:00 AM - 4:00 PM</span></li>
                <li className="flex justify-between text-yellow-400 font-medium"><span>Sunday</span> <span>Emergencies Only</span></li>
              </ul>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3 p-10 lg:p-14"
          >
            <h3 className="text-2xl font-bold text-myblack dark:text-lightbg mb-8 transition-colors">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="block w-full px-0 py-3 text-mydark dark:text-lightbg bg-transparent border-0 border-b-2 border-gray-200 dark:border-white/10 appearance-none focus:outline-none focus:ring-0 focus:border-lightblue peer transition-colors"
                    placeholder=" "
                    required
                  />
                  <label 
                    htmlFor="firstName" 
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lightblue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-medium"
                  >
                    First Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="block w-full px-0 py-3 text-mydark dark:text-lightbg bg-transparent border-0 border-b-2 border-gray-200 dark:border-white/10 appearance-none focus:outline-none focus:ring-0 focus:border-lightblue peer transition-colors"
                    placeholder=" "
                    required
                  />
                  <label 
                    htmlFor="lastName" 
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lightblue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-medium"
                  >
                    Last Name
                  </label>
                </div>
              </div>

              {/* Contact Info Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full px-0 py-3 text-mydark dark:text-lightbg bg-transparent border-0 border-b-2 border-gray-200 dark:border-white/10 appearance-none focus:outline-none focus:ring-0 focus:border-lightblue peer transition-colors"
                    placeholder=" "
                    required
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lightblue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-medium"
                  >
                    Email Address
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full px-0 py-3 text-mydark dark:text-lightbg bg-transparent border-0 border-b-2 border-gray-200 dark:border-white/10 appearance-none focus:outline-none focus:ring-0 focus:border-lightblue peer transition-colors"
                    placeholder=" "
                    required
                  />
                  <label 
                    htmlFor="phone" 
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lightblue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-medium"
                  >
                    Phone Number
                  </label>
                </div>
              </div>

              {/* Inquiry Type */}
              <div className="pt-4">
                <label className="block text-sm font-semibold text-myblack dark:text-lightbg mb-5 transition-colors">
                  Reason for Inquiry
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { id: "general", label: "General Checkup" },
                    { id: "emergency", label: "Dental Emergency" },
                    { id: "cosmetic", label: "Cosmetic / Braces" },
                    { id: "other", label: "Other Inquiry" },
                  ].map((option) => (
                    <label 
                      key={option.id} 
                      className={`flex items-center justify-center p-3 rounded-xl border text-sm font-medium cursor-pointer transition-all ${
                        formData.inquiryType === option.id 
                          ? "bg-lightblue/10 border-lightblue text-lightblue dark:bg-lightblue/20" 
                          : "border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:border-lightblue/50 hover:bg-gray-50 dark:hover:bg-white/5"
                      }`}
                    >
                      <input
                        type="radio"
                        name="inquiryType"
                        value={option.id}
                        checked={formData.inquiryType === option.id}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="relative pt-4">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="block w-full px-0 py-3 text-mydark dark:text-lightbg bg-transparent border-0 border-b-2 border-gray-200 dark:border-white/10 appearance-none focus:outline-none focus:ring-0 focus:border-lightblue peer resize-none transition-colors"
                  placeholder=" "
                  required
                />
                <label 
                  htmlFor="message" 
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-7 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lightblue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-medium"
                >
                  How can we help you today?
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="group flex items-center justify-center gap-2 w-full sm:w-auto bg-myblack dark:bg-lightblue text-lightbg dark:text-myblack py-4 px-10 rounded-full font-bold text-lg hover:bg-mydark dark:hover:bg-blue-300 transition-all shadow-md hover:shadow-xl hover:-translate-y-1"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
