import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays } from "lucide-react";

const slides = [
  { src: "/images/clinic/clinic.jpeg", alt: "Highland Hills Dental Centre clinic entrance", label: "Our clinic", fit: "contain" },
  { src: "/images/hero/dental-xray.jpg", alt: "Dental instruments held over a panoramic dental X-ray", label: "Dental X-ray" },
  { src: "/images/hero/dental-instruments.jpg", alt: "A dental professional holding examination instruments", label: "Dental instruments" },
  { src: "/images/hero/dental-care.jpg", alt: "A dental professional caring for a patient in a treatment room", label: "Dental care" },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [motionAllowed, setMotionAllowed] = useState(() => !window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(() => document.visibilityState === "visible");
  const touchStart = useRef(null);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotionChange = () => setMotionAllowed(!preference.matches);
    const onVisibilityChange = () => setIsPageVisible(document.visibilityState === "visible");
    preference.addEventListener("change", onMotionChange);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      preference.removeEventListener("change", onMotionChange);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (!motionAllowed || isHovered || hasFocus || !isPageVisible) return;
    const timer = window.setInterval(() => setCurrentSlide((index) => (index + 1) % slides.length), 6000);
    return () => window.clearInterval(timer);
  }, [motionAllowed, isHovered, hasFocus, isPageVisible, currentSlide]);

  const showSlide = (index) => {
    setCurrentSlide((index + slides.length) % slides.length);
  };

  return (
    <section className="clinic-hero" aria-labelledby="hero-title">
      <div className="clinic-container clinic-hero-grid">
        <div className="clinic-hero-copy">
          <p className="clinic-eyebrow">Welcome to Highland Hills Dental</p>
          <h1 id="hero-title">Caring for your smile.<br /><span>Caring for you.</span></h1>
          <p className="clinic-hero-description">We combine advanced technology with exceptional comfort to give you the smile you deserve. Personalized dental care for your whole family, right here in Kitchener.</p>
          <Link to="/#contact" className="clinic-button clinic-button-large">Request an Appointment <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
        <div
          className="clinic-hero-image clinic-hero-carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="Clinic and dental care images"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setHasFocus(true)}
          onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setHasFocus(false); }}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              showSlide(currentSlide + (event.key === "ArrowLeft" ? -1 : 1));
            }
          }}
        >
          <div
            id="hero-slides"
            className="clinic-carousel-viewport"
            onTouchStart={(event) => { touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }; }}
            onTouchCancel={() => { touchStart.current = null; }}
            onTouchEnd={(event) => {
              if (!touchStart.current) return;
              const deltaX = touchStart.current.x - event.changedTouches[0].clientX;
              const deltaY = touchStart.current.y - event.changedTouches[0].clientY;
              touchStart.current = null;
              if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY)) showSlide(currentSlide + (deltaX > 0 ? 1 : -1));
            }}
          >
            {slides.map((slide, index) => (
              <div key={slide.src} className={`clinic-carousel-slide${index === currentSlide ? " is-active" : ""}`} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${slides.length}: ${slide.label}`} aria-hidden={index !== currentSlide}>
                <img src={slide.src} srcSet={`${slide.src.replace(/\.(?:jpe?g)$/, "").replace(/\/images\/(?:clinic|hero)\//, "/images/responsive/")}-720.jpg 720w, ${slide.src.replace(/\.(?:jpe?g)$/, "").replace(/\/images\/(?:clinic|hero)\//, "/images/responsive/")}-1440.jpg 1440w`} sizes="(max-width: 599px) calc(100vw - 40px), (max-width: 899px) calc(100vw - 64px), (max-width: 1279px) calc((100vw - 114px) / 2), 583px" alt={slide.alt} style={{ objectFit: slide.fit || "cover" }} width="1260" height="750" fetchPriority={index === 0 ? "high" : "low"} decoding="async" />
              </div>
            ))}
          </div>
          <div className="clinic-carousel-dots" role="group" aria-label="Choose a hero image">
            {slides.map((slide, index) => <button key={slide.src} type="button" aria-label={`Show image ${index + 1}: ${slide.label}`} aria-current={index === currentSlide ? "true" : undefined} onClick={() => showSlide(index)}><span /></button>)}
          </div>
          <div className="clinic-hero-card">
            <span className="clinic-icon-tile"><CalendarDays size={25} aria-hidden="true" /></span>
            <div><h2>Your smile. Your schedule.</h2><p>Evening and weekend appointments to fit your routine.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
