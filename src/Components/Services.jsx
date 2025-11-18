import React from "react";
import {
  Shield,
  Zap,
  Scissors,
  Crown,
  Moon,
  Brush,
  Stethoscope,
  Sparkles,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Dental Exam and Cleaning",
      description:
        "Our cleanings will help you avoid plaque and tartar build-up on your teeth, which could lead to gum disease, tooth loss and other complications!",
      icon: <Stethoscope className="w-8 h-8" />,
      features: [
        "Professional cleaning",
        "Comprehensive examination",
        "Plaque removal",
        "Preventive care",
      ],
    },
    {
      id: 2,
      title: "Tooth Colored Restoration",
      description:
        "Natural-looking fillings that blend seamlessly with your teeth while providing durable protection against decay.",
      icon: <Brush className="w-8 h-8" />,
      features: [
        "Aesthetic composite",
        "Bonding technology",
        "Color matching",
        "Minimal invasion",
      ],
    },
    {
      id: 3,
      title: "Root Canals",
      description:
        "Pain-free root canal treatments to save infected teeth and relieve discomfort while preserving your natural smile.",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Pain management",
        "Advanced equipment",
        "Single visit options",
        "High success rate",
      ],
    },
    {
      id: 4,
      title: "Extractions",
      description:
        "Gentle tooth extraction procedures performed with care and precision to maintain your oral health.",
      icon: <Scissors className="w-8 h-8" />,
      features: [
        "Minimal discomfort",
        "Quick recovery",
        "Wisdom teeth",
        "Surgical extractions",
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            General Dentistry
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our cleanings will help you avoid plaque and tartar build-up on your
            teeth, which could lead to gum disease, tooth loss and other
            complications!
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-4px] group"
            >
              {/* Service Icon */}
              <div className="mb-4 flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                <div className="text-blue-600">{service.icon}</div>
              </div>

              {/* Service Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-xs text-gray-500"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
