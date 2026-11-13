import { FcGoogle } from "react-icons/fc";
import { Star } from "lucide-react";
import { clinic } from "../clinicDetails";

export default function GoogleRating({ footer = false }) {
  return (
    <a className={`clinic-rating${footer ? " clinic-rating-footer" : ""}`} href={clinic.mapUrl} target="_blank" rel="noreferrer" aria-label={`Rated ${clinic.googleRating} out of 5 on Google from ${clinic.googleReviewCount} reviews. Read reviews on Google Maps.`}>
      <span className="clinic-rating-score">
        <strong>{clinic.googleRating}</strong>
        <span className="clinic-rating-stars" aria-hidden="true">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={14} fill="currentColor" />)}</span>
      </span>
      <span className="clinic-rating-content">
        <span className="clinic-rating-label">Rated {clinic.googleRating} on Google</span>
        <span className="clinic-rating-count">{clinic.googleReviewCount} Google Reviews</span>
      </span>
      <span className="clinic-rating-logo"><FcGoogle size={25} aria-hidden="true" /></span>
    </a>
  );
}
