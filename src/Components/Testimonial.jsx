import { FcGoogle } from "react-icons/fc";

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
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            TESTIMONIALS
          </h2>
          <p className="text-lg text-gray-600">Our trusted clients</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-4 flex items-center gap-3">
                <FcGoogle className="text-2xl" />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              {/* Client Info */}
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900">
                  {testimonial.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
