import { FcGoogle } from "react-icons/fc";
import { FaQuoteLeft } from "react-icons/fa";
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of common and challenging words.",
      name: "Fatima Khoury",
      username: "diktory_curtains_98",
    },
    {
      id: 2,
      text: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of common and challenging words.",
      name: "Hassan Ali",
      username: "turbulent_unicom_29",
    },
    {
      id: 3,
      text: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of common and challenging words.",
      name: "Nicolás Sánchez",
      username: "pervasive_infer_53",
    },
    {
      id: 4,
      text: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of common and challenging words.",
      name: "Noel Jensen",
      username: "refairbox_drop_47",
    },
    {
      id: 5,
      text: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of common and challenging words.",
      name: "Jorge Martinez",
      username: "refairbus_jet_91",
    },
    {
      id: 6,
      text: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of common and challenging words.",
      name: "Ahmad Khan",
      username: "ante_circus_76",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className=" mb-12">
          <h2 className="text-mydark font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold">
            Trusted Clients
          </h2>

          {/* Intro paragraph */}
          <p className="font-poppins w-full md:w-4/5 lg:w-2/3 xl:w-1/2 mt-4 md:mt-6 text-darkblack text-sm sm:text-base md:text-lg leading-relaxed text-myblack">
            At{" "}
            <span className="text-mydark font-semibold text-base sm:text-lg md:text-xl">
              Highland Dental Clinics
            </span>
            , we specialize in providing high quality dental services
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-poppins">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-4 flex items-center gap-3">
                <FaQuoteLeft className="text-mydark w-6 h-6" />
              </div>

              {/* Testimonial Text */}
              <p className="text-myblack mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              {/* Client Info */}
              <div className="border-t border-mydark/20 pt-4 flex items-center gap-2">
                <div>
                  <FcGoogle className="w-6 h-6" />
                </div>
                <h4 className="font-medium text-mydark">{testimonial.name}</h4>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-8">
          <button className="font-poppins text-md font-normal text-lightbg bg-mydark px-3 py-2 rounded-3xl hover:cursor-pointer hover:bg-mydark/80">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
