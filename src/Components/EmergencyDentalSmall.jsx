import React from "react";
import { Clock, Phone, MapPin, Shield, Award, Users } from "lucide-react";

const EmergencyDentalSmall = () => {
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
    <section className="">
      {/* Call to Action */}
      <div className=" text-center font-poppins">
        <div className="bg-white border rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
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
    </section>
  );
};

export default EmergencyDentalSmall;
