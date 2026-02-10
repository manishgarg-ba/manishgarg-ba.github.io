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
          Problem:
          Identifying high-risk zones using historical accident data. <br />

          What I did:
          Built a Logistic Regression model (AUC 0.84), handled missing data,
          applied SMOTE, and used K-Means clustering for risk segmentation. <br />

          Impact:
          Identified a high-risk cluster (~13%) enabling targeted safety actions.

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
