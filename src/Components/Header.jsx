import React, { useState, useEffect } from "react";
import { 
  Menu, X, ChevronDown, Phone, ChevronRight, 
  Stethoscope, AlertCircle, Sparkles, Activity, Scissors, 
  Layers, Moon, Shield, Bone, Sun, AlignJustify, Smile, 
  Wind, Syringe, HeartPulse, ShieldPlus
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";

const serviceCategories = [
  {
    category: "GENERAL DENTISTRY",
    items: [
      { name: "Dental Exam and Cleaning", href: "/services/dental-exam-and-cleaning", icon: <Stethoscope className="w-4 h-4 text-lightblue" /> },
      { name: "Emergency Dental Care", href: "/services/emergency-dental-care", icon: <AlertCircle className="w-4 h-4 text-red-500" /> },
      { name: "Tooth Coloured Restorations", href: "/services/tooth-coloured-restorations", icon: <Sparkles className="w-4 h-4 text-lightblue" /> },
      { name: "Root Canals", href: "/services/root-canals", icon: <Activity className="w-4 h-4 text-lightblue" /> },
      { name: "Extractions", href: "/services/extractions", icon: <Scissors className="w-4 h-4 text-lightblue" /> },
      { name: "Crown and Bridge Procedures", href: "/services/crown-and-bridge-procedures", icon: <Layers className="w-4 h-4 text-lightblue" /> },
      { name: "Nightguards and Sportsguards", href: "/services/nightguards-and-sportsguards", icon: <Moon className="w-4 h-4 text-lightblue" /> },
    ]
  },
  {
    category: "ORAL AND MAXILLOFACIAL SURGERY",
    items: [
      { name: "Wisdom Tooth Removal", href: "/services/wisdom-tooth-removal", icon: <ShieldPlus className="w-4 h-4 text-lightblue" /> },
      { name: "Complex Dental Extractions", href: "/services/complex-dental-extractions", icon: <Activity className="w-4 h-4 text-lightblue" /> },
      { name: "Dental Implant Placement", href: "/services/dental-implant-placement", icon: <Shield className="w-4 h-4 text-lightblue" /> },
      { name: "Bone Grafting Procedures", href: "/services/bone-grafting-procedures", icon: <Bone className="w-4 h-4 text-lightblue" /> },
      { name: "Management of Oral Pathology", href: "/services/management-of-oral-pathology", icon: <HeartPulse className="w-4 h-4 text-lightblue" /> },
      { name: "Surgical Exposure Teeth for Braces", href: "/services/surgical-exposure-teeth-for-braces", icon: <AlignJustify className="w-4 h-4 text-lightblue" /> },
    ]
  },
  {
    category: "COSMETIC DENTISTRY",
    items: [
      { name: "Veneers and Bonding", href: "/services/veneers-and-bonding", icon: <Smile className="w-4 h-4 text-lightblue" /> },
      { name: "Black Triangle & Diastema Closure", href: "/services/black-triangle-and-diastema-closure", icon: <AlignJustify className="w-4 h-4 text-lightblue" /> },
      { name: "Tooth Whitening", href: "/services/tooth-whitening", icon: <Sun className="w-4 h-4 text-lightblue" /> },
    ]
  },
  {
    category: "ORTHODONTICS",
    items: [
      { name: "Braces", href: "/services/braces", icon: <AlignJustify className="w-4 h-4 text-lightblue" /> },
      { name: "Invisalign", href: "/services/invisalign", icon: <Smile className="w-4 h-4 text-lightblue" /> },
      
    ]
  },
  {
    category: "AIRWAY FOCUSED DENTISTRY",
    items: [
      { name: "TMJ/TMD Treatment", href: "/services/tmj-tmd-treatment", icon: <Activity className="w-4 h-4 text-lightblue" /> },
      { name: "Oral Appliance Therapy for Snoring & Sleep Apnea", href: "/services/oral-appliance-therapy", icon: <Wind className="w-4 h-4 text-lightblue" /> },
      { name: "Bruxism", href: "/services/bruxism", icon: <Moon className="w-4 h-4 text-lightblue" /> },
      { name: "Myobrace", href: "/services/myobrace", icon: <Shield className="w-4 h-4 text-lightblue" /> },
    ]
  },
  {
    category: "ANESTHESIA",
    items: [
      { name: "General Anesthesia for Oral Maxillofacial Surgery Procedures", href: "/services/general-anesthesia", icon: <Syringe className="w-4 h-4 text-lightblue" /> },
      { name: "Intravenous Sedation for Oral Maxillofacial Surgery Procedures", href: "/services/intravenous-sedation", icon: <Syringe className="w-4 h-4 text-lightblue" /> },
      { name: "Nitrous Oxide Sedation", href: "/services/nitrous-oxide-sedation", icon: <Wind className="w-4 h-4 text-lightblue" /> },
      { name: "Local Anesthesia", href: "/services/local-anesthesia", icon: <Syringe className="w-4 h-4 text-lightblue" /> },
      { name: "Oral Sedation", href: "/services/oral-sedation", icon: <Syringe className="w-4 h-4 text-lightblue" /> },
    ]
  }
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].category);
  const [openMobileCategory, setOpenMobileCategory] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", dropdown: true },
    { name: "EMERGENCY SERVICES", href: "/emergency" },
    { name: "OUR TEAM", href: "/team" },
    { name: "ONLINE ENQUIRY", href: "/enquiry" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-yellow-400 text-myblack py-2.5 px-6 text-sm font-semibold flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 z-50 relative font-poppins">
        <span className="flex items-center gap-2">
          <Sparkles className="w-4 h-4" /> 
          We have Weekend Appointments available!
        </span>
        <Link 
          to="/contact" 
          className="bg-myblack text-yellow-400 px-5 py-1.5 rounded-full text-xs font-bold hover:opacity-90 hover:scale-105 transition-all shadow-md"
        >
          Book Weekend Slot
        </Link>
      </div>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 font-poppins ${
          isScrolled 
            ? "bg-lightbg dark:bg-myblack shadow-md dark:shadow-white/5" 
            : "bg-lightbg dark:bg-myblack border-b border-gray-100 dark:border-white/5"
        }`}
      >
        <nav className="container mx-auto px-6 max-w-7xl flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 z-50">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-myblack dark:text-lightbg tracking-tight transition-colors">
                Highland<span className="text-lightblue">Dental</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center h-full">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative h-full flex items-center px-4"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                onMouseLeave={() => {
                  if (item.dropdown) {
                    setOpenDropdown(null);
                    setActiveCategory(serviceCategories[0].category);
                  }
                }}
              >
                {item.dropdown ? (
                  <button 
                    className={`flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors h-full border-b-2 ${
                      openDropdown === item.name 
                        ? "border-lightblue text-lightblue" 
                        : "border-transparent text-mydark dark:text-lightbg/80 hover:text-lightblue dark:hover:text-lightblue"
                    }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="text-sm font-semibold tracking-wide text-mydark dark:text-lightbg/80 hover:text-lightblue dark:hover:text-lightblue transition-colors h-full flex items-center border-b-2 border-transparent hover:border-lightblue"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dual-Panel Mega Menu Dropdown for Services */}
                {item.dropdown && openDropdown === item.name && (
                  <div className="absolute left-0 top-full w-[850px] z-50 cursor-default bg-lightbg dark:bg-myblack shadow-2xl dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-gray-100 dark:border-white/10 flex rounded-b-xl overflow-hidden transition-colors">
                    {/* Left Panel: Categories */}
                    <div className="w-1/3 bg-gray-50 dark:bg-myblack border-r border-gray-200 dark:border-white/10 py-4 transition-colors">
                      {serviceCategories.map((cat) => (
                        <button
                          key={cat.category}
                          onMouseEnter={() => setActiveCategory(cat.category)}
                          className={`w-full text-left px-6 py-3 text-sm font-semibold transition-colors flex items-center justify-between ${
                            activeCategory === cat.category 
                              ? "text-lightblue bg-lightbg dark:bg-white/5 border-l-2 border-lightblue shadow-sm" 
                              : "text-mydark dark:text-lightbg/60 hover:bg-gray-100 dark:hover:bg-white/5 border-l-2 border-transparent"
                          }`}
                        >
                          {cat.category}
                          {activeCategory === cat.category && <ChevronRight className="w-4 h-4" />}
                        </button>
                      ))}
                    </div>

                    {/* Right Panel: Items */}
                    <div className="w-2/3 p-8 bg-lightbg dark:bg-myblack transition-colors">
                      <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                        {serviceCategories.find(c => c.category === activeCategory)?.items.map((service, idx) => (
                          <Link
                            key={idx}
                            to={service.href}
                            className="text-sm font-medium text-mydark dark:text-lightbg/80 hover:text-lightblue dark:hover:text-lightblue transition-colors tracking-wide flex items-start gap-3 group"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <div className="mt-0.5 p-1.5 rounded-lg bg-lightblue/10 group-hover:bg-lightblue/20 transition-colors">
                              {service.icon}
                            </div>
                            <span className="leading-snug">{service.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-5 z-50">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full text-mydark dark:text-lightbg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-mydark" />}
            </button>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              <span>Call Emergency </span>
            </a>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="lg:hidden flex items-center gap-4 z-50 relative">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full text-mydark dark:text-lightbg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            >
              {theme === "dark" ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-mydark" />}
            </button>
            <button
              className="p-2 text-mydark dark:text-lightbg"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-lightbg dark:bg-myblack z-40 lg:hidden transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="pt-24 px-6 pb-12 h-full overflow-y-auto">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-gray-100 dark:border-white/10 pb-2 mb-2">
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setOpenMobileCategory(openMobileCategory === 'SERVICES' ? null : 'SERVICES')}
                        className="flex items-center justify-between w-full py-3 text-sm font-semibold tracking-wide text-myblack dark:text-lightbg"
                      >
                        {item.name}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            openMobileCategory === 'SERVICES' ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openMobileCategory === 'SERVICES' && (
                        <div className="mt-2 mb-4 pl-2 flex flex-col gap-6 border-l-2 border-lightblue/30">
                          {serviceCategories.map((cat) => (
                            <div key={cat.category} className="flex flex-col">
                              <span className="text-xs font-bold text-lightblue mb-3 uppercase tracking-wider">{cat.category}</span>
                              <div className="flex flex-col gap-4 pl-2">
                                {cat.items.map((service, idx) => (
                                  <Link
                                    key={idx}
                                    to={service.href}
                                    className="text-mydark dark:text-lightbg/80 text-sm flex items-center gap-3 hover:text-lightblue dark:hover:text-lightblue transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    <div className="p-1 rounded-md bg-lightblue/10">
                                      {service.icon}
                                    </div>
                                    {service.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block py-3 text-sm font-semibold tracking-wide text-myblack dark:text-lightbg hover:text-lightblue dark:hover:text-lightblue transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href="tel:+1234567890"
                className="flex items-center justify-center gap-2 w-full py-4 border border-slate-200 dark:border-white/20 hover:border-lightblue hover:text-lightblue dark:text-lightbg transition-colors rounded-xl font-medium"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-full py-4 bg-lightblue hover:opacity-90 transition-opacity text-lightbg rounded-xl font-semibold shadow-md"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
