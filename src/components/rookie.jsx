import Section from "./Section";
import profilePic from "../assets/linkedin.png";

export default function Rookie() {
  return (
    <Section className="hero">
      <div className="profile-pic-wrapper">
        <img
          src={profilePic}
          alt="Manish Garg"
          className="profile-pic"
        />
      </div>

      <h1>Manish Garg</h1>
      <h2>Analyst | Business Analytics Graduate</h2>

      <p>
        I help businesses make better decisions by turning data into
        clear, actionable insights using analytics and real-world execution.
      </p>

      <a
        href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME/"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-btn"
      >
        View LinkedIn Profile
      </a>
    </Section>
  );
}
