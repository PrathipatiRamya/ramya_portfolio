function Projects() {
  return (
    <section id="projects" className="reveal">
      <h2>Projects</h2>

      <div style={styles.grid}>
        {/* Project 1 */}
        <div style={styles.card}>
          <h3>E-commerce PR Mart</h3>
          <p>
            <strong>Tech:</strong> ReactJS
          </p>
          <ul>
            <li>Online grocery marketplace with cart management.</li>
            <li>Product search and filtering functionality.</li>
            <li>Coupon-based discount system.</li>
            <li>Purchase history for order tracking.</li>
          </ul>

          <div style={styles.links}>
            <a href="https://github.com/PrathipatiRamya/React" target="_blank">
              GitHub
            </a>
            <a href="https://ramya-prshop.vercel.app/" target="_blank">
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 2 */}

        {/* Unhosted Project Example */}
        <div style={styles.card}>
          <h3>Hospital Management System (REST API)</h3>

          <p>
            <strong>Tech:</strong> Java, Spring Boot, Spring Data JPA
          </p>

          <p>
            <strong>Database:</strong> H2
          </p>

          <p>
            <strong>Tools:</strong> Swagger, Postman
          </p>

          <ul>
            <li>
              Developed a RESTful API for a Hospital Management System using
              Spring Boot and Spring Data JPA with full CRUD functionality.
            </li>
            <li>
              Implemented <strong>GET</strong> APIs to retrieve patient, doctor,
              and appointment details.
            </li>
            <li>
              Implemented <strong>POST</strong> APIs to add new patients,
              doctors, and appointments.
            </li>
            <li>
              Implemented <strong>PUT</strong> APIs to update complete records.
            </li>
            <li>
              Implemented <strong>PATCH</strong> APIs for partial updates of
              specific fields.
            </li>
            <li>
              Implemented <strong>DELETE</strong> APIs to remove records from
              the system.
            </li>
          </ul>

          <div style={styles.links}>
            <a
              href="https://github.com/PrathipatiRamya/swagger-rest-hospital-api"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <div style={styles.card}>
          <h3>
            Prediction of Five Categories of Hepatitis Disease Using Machine
            Learning
          </h3>

          <p>
            <strong>Domain:</strong> Machine Learning
          </p>

          {/* <p>
            <strong>Algorithm:</strong> Decision Tree
          </p> */}

          <p>
            <strong>Focus:</strong> Classification (Hepatitis A–E)
          </p>

          <ul>
            <li>
              Developed a machine learning–based system to predict five
              categories of hepatitis disease (A–E) using a Decision Tree
              algorithm.
            </li>
            <li>
              Trained and evaluated the model using patient demographic data and
              symptom-related features.
            </li>
            <li>
              Implemented data preprocessing and feature analysis to improve
              prediction accuracy.
            </li>
            <li>
              The system provides insights into the predicted hepatitis type
              along with suggested remedies for better clinical understanding.
            </li>
          </ul>

          <div style={styles.links}>
            {/* <a
              href="https://github.com/your-username/hepatitis-prediction-ml"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "30px",
    marginTop: "30px",
  },
  card: {
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  links: {
    marginTop: "15px",
    display: "flex",
    gap: "15px",
  },
};

export default Projects;
