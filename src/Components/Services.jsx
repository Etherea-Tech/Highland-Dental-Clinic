import React from "react";

import Generaldentistry from "../assets/icons/general_dentistry.png";
import Dentalexam from "../assets/icons/dental_exam.png";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "General Dentistry",
      description:
        "Our cleanings will help you avoid plaque and tartar build up on your teeth, which could lead to gum disease, tooth loss and other complications!",
      icon: Generaldentistry,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-mydark font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold">
            Our Services
          </h2>

          {/* Intro paragraph */}
          <p className="font-poppins w-full md:w-4/5 lg:w-2/3 xl:w-1/2 mt-4 md:mt-6 text-darkblack text-sm sm:text-base md:text-lg leading-relaxed text-myblack">
            At{" "}
            <span className="text-mydark font-semibold text-base sm:text-lg md:text-xl">
              Highland Dental Clinics
            </span>
            , are equipped with the latest dental technology to provide optimum
            care for comfort and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-poppins">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:cursor-pointer"
            >
              {/* Service Header */}
              <div className="flex gap-3 items-center">
                <div className="bg-white w-14 h-14 p-2 rounded-full flex justify-center items-center shadow-sm">
                  <img
                    className="w-8 h-8"
                    src={service.icon}
                    alt={service.title}
                  />
                </div>
                <div>
                  <h4 className="font-medium text-2xl text-myblack">
                    {service.title}
                  </h4>
                </div>
              </div>

              <p className="text-myblack my-6 leading-relaxed">
                {service.description}
              </p>
              <button className="font-poppins text-md font-normal text-lightbg bg-mydark px-3 py-2 rounded-3xl hover:cursor-pointer hover:bg-mydark/90 transition-all duration-500 ease-out hover:-translate-y-1">
                View More
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-8"></div>
      </div>
    </section>
  );
};

export default Services;
