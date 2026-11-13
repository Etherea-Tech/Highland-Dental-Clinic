import { Phone, TriangleAlert, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmergencyDentalSmall() {
  return (
    <section id="emergency" className="clinic-emergency-wrap" aria-labelledby="emergency-title">
      <div className="clinic-container">
        <div className="clinic-emergency">
          <div>
            <p className="clinic-emergency-label"><TriangleAlert size={17} aria-hidden="true" /> Dental Emergency</p>
            <h2 id="emergency-title">Don't wait in pain.<br /><span>Let's find your next step.</span></h2>
            <p>Toothache, a broken tooth, or sudden discomfort? Speak with our team about care and appointment availability.</p>
          </div>
          <div className="clinic-emergency-actions">
            <h3>Help starts with a call.</h3>
            <p>Contact our clinic during opening hours.</p>
            <a href="tel:+15195789826" className="clinic-button"><Phone size={20} aria-hidden="true" />Call (519) 578-9826</a>
            <Link to="/#contact" className="clinic-emergency-link">Request an Urgent Appointment <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
