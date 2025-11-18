import React, { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  BarChart3,
  MessageCircle,
  Shield,
  Play,
  Phone,
  LogIn,
} from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const menuItems = [
    {
      name: "Product",
      dropdown: true,
      items: [
        {
          name: "Analytics",
          description: "Get a better understanding of your traffic",
          icon: <BarChart3 className="size-6" />,
        },
        {
          name: "Engagement",
          description: "Speak directly to your customers",
          icon: <MessageCircle className="size-6" />,
        },
        {
          name: "Security",
          description: "Your customers' data will be safe and secure",
          icon: <Shield className="size-6" />,
        },
      ],
    },
    { name: "Features", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Company", href: "#" },
  ];

  return (
    <>
      <header className="bg-gray-900">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="Company Logo"
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="size-6" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
            {menuItems.map((item, index) => (
              <div key={index} className="relative">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      className="flex items-center gap-x-1 text-sm font-semibold text-white hover:text-gray-300"
                    >
                      {item.name}
                      <ChevronDown
                        className={`size-5 transition-transform ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {openDropdown === item.name && (
                      <div
                        className="absolute left-0 mt-3 w-screen max-w-md rounded-3xl bg-gray-800 shadow-lg ring-1 ring-white/10"
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <div className="p-4">
                          {item.items.map((dropdownItem, dropdownIndex) => (
                            <div
                              key={dropdownIndex}
                              className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-white/5"
                            >
                              <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                                {dropdownItem.icon}
                              </div>
                              <div className="flex-auto">
                                <a
                                  href="#"
                                  className="block font-semibold text-white"
                                >
                                  {dropdownItem.name}
                                  <span className="absolute inset-0" />
                                </a>
                                <p className="mt-1 text-gray-400">
                                  {dropdownItem.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-white/10 bg-gray-700/50 rounded-b-3xl">
                          <a
                            href="#"
                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-white hover:bg-gray-700/50"
                          >
                            <Play className="size-5" />
                            Watch demo
                          </a>
                          <a
                            href="#"
                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-white hover:bg-gray-700/50"
                          >
                            <Phone className="size-5" />
                            Contact sales
                          </a>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="text-sm font-semibold text-white hover:text-gray-300"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Login */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="flex items-center gap-x-1 text-sm font-semibold text-white hover:text-gray-300"
            >
              Log in <LogIn className="size-4" />
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Company Logo"
                    className="h-8 w-auto"
                  />
                </a>
                <button
                  type="button"
                  onClick={toggleMobileMenu}
                  className="-m-2.5 rounded-md p-2.5 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <X className="size-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-white/10">
                  <div className="space-y-2 py-6">
                    {menuItems.map((item, index) => (
                      <div key={index}>
                        {item.dropdown ? (
                          <div className="-mx-3">
                            <button
                              onClick={() => toggleDropdown(item.name)}
                              className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-white hover:bg-white/5"
                            >
                              {item.name}
                              <ChevronDown
                                className={`size-5 ${
                                  openDropdown === item.name ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                            {openDropdown === item.name && (
                              <div className="mt-2 space-y-2 pl-6">
                                {item.items.map(
                                  (dropdownItem, dropdownIndex) => (
                                    <a
                                      key={dropdownIndex}
                                      href="#"
                                      className="block rounded-lg py-2 text-sm font-semibold text-white hover:bg-white/5"
                                      onClick={toggleMobileMenu}
                                    >
                                      {dropdownItem.name}
                                    </a>
                                  )
                                )}
                                <a
                                  href="#"
                                  className="flex items-center gap-x-2 rounded-lg py-2 text-sm font-semibold text-white hover:bg-white/5"
                                  onClick={toggleMobileMenu}
                                >
                                  <Play className="size-4" />
                                  Watch demo
                                </a>
                                <a
                                  href="#"
                                  className="flex items-center gap-x-2 rounded-lg py-2 text-sm font-semibold text-white hover:bg-white/5"
                                  onClick={toggleMobileMenu}
                                >
                                  <Phone className="size-4" />
                                  Contact sales
                                </a>
                              </div>
                            )}
                          </div>
                        ) : (
                          <a
                            href={item.href}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
                            onClick={toggleMobileMenu}
                          >
                            {item.name}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="flex items-center gap-x-2 -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-white hover:bg-white/5"
                      onClick={toggleMobileMenu}
                    >
                      <LogIn className="size-4" />
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
