import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook, CalendarDays, ArrowUpRight } from "lucide-react";
import GoogleRating from "./GoogleRating";
import { clinic } from "../clinicDetails";

export default function Footer() {
  return (
    <>
      <footer className="clinic-footer">
        <div className="clinic-container">
          <div className="clinic-footer-grid">
            <div><Link to="/" className="clinic-footer-logo"><img src="/logo.png" alt={clinic.name} width="600" height="160" /></Link><p>Comprehensive dental care with a gentle touch. Your comfort and long-term oral health are our priorities.</p><address>
              <a href={clinic.mapUrl} target="_blank" rel="noreferrer"><MapPin size={16} aria-hidden="true" />{clinic.address}</a>
              <a href={clinic.phoneHref}><Phone size={16} aria-hidden="true" />{clinic.phone}</a>
              <a href={`mailto:${clinic.email}`}><Mail size={16} aria-hidden="true" />{clinic.email}</a>
            </address></div>
            <div><h2>Quick links</h2><nav aria-label="Footer navigation">{[["Home", "/"], ["Dental Services", "/#services"], ["About Our Team", "/#team"], ["Patient Reviews", "/#reviews"], ["Emergency Care", "/#emergency"], ["Contact & Location", "/#contact"]].map(([label, href]) => <Link key={label} to={href}>{label}</Link>)}</nav></div>
            <div><h2>Clinic hours</h2><dl className="clinic-footer-hours">{clinic.hours.map(([day, hours]) => <div key={day}><dt>{day}</dt><dd>{hours}</dd></div>)}</dl></div>
            <div><h2>Patient reviews</h2><GoogleRating footer /><h2 className="clinic-social-heading">Follow us</h2><div className="clinic-socials"><a aria-label="Instagram" href="https://www.instagram.com/highlandhillsdentalcentre.ca/" target="_blank" rel="noreferrer"><Instagram size={20} /></a><a aria-label="Facebook" href="https://www.facebook.com/Highlandhilldental" target="_blank" rel="noreferrer"><Facebook size={20} /></a></div></div>
          </div>
          <div className="clinic-footer-bottom"><p>© {new Date().getFullYear()} {clinic.name}. All rights reserved.</p><p>Developed by <strong>Etheria Tech</strong></p></div>
        </div>
      </footer>
      <div className="clinic-mobile-actions" aria-label="Quick contact"><a href={clinic.phoneHref}><Phone size={18} aria-hidden="true" />Call the Clinic</a><Link to="/#contact"><CalendarDays size={18} aria-hidden="true" />Request a Visit<ArrowUpRight size={14} aria-hidden="true" /></Link></div>
    </>
  );
}
