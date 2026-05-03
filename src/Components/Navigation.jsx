import { useState } from 'react';
import { Menu, X, ChevronDown, ChevronRight, Workflow, ChevronLeft, Phone, Clock, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import TopInfoBar from './TopInfoBar';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveCategory(null);
  };

  const toggleDropdown = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
      setActiveCategory(null);
    } else {
      setOpenDropdown(dropdown);
      setActiveCategory(null);
    }
  };

  const handleCategoryHover = (categoryName) => {
    setActiveCategory(categoryName);
  };

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(activeCategory === categoryName ? null : categoryName);
  };

  const menuItems = [
    { name: 'HOME', href: '#' },
    { name: 'ABOUT US', href: '#' },
    { 
      name: 'SERVICES', 
      dropdown: true,
      submenu: [
        {
          name: 'General Dentistry',
          items: [
            { name: 'Dental Exam and Cleaning', href: '/services/dental-exam-and-cleaning' },
            { name: 'Emergency Dental Care', href: '/services/emergency-dental-care' },
            { name: 'Tooth Coloured Restorations', href: '/services/tooth-coloured-restorations' },
            { name: 'Root Canals', href: '/services/root-canals' },
            { name: 'Extractions', href: '/services/extractions' },
            { name: 'Crown and Bridge procedures', href: '/services/crown-and-bridge-procedures' },
            { name: 'Nightguards/Sportsguards', href: '/services/nightguards-and-sportsguards' }
          ]
        },
        {
          name: 'Oral and Maxillofacial Surgery',
          items: [
            { name: 'Wisdom Tooth Removal', href: '/services/wisdom-tooth-removal' },
            { name: 'Complex Dental Extractions', href: '/services/complex-dental-extractions' },
            { name: 'Dental Implant Placement', href: '/services/dental-implant-placement' },
            { name: 'Bone Grafting Procedures', href: '/services/bone-grafting-procedures' },
            { name: 'Management of Oral Pathology', href: '/services/management-of-oral-pathology' },
            { name: 'Surgical Exposure of Teeth', href: '/services/surgical-exposure-of-teeth' }
          ]
        },
        {
          name: 'Cosmetic Dentistry',
          items: [
            { name: 'Veneers & Bonding', href: '/services/veneers-and-bonding' },
            { name: 'Black Triangle & Diastema Closure', href: '/services/black-triangle-and-diastema-closure' },
            { name: 'Tooth Whitening', href: '/services/tooth-whitening' }
          ]
        },
        {
          name: 'Orthodontics',
          items: [
            { name: 'Braces', href: '/services/braces' },
            { name: 'Invisalign', href: '/services/invisalign' }
          ]
        },
        {
          name: 'Airway Focused Dentistry',
          items: [
            { name: 'TMJ/TMD Treatment', href: '/services/tmj-tmd-treatment' },
            { name: 'Oral Appliance Therapy for Snoring & Sleep Apnea', href: '/services/oral-appliance-therapy' },
            { name: 'Bruxism', href: '/services/bruxism' }
          ]
        },
        {
          name: 'Anesthesia',
          items: [
            'General Anesthesia for Oral and Maxillofacial Surgery Procedures only',
            'Intravenous Sedation for Oral and Maxillofacial Surgery Procedures only',
            'Nitrous Oxide Sedation',
            'Local Anesthesia',
            'Oral Sedation'
          ]
        }
      ]
    },
    { name: 'EMERGENCY SERVICES', href: '#' },
    { name: 'OUR TEAM', href: '/team' },
    { name: 'ONLINE ENQUIRY', href: '#' },
    { name: 'CONTACT US', href: '#' }
  ];

  return (
    <>
      {/* Top Info Bar */}
<TopInfoBar/>

      {/* Main Navigation */}
      <nav className="bg-[#f5f5f5] text-[#0a0035] shadow-md sticky top-8 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center space-x-2">
              <Workflow className="h-8 w-8 text-[#0a0035]" />
              <span className="text-xl font-bold">Dental Clinic</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.dropdown ? (
                    <button 
                      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#e0e0e0] transition-colors flex items-center"
                      onClick={() => toggleDropdown(item.name)}
                      onMouseEnter={() => toggleDropdown(item.name)}
                    >
                      {item.name}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link 
                      to={item.href}
                      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#e0e0e0] transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Main Dropdown Menu */}
                  {item.dropdown && openDropdown === item.name && (
                    <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                      <div className="py-2">
                        {item.submenu.map((category, catIndex) => (
                          <button
                            key={catIndex}
                            onMouseEnter={() => handleCategoryHover(category.name)}
                            onClick={() => handleCategoryClick(category.name)}
                            className={`w-full text-left px-4 py-3 text-sm font-medium flex items-center justify-between hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0 ${
                              activeCategory === category.name ? 'bg-blue-50 text-[#0a0035]' : 'text-gray-700'
                            }`}
                          >
                            <div className="flex items-center">
                              {category.name}
                            </div>
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Right Side Submenu */}
                  {item.dropdown && openDropdown === item.name && activeCategory && (
                    <div className="absolute left-64 top-0 mt-2 w-80 bg-white rounded-md shadow-lg z-20 border border-gray-200">
                      <div className="p-4">
                        {/* Back button for mobile context */}
                        <button
                          onClick={() => setActiveCategory(null)}
                          className="md:hidden flex items-center text-sm text-gray-600 hover:text-[#0a0035] mb-3"
                        >
                          <ChevronLeft className="h-4 w-4 mr-1" />
                          Back to Services
                        </button>
                        
                        <h3 className="text-lg font-semibold text-[#0a0035] mb-3 border-b pb-2">
                          {activeCategory}
                        </h3>
                        
                        <div className="space-y-2">
                          {item.submenu
                            .find(cat => cat.name === activeCategory)
                            ?.items.map((service, serviceIndex) => (
                              <Link
                                key={serviceIndex}
                                to={service.href || "#"}
                                className="block px-3 py-2 text-sm hover:bg-blue-50 rounded transition-colors border-l-2 border-transparent hover:border-[#0a0035]"
                              >
                                {service.name || service}
                              </Link>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-[#0a0035] hover:bg-[#e0e0e0] focus:outline-none transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#f5f5f5] border-t border-gray-200 absolute top-16 left-0 right-0 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-[calc(100vh-8rem)] overflow-y-auto">
              {menuItems.map((item, index) => (
                <div key={index}>
                  {item.dropdown ? (
                    <div className="mb-2">
                      <button
                        className="w-full text-left px-3 py-3 rounded-md text-base font-medium hover:bg-[#e0e0e0] flex justify-between items-center transition-colors"
                        onClick={() => toggleDropdown(item.name)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown 
                          className={`h-4 w-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} 
                        />
                      </button>
                      
                      {openDropdown === item.name && (
                        <div className="ml-4 mt-1 space-y-1 bg-white rounded-md p-2 shadow-inner">
                          {!activeCategory ? (
                            // Show categories list
                            item.submenu.map((category, catIndex) => (
                              <button
                                key={catIndex}
                                onClick={() => handleCategoryClick(category.name)}
                                className="w-full text-left px-3 py-3 text-base font-medium flex items-center justify-between hover:bg-blue-50 rounded transition-colors"
                              >
                                <span>{category.name}</span>
                                <ChevronRight className="h-4 w-4" />
                              </button>
                            ))
                          ) : (
                            // Show services for active category
                            <div>
                              <button
                                onClick={() => setActiveCategory(null)}
                                className="flex items-center text-sm text-gray-600 hover:text-[#0a0035] mb-3 px-3 py-2"
                              >
                                <ChevronLeft className="h-4 w-4 mr-1" />
                                Back to Services
                              </button>
                              
                              <h3 className="text-lg font-semibold text-[#0a0035] mb-3 px-3 border-b pb-2">
                                {activeCategory}
                              </h3>
                              
                              <div className="space-y-1">
                                {item.submenu
                                  .find(cat => cat.name === activeCategory)
                                  ?.items.map((service, serviceIndex) => (
                                    <Link
                                      key={serviceIndex}
                                      to={service.href || "#"}
                                      className="block px-6 py-2 text-sm hover:bg-blue-50 rounded transition-colors"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {service.name || service}
                                    </Link>
                                  ))
                                }
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block px-3 py-3 rounded-md text-base font-medium hover:bg-[#e0e0e0] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;