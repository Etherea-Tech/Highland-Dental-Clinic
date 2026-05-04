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
      { name: "Dental Exam and Cleaning", href: "/services/dental-exam-and-cleaning", icon: <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="20"
    height="20"
    viewBox="0 0 64 64"
  >
    <g fill="#4c9cb5" data-name="Outline">
      <path
        d="M18.172 10.057a11.7 11.7 0 0 0-7.287 2.631 1 1 0 1 0 1.252 1.558 9.7 9.7 0 0 1 6.035-2.189 1 1 0 0 0 0-2"
        data-original="#000000"
      ></path>
      <path
        d="M60.806 29.362a17.4 17.4 0 0 0-1.187-15.146l.971-.531a2.709 2.709 0 0 0 0-4.755l-1.221-.668a5.83 5.83 0 0 1-2.323-2.324l-.668-1.22a2.711 2.711 0 0 0-4.756 0l-.668 1.221a6 6 0 0 1-.574.843c-6.293-1.99-12.908.176-18.38 6.03C24.71 5 16.714 4.958 11.21 7.742c-4.694.353-7.755 1.9-8.842 4.5a6.82 6.82 0 0 0 .426 5.61 17.4 17.4 0 0 0 .4 11.51 35 35 0 0 0 3.7 6.728c1.73 2.654 3.364 5.162 4.036 8.158a21.3 21.3 0 0 1 .377 3.9 21 21 0 0 0 .522 4.654c1.341 5.106 4.339 7.982 8.3 7.891 6.237-.142 7.782-6.206 9.023-11.073.74-2.9 1.407-5.948 2.85-5.948s2.11 3.047 2.85 5.948c1.241 4.867 2.786 10.925 9.022 11.073 3.943.045 6.961-2.782 8.3-7.891a21 21 0 0 0 .522-4.654 21.3 21.3 0 0 1 .377-3.9 15 15 0 0 1 .875-2.638c4.057-.482 6.741-1.979 7.748-4.372.841-1.994.406-4.439-1.223-7.093.107-.263.233-.515.333-.783M52.708 6.9l.668-1.22a.712.712 0 0 1 1.248 0l.668 1.22a7.8 7.8 0 0 0 3.117 3.119l1.222.668a.711.711 0 0 1 0 1.247l-1.222.668a7.8 7.8 0 0 0-3.117 3.117l-.668 1.222a.712.712 0 0 1-1.248 0l-.668-1.22a7.8 7.8 0 0 0-3.117-3.121l-1.222-.669a.71.71 0 0 1 0-1.246l1.221-.668A7.8 7.8 0 0 0 52.708 6.9m-48.5 6.117a4.97 4.97 0 0 1 3.114-2.49 17.5 17.5 0 0 0-3.342 4.469 3.8 3.8 0 0 1 .232-1.982zm46.905 30.8a23 23 0 0 0-.425 4.264 19.3 19.3 0 0 1-.458 4.22c-.635 2.431-2.342 6.472-6.314 6.4-4.721-.111-5.947-4.919-7.132-9.567-.965-3.732-1.842-7.578-4.9-7.46-2.872.11-3.738 3.8-4.672 7.46-1.186 4.648-2.411 9.448-7.132 9.567-3.991.1-5.679-3.966-6.314-6.4a19.3 19.3 0 0 1-.458-4.22 23 23 0 0 0-.425-4.264c-.75-3.348-2.56-6.126-4.311-8.813a33 33 0 0 1-3.507-6.341 15.6 15.6 0 0 1-.822-8.343c3.929 5.5 12.569 11.546 22.949 15.917 9.007 3.732 17.4 5.738 24.534 5.552a16 16 0 0 0-.609 2.02zm1.494-4.079c-6.4.46-15.549-1.514-24.643-5.344-11.053-4.654-20-11.16-23.013-16.688a15.2 15.2 0 0 1 6.331-7.722c4.971-2.962 12.794-3.218 19.88 4.9C32.274 17.1 33.5 20.077 39 20.135a1 1 0 0 0 0-2c-3.9 0-4.91-1.828-5.8-3.656 4.592-5.056 10.04-7.226 15.28-6.133l-1.067.583a2.71 2.71 0 0 0 0 4.756l1.221.668a5.82 5.82 0 0 1 2.323 2.324l.668 1.219a2.71 2.71 0 0 0 4.756 0l.668-1.221a5.9 5.9 0 0 1 .93-1.254 15.42 15.42 0 0 1 .959 13.235A33 33 0 0 1 55.428 35a47 47 0 0 0-2.817 4.73zm7.237-3.27c-.606 1.44-2.316 2.46-4.815 2.962.631-1.116 1.34-2.213 2.071-3.334.787-1.209 1.579-2.45 2.294-3.747a5.13 5.13 0 0 1 .454 4.111z"
        data-original="#000000"
      ></path>
      <path
        d="m50.224 21.669-.684-.369a2.82 2.82 0 0 1-1.125-1.127l-.374-.683a1.96 1.96 0 0 0-1.719-1.019 1.96 1.96 0 0 0-1.722 1.013l-.374.684A2.82 2.82 0 0 1 43.1 21.3l-.683.373a1.958 1.958 0 0 0 0 3.436l.684.375a2.8 2.8 0 0 1 1.126 1.126l.374.683a1.96 1.96 0 0 0 1.718 1.02 1.96 1.96 0 0 0 1.719-1.019l.374-.685a2.83 2.83 0 0 1 1.125-1.125l.684-.374a1.958 1.958 0 0 0 0-3.436zm-1.643 2.056a4.8 4.8 0 0 0-1.921 1.92l-.3.683-.374-.682a4.8 4.8 0 0 0-1.921-1.921l-.684-.3.683-.374a4.8 4.8 0 0 0 1.922-1.921l.3-.684.374.683a4.83 4.83 0 0 0 1.921 1.921l.684.3z"
        data-original="#000000"
      ></path>
      <circle cx="9" cy="16.307" r="1" data-original="#000000"></circle>
    </g>
  </svg> },
      { name: "Emergency Dental Care", href: "/services/emergency-dental-care", icon:   <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="20"
    height="20"
    viewBox="0 0 682.667 682.667"
  >
    <defs>
      <clipPath id="a" clipPathUnits="userSpaceOnUse">
        <path fill="#f44336" d="M0 512h512V0H0Z" data-original="#000000"></path>
      </clipPath>
    </defs>
    <g
      fill="none"
      stroke="#f44336"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="20"
      clipPath="url(#a)"
      transform="matrix(1.33333 0 0 -1.33333 0 682.667)"
    >
      <path
        strokeMiterlimit="22.926"
        d="M346.574 439.13c-12.758 4.453-26.684 6.871-41.575 6.871-27.626 0-59.567-16.45-84.653-22.654M20.464 367.255c-6.803-17.124-10.465-36.175-10.465-56.252 0-38.105 15.79-72.52 41.182-97.063 33.599-32.478 32.151-42.951 35.829-76.048L94.998 86c4.866-31.607 16.159-59.998 50-59.998 14.749 0 27.739 7.596 31.516 28.337l13.094 71.883c4.263 23.408 15.964 32.529 30.391 32.529s26.127-9.122 30.39-32.529l13.094-71.883c3.778-20.74 16.767-28.337 31.516-28.337 33.842 0 45.134 28.391 50 59.998l7.988 51.892c3.678 33.097 2.23 43.57 35.829 76.048 19.264 18.62 33 42.923 38.508 70.208M285.812 406.212c-22 3.5-44.175 7.412-65.813 17.05-23.639 10.527-57.247 22.739-85.001 22.739-20.523 0-39.213-4.588-55.532-12.781"
        data-original="#000000"
      ></path>
      <path
        strokeMiterlimit="22.926"
        d="m415.4 470.805 82.962-143.696c10.508-18.285-3.081-41.123-23.719-41.106h-167.6c-22.219 0-34.914 24.903-22.775 42.849l82.856 143.511c11.062 19.099 38.727 17.736 48.276-1.558M390.782 381.006v54.996m0-100v.008"
        data-original="#000000"
      ></path>
      <path
        strokeMiterlimit="2.613"
        d="M43.86 405.698h.007"
        data-original="#000000"
      ></path>
    </g>
  </svg> },
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
      { name: "Myobrace", href: "/services/myobrace", icon: <Shield className="w-4 h-4 text-lightblue" /> }
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
  <Link to="/" className="flex flex-col items-end">
    <span className="text-2xl font-bold text-myblack dark:text-lightbg tracking-tight transition-colors">
      Highland Hills
    </span>
    <p className="text-lightblue text-base font">Dental Centre</p>
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
