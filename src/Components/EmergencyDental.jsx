import React from "react";
import { Clock, Phone, MapPin, Shield, Award, Users } from "lucide-react";

const EmergencyDental = () => {
  const emergencyServices = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Emergency Care",
      description:
        "Immediate attention for dental emergencies anytime, day or night",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Same-Day Appointments",
      description: "Get seen quickly with our priority emergency scheduling",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Pain Relief",
      description: "Quick and effective pain management for immediate comfort",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Expert Dentists",
      description:
        "Experienced dental professionals specializing in emergency care",
    },
  ];

  const successStories = [
    {
      number: "15min",
      description: "Average wait time for emergency patients",
    },
    {
      number: "98%",
      description: "Of emergencies treated same day",
    },
    {
      number: "24/7",
      description: "Emergency hotline availability",
    },
    {
      number: "5000+",
      description: "Emergency cases handled",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Emergency Dental Care <br />
                <span className="text-blue-600">When You Need It Most</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Experienced dentists ready to relieve your pain and save your
                smile
              </p>
            </div>

            {/* Emergency Contact Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Emergency Hotline
                  </h3>
                  <p className="text-2xl font-bold text-red-600">
                    (555) 123-EMER
                  </p>
                  <p className="text-gray-600 text-sm">
                    Available 24/7 • Immediate Response
                  </p>
                </div>
              </div>
            </div>

            {/* Success Metrics */}
            <div className="grid grid-cols-2 gap-4">
              {successStories.map((story, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {story.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {story.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Our Emergency Services */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Our Emergency Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {emergencyServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <div className="text-blue-600">{service.icon}</div>
                      </div>
                      <h3 className="font-semibold text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Common Emergencies */}
            <div className="bg-blue-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">
                Common Dental Emergencies We Treat
              </h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Severe Toothache</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Knocked-Out Tooth</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Broken Crown</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Abscess</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Bleeding Gums</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Lost Filling</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don't Wait - Get Immediate Help Now
            </h3>
            <p className="text-gray-600 mb-6">
              Dental emergencies can't wait. Our team is standing by to provide
              immediate care and relief.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Emergency Line
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Book Urgent Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyDental;
