import { useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { clinic } from "../clinicDetails";

export default function ContactUs() {
  const [draftReady, setDraftReady] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const body = [
      `Name: ${fields.get("firstName")} ${fields.get("lastName")}`,
      `Email: ${fields.get("email")}`,
      `Phone: ${fields.get("phone")}`,
      `Reason: ${fields.get("inquiryType")}`,
      "", fields.get("message"),
    ].join("\n");
    window.location.href = `mailto:${clinic.email}?subject=${encodeURIComponent("Website appointment request")}&body=${encodeURIComponent(body)}`;
    setDraftReady(true);
  };

  return (
    <section id="contact" className="clinic-section clinic-contact" aria-labelledby="contact-title">
      <div className="clinic-container">
        <div className="clinic-section-heading">
          <p className="clinic-eyebrow">Get in touch</p>
          <h2 id="contact-title">Let's Keep You <span>Smiling</span></h2>
          <p>Book a visit, ask a question, or talk through your next step. We're here to help.</p>
        </div>
        <div className="clinic-contact-grid">
          <aside className="clinic-contact-card" aria-label="Clinic contact information">
            <h3>Contact Info</h3><p>Reach out directly or visit our Kitchener clinic. We look forward to welcoming you.</p>
            <div className="clinic-contact-points">
              <div><span className="clinic-contact-icon"><Phone size={21} aria-hidden="true" /></span><div><h4>Call us directly</h4><a href={clinic.phoneHref}>{clinic.phone}</a><p>Appointments & urgent dental inquiries</p></div></div>
              <div><span className="clinic-contact-icon"><Mail size={21} aria-hidden="true" /></span><div><h4>Email us</h4><a href={`mailto:${clinic.email}`}>{clinic.email}</a></div></div>
              <div><span className="clinic-contact-icon"><MapPin size={21} aria-hidden="true" /></span><div><h4>Visit clinic</h4><a href={clinic.mapUrl} target="_blank" rel="noreferrer">875 Highland Rd. West, Unit 43<br />Kitchener, ON N2N 2Y2</a></div></div>
            </div>
            <div className="clinic-contact-hours"><h4><Clock size={17} aria-hidden="true" />Clinic hours</h4><dl>{clinic.hours.map(([day, hours]) => <div key={day}><dt>{day}</dt><dd>{hours}</dd></div>)}</dl></div>
          </aside>
          <div className="clinic-form-card">
            <h3>Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="clinic-form-grid">
                <label htmlFor="firstName">First name<input id="firstName" name="firstName" autoComplete="given-name" placeholder="John" required /></label>
                <label htmlFor="lastName">Last name<input id="lastName" name="lastName" autoComplete="family-name" placeholder="Doe" required /></label>
                <label htmlFor="email">Email address<input id="email" type="email" name="email" autoComplete="email" placeholder="john@example.com" required /></label>
                <label htmlFor="phone">Phone number<input id="phone" type="tel" name="phone" autoComplete="tel" placeholder="(519) 000-0000" required /></label>
              </div>
              <fieldset><legend>Reason for inquiry</legend><div className="clinic-inquiry-options">
                {["General Checkup", "Dental Emergency", "Cosmetic / Braces", "Other Inquiry"].map((reason, index) => <label key={reason}><input type="radio" name="inquiryType" value={reason} defaultChecked={index === 0} /><span>{reason}</span></label>)}
              </div></fieldset>
              <label htmlFor="message">How can we help you today?<textarea id="message" name="message" rows={4} placeholder="Let us know your preferred appointment times. Please avoid including sensitive health details." required /></label>
              <button type="submit" className="clinic-button clinic-button-large">Prepare Appointment Request <ArrowRight size={18} aria-hidden="true" /></button>
              {draftReady && <p role="status" className="clinic-form-status">Your email draft is ready. Send it from your email app, or call {clinic.phone} if the app did not open. Your appointment is confirmed only after our team contacts you.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
