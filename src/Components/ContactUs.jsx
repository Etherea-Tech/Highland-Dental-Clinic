import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    websiteType: "web-development",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Information */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-gray-600 mb-8">
              Any question or remarks? Just write us a message!
            </p>

            <div className="border-t border-gray-300 pt-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-6">
                Fill up the form and our Team will get back to you within 24
                hours.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">+0123 4567 8910</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">hello@flowbase.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">102 Street 2714 Don</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <div className="border-b border-gray-300 pb-2">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-transparent border-none focus:outline-none focus:ring-0 p-0"
                      placeholder=""
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <div className="border-b border-gray-300 pb-2">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-transparent border-none focus:outline-none focus:ring-0 p-0"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Info Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mail
                  </label>
                  <div className="border-b border-gray-300 pb-2">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-none focus:outline-none focus:ring-0 p-0 font-semibold"
                      placeholder="ersadwork@gmail.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <div className="border-b border-gray-300 pb-2">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-none focus:outline-none focus:ring-0 p-0"
                      placeholder="+90 543 779 94 64"
                    />
                  </div>
                </div>
              </div>

              {/* Website Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  What type of website do you need?
                </label>
                <div className="space-y-3">
                  {[
                    { id: "web-design", label: "Web Design" },
                    {
                      id: "web-development",
                      label: "Web Development",
                      checked: true,
                    },
                    { id: "logo-design", label: "Logo Design" },
                    { id: "other", label: "Other" },
                  ].map((option) => (
                    <div key={option.id} className="flex items-center">
                      <input
                        type="radio"
                        id={option.id}
                        name="websiteType"
                        value={option.id}
                        checked={formData.websiteType === option.id}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <label
                        htmlFor={option.id}
                        className="ml-3 text-sm text-gray-700"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <div className="border-b border-gray-300 pb-2">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full bg-transparent border-none focus:outline-none focus:ring-0 p-0 resize-none"
                    placeholder="Write your message..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
