import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 }
};

export default function ContactPage() {
  return (
    <motion.div
      className="container page contact-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={itemVariants}>
        Let's Build Something Meaningful
      </motion.h1>

      <motion.p className="contact-intro" variants={itemVariants}>
        Whether it's analytics strategy, system design, or an idea
        you're exploring - I'm always open to thoughtful conversations.
      </motion.p>

      <motion.div className="contact-grid" variants={itemVariants}>

        {/* LEFT SIDE */}
        <motion.div className="contact-left" variants={itemVariants}>

          <motion.h3 variants={itemVariants}>Email</motion.h3>
          <motion.p variants={itemVariants}>
            <a href="mailto:garg38396@gmail.com">
              garg38396@gmail.com
            </a>
          </motion.p>

          <motion.div className="linkedin-card" variants={itemVariants}>
            <h3>LinkedIn</h3>
            <p className="linkedin-text">
              Let's continue the conversation on LinkedIn.
            </p>
            <a
              href="https://www.linkedin.com/in/manish-garg-51b072228"
              target="_blank"
              rel="noreferrer"
              className="linkedin-button"
            >
              Visit Profile →
            </a>
          </motion.div>

          <motion.h3 variants={itemVariants}>Location</motion.h3>
          <motion.p variants={itemVariants}>Delhi, INDIA</motion.p>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="contact-right"
          variants={itemVariants}
        >
          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="What are you building?" rows="5"></textarea>
            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </motion.div>

      </motion.div>
    </motion.div>
  );
}
