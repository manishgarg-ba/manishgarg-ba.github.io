import Section from "./Section";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <Section>
      <h3>Projects</h3>

      <motion.ul layout>
        <motion.li
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <strong>RED Zone Prediction – SafeJourney AI</strong><br />
          Built a machine learning model (AUC 0.84) to identify high-risk zones
          using Logistic Regression and clustering.
        </motion.li>

        <motion.li
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <strong>Operational Deployment Project</strong><br />
          Designed analytics-driven rollout plans optimizing routes, schedules,
          and operational cost.
        </motion.li>
      </motion.ul>
    </Section>
  );
}
