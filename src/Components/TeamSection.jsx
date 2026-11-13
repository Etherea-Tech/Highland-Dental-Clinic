import { Link } from "react-router-dom";

import { teamMembers } from "../teamMembers";

const TeamSection = () => (
  <section id="team" className="clinic-section clinic-section-tint" aria-labelledby="team-title">
    <div className="clinic-container">
      <div className="clinic-section-heading">
        <p className="clinic-eyebrow">Meet the experts</p>
        <h2 id="team-title">Our Dedicated <span>Team</span></h2>
        <p>Personalized care starts with people who take the time to get to know you.</p>
      </div>
      <div className="clinic-team-grid">
        {teamMembers.map((member) => (
          <article className="clinic-team-card" key={member.id}>
            <div className="clinic-team-photo"><img src={member.image} srcSet={member.imageSrcSet} sizes="(max-width: 599px) calc(100vw - 40px), (max-width: 899px) calc((100vw - 88px) / 2), 390px" alt={member.name} style={{ objectPosition: member.imagePosition }} width="512" height="512" loading="lazy" /></div>
            <div className="clinic-team-details">
              <p className="clinic-team-specialty">{member.specialty}</p>
              <h3>{member.name}</h3><p className="clinic-team-role">{member.role}</p>
              {member.bio && <p className="clinic-team-bio">{member.bio}</p>}
              <Link className="clinic-team-more" to={`/team#${member.id}`} aria-label={`Know more about ${member.name}`}>Know More <span aria-hidden="true">&gt;</span></Link>
            </div>
          </article>
        ))}
      </div>
      <div className="clinic-section-action"><Link to="/team" className="clinic-button clinic-button-slate">Meet The Full Team</Link></div>
    </div>
  </section>
);

export default TeamSection;
