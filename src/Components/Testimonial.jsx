import GoogleRating from "./GoogleRating";
import { clinic } from "../clinicDetails";
import { FcGoogle } from "react-icons/fc";
import { FaQuoteLeft } from "react-icons/fa";
import { Star } from "lucide-react";

const Testimonials = () => {
  // Verified on Google Maps, sorted Newest, on November 13, 2026.
  // Full review text supplied by the user; ratings verified on Google.
  const testimonials = [
    {
      id: "ashley-b",
      text: "I had a filling done today by Dr. Paridhi Bassi and it went really well. It was quick and I was comfortable the whole time. I also come here for my regular cleanings, and my hygienist is wonderful. She always remembers little details about me from my last visit, which I really appreciate. Everyone at the office is friendly and professional, and I'd definitely recommend Dr. Bassi and Highland Hills to anyone looking for a dentist.",
      name: "Ashley B",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjUhU5udDmwIo3VXM1sZNUEA1zgK5t9aXEcRPQaThxHF1Ru-646Z=w72-h72-p-rp-mo-br100",
      rating: 5,
    },
    {
      id: "shreyas-dalsania",
      text: "Navi was amazing! She gave us great advice and helpful suggestions, patiently answered all our questions, and even helped us get an appointment booked for the same day. The entire experience was smooth and pleasant. Excellent customer service thank you, Navi!",
      name: "Shreyas Dalsania",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjUHn2NKeEn09n6hXu2LpVd2wOx_DyA6dUElkpXa9dmqdk1xrnql=w72-h72-p-rp-mo-ba12-br100",
      rating: 5,
    },
    {
      id: "priyal-gandhi",
      text: "I just had all my fillings done here including my root canal. I had to say that my experience there was top notch and I recommend this Highland hills dental clinic to everyone. Best clinic in KWC area.",
      name: "Priyal Gandhi",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjXoC8wfuMubSClWf2lkGqA3OW7HDzwvru1kAi4BFbzRsFLUAC20=w72-h72-p-rp-mo-br100",
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="clinic-section clinic-reviews" aria-labelledby="reviews-title">
      <div className="clinic-container">
        <div className="clinic-reviews-heading">
          <div><p className="clinic-eyebrow">Testimonials</p><h2 id="reviews-title">Trusted by <span>Patients</span></h2><p>A few recent words from our patients on Google.</p></div>
          <GoogleRating />
        </div>
        <div className="clinic-reviews-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="clinic-review-card">
              <FaQuoteLeft className="clinic-review-quote" aria-hidden="true" />
              <div className="clinic-review-stars" aria-label={`${testimonial.rating} out of 5 stars`}>
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={17} fill="currentColor" aria-hidden="true" />)}
              </div>
              <blockquote>“{testimonial.text}”</blockquote>
              <a className="clinic-review-more" href={clinic.mapUrl} target="_blank" rel="noreferrer" aria-label={`Read more of ${testimonial.name}’s review on Google Maps`}>Read More <span aria-hidden="true">&gt;</span></a>
              <div className="clinic-review-author">
                <div className="clinic-review-avatar" aria-hidden="true">{testimonial.image ? <img src={testimonial.image} alt="" width="43" height="43" loading="lazy" referrerPolicy="no-referrer" /> : testimonial.name.split(" ").map((part) => part[0]).join("")}</div>
                <div><h3>{testimonial.name}</h3><span><FcGoogle size={13} aria-hidden="true" />Google Review</span></div>
              </div>
            </article>
          ))}
        </div>
        <div className="clinic-section-action"><a className="clinic-button clinic-button-slate" href={clinic.mapUrl} target="_blank" rel="noreferrer">Read Google Reviews <span aria-hidden="true">↗</span></a></div>
      </div>
    </section>
  );
};

export default Testimonials;
