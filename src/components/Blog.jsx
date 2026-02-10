import Section from "./Section";

export default function Blog() {
  return (
    <Section>
      <h3>Blog & Insights</h3>

      <div className="blog-card">
        <h4>How I built a RED Zone prediction model</h4>
        <p>
          A practical breakdown of using Logistic Regression and clustering to
          identify high-risk zones with real-world impact.
        </p>
      </div>

      <div className="blog-card">
        <h4>Why business context matters more than models</h4>
        <p>
          My learnings from applying analytics in real sales and operations
          environments.
        </p>
      </div>
    </Section>
  );
}
