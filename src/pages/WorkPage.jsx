import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

export default function WorkPage() {
  const [activeProject, setActiveProject] = useState(null);

  const toggleProject = (index) => {
    setActiveProject(activeProject === index ? null : index);
  };

  const projects = [
    {
      title: "Scalable Healthcare Analytics Framework",
      subtitle: "Digital Strategy & Predictive Modeling",
      image:
        "https://www.suntecindia.com/blog/wp-content/uploads/2025/02/Data-Analytics-is-Transforming-Healthcare.jpg",
      content: (
        <>
          <h4>Context</h4>
          <p>
            Built an analytics-driven expansion framework supporting healthcare scaling.
            Integrated demand forecasting and predictive no-show modeling.
          </p>

          <h4>Impact</h4>
          <p>
            Improved capacity planning accuracy and reduced operational inefficiencies.
          </p>
        </>
      )
    },
    {
      title: "Guest Satisfaction Regression Model",
      subtitle: "Cross-Validated Predictive Modeling",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      content: (
        <>
          <h4>Approach</h4>
          <p>
            Engineered structured and sentiment features. Applied linear regression
            with 10-fold cross-validation (R² ≈ 0.76).
          </p>

          <h4>Result</h4>
          <p>
            Delivered stable RMSE (~4.9) demonstrating reliable predictive performance.
          </p>
        </>
      )
    },
    {
      title: "Airline Customer Classification Model",
      subtitle: "Ensemble Modeling & AUC Optimization",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
      content: (
        <>
          <h4>Models</h4>
          <p>
            Logistic Regression, Random Forest, Gradient Boosting,
            and Voting Ensemble.
          </p>

          <h4>Performance</h4>
          <p>
            Achieved AUC &gt; 0.95 with precision and recall above 94%.
          </p>
        </>
      )
    },
    {
      title: "Enterprise BI Dashboard Architecture",
      subtitle: "Power BI | Star Schema Modeling",
      image:
        "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcxvxSKZlltILhOKjeSyQ2ebMsg7jv3nfRep82Ni6Gx-W7Bps_nyS6PGZotzzhFBVVIwJ6idDZbrePVyIDbr_Z5t8gSFEzbp1Odomglyx3R_abpGUyYA_-2QnSbsHYLrpu5GmtW?key=2FyfiLNqZv_Cg8p_V_lAyA",
      content: (
        <>
          <h4>Scope</h4>
          <p>
            Designed dimensional data model and built Admin, HR,
            and Finance dashboards with key performance metrics.
          </p>

          <h4>KPIs</h4>
          <p>
            Bed occupancy, attrition rate, profit margin,
            and operational efficiency metrics.
          </p>
        </>
      )
    }
  ];

  return (
    <motion.div
      className="container page work-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={itemVariants}>Selected Work</motion.h1>

      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="work-card-classy"
          variants={itemVariants}
        >
          <div className="work-card-grid">

            <img src={project.image} alt="Project visual" />

            <div className="work-info">
              <div
                className="work-header"
                onClick={() => toggleProject(index)}
              >
                <div>
                  <h2>{project.title}</h2>
                  <p className="work-subtitle">{project.subtitle}</p>
                </div>

                <span className="expand-icon">
                  {activeProject === index ? "−" : "+"}
                </span>
              </div>

              <AnimatePresence>
                {activeProject === index && (
                  <motion.div
                    className="work-content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.content}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="divider" />
        </motion.div>
      ))}
    </motion.div>
  );
}
