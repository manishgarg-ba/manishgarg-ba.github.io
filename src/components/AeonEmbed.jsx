import Section from "./Section";

export default function AeonEmbed() {
  return (
    <Section>
      <h3>Featured Aeon Essay</h3>

      <div className="aeon-embed-wrapper">
        <iframe
          src="https://aeon.co/essays/in-solarpunk-cities-of-the-future-tech-follows-natures-lead"
          title="Aeon Essay"
          loading="lazy"
        />
      </div>
    </Section>
  );
}
