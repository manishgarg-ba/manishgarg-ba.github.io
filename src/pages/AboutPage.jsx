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

export default function AboutPage() {
  return (
    <motion.div
      className="container page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={itemVariants}>About</motion.h1>

      <motion.p
        variants={itemVariants}
        style={{ fontWeight: 500, fontSize: "1.1rem", marginBottom: "25px" }}
      >
        Structured thinking. Measurable growth. Data with purpose.
      </motion.p>

      <motion.div className="about-grid" variants={itemVariants}>

        <motion.div variants={itemVariants}>
          <motion.p variants={itemVariants}>
            I work at the intersection of data, business strategy, and execution.
            My focus is not just building models — but designing systems that
            influence measurable outcomes.
          </motion.p>

          <motion.p variants={itemVariants}>
            My background spans marketing analytics, operational deployment,
            and predictive modeling. I've worked on translating raw data into
            structured frameworks that improve decision-making and performance.
          </motion.p>

          <motion.p variants={itemVariants}>
            I'm particularly interested in building scalable analytics systems
            that align technical insight with business clarity — where every
            metric connects back to impact.
          </motion.p>

          <motion.p variants={itemVariants}>
            Tools I frequently use include Python, SQL, Power BI, and machine
            learning frameworks for predictive modeling and segmentation.
          </motion.p>
        </motion.div>

        <motion.div className="about-stats" variants={itemVariants}>
          <motion.div variants={itemVariants}>
            <h2>60%</h2>
            <p>Sales Growth Contribution</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2>150+</h2>
            <p>Operational Deployments</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2>0.84</h2>
            <p>Predictive Model AUC</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2>26K+</h2>
            <p>Records Analyzed</p>
          </motion.div>
        </motion.div>

      </motion.div>
    </motion.div>
  );
}
