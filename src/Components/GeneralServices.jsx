import React, { useState } from "react";
import { Shield, Clock, ArrowRight } from "lucide-react";

const GeneralServices = () => {
  const [activeService, setActiveService] = useState(null);

  const services = {
    "General Dentistry": {
      items: [
        "Dental Exam and Cleaning",
        "Emergency Dental Care",
        "Tooth Coloured Restorations",
        "Root Canals",
        "Extractions",
        "Crown and Bridge procedures",
        "Nightguards/Sportsguards",
      ],
      description:
        "Comprehensive dental care to maintain your oral health and beautiful smile.",
      icon: <Shield className="w-6 h-6" />,
    },
    "Cosmetic Dentistry": {
      items: ["Teeth Whitening", "Veneers", "Dental Bonding", "Smile Makeover"],
      description: "Enhance your smile with our cosmetic dental procedures.",
      icon: <Shield className="w-6 h-6" />,
    },
    Orthodontics: {
      items: ["Braces", "Invisalign", "Retainers", "Space Maintenance"],
      description:
        "Straighten your teeth and correct your bite for optimal dental health.",
      icon: <Shield className="w-6 h-6" />,
    },
  };

  const serviceDetails = {
    "Dental Exam and Cleaning": {
      description:
        "Regular dental exams and professional cleanings are essential for maintaining good oral health. Our comprehensive exams include oral cancer screening, gum disease evaluation, and digital X-rays when necessary.",
      duration: "30-60 minutes",
      benefits: [
        "Plaque removal",
        "Cavity prevention",
        "Fresh breath",
        "Early problem detection",
      ],
    },
    "Emergency Dental Care": {
      description:
        "Immediate care for dental emergencies including severe toothaches, broken teeth, knocked-out teeth, and other urgent dental issues. We provide prompt relief and treatment.",
      duration: "Varies by emergency",
      benefits: [
        "Pain relief",
        "Quick response",
        "Expert care",
        "24/7 availability",
      ],
    },
    "Tooth Coloured Restorations": {
      description:
        "Natural-looking composite fillings that match your tooth color perfectly. We use tooth-colored materials to restore decayed or damaged teeth while maintaining aesthetic appeal.",
      duration: "45-90 minutes",
      benefits: [
        "Aesthetic appeal",
        "Durable",
        "Tooth preservation",
        "Minimal invasion",
      ],
    },
    "Root Canals": {
      description:
        "Root canal therapy saves infected or damaged teeth by removing the infected pulp, cleaning the canal, and sealing it. This procedure relieves pain and preserves your natural tooth.",
      duration: "60-90 minutes",
      benefits: [
        "Pain elimination",
        "Tooth preservation",
        "Natural function",
        "Long-term solution",
      ],
    },
    Extractions: {
      description:
        "When a tooth cannot be saved, our gentle extraction procedures ensure minimal discomfort. We offer both simple and surgical extractions with proper aftercare guidance.",
      duration: "30-60 minutes",
      benefits: [
        "Pain management",
        "Quick procedure",
        "Expert technique",
        "Comfortable recovery",
      ],
    },
    "Crown and Bridge procedures": {
      description:
        "Restore damaged teeth or replace missing teeth with custom-made crowns and bridges. We use high-quality materials that look and function like natural teeth.",
      duration: "2 visits required",
      benefits: [
        "Natural appearance",
        "Durability",
        "Improved function",
        "Long-lasting",
      ],
    },
    "Nightguards/Sportsguards": {
      description:
        "Custom-fitted mouthguards to protect your teeth from grinding during sleep or from impact during sports activities. Made from comfortable, durable materials for optimal protection.",
      duration: "Custom fabrication",
      benefits: [
        "Teeth protection",
        "Comfortable fit",
        "Prevents damage",
        "Custom design",
      ],
    },
  };

  const handleServiceClick = (serviceName) => {
    setActiveService(serviceName === activeService ? null : serviceName);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Dental Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive dental care tailored to your needs. Click on any
            service to learn more.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Services List - Left Side */}
          <div className="lg:col-span-1 space-y-4">
            {Object.entries(services).map(([serviceName, serviceData]) => (
              <div key={serviceName} className="space-y-2">
                <button
                  onClick={() => handleServiceClick(serviceName)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                    activeService === serviceName
                      ? "border-blue-500 bg-blue-50 shadow-md"
                      : "border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          activeService === serviceName
                            ? "bg-blue-100"
                            : "bg-gray-100"
                        }`}
                      >
                        <div
                          className={
                            activeService === serviceName
                              ? "text-blue-600"
                              : "text-gray-600"
                          }
                        >
                          {serviceData.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {serviceName}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {serviceData.description}
                        </p>
                      </div>
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        activeService === serviceName
                          ? "rotate-90 text-blue-600"
                          : "text-gray-400"
                      }`}
                    />
                  </div>
                </button>

                {/* Sub-services List */}
                {activeService === serviceName && (
                  <div className="ml-4 space-y-2 animate-fadeIn">
                    {serviceData.items.map((subService, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveService(subService)}
                        className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-sm font-medium text-gray-700">
                            {subService}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Service Details - Right Side */}
          <div className="lg:col-span-3">
            {activeService && serviceDetails[activeService] ? (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 animate-fadeIn">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {activeService}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">
                        {serviceDetails[activeService].duration}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {serviceDetails[activeService].description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {serviceDetails[activeService].benefits.map(
                        (benefit, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      What to Expect
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Comprehensive consultation</li>
                      <li>• Personalized treatment plan</li>
                      <li>• Modern equipment and techniques</li>
                      <li>• Comfortable experience</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    Book Appointment
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300 p-12 text-center">
                <Shield className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Select a Service
                </h3>
                <p className="text-gray-500">
                  Click on any service from the list to view detailed
                  information
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default GeneralServices;
