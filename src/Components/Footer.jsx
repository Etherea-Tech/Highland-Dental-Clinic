import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  Instagram,
  Facebook,
  Heart,
  Star,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  875 Highland Rd. West. #43
                  <br />
                  Kitchener, ON. N2N 2Y2
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a
                  href="tel:+1-519-578-9826"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +1-519-578-9826
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a
                  href="mailto:highlandhillsdental@rogers.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  highlandhillsdental@rogers.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-blue-400" />
                <a
                  href="https://highlandhillsdentalcentre.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  highlandhillsdentalcentre.com
                </a>
              </div>
            </div>
          </div>

          {/* Clinic Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Clinic Hours</h3>
            <div className="space-y-2">
              {[
                { day: "Monday", hours: "9:00 am - 7:00 pm" },
                { day: "Tuesday", hours: "9:00 am - 7:00 pm" },
                { day: "Wednesday", hours: "9:00 am - 7:00 pm" },
                { day: "Thursday", hours: "9:00 am - 7:00 pm" },
                { day: "Friday", hours: "9:00 am - 3:00 pm" },
                { day: "Saturday", hours: "9:00 am – 3:00 pm" },
                { day: "Sunday", hours: "Closed", closed: true },
              ].map((schedule, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-gray-300">{schedule.day}</span>
                  <span
                    className={
                      schedule.closed ? "text-red-400" : "text-gray-300"
                    }
                  >
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Google Rating */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Google Reviews</h3>
            <div className="bg-white rounded-lg p-4 text-gray-900">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < 4.9
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg font-bold">4.9</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Rated 4.9 stars on Google
              </p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                Write a Review
              </button>
            </div>
          </div>

          {/* Connect with Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors group"
              >
                <Instagram className="w-6 h-6 text-pink-400 group-hover:text-pink-300" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors group"
              >
                <Facebook className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
              </a>
              <a
                href="https://highlandhillsdentalcentre.com"
                className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors group"
              >
                <Globe className="w-6 h-6 text-green-400 group-hover:text-green-300" />
              </a>
            </div>

            {/* Quick Links */}
            <div className="pt-4">
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <div className="space-y-2">
                {["Home", "Services", "About Us", "Emergency", "Contact"].map(
                  (link) => (
                    <a
                      key={link}
                      href="#"
                      className="block text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>
                © 2024 Highland Hills Dental Centre. All rights reserved.
              </span>
            </div>
            <div className="flex items-center space-x-1 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>for healthy smiles</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
