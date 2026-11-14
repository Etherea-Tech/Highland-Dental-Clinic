import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { clinic } from "../../clinicDetails";

export function ServiceActions({ callFirst = false }) {
  const appointment = <Link key="appointment" to="/#contact" className="clinic-button">Request an Appointment<ArrowRight size={18} aria-hidden="true" /></Link>;
  const call = <a key="call" href={clinic.phoneHref} className={callFirst ? "clinic-button" : "clinic-general-phone"}><Phone size={18} aria-hidden="true" />Call {clinic.phone}</a>;
  return <div className="clinic-emergency-hero-actions">{callFirst ? [call, <Link key="appointment" to="/#contact" className="clinic-general-phone">Request an Appointment<ArrowRight size={18} aria-hidden="true" /></Link>] : [appointment, call]}</div>;
}

export function ServiceHero({ title, breadcrumb, category, categoryHref, description, image, imageAlt, icon }) {
  return (
    <section className="clinic-hero clinic-general-hero">
      <div className="clinic-container">
        <nav className="clinic-breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link><span aria-hidden="true">/</span>
          <Link to={categoryHref}>{category}</Link><span aria-hidden="true">/</span>
          <span aria-current="page">{breadcrumb}</span>
        </nav>
        <div className="clinic-hero-grid">
          <div>
            <p className="clinic-eyebrow clinic-service-eyebrow"><span aria-hidden="true">{icon}</span>{category}</p>
            <h1>{title}</h1>
            <p className="clinic-hero-description">{description}</p>
            <ServiceActions callFirst />
          </div>
          <div className="clinic-general-photo"><img src={image} srcSet={`${image.replace("-1440.jpg", "-720.jpg")} 720w, ${image} 1440w`} sizes="(max-width: 899px) 100vw, 50vw" alt={imageAlt} width="1200" height="900" decoding="async" /></div>
        </div>
      </div>
    </section>
  );
}

export function ServiceBooking({ title, children }) {
  return <section className="clinic-general-booking clinic-service-booking"><div><h2>{title}</h2>{children}</div><ServiceActions /></section>;
}
