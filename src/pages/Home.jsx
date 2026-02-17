import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="hero">
      <div className="container hero-grid">

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            Designing <span>data-driven systems</span> that connect
            business strategy with measurable growth.
          </h1>

          <p className="hero-sub">
            I build structured analytics frameworks across operations,
            marketing, and machine learning.
          </p>

          <div className="hero-buttons">
            <a href="/work" className="btn-primary">View Work</a>
            <a href="/contact" className="btn-secondary">Get in Touch</a>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            alt="Analytics dashboard"
          />
        </motion.div>

      </div>
    </section>
  );
}
