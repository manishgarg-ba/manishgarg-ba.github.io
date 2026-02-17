import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function WritingPage() {
  return (
    <motion.div
      className="container page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={itemVariants}>Writing</motion.h1>

      <motion.div className="blog-list" variants={itemVariants}>

        <motion.div className="blog-item" variants={itemVariants}>

          <motion.h2 variants={itemVariants}>
            When Spreadsheets Became Strategy: The Emergence of Business Analytics
          </motion.h2>

          <motion.p variants={itemVariants}>
            In the early 2000s, most companies didn't suffer from a lack of data.
            They suffered from a lack of direction.
          </motion.p>

          <motion.p variants={itemVariants}>
            Excel sheets were everywhere. Reports were generated. Dashboards were printed.
            But decisions were still being made on instinct. The problem was never data.
            It was translation.
          </motion.p>

          <motion.p variants={itemVariants}>
            Then something shifted.
          </motion.p>

          <motion.p variants={itemVariants}>
            By 2012, the world was generating 2.5 quintillion bytes of data every day.
            By 2023, that number crossed 120 zettabytes annually.
            Data was no longer a support function - it was infrastructure.
          </motion.p>

          <motion.p variants={itemVariants}>
            Companies like Amazon and Netflix weren't just collecting data.
            They were designing systems around it. Netflix discovered that over 80% of
            the content watched on its platform came from its recommendation engine.
            Data stopped reporting the past. It started shaping the future.
          </motion.p>

          <motion.p variants={itemVariants}>
            That was the birth of Business Analytics as a discipline.
            Not pure data science. Not pure management.
            But the bridge between technical capability and business clarity.
          </motion.p>

          <motion.p variants={itemVariants}>
            The realization was simple:
            Technology without business context creates noise.
            Business intuition without data creates risk.
          </motion.p>

          <motion.p variants={itemVariants}>
            McKinsey reported that data-driven organizations are 23 times more likely
            to acquire customers and 19 times more likely to be profitable.
            The competitive advantage wasn't in having data.
            It was in aligning data with execution.
          </motion.p>

          <motion.p variants={itemVariants}>
            Today, Business Analytics is no longer about dashboards.
            It's about systems thinking.
            It's about connecting operations, marketing, finance, and product
            into one measurable narrative.
          </motion.p>

          <motion.p variants={itemVariants}>
            And the future?
          </motion.p>

          <motion.p variants={itemVariants}>
            As AI automates model-building and tools become more accessible,
            the real differentiator will not be who can code —
            but who can ask the right questions.
          </motion.p>

          <motion.p variants={itemVariants}>
            The next decade will belong to professionals who understand both
            the algorithm and the agenda.
            Those who can translate machine outputs into boardroom decisions.
          </motion.p>

          <motion.p variants={itemVariants}>
            Business Analytics is not just a field.
            It is the operating system of modern organizations.
          </motion.p>

          <motion.hr
            variants={itemVariants}
            style={{
              margin: "50px 0 30px 0",
              border: "none",
              borderTop: "1px solid #eaeaea"
            }}
          />

          <motion.h3 variants={itemVariants}>Sources</motion.h3>

          <motion.ul className="sources-list" variants={itemVariants}>
            <motion.li variants={itemVariants}>
              McKinsey Global Institute - The Age of Analytics
            </motion.li>
            <motion.li variants={itemVariants}>
              Netflix Technology Blog - Recommendation System Insights
            </motion.li>
            <motion.li variants={itemVariants}>
              IBM Data Statistics - Growth of Global Data Volume
            </motion.li>
            <motion.li variants={itemVariants}>
              Statista - Global Data Creation Forecast (2023-2025)
            </motion.li>
          </motion.ul>

        </motion.div>

      </motion.div>
    </motion.div>
  );
}
