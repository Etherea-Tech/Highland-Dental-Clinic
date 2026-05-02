import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Instagram,
  Facebook,
  Heart,
  Star,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Footer = () => {
  return (
    <footer className="bg-myblack dark:bg-myblack text-lightbg font-poppins relative overflow-hidden transition-colors duration-300 border-t border-white/5">
      {/* Decorative Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-lightblue/50 to-transparent"></div>
      
      {/* Background Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lightblue/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand & Contact Information (Col Span 4) */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-6">
                <span className="text-3xl font-bold tracking-tight text-lightbg">
                  Highland<span className="text-lightblue">Dental</span>
                </span>
              </Link>
              <p className="text-lightbg/70 leading-relaxed font-light pr-4">
                Providing comprehensive, high-quality dental care with a gentle touch. Your smile is our top priority.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 bg-white/5 rounded-lg border border-white/10 group-hover:bg-lightblue/20 transition-colors">
                  <MapPin className="w-5 h-5 text-lightblue" />
                </div>
                <p className="text-lightbg/80 leading-relaxed font-light">
                  875 Highland Rd. West. #43.<br />
                  Kitchener, ON. N2N 2Y2
                </p>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:bg-lightblue/20 transition-colors">
                  <Phone className="w-5 h-5 text-lightblue" />
                </div>
                <a
                  href="tel:+1-519-578-9826"
                  className="text-lightbg/80 hover:text-lightblue transition-colors font-medium"
                >
                  +1-519-578-9826
                </a>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:bg-lightblue/20 transition-colors">
                  <Mail className="w-5 h-5 text-lightblue" />
                </div>
                <a
                  href="mailto:highlandhillsdental@rogers.com"
                  className="text-lightbg/80 hover:text-lightblue transition-colors font-light"
                >
                  highlandhillsdental@rogers.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links (Col Span 2) */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-wider text-lightbg">Quick Links</h3>
            <ul className="space-y-4">
              {["Home", "Services", "About Us", "Emergency Care", "Contact Us"].map((link) => (
                <li key={link}>
                  <Link
                    to="#"
                    className="flex items-center gap-2 text-lightbg/70 hover:text-lightblue transition-colors group text-sm font-light"
                  >
                    <ChevronRight className="w-4 h-4 text-lightblue/50 group-hover:text-lightblue transform group-hover:translate-x-1 transition-all" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinic Hours (Col Span 3) */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-wider text-lightbg">Clinic Hours</h3>
            <ul className="space-y-3">
              {[
                { day: "Monday", hours: "9:00 am - 7:00 pm" },
                { day: "Tuesday", hours: "9:00 am - 7:00 pm" },
                { day: "Wednesday", hours: "9:00 am - 7:00 pm" },
                { day: "Thursday", hours: "9:00 am - 7:00 pm" },
                { day: "Friday", hours: "9:00 am - 3:00 pm" },
                { day: "Saturday", hours: "9:00 am - 3:00 pm" },
                { day: "Sunday", hours: "Closed", closed: true },
              ].map((schedule, index) => (
                <li key={index} className="flex justify-between items-center text-sm border-b border-white/5 pb-2 last:border-0">
                  <span className="text-lightbg/70 font-light">{schedule.day}</span>
                  <span className={`font-medium ${schedule.closed ? "text-red-400" : "text-lightbg"}`}>
                    {schedule.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Reviews (Col Span 3) */}
          <div className="lg:col-span-3 space-y-8">
            {/* Google Rating */}
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wider text-lightbg mb-6">Patient Reviews</h3>
              <a 
                href="#" 
                target="_blank" 
                rel="noreferrer"
                className="block bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 bg-white rounded-xl">
                    <FcGoogle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-lightbg block mt-1">4.9 / 5.0 Rating</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-lightblue font-medium group-hover:underline">
                  Read our Google Reviews <ChevronRight className="w-4 h-4" />
                </div>
              </a>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-lightbg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-lightblue hover:border-lightblue hover:text-myblack transition-all group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-lightbg group-hover:text-myblack" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-lightblue hover:border-lightblue hover:text-myblack transition-all group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-lightbg group-hover:text-myblack" />
                </a>
                <a
                  href="https://highlandhillsdentalcentre.com"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-lightblue hover:border-lightblue hover:text-myblack transition-all group"
                  aria-label="Website"
                >
                  <Globe className="w-5 h-5 text-lightbg group-hover:text-myblack" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col items-center justify-center gap-2 text-sm font-light text-lightbg/50 text-center">
            <p>
              © {new Date().getFullYear()} Highland Hills Dental Centre. All rights reserved.
            </p>
            <div className="flex items-center gap-1.5">
              <span>Developed by</span>
              <span className="font-medium text-lightblue">Di'arva Tech</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
